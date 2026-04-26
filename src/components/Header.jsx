import React from 'react';
import logo from '../img/logo1.png';

function Header() {
  return (
    <div className="absolute top-0 left-0 w-full px-10 py-4 flex items-center bg-gradient-to-b from-black/80 to-transparent z-20">
      
      <img className="w-40 object-contain mix-blend-multiply" src={logo} alt="Logo"/>

    </div>
  );
}

export default Header;