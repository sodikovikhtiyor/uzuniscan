// Navbar.js
import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { ChevronDownIcon} from '@chakra-ui/icons'
const Navbar = () => {
  return (
    <Flex gap="20px">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about">
        Categories <ChevronDownIcon/>
      </Link>

      <Link href="/contact">Contact</Link>
      {/* Add more navigation links as needed */}
    </Flex>
  );
};

export default Navbar;
