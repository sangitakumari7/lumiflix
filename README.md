# Lumniflix 🎬

Lumniflix is a React-based web application. It features user authentication, a centralized state management system, and responsive UI components.

## 📸 Screenshots

*(Add screenshots or a GIF of your application here to show off your UI!)*

##  Features (Work in Progress)

- **User Authentication:** Sign up and Log in functionality powered by Firebase Auth.
- **Form Validation:** Client-side validation for email, password, and user names.
- **Routing:** Seamless client-side navigation using React Router.
- **API Integration:** Dynamic data fetching for movies/shows (e.g., using TMDB API).
- **State Management:** Fast and scalable state management using Redux Toolkit.
- **Analytics Tracking:** Integrated Firebase Analytics.

## 🛠️ Tech Stack

- **Frontend:** React, HTML, CSS, React Router
- **State Management:** Redux Toolkit (`react-redux`, `@reduxjs/toolkit`)
- **Backend/BaaS:** Firebase (Authentication, Analytics)
- **APIs:** TMDB API (The Movie Database)

## ⚙️ Project Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd lumniflix
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

### Environment Variables

To run this project securely, create a `.env` file in the root directory and add your configuration keys. **Do not commit this file to GitHub.**

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
REACT_APP_FIREBASE_APP_ID=your_app_id_here
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```