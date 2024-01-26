// Header.js

import React from 'react';
import Logo from './Logo'; // Assuming you have a Logo component
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
