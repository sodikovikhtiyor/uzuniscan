import React from 'react'
import Showcase from "../Showcase";
import museums from "../../data/hotels.json";
import { Box, Container, Heading } from "@chakra-ui/react";

function Museums() {
  return (
    <Container maxW="1200px" textAlign="center" color="#319795">
      <Heading my="2rem">Hotels</Heading>
      <Showcase data={museums} />
    </Container>
  )
}

export default Museums