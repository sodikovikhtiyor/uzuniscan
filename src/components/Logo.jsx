// Logo.js

import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Logotip from '../assets/logo.png'
const Logo = () => {
  return (
    <Box w='100px' borderRadius='50px'>
      {/* Your logo content goes here */}

      <Image borderRadius='50px' src={Logotip} alt='Dan Abramov' />
    </Box>
  );
};

export default Logo;
