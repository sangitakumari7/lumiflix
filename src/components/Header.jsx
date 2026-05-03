import React, { useEffect } from 'react';
import logo from '../img/logo1.png';
import userIcon from '../img/logo2.png';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {toggleGptSearchView} from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;

        dispatch(addUser({
          uid,
          email,
          displayName,
          photoURL
        }));

        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptsearch = () => {
    dispatch(toggleGptSearchView())
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className="absolute top-0 left-0 w-full h-24 px-10 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/60 to-transparent z-50">

      {/* Logo */}
      <img 
        src={logo}
        alt="logo"
        className="w-36 md:w-44 object-contain cursor-pointer hover:scale-105 transition duration-300"
      />

      {/* ✅ RIGHT SECTION ONLY AFTER LOGIN */}
      {user && (
        <div className="flex items-center gap-6 text-white">

          <select className="px-3 py-2 m-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400" onChange={ handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}  
          </select>

          <button className="hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-purple-800 rounded-lg hover:bg-purple-700 hover:text-purple-200 transition-all duration-200 shadow-sm"
            onClick={handleGptsearch}
            >
            GPT Search
          </button>

          {/* Bell */}
          <svg 
            className="w-6 h-6 cursor-pointer hover:text-gray-300 transition"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C18.79 15.79 18 14.42 18 13V9a6 6 0 10-12 0v4c0 1.42-.79 2.79-1.595 3.595L3 17h5m4 0v1a2 2 0 11-4 0v-1m4 0H9"
            />
          </svg>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img 
                src={user?.photoURL || userIcon}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />

              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5H5z" />
              </svg>
            </div>

            <button 
              onClick={handleSignOut}
              className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-red-700 transition duration-300"
            >
              Sign Out
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

export default Header;