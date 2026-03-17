export const questions = [
  // Domain 1: Fundamentals of AI and ML (20%)
  {
    id: 1,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company is developing a machine learning model using Amazon SageMaker and needs a solution to store and share feature sets across different teams for collaborative model building. Which Amazon SageMaker feature should the company use?",
    options: [
      "Amazon SageMaker Feature Store",
      "Amazon SageMaker Data Wrangler",
      "Amazon SageMaker Clarify",
      "Amazon SageMaker Model Registry"
    ],
    correctAnswer: 0,
    explanation: "SageMaker Feature Store is designed to allow teams to store, manage, and share features in a central repository. This ensures consistency across models and helps teams collaborate by reusing the same features across multiple projects."
  },
  {
    id: 2,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?",
    options: [
      "Real-time inference",
      "Serverless inference",
      "Asynchronous inference",
      "Batch transform"
    ],
    correctAnswer: 0,
    explanation: "Real-time inference is designed for scenarios where low-latency responses are needed. It is ideal when predictions need to be generated immediately upon receiving input data."
  },
  {
    id: 3,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A data scientist is training an ML model that performs well on training data but poorly on test data. The model is exhibiting high variance. Which action should the data scientist take?",
    options: [
      "Increase the number of features",
      "Use regularization techniques",
      "Increase model complexity",
      "Remove training data"
    ],
    correctAnswer: 1,
    explanation: "High variance typically indicates overfitting. Regularization techniques (like L1/L2) help reduce overfitting by penalizing complex models."
  },
  {
    id: 4,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company wants to adapt pre-trained models to create models for new, related tasks without creating new models from scratch. Which ML strategy meets these requirements?",
    options: [
      "Increase the number of epochs",
      "Use transfer learning",
      "Decrease the number of epochs",
      "Use unsupervised learning"
    ],
    correctAnswer: 1,
    explanation: "Transfer learning allows you to take a pre-trained model and adapt it to a new, related task. This saves time and resources compared to training a model from scratch."
  },
  {
    id: 5,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A ride-sharing company wants to group customers based on their trip patterns without predefined categories. Which type of machine learning is MOST appropriate?",
    options: [
      "Supervised learning",
      "Reinforcement learning",
      "Unsupervised learning",
      "Semi-supervised learning"
    ],
    correctAnswer: 2,
    explanation: "Unsupervised learning is used when you want to find patterns or groupings in data without predefined labels. Clustering algorithms can group customers based on similar trip patterns."
  },
  {
    id: 6,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company wants to build a model to classify customer reviews as positive or negative using a labeled training dataset. Which type of machine learning is MOST appropriate?",
    options: [
      "Reinforcement learning",
      "Unsupervised learning",
      "Supervised learning",
      "Deep reinforcement learning"
    ],
    correctAnswer: 2,
    explanation: "Supervised learning is used when you have labeled data. Classification of reviews into positive/negative categories using labeled examples is a classic supervised learning task."
  },
  {
    id: 7,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is feature engineering in machine learning?",
    options: [
      "Training a model using more epochs",
      "Applying domain expertise to convert raw data into model inputs",
      "Selecting the best model architecture",
      "Deploying models to production"
    ],
    correctAnswer: 1,
    explanation: "Feature engineering is the process of using domain knowledge to extract, transform, and create features from raw data that help machine learning algorithms perform better."
  },
  {
    id: 8,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "Which combination of techniques is used during the training process of deep learning models?",
    options: [
      "Gradient descent and forward propagation only",
      "Loss function, forward propagation, and gradient descent",
      "Backpropagation, gradient descent, and loss function",
      "Only backpropagation and activation functions"
    ],
    correctAnswer: 2,
    explanation: "Deep learning training involves: calculating loss (loss function), computing gradients (backpropagation), and updating weights (gradient descent). These work together iteratively."
  },
  {
    id: 9,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "What is the primary difference between AI and ML?",
    options: [
      "AI is a subset of ML",
      "ML is a subset of AI",
      "They are completely unrelated fields",
      "AI and ML are the same thing"
    ],
    correctAnswer: 1,
    explanation: "Machine Learning is a subset of Artificial Intelligence. AI is the broader concept of machines being able to carry out tasks intelligently, while ML specifically refers to systems that learn from data."
  },
  {
    id: 10,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "A company has petabytes of unstructured data and wants to transform it into a structured format for ML tasks. Which service will meet these requirements?",
    options: [
      "Amazon Lex",
      "Amazon Rekognition",
      "Amazon Kinesis Data Streams",
      "AWS Glue"
    ],
    correctAnswer: 3,
    explanation: "AWS Glue is a fully managed ETL service that can discover, catalog, and transform unstructured data into structured formats suitable for ML tasks."
  },
  {
    id: 11,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "An AI practitioner trained a custom model on Amazon Bedrock using confidential data. How should they prevent the model from generating responses based on that confidential data?",
    options: [
      "Delete the model, remove confidential data, and retrain",
      "Mask the confidential data using dynamic data masking",
      "Encrypt the data in responses using SageMaker",
      "Encrypt the data using AWS KMS"
    ],
    correctAnswer: 0,
    explanation: "When a model is trained on confidential data, the only reliable way to prevent it from generating responses based on that data is to remove the confidential data and retrain the model."
  },
  {
    id: 12,
    domain: "Domain 1: Fundamentals of AI and ML",
    question: "For a fraud detection model to be accurate on unseen data, which characteristics should it have?",
    options: [
      "High bias and high variance",
      "Low bias and low variance",
      "High bias and low variance",
      "Low bias and high variance"
    ],
    correctAnswer: 1,
    explanation: "A model that generalizes well must balance bias and variance. Low bias means the model captures underlying patterns, and low variance means predictions are stable."
  },
  // Domain 2: Fundamentals of Generative AI (24%)
  {
    id: 13,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What does generative AI fundamentally do when creating new content?",
    options: [
      "Copies existing content from its training data",
      "Samples from statistical patterns learned during training",
      "Uses rules programmed by developers",
      "Randomly generates content without any learning"
    ],
    correctAnswer: 1,
    explanation: "Generative AI creates new content by sampling from statistical patterns it learned during training. It doesn't copy or randomly generate - it uses learned patterns to produce novel outputs."
  },
  {
    id: 14,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "A foundation model sometimes provides incorrect information when creating product descriptions. What is this phenomenon called?",
    options: [
      "Bias",
      "Toxicity",
      "Hallucinations",
      "Plagiarism"
    ],
    correctAnswer: 2,
    explanation: "Hallucinations occur when a generative model produces confident but incorrect or fabricated information. This can happen when the model lacks relevant context."
  },
  {
    id: 15,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is a key difference between Amazon Q and Amazon Bedrock?",
    options: [
      "Amazon Q allows picking multiple FMs, Bedrock restricts to one",
      "Amazon Q is a ready-to-use AI assistant, Bedrock is a platform to build custom AI apps",
      "Amazon Q is only for developers, Bedrock is for business users",
      "They are the same service with different names"
    ],
    correctAnswer: 1,
    explanation: "Amazon Q is a ready-to-use AI assistant for business and development workflows. Amazon Bedrock is a platform providing access to multiple foundation models for building custom applications."
  },
  {
    id: 16,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the primary transparency advantage of choosing an open-source model?",
    options: [
      "Automatic explanations for every prediction",
      "Unrestricted commercial use licensing",
      "Source code can be examined and adapted",
      "Always more accurate than proprietary models"
    ],
    correctAnswer: 2,
    explanation: "The primary transparency advantage of open-source models is that the source code can be examined, reviewed, and adapted, allowing users to understand how the model makes decisions."
  },
  {
    id: 17,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "In generative AI text generation, what does the temperature parameter control?",
    options: [
      "The speed of text generation",
      "The randomness and creativity of outputs",
      "The maximum length of generated text",
      "The number of tokens processed per second"
    ],
    correctAnswer: 1,
    explanation: "Temperature controls the randomness of outputs. Lower temperature produces more deterministic, focused outputs, while higher temperature produces more creative, diverse outputs."
  },
  {
    id: 18,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What does tokenization mainly do in generative AI text processing?",
    options: [
      "Calculates probabilities for next token",
      "Segments text into manageable units like words or subwords",
      "Masks sensitive attributes",
      "Encrypts the text for secure processing"
    ],
    correctAnswer: 1,
    explanation: "Tokenization segments input text into discrete tokens (words, subwords, or characters) that models can process. This is a fundamental preprocessing step for NLP models."
  },
  {
    id: 19,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "A company wants to know how much information can fit into one prompt when choosing a foundation model. Which consideration will inform this decision?",
    options: [
      "Model inference speed",
      "Model context window",
      "Model training data size",
      "Model parameter count"
    ],
    correctAnswer: 1,
    explanation: "The context window determines the maximum amount of text that can be included in a single prompt and its response. This is crucial for applications processing long documents."
  },
  {
    id: 20,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "Which metric measures the runtime efficiency of operating AI models?",
    options: [
      "Customer satisfaction score (CSAT)",
      "Training time for each epoch",
      "Average response time",
      "Number of training instances"
    ],
    correctAnswer: 2,
    explanation: "Average response time measures how quickly a model returns predictions during inference, which is a key indicator of runtime efficiency."
  },
  {
    id: 21,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "A student copies content from generative AI to write essays. Which responsible AI challenge does this represent?",
    options: [
      "Toxicity",
      "Hallucinations",
      "Plagiarism",
      "Privacy"
    ],
    correctAnswer: 2,
    explanation: "Using AI-generated content without attribution and presenting it as original work represents plagiarism, a key challenge in responsible use of generative AI."
  },
  {
    id: 22,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "A company is training a foundation model and wants to increase its accuracy. Which solution will meet these requirements?",
    options: [
      "Decrease the batch size",
      "Increase the epochs",
      "Decrease the epochs",
      "Increase the temperature parameter"
    ],
    correctAnswer: 1,
    explanation: "Increasing epochs allows the model to learn from the data over more iterations, which can improve accuracy. Temperature affects inference, not training accuracy."
  },
  {
    id: 23,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "What is the difference between continued pre-training and fine-tuning in Amazon Bedrock?",
    options: [
      "Both are the same process",
      "Continued pre-training uses unlabeled data, fine-tuning uses labeled data for specific tasks",
      "Fine-tuning is always faster",
      "Continued pre-training changes architecture, fine-tuning doesn't"
    ],
    correctAnswer: 1,
    explanation: "Continued pre-training uses unlabeled data to expand domain knowledge, while fine-tuning uses labeled examples to teach the model specific task behaviors."
  },
  {
    id: 24,
    domain: "Domain 2: Fundamentals of Generative AI",
    question: "A company wants to ensure generated marketing content aligns with their brand voice. Which solution meets this requirement?",
    options: [
      "Optimize the model's architecture",
      "Increase the model's complexity",
      "Create effective prompts with clear instructions and context",
      "Select a large diverse dataset to pre-train"
    ],
    correctAnswer: 2,
    explanation: "Prompt engineering is the most efficient way to guide a pre-trained model's outputs to match specific requirements like brand voice."
  },
  // Domain 3: Applications of Foundation Models (28%)
  {
    id: 25,
    domain: "Domain 3: Applications of Foundation Models",
    question: "An insurance company needs to search 8 million policy documents to answer customer queries. Which approach should they use with Amazon Bedrock?",
    options: [
      "Fine-tune the model on all documents",
      "Use prompt engineering with summaries",
      "Implement Retrieval-Augmented Generation (RAG)",
      "Create a custom model from scratch"
    ],
    correctAnswer: 2,
    explanation: "RAG allows the model to retrieve relevant information from a knowledge base and use it to generate accurate responses without fine-tuning on all documents."
  },
  {
    id: 26,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to personalize a foundation model with its own data without data leaving AWS. Which approach should they take?",
    options: [
      "Use a public API to fine-tune",
      "Create a private fine-tuned copy within Amazon Bedrock",
      "Export the model and train locally",
      "Use prompt engineering only"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock allows you to create private fine-tuned copies of foundation models within your AWS environment, ensuring data privacy."
  },
  {
    id: 27,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which sequence represents model improvement techniques in increasing complexity?",
    options: [
      "RAG, Prompt engineering, Fine-tuning",
      "Fine-tuning, RAG, Prompt engineering",
      "Prompt engineering, RAG, Fine-tuning",
      "Prompt engineering, Fine-tuning, RAG"
    ],
    correctAnswer: 2,
    explanation: "The correct order is: Prompt engineering (quickest) → RAG (adds retrieval layer) → Fine-tuning (most complex, requires training data and compute)."
  },
  {
    id: 28,
    domain: "Domain 3: Applications of Foundation Models",
    question: "In Amazon Bedrock, what does the top_p parameter control?",
    options: [
      "The number of tokens to generate",
      "The cumulative probability threshold for token sampling",
      "The maximum context window size",
      "The inference speed"
    ],
    correctAnswer: 1,
    explanation: "Top-p (nucleus sampling) sets a cumulative probability threshold. The model considers tokens whose combined probability reaches this threshold."
  },
  {
    id: 29,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What does the top-k parameter control in foundation model inference?",
    options: [
      "The maximum output length",
      "The number of highest-probability token candidates to consider",
      "The learning rate during training",
      "The batch size for inference"
    ],
    correctAnswer: 1,
    explanation: "Top-k limits the sampling pool to the k most likely next tokens, controlling output diversity while maintaining quality."
  },
  {
    id: 30,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Amazon Q Business uses which technique to keep answers current and grounded in enterprise data?",
    options: [
      "Continuous model retraining",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt caching",
      "Model distillation"
    ],
    correctAnswer: 1,
    explanation: "Amazon Q Business uses RAG to retrieve current information from connected enterprise data sources, ensuring answers are grounded in up-to-date organizational knowledge."
  },
  {
    id: 31,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants an AI solution to retrieve data from OpenSearch, generate CSV files, and upload to S3. Which solution should they use?",
    options: [
      "Create an AI agent with Amazon Bedrock Agents",
      "Use a single foundation model with few-shot prompting",
      "Create a software application without AI",
      "Train a decision tree model"
    ],
    correctAnswer: 0,
    explanation: "Amazon Bedrock Agents provide autonomous orchestration abilities to interpret queries, convert them into API calls, retrieve data, and interact with external systems."
  },
  {
    id: 32,
    domain: "Domain 3: Applications of Foundation Models",
    question: "An AI practitioner wants to save and reuse system instructions in Amazon Bedrock. Which solution meets this requirement?",
    options: [
      "Amazon Bedrock Knowledge Bases",
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Prompt Management",
      "Amazon Bedrock Playgrounds"
    ],
    correctAnswer: 2,
    explanation: "Amazon Bedrock Prompt Management allows practitioners to create, version, store, and reuse prompts and system instructions."
  },
  {
    id: 33,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A genomics company wants domain-specific vocabulary understanding AND task-specific performance. Which customization approach should they use?",
    options: [
      "Prompt engineering only",
      "Continued pretraining and fine-tuning",
      "Zero-shot learning only",
      "RAG only"
    ],
    correctAnswer: 1,
    explanation: "Continued pretraining helps the model learn domain-specific vocabulary. Fine-tuning then teaches the model to perform specific tasks accurately."
  },
  {
    id: 34,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A company wants to use LLMs with Amazon Bedrock for a chat interface using PDF product manuals. Which solution is MOST cost-effective?",
    options: [
      "Add one PDF as context to each prompt",
      "Add all PDFs as context to each prompt",
      "Fine-tune a model with all PDFs",
      "Upload PDFs to a knowledge base and use RAG"
    ],
    correctAnswer: 3,
    explanation: "Using a knowledge base with RAG is most cost-effective because it only retrieves relevant portions when needed, rather than including entire PDFs in every prompt."
  },
  {
    id: 35,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A chatbot needs to produce responses that adhere to company tone. Which solution meets this requirement?",
    options: [
      "Use batch inferencing",
      "Experiment and refine the prompt",
      "Define a higher temperature parameter",
      "Fine-tune with all customer data"
    ],
    correctAnswer: 1,
    explanation: "Prompt engineering (experimenting and refining prompts) is the most efficient way to guide a foundation model to produce responses matching a specific tone."
  },
  {
    id: 36,
    domain: "Domain 3: Applications of Foundation Models",
    question: "Which prompt engineering strategy is best for sentiment analysis (classifying text as positive or negative)?",
    options: [
      "Provide examples with labels followed by new text to classify",
      "Provide detailed explanation of sentiment analysis",
      "Provide text without context or examples",
      "Provide examples of unrelated tasks"
    ],
    correctAnswer: 0,
    explanation: "Few-shot prompting with labeled examples helps the model understand the classification task and produce consistent results."
  },
  {
    id: 37,
    domain: "Domain 3: Applications of Foundation Models",
    question: "A law firm wants to read legal documents and extract key points using LLMs. Which solution meets this requirement?",
    options: [
      "Named entity recognition system",
      "Recommendation engine",
      "Text summarization with foundation models",
      "Computer vision model"
    ],
    correctAnswer: 2,
    explanation: "Text summarization with foundation models is ideal for extracting key points from legal documents."
  },
  {
    id: 38,
    domain: "Domain 3: Applications of Foundation Models",
    question: "What is a benefit of ongoing pre-training when customizing a foundation model?",
    options: [
      "Decreases model complexity",
      "Improves performance on domain-specific tasks",
      "Decreases training time",
      "Optimizes inference time"
    ],
    correctAnswer: 1,
    explanation: "Ongoing pre-training helps the model become more familiar with domain-specific data and terminology, improving performance on related tasks."
  },
  {
    id: 39,
    domain: "Domain 3: Applications of Foundation Models",
    question: "When Amazon Bedrock Knowledge Bases creates storage automatically, which vector database is used by default?",
    options: [
      "Amazon OpenSearch Serverless",
      "Amazon RDS for PostgreSQL with pgvector",
      "Amazon Neptune",
      "Amazon DynamoDB"
    ],
    correctAnswer: 0,
    explanation: "Amazon Bedrock Knowledge Bases uses Amazon OpenSearch Serverless as the default vector store when automatically provisioning storage."
  },
  {
    id: 40,
    domain: "Domain 3: Applications of Foundation Models",
    question: "For lowest latency inference on edge devices, which solution should a company use?",
    options: [
      "Deploy optimized small language models (SLMs) on edge",
      "Deploy optimized large language models (LLMs) on edge",
      "Use centralized SLM API asynchronously",
      "Use centralized LLM API asynchronously"
    ],
    correctAnswer: 0,
    explanation: "Small language models optimized for edge devices provide lowest latency because they run locally without network round-trips."
  },
  // Domain 4: Guidelines for Responsible AI (14%)
  {
    id: 41,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "A dataset for facial recognition has fewer samples of certain ethnic groups. Which technique can address this bias?",
    options: [
      "Data augmentation for imbalanced classes",
      "Model monitoring for accuracy drift",
      "Retrieval Augmented Generation (RAG)",
      "Edge detection for image processing"
    ],
    correctAnswer: 0,
    explanation: "Data augmentation helps balance the dataset by creating new samples from underrepresented groups through transformations, reducing bias."
  },
  {
    id: 42,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "During data preparation, which SageMaker Clarify capability helps enforce fairness?",
    options: [
      "Amazon SageMaker Model Cards",
      "Amazon SageMaker Clarify bias detection",
      "Amazon Bedrock Knowledge Bases",
      "Amazon SageMaker Experiments"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Clarify provides automated bias detection during data preparation, helping identify imbalances that could lead to unfair predictions."
  },
  {
    id: 43,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "An employee attrition model shows 91% accuracy in Finance but 67% in Warehouse. Which evaluation approach uncovers this?",
    options: [
      "Cross-validation on entire dataset",
      "A/B testing in production",
      "Subgroup evaluation across divisions",
      "Hyperparameter tuning"
    ],
    correctAnswer: 2,
    explanation: "Subgroup evaluation analyzes model performance across different segments, revealing disparities that overall metrics might hide."
  },
  {
    id: 44,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "A chatbot must block PII and detect hallucinations with least operational overhead. What should they use?",
    options: [
      "Custom Lambda functions",
      "Amazon Comprehend for PII",
      "Amazon Bedrock Guardrails",
      "Manual review of responses"
    ],
    correctAnswer: 2,
    explanation: "Amazon Bedrock Guardrails provides built-in capabilities to filter PII and detect hallucinations with minimal operational overhead."
  },
  {
    id: 45,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "A customer support assistant should act responsibly. Which guideline should the team prioritize?",
    options: [
      "Maximize response speed at all costs",
      "Build transparency and explainability",
      "Minimize human oversight",
      "Use only proprietary models"
    ],
    correctAnswer: 1,
    explanation: "Transparency and explainability are fundamental principles of responsible AI, helping users understand and trust AI-generated responses."
  },
  {
    id: 46,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "A security camera ML model disproportionately flags a specific ethnic group. Which type of bias is this?",
    options: [
      "Measurement bias",
      "Sampling bias",
      "Observer bias",
      "Confirmation bias"
    ],
    correctAnswer: 1,
    explanation: "Sampling bias occurs when the training data doesn't represent the population fairly, leading to disproportionate flagging of certain groups."
  },
  {
    id: 47,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "An attacker bypasses guardrails and instructs a model to ignore its system prompt. Which risk is this?",
    options: [
      "Data poisoning",
      "Model jailbreak using adversarial prompting",
      "Infrastructure attack",
      "Denial of service"
    ],
    correctAnswer: 1,
    explanation: "Model jailbreak occurs when adversarial prompts are used to bypass safety guardrails and make the model ignore its intended constraints."
  },
  {
    id: 48,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which guideline prevents proprietary data from surfacing in AI outputs?",
    options: [
      "Prioritize response speed",
      "Minimize transparency",
      "Implement AI risk management",
      "Disable logging"
    ],
    correctAnswer: 2,
    explanation: "AI risk management helps prevent unintended disclosure of proprietary or sensitive information in AI-generated outputs."
  },
  {
    id: 49,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "A loan company wants to build AI responsibly to minimize bias. Which actions should they take?",
    options: [
      "Detect data imbalances and implement fairness testing",
      "Ensure the model runs frequently",
      "Use only unsupervised learning",
      "Maximize training data volume"
    ],
    correctAnswer: 0,
    explanation: "Detecting data imbalances and implementing fairness testing are essential steps to identify and mitigate bias in consequential AI decisions."
  },
  {
    id: 50,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "For evaluating LLM bias with LEAST administrative effort, which data source should be used?",
    options: [
      "User-generated content",
      "Moderation logs",
      "Content moderation guidelines",
      "Benchmark datasets"
    ],
    correctAnswer: 3,
    explanation: "Benchmark datasets are pre-curated for evaluating bias, requiring the least administrative effort compared to preparing custom evaluation data."
  },
  {
    id: 51,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "Which functionality does Amazon SageMaker Clarify provide?",
    options: [
      "Integrates RAG workflow",
      "Monitors ML models in production",
      "Documents model details",
      "Identifies potential bias and provides explainability"
    ],
    correctAnswer: 3,
    explanation: "SageMaker Clarify detects bias in datasets and ML models and provides feature importance explanations for model predictions."
  },
  {
    id: 52,
    domain: "Domain 4: Guidelines for Responsible AI",
    question: "An app for children generates stories. How can the company ensure appropriate content using Amazon Bedrock?",
    options: [
      "Amazon Rekognition",
      "Amazon Bedrock playgrounds",
      "Guardrails for Amazon Bedrock",
      "Agents for Amazon Bedrock"
    ],
    correctAnswer: 2,
    explanation: "Guardrails for Amazon Bedrock provides content filtering capabilities to ensure generated content is appropriate for the intended audience."
  },
  // Domain 5: Security, Compliance, and Governance (14%)
  {
    id: 53,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "An AI platform processes confidential employee records. Which service continuously evaluates against security best practices?",
    options: [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    correctAnswer: 2,
    explanation: "AWS Trusted Advisor provides continuous evaluation against best practices and prioritized remediation guidance across multiple domains including security."
  },
  {
    id: 54,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "A company wants to implement least-privilege access for ML operations. Which approach should they take?",
    options: [
      "Give all team members administrator access",
      "Use AWS IAM roles with fine-grained policies",
      "Share a single service account",
      "Disable all access controls"
    ],
    correctAnswer: 1,
    explanation: "IAM roles with fine-grained policies enable least-privilege access by granting only the specific permissions needed for each role."
  },
  {
    id: 55,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which practice best reduces risk of disclosing sensitive document data?",
    options: [
      "Store data in RDS instead of S3",
      "Encrypt documents with AWS KMS",
      "Disable API logging",
      "Use public S3 buckets"
    ],
    correctAnswer: 1,
    explanation: "KMS encryption protects data at rest and ensures only authorized personnel can access sensitive documents."
  },
  {
    id: 56,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "A Bedrock FM fails to access encrypted S3 data (SSE-S3). Which solution will fix this?",
    options: [
      "Ensure Bedrock role has permission to decrypt with correct key",
      "Set S3 buckets to allow public access",
      "Use prompt engineering to look for S3 info",
      "Migrate to unencrypted bucket"
    ],
    correctAnswer: 0,
    explanation: "The IAM role assumed by Amazon Bedrock needs explicit permissions to decrypt the S3 data using the appropriate encryption keys."
  },
  {
    id: 57,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service is the native storage option for training data in Amazon Bedrock?",
    options: [
      "Amazon DynamoDB",
      "Amazon S3",
      "Amazon RDS",
      "Amazon EFS"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3 is the native storage service for training and validation data in Amazon Bedrock."
  },
  {
    id: 58,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "An AI application's responses have become less accurate over time. Which service sends alerts when performance drifts?",
    options: [
      "Amazon Rekognition",
      "Amazon SageMaker Clarify",
      "Amazon Comprehend",
      "Amazon SageMaker Model Monitor"
    ],
    correctAnswer: 3,
    explanation: "SageMaker Model Monitor tracks model performance drift over time and can send alerts when data or prediction quality degrades."
  },
  {
    id: 59,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "A company trained a custom model in Bedrock. What must they do to use it?",
    options: [
      "Purchase Provisioned Throughput",
      "Deploy to SageMaker endpoint",
      "Register with Model Registry",
      "Grant access in Bedrock"
    ],
    correctAnswer: 0,
    explanation: "Custom models in Amazon Bedrock require Provisioned Throughput to be purchased for serving inference requests."
  },
  {
    id: 60,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which solution scope gives the MOST security ownership according to the Generative AI Security Scoping Matrix?",
    options: [
      "Using an existing third-party FM application",
      "Fine-tuning a third-party FM with business data",
      "Building and training a model from scratch",
      "Using a pre-built Amazon Q application"
    ],
    correctAnswer: 2,
    explanation: "Building and training from scratch gives maximum control and therefore maximum security responsibility across all layers."
  },
  {
    id: 61,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which AWS service documents critical details about ML models for governance?",
    options: [
      "Amazon SageMaker Clarify",
      "Amazon SageMaker Model Cards",
      "Amazon SageMaker Experiments",
      "Amazon SageMaker Pipelines"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Cards provide standardized documentation for ML models, including intended use, performance metrics, and governance information."
  },
  {
    id: 62,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which services provide visibility into Amazon Bedrock usage for cost and performance?",
    options: [
      "AWS Cost Explorer only",
      "Amazon CloudWatch only",
      "AWS Budgets only",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "AWS Cost Explorer, CloudWatch, and Budgets all work together to provide comprehensive visibility into Bedrock usage, costs, and performance."
  },
  {
    id: 63,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "For GDPR compliance regarding data subject rights, which capability is MOST important?",
    options: [
      "Model versioning",
      "Data lineage and ability to delete personal data",
      "Automated hyperparameter tuning",
      "Real-time inference"
    ],
    correctAnswer: 1,
    explanation: "GDPR requires the ability to track data lineage and honor data subject rights like deletion, making this capability essential for compliance."
  },
  {
    id: 64,
    domain: "Domain 5: Security, Compliance, and Governance",
    question: "Which security principle should be applied when configuring IAM policies for AWS AI services?",
    options: [
      "Grant broad permissions to simplify management",
      "Apply least privilege by granting only necessary permissions",
      "Use root account credentials for all operations",
      "Share access keys across team members"
    ],
    correctAnswer: 1,
    explanation: "Least privilege is a fundamental security principle that minimizes risk by granting only the permissions needed for specific tasks."
  },
  // AWS Services Quick Reference (65-80)
  {
    id: 65,
    domain: "AWS Services Quick Reference",
    question: "A company wants to extract text from live camera feeds for license plate recognition. Which service should they use?",
    options: [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Polly"
    ],
    correctAnswer: 1,
    explanation: "Amazon Rekognition can detect and extract text from images and video in real-time, ideal for license plate recognition."
  },
  {
    id: 66,
    domain: "AWS Services Quick Reference",
    question: "A company wants to convert audio recordings to text for analysis. Which service should they use?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    correctAnswer: 1,
    explanation: "Amazon Transcribe converts speech to text, enabling transcription of audio recordings for further analysis."
  },
  {
    id: 67,
    domain: "AWS Services Quick Reference",
    question: "A company processes 25,000 tickets daily and wants to automate multi-step workflows. Which Bedrock feature should they use?",
    options: [
      "Amazon Bedrock Knowledge Bases",
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Agents",
      "Amazon Bedrock Playgrounds"
    ],
    correctAnswer: 2,
    explanation: "Bedrock Agents can automate multi-step workflows by orchestrating AI capabilities with business logic and external integrations."
  },
  {
    id: 68,
    domain: "AWS Services Quick Reference",
    question: "Which SageMaker capability provides a centralized repository to store and share ML features?",
    options: [
      "SageMaker Feature Store",
      "SageMaker Model Registry",
      "SageMaker Experiments",
      "SageMaker Data Wrangler"
    ],
    correctAnswer: 0,
    explanation: "SageMaker Feature Store provides a centralized repository for storing, versioning, and sharing features across ML teams."
  },
  {
    id: 69,
    domain: "AWS Services Quick Reference",
    question: "Which AWS service makes foundation models available for building generative AI applications?",
    options: [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock is a fully managed service providing access to foundation models from multiple providers for building generative AI applications."
  },
  {
    id: 70,
    domain: "AWS Services Quick Reference",
    question: "A company wants to build a recommendation system based on purchase history. Which service is MOST appropriate?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Personalize",
      "Amazon Lex"
    ],
    correctAnswer: 2,
    explanation: "Amazon Personalize is specifically designed for building recommendation systems using machine learning based on user behavior data."
  },
  {
    id: 71,
    domain: "AWS Services Quick Reference",
    question: "Which solution improves transcription accuracy for domain-specific speech?",
    options: [
      "Custom bot in Amazon Lex",
      "Custom language model in Amazon Translate",
      "Batch language identification in Transcribe",
      "Custom language model in Amazon Transcribe"
    ],
    correctAnswer: 3,
    explanation: "Amazon Transcribe custom language models improve transcription accuracy for domain-specific vocabulary and speech patterns."
  },
  {
    id: 72,
    domain: "AWS Services Quick Reference",
    question: "A company wants to extract text, tables, and form data from scanned documents. Which service should they use?",
    options: [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Kendra"
    ],
    correctAnswer: 2,
    explanation: "Amazon Textract is specifically designed to extract text, tables, and form data from scanned documents and images."
  },
  {
    id: 73,
    domain: "AWS Services Quick Reference",
    question: "A company wants to convert text into natural-sounding speech for IVR. Which service should they use?",
    options: [
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Comprehend"
    ],
    correctAnswer: 1,
    explanation: "Amazon Polly converts text to lifelike speech, ideal for IVR systems and applications requiring speech output."
  },
  {
    id: 74,
    domain: "AWS Services Quick Reference",
    question: "Which service allows deploying custom ML models without managing infrastructure?",
    options: [
      "Amazon EC2",
      "Amazon SageMaker Serverless Inference",
      "Amazon S3",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Serverless Inference provides serverless model deployment without the need to manage underlying infrastructure."
  },
  {
    id: 75,
    domain: "AWS Services Quick Reference",
    question: "A company needs to build a conversational chatbot with natural language understanding. Which service should they start with?",
    options: [
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Transcribe",
      "Amazon Comprehend"
    ],
    correctAnswer: 1,
    explanation: "Amazon Lex provides natural language understanding capabilities for building conversational interfaces and chatbots."
  },
  {
    id: 76,
    domain: "AWS Services Quick Reference",
    question: "Which service provides NLP capabilities for sentiment analysis and entity recognition?",
    options: [
      "Amazon Lex",
      "Amazon Comprehend",
      "Amazon Polly",
      "Amazon Textract"
    ],
    correctAnswer: 1,
    explanation: "Amazon Comprehend is a NLP service providing sentiment analysis, entity recognition, key phrase extraction, and language detection."
  },
  {
    id: 77,
    domain: "AWS Services Quick Reference",
    question: "A company wants intelligent enterprise search across documents and wikis. Which service is MOST appropriate?",
    options: [
      "Amazon OpenSearch Service",
      "Amazon Kendra",
      "Amazon CloudSearch",
      "Amazon S3 Select"
    ],
    correctAnswer: 1,
    explanation: "Amazon Kendra is an intelligent enterprise search service that uses ML to deliver accurate search results across enterprise content."
  },
  {
    id: 78,
    domain: "AWS Services Quick Reference",
    question: "Which AWS service provides time series forecasting capabilities?",
    options: [
      "Amazon Personalize",
      "Amazon Forecast",
      "Amazon Comprehend",
      "Amazon Rekognition"
    ],
    correctAnswer: 1,
    explanation: "Amazon Forecast is a fully managed service for time series forecasting using machine learning."
  },
  {
    id: 79,
    domain: "AWS Services Quick Reference",
    question: "For real-time image classification predictions without managing infrastructure, which deployment option is BEST?",
    options: [
      "SageMaker Real-time Inference",
      "SageMaker Batch Transform",
      "SageMaker Serverless Inference",
      "AWS Lambda with container"
    ],
    correctAnswer: 2,
    explanation: "SageMaker Serverless Inference provides real-time predictions with automatic scaling and no infrastructure management."
  },
  {
    id: 80,
    domain: "AWS Services Quick Reference",
    question: "A company wants to detect fraudulent transactions in real-time. Which service is specifically designed for this?",
    options: [
      "Amazon Comprehend",
      "Amazon Fraud Detector",
      "Amazon Personalize",
      "Amazon Rekognition"
    ],
    correctAnswer: 1,
    explanation: "Amazon Fraud Detector is specifically designed to identify potentially fraudulent online activities in real-time."
  }
];

export const domains = [
  { id: 1, name: "Domain 1: Fundamentals of AI and ML", weight: "20%", questionCount: 12 },
  { id: 2, name: "Domain 2: Fundamentals of Generative AI", weight: "24%", questionCount: 12 },
  { id: 3, name: "Domain 3: Applications of Foundation Models", weight: "28%", questionCount: 16 },
  { id: 4, name: "Domain 4: Guidelines for Responsible AI", weight: "14%", questionCount: 12 },
  { id: 5, name: "Domain 5: Security, Compliance, and Governance", weight: "14%", questionCount: 12 },
  { id: 6, name: "AWS Services Quick Reference", weight: "Bonus", questionCount: 16 }
];
