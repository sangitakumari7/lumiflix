# Lumniflix 

Lumniflix is a modern Netflix clone built with React, Redux, Firebase, and Tailwind CSS. It features secure user authentication, a dynamic movie browsing experience, and video trailers fetched directly from the TMDB API.

## Features

- **User Authentication**: Sign up, sign in, and sign out securely using Firebase Authentication.
- **State Management**: Robust application state management using Redux Toolkit.
- **Dynamic UI & Responsive Design**: Beautiful, responsive interfaces built with Tailwind CSS.
- **Movie Data Integration**: Fetches now-playing movies, overviews, and background trailers using the TMDB (The Movie Database) API.
- **Cinematic Video Backgrounds**: Immersive autoplaying, muted background trailers for featured movies on the browse page.
- **Client-side Routing**: Seamless page navigation using `react-router-dom`.

## Tech Stack

- **Frontend**: React.js, React Router
- **State Management**: Redux Toolkit (`react-redux`, `@reduxjs/toolkit`)
- **Styling**: Tailwind CSS
- **Backend as a Service (BaaS)**: Firebase (Auth)
- **Icons**: Lucide React
- **External APIs**: TMDB (The Movie Database) API

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (v14.0.0 or higher) and **npm** installed on your machine.
- A **Firebase** account for setting up authentication.
- A **TMDB** (The Movie Database) developer account for the API key.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd lumniflix
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get Your API Keys:**
   - **TMDB API Key:** Go to TMDB, create an account, navigate to Settings > API, and generate an API key.
   - **Firebase Config:** Go to the Firebase Console, create a new project, enable "Authentication" (Email/Password), and register a web app to get your Firebase configuration object.

4. **Set up Environment Variables:**
   Create a `.env` (or `.env.local` if using Vite) file in the root directory and add your API keys:
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```
   *(Note: If you created this project using Vite, replace `REACT_APP_` with `VITE_`)*

5. **Start the development server:**
   ```bash
   npm start
   # or 'npm run dev' if you are using Vite
   ```

## Usage

1. **Sign Up / Log In**: Start by creating a new account on the landing page using the Firebase-powered authentication form.
2. **Browse Movies**: Once logged in, you will be redirected to the main browse page.
3. **Watch Trailers**: The hero section will automatically play the background trailer of a featured movie. Scroll down to see movie categories.

## Folder Structure

```text
lumniflix/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Application pages (Login, Browse, etc.)
│   ├── redux/         # Redux slices and store configuration
│   ├── utils/         # Helper functions and Firebase config
│   └── App.js         # Root component
├── .env               # Environment variables (ignored in Git)
└── package.json       # Project metadata and dependencies
```

## Author
**Sangeeta Kumari**