import React from 'react';
import logo from '../img/logo1.png';

function Header() {
  return (
    <div className="absolute top-0 left-0 w-full px-10 pt-0 pb-4 flex items-center bg-gradient-to-b from-black/90 via-black/60 to-transparent z-50">
      <img className="w-32 md:w-36 object-contain cursor-pointer drop-shadow-[0_0_12px_rgba(229,9,20,0.8)] transition-all duration-300 hover:scale-105" src={logo} alt="Logo"/>
    </div>
  );
}

export default Header;