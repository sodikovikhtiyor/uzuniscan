// Header.js

import React from 'react';
import { Box, Flex, Spacer, ChakraProvider } from '@chakra-ui/react';
import Logo from './Logo'; // Assuming you have a Logo component
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Header = () => {
  return (
    <ChakraProvider>
      <Flex p="4" bg="teal.500" color="white">
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box>
          <Navbar />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
