import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import bgImg from "../assets/background.jpeg";
import bgImg2 from "../assets/world.png";
import Header from "./Header";
function MainShowcase() {
  return (
    <>
      <Box
        backgroundImage={bgImg}
        height="100vh"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          backgroundImage={bgImg2}
          height="100vh"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          {/* <Header /> */}
          <Box textAlign="center" pt="7em">
            <Heading
              color="white"
              fontSize="5rem"
              textShadow="1px 1px 20px black"
            >
              UzUniScan
            </Heading>
            <Text
              color="white"
              fontSize="1.5rem"
              fontWeight="bold"
              w="40%"
              mx="auto"
              my="1rem"
              textShadow=".5px .5px 15px black"
            >
              UzUniScan is an application designed to verify the reliability of
              organizations by checking their licenses and official activities
              by government laws
            </Text>
            <Button display="inline" bg="#319795" color="white">
              About Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainShowcase;
