// Navbar.js

import React from 'react';
import { Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
};

export default Navbar;
