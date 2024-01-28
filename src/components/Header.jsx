// Header.js

import React from "react";
import { Box, Flex, Spacer, ChakraProvider, Container } from "@chakra-ui/react";
import Logo from "./Logo"; // Assuming you have a Logo component
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ChakraProvider>
      <Box color="white" bg="#155e5ce0">
        <Container maxW="1200px" textAlign="center">
          <Flex alignItems="center">
            <Box>
              <Link to="/">
                <Logo />
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Navbar />
            </Box>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Header;
