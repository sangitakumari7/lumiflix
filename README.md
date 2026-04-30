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

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your API keys (adjust the prefix to `VITE_` or `REACT_APP_` based on your bundler):
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Start the development server:**
   ```bash
   npm start
   # or 'npm run dev' if you are using Vite
   ```

## Author
**Sangeeta Kumari**