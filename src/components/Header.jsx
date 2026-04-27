import React from 'react';
import logo from '../img/logo1.png';
import userIcon from '../img/logo2.png';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <div className="absolute top-0 left-0 w-full h-24 px-10 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/60 to-transparent z-50">
      
      {/* LEFT - Logo */}
      <img 
        src={logo}
        alt="Logo"
        className="w-36 md:w-44 object-contain cursor-pointer hover:scale-105 transition duration-300"
      />

      {/* RIGHT */}
      <div className="flex items-center gap-6 text-white">

        <span className="hidden md:block text-base cursor-pointer hover:text-gray-300">
          Children
        </span>

        {/* Bell */}
        <svg 
          className="w-6 h-6 cursor-pointer hover:text-gray-300 transition"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405C18.79 15.79 18 14.42 18 13V9a6 6 0 10-12 0v4c0 1.42-.79 2.79-1.595 3.595L3 17h5m4 0v1a2 2 0 11-4 0v-1m4 0H9"/>
        </svg>

        {/* Profile + Sign Out */}
        {user && (
          <div className="flex items-center gap-3">

            {/* ✅ Dynamic Profile Image */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <img 
                src={user?.photoURL || userIcon}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />

              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5H5z" />
              </svg>
            </div>

            {/* Sign Out */}
            <button 
              onClick={handleSignOut}
              className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-red-700 transition duration-300"
            >
              Sign Out
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Header;