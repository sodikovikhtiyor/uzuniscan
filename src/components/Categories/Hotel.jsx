import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Showcase from "../Showcase";
import hotels from "../../data/hotels.json";
function Hotel() {
  return (
    <Container maxW="1200px" textAlign="center">
      <Heading my="2rem" color="#319795">Hotels</Heading>
      <Showcase data={hotels} type='Hotel' />
    </Container>
  );
}

export default Hotel;
