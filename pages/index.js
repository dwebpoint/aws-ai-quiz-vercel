import { useState, useEffect } from 'react';
import Head from 'next/head';
import { questions, domains } from '../data/questions';

export default function Home() {
  const [mode, setMode] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [quizSize, setQuizSize] = useState(20);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [quizStartTime, setQuizStartTime] = useState(null);

  useEffect(() => {
    let timer;
    if (mode === 'quiz' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mode, timeRemaining]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startQuiz = () => {
    let filteredQuestions = selectedDomain === 'all' 
      ? questions 
      : questions.filter(q => q.domain === selectedDomain);
    
    const shuffled = shuffleArray(filteredQuestions).slice(0, quizSize);
    setQuizQuestions(shuffled);
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswers([]);
    setShowExplanation(false);
    setMode('quiz');
    setQuizStartTime(Date.now());
    setTimeRemaining(quizSize * 90);
  };

  const startPractice = () => {
    let filteredQuestions = selectedDomain === 'all' 
      ? questions 
      : questions.filter(q => q.domain === selectedDomain);
    
    const shuffled = shuffleArray(filteredQuestions).slice(0, quizSize);
    setQuizQuestions(shuffled);
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswers([]);
    setShowExplanation(false);
    setMode('review');
    setTimeRemaining(null);
  };

  const isMultiAnswer = (q) => Array.isArray(q.correctAnswer);
  
  const getRequiredSelections = (q) => {
    if (!isMultiAnswer(q)) return 1;
    return q.correctAnswer.length;
  };

  const handleAnswer = (index) => {
    const q = quizQuestions[currentQuestion];
    if (mode === 'quiz' && answers[currentQuestion] !== undefined) return;
    
    if (isMultiAnswer(q)) {
      setSelectedAnswers(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        } else {
          const maxSelections = getRequiredSelections(q);
          if (prev.length >= maxSelections) {
            return [...prev.slice(1), index];
          }
          return [...prev, index];
        }
      });
    } else {
      setSelectedAnswers([index]);
      if (mode === 'review') {
        // Auto-save answer in practice mode for single-answer questions
        setAnswers(prev => ({ ...prev, [currentQuestion]: index }));
        setShowExplanation(true);
      }
    }
  };

  const submitAnswer = () => {
    const q = quizQuestions[currentQuestion];
    if (isMultiAnswer(q)) {
      setAnswers({ ...answers, [currentQuestion]: [...selectedAnswers].sort() });
    } else {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswers[0] });
    }
    if (mode === 'review') {
      setShowExplanation(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      const nextIdx = currentQuestion + 1;
      setCurrentQuestion(nextIdx);
      const savedAnswer = answers[nextIdx];
      if (savedAnswer !== undefined) {
        setSelectedAnswers(Array.isArray(savedAnswer) ? savedAnswer : [savedAnswer]);
        setShowExplanation(mode === 'review');
      } else {
        setSelectedAnswers([]);
        setShowExplanation(false);
      }
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      const prevIdx = currentQuestion - 1;
      setCurrentQuestion(prevIdx);
      const savedAnswer = answers[prevIdx];
      if (savedAnswer !== undefined) {
        setSelectedAnswers(Array.isArray(savedAnswer) ? savedAnswer : [savedAnswer]);
        setShowExplanation(mode === 'review');
      } else {
        setSelectedAnswers([]);
        setShowExplanation(false);
      }
    }
  };

  const finishQuiz = () => {
    setMode('results');
  };

  const isAnswerCorrect = (q, userAnswer) => {
    if (isMultiAnswer(q)) {
      if (!Array.isArray(userAnswer)) return false;
      const correct = [...q.correctAnswer].sort();
      const user = [...userAnswer].sort();
      return correct.length === user.length && correct.every((v, i) => v === user[i]);
    }
    return userAnswer === q.correctAnswer;
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (isAnswerCorrect(q, answers[idx])) correct++;
    });
    return correct;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreByDomain = () => {
    const domainScores = {};
    quizQuestions.forEach((q, idx) => {
      if (!domainScores[q.domain]) {
        domainScores[q.domain] = { correct: 0, total: 0 };
      }
      domainScores[q.domain].total++;
      if (isAnswerCorrect(q, answers[idx])) {
        domainScores[q.domain].correct++;
      }
    });
    return domainScores;
  };

  // Home Screen
  if (mode === 'home') {
    return (
      <>
        <Head>
          <title>AWS AI Practitioner Quiz</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content="Practice questions for AWS Certified AI Practitioner (AIF-C01) exam" />
        </Head>
        <div className="container">
          <div className="header">
            <div className="aws-badge">AWS</div>
            <h1>AI Practitioner</h1>
            <p className="subtitle">AIF-C01 Practice Exam</p>
          </div>

          <div className="stats-bar">
            <div className="stat">
              <span className="stat-value">175</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat">
              <span className="stat-value">5</span>
              <span className="stat-label">Domains</span>
            </div>
            <div className="stat">
              <span className="stat-value">700</span>
              <span className="stat-label">Pass Score</span>
            </div>
          </div>

          <div className="card">
            <h2>Select Domain</h2>
            <select 
              value={selectedDomain} 
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="select"
            >
              <option value="all">All Domains (175 Questions)</option>
              {domains.map(d => (
                <option key={d.id} value={d.name}>
                  {d.name} ({d.weight})
                </option>
              ))}
            </select>
          </div>

          <div className="card">
            <h2>Number of Questions</h2>
            <div className="quiz-size-options">
              {[10, 20, 40, 65, 100, 175].map(size => (
                <button
                  key={size}
                  className={`size-btn ${quizSize === size ? 'active' : ''}`}
                  onClick={() => setQuizSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="button-group">
            <button className="btn btn-primary" onClick={startQuiz}>
              <span className="btn-icon">⏱️</span>
              Timed Exam
              <span className="btn-desc">Simulate real exam conditions</span>
            </button>
            <button className="btn btn-secondary" onClick={startPractice}>
              <span className="btn-icon">📚</span>
              Practice Mode
              <span className="btn-desc">Learn with instant feedback</span>
            </button>
          </div>

          <div className="domains-list">
            <h3>Exam Domains</h3>
            {domains.slice(0, 5).map(d => (
              <div key={d.id} className="domain-item">
                <span className="domain-name">{d.name}</span>
                <span className="domain-weight">{d.weight}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    );
  }

  // Quiz/Review Mode
  if (mode === 'quiz' || mode === 'review') {
    const q = quizQuestions[currentQuestion];
    const answered = answers[currentQuestion] !== undefined;
    const isMulti = isMultiAnswer(q);
    const requiredSelections = getRequiredSelections(q);
    
    // For checking correctness, use saved answer if exists, otherwise use current selection
    const currentAnswer = answered 
      ? answers[currentQuestion] 
      : (isMulti ? [...selectedAnswers].sort() : selectedAnswers[0]);
    const isCorrect = (answered || (showExplanation && selectedAnswers.length > 0)) && isAnswerCorrect(q, currentAnswer);

    return (
      <>
        <Head>
          <title>Question {currentQuestion + 1} | AWS AI Quiz</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="container quiz-container">
          <div className="quiz-header">
            <button className="back-btn" onClick={() => setMode('home')}>✕</button>
            <div className="progress-info">
              <span>{currentQuestion + 1} / {quizQuestions.length}</span>
              {mode === 'quiz' && timeRemaining && (
                <span className={`timer ${timeRemaining < 60 ? 'warning' : ''}`}>
                  ⏱️ {formatTime(timeRemaining)}
                </span>
              )}
            </div>
            <div className="answered-count">
              {Object.keys(answers).length} answered
            </div>
          </div>

          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>

          <div className="tags-row">
            <div className="domain-tag">{q.domain}</div>
            {isMulti && (
              <div className="multi-answer-badge">
                Select {requiredSelections} ({selectedAnswers.length}/{requiredSelections})
              </div>
            )}
          </div>

          <div className="question-card">
            <p className="question-text">{q.question}</p>
          </div>

          <div className="options-list">
            {q.options.map((option, idx) => {
              let optionClass = 'option';
              const isSelected = selectedAnswers.includes(idx);
              if (isSelected) optionClass += ' selected';
              
              if (showExplanation || mode === 'results') {
                const correctAnswers = isMulti ? q.correctAnswer : [q.correctAnswer];
                if (correctAnswers.includes(idx)) {
                  optionClass += ' correct';
                } else if (isSelected) {
                  optionClass += ' incorrect';
                }
              }
              
              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleAnswer(idx)}
                  disabled={mode === 'quiz' && answered}
                >
                  <span className={`option-letter ${isMulti ? 'checkbox' : ''}`}>
                    {isMulti ? (isSelected ? '☑' : '☐') : String.fromCharCode(65 + idx)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showExplanation && (isMulti ? q.correctAnswer : [q.correctAnswer]).includes(idx) && (
                    <span className="check">✓</span>
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`explanation ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h4>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
              <p>{q.explanation}</p>
              {isMulti && (
                <p className="correct-answers">
                  <strong>Correct answers:</strong> {q.correctAnswer.map(i => String.fromCharCode(65 + i)).join(', ')}
                </p>
              )}
            </div>
          )}

          <div className="quiz-nav">
            <button 
              className="nav-btn" 
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              ← Prev
            </button>
            
            {!answered && selectedAnswers.length >= requiredSelections && (
              <button className="nav-btn submit-btn" onClick={submitAnswer}>
                Submit
              </button>
            )}

            {currentQuestion < quizQuestions.length - 1 ? (
              <button className="nav-btn" onClick={nextQuestion}>
                Next →
              </button>
            ) : (
              <button className="nav-btn finish-btn" onClick={finishQuiz}>
                Finish
              </button>
            )}
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    );
  }

  // Results Screen
  if (mode === 'results') {
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;
    const domainScores = getScoreByDomain();
    const circumference = 2 * Math.PI * 80;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <>
        <Head>
          <title>Results | AWS AI Quiz</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="container">
          <div className={`results-header ${passed ? 'passed' : 'failed'}`}>
            <div className="result-icon">{passed ? '🎉' : '📚'}</div>
            <h2>{passed ? 'Congratulations!' : 'Keep Learning!'}</h2>
            <p>{passed ? 'You passed the practice exam!' : 'Review the material and try again.'}</p>
          </div>

          <div className="score-circle">
            <svg width="180" height="180">
              <circle className="bg" cx="90" cy="90" r="80" />
              <circle 
                className={`progress ${passed ? 'passed' : 'failed'}`}
                cx="90" cy="90" r="80"
                strokeDasharray={strokeDasharray}
              />
            </svg>
            <div className="score-text">
              <span className="score-value">{percentage}%</span>
              <span className="score-label">{score}/{quizQuestions.length}</span>
            </div>
          </div>

          <div className="domain-scores">
            <h3>Score by Domain</h3>
            {Object.entries(domainScores).map(([domain, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={domain} className="domain-score-item">
                  <div className="domain-score-header">
                    <span className="domain-score-name">{domain.replace('Domain ', 'D').split(':')[0]}</span>
                    <span className="domain-score-value">{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div className="domain-score-bar">
                    <div 
                      className="domain-score-fill"
                      style={{ 
                        width: `${pct}%`,
                        background: pct >= 70 ? '#10b981' : '#ef4444'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="button-group">
            <button className="btn btn-secondary" onClick={() => {
              setMode('review');
              setCurrentQuestion(0);
              const savedAnswer = answers[0];
              if (savedAnswer !== undefined) {
                setSelectedAnswers(Array.isArray(savedAnswer) ? savedAnswer : [savedAnswer]);
              } else {
                setSelectedAnswers([]);
              }
              setShowExplanation(true);
            }}>
              📝 Review Answers
            </button>
            <button className="btn btn-primary" onClick={() => setMode('home')}>
              🏠 Back to Home
            </button>
          </div>
        </div>
        <style jsx>{styles}</style>
      </>
    );
  }

  return null;
}

const styles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    min-height: 100vh;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    color: white;
    padding: 20px;
    padding-bottom: 100px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .quiz-container {
    padding-bottom: 120px;
  }

  .header {
    text-align: center;
    padding: 30px 0;
  }

  .aws-badge {
    display: inline-block;
    background: #ff9900;
    color: #232f3e;
    font-weight: 800;
    font-size: 14px;
    padding: 6px 14px;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .subtitle {
    color: #94a3b8;
    font-size: 16px;
  }

  .stats-bar {
    display: flex;
    justify-content: space-around;
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 25px;
  }

  .stat {
    text-align: center;
  }

  .stat-value {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: #ff9900;
  }

  .stat-label {
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
  }

  .card {
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .card h2 {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .select {
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: 2px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .select option {
    background: #1e293b;
    color: white;
  }

  .quiz-size-options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .size-btn {
    flex: 1;
    min-width: 60px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.1);
    background: transparent;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .size-btn.active {
    background: #ff9900;
    border-color: #ff9900;
    color: #232f3e;
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 20px;
    border-radius: 16px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff9900 0%, #ffad33 100%);
    color: #232f3e;
  }

  .btn-secondary {
    background: rgba(255,255,255,0.1);
    color: white;
  }

  .btn-icon {
    font-size: 24px;
  }

  .btn-desc {
    font-size: 13px;
    font-weight: 400;
    opacity: 0.8;
  }

  .domains-list {
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 20px;
  }

  .domains-list h3 {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .domain-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 14px;
  }

  .domain-item:last-child {
    border-bottom: none;
  }

  .domain-name {
    color: #e2e8f0;
  }

  .domain-weight {
    color: #ff9900;
    font-weight: 600;
  }

  /* Quiz Screen */
  .quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .back-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  .progress-info {
    display: flex;
    gap: 15px;
    font-size: 14px;
    color: #e2e8f0;
  }

  .timer {
    color: #ff9900;
    font-weight: 600;
  }

  .timer.warning {
    color: #ef4444;
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .answered-count {
    font-size: 12px;
    color: #94a3b8;
  }

  .progress-bar {
    height: 4px;
    background: rgba(255,255,255,0.1);
    border-radius: 2px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #ff9900;
    transition: width 0.3s ease;
  }

  .tags-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .domain-tag {
    display: inline-block;
    font-size: 11px;
    padding: 5px 12px;
    background: rgba(255,153,0,0.2);
    color: #ff9900;
    border-radius: 20px;
  }

  .multi-answer-badge {
    display: inline-block;
    font-size: 11px;
    padding: 5px 12px;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    border-radius: 20px;
    font-weight: 600;
  }

  .question-card {
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .question-text {
    font-size: 16px;
    line-height: 1.6;
  }

  .options-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 15px;
    background: rgba(255,255,255,0.05);
    border: 2px solid transparent;
    border-radius: 12px;
    color: white;
    font-size: 15px;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s;
  }

  .option:hover {
    background: rgba(255,255,255,0.1);
  }

  .option.selected {
    border-color: #ff9900;
    background: rgba(255,153,0,0.1);
  }

  .option.correct {
    border-color: #10b981;
    background: rgba(16,185,129,0.1);
  }

  .option.incorrect {
    border-color: #ef4444;
    background: rgba(239,68,68,0.1);
  }

  .option-letter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    font-weight: 600;
    font-size: 13px;
    flex-shrink: 0;
  }

  .option-letter.checkbox {
    border-radius: 6px;
    font-size: 18px;
  }

  .option.selected .option-letter {
    background: #ff9900;
    color: #232f3e;
  }

  .option.correct .option-letter {
    background: #10b981;
  }

  .option.incorrect .option-letter {
    background: #ef4444;
  }

  .option-text {
    flex: 1;
    line-height: 1.5;
  }

  .check {
    color: #10b981;
    font-size: 18px;
  }

  .explanation {
    background: rgba(16,185,129,0.1);
    border: 1px solid rgba(16,185,129,0.3);
    border-radius: 12px;
    padding: 15px;
    margin-top: 20px;
  }

  .explanation.incorrect {
    background: rgba(239,68,68,0.1);
    border-color: rgba(239,68,68,0.3);
  }

  .explanation h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .explanation p {
    font-size: 14px;
    line-height: 1.6;
    color: #e2e8f0;
  }

  .correct-answers {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: #10b981;
  }

  .quiz-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 10px;
    padding: 15px 20px;
    background: linear-gradient(to top, #0f172a 0%, rgba(15,23,42,0.95) 100%);
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .nav-btn {
    flex: 1;
    padding: 15px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background: rgba(255,255,255,0.1);
    color: white;
  }

  .nav-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .submit-btn {
    background: #ff9900;
    color: #232f3e;
  }

  .finish-btn {
    background: #10b981;
  }

  /* Results Styles */
  .results-header {
    text-align: center;
    padding: 30px 20px;
    border-radius: 20px;
    margin-bottom: 30px;
  }

  .results-header.passed {
    background: linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%);
  }

  .results-header.failed {
    background: linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.05) 100%);
  }

  .result-icon {
    font-size: 48px;
    margin-bottom: 15px;
  }

  .score-circle {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 auto 30px;
  }

  .score-circle svg {
    transform: rotate(-90deg);
  }

  .score-circle circle {
    fill: none;
    stroke-width: 8;
  }

  .score-circle .bg {
    stroke: rgba(255,255,255,0.1);
  }

  .score-circle .progress {
    stroke-linecap: round;
    transition: stroke-dasharray 1s ease;
  }

  .score-circle .progress.passed {
    stroke: #10b981;
  }

  .score-circle .progress.failed {
    stroke: #ef4444;
  }

  .score-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .score-value {
    display: block;
    font-size: 42px;
    font-weight: bold;
  }

  .score-label {
    font-size: 16px;
    color: #94a3b8;
  }

  .domain-scores {
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 25px;
  }

  .domain-scores h3 {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 15px;
  }

  .domain-score-item {
    margin-bottom: 15px;
  }

  .domain-score-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 13px;
  }

  .domain-score-name {
    color: #e2e8f0;
  }

  .domain-score-value {
    color: #94a3b8;
  }

  .domain-score-bar {
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .domain-score-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.5s ease;
  }

  @media (min-width: 768px) {
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;
