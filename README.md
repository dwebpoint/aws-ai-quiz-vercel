# AWS AI Practitioner Quiz

A Next.js-based quiz application for AWS AI Practitioner certification preparation.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 18.0 or higher recommended)
- **npm** (comes with Node.js) or **yarn** package manager

You can verify your installations by running:
```bash
node --version
npm --version
```

## Local Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd aws-ai-quiz-vercel
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to the URL to view the application.

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode with hot-reloading.

### `npm run build`
Builds the app for production to the `.next` folder.

### `npm start`
Starts the production server (requires running `npm run build` first).

## Project Structure

```
aws-ai-quiz-vercel/
├── data/
│   └── questions.js       # Quiz questions data
├── pages/
│   ├── _app.js           # Next.js app wrapper
│   └── index.js          # Main page
├── styles/
│   └── globals.css       # Global styles
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
└── vercel.json          # Vercel deployment configuration
```

## Technologies Used

- **Next.js** 14.0.4 - React framework
- **React** 18.2.0 - UI library
- **React DOM** 18.2.0 - React rendering

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the deployment configuration.

To deploy your own instance:

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Clear Next.js Cache
If you encounter build issues, try clearing the Next.js cache:
```bash
rm -rf .next
npm run dev
```

## License

See the LICENSE file for details.
