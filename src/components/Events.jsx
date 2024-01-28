import {
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg.jpg";
import sale from "../assets/sale.jpg";
function Events() {
  return (
    <div>
      <Container maxW="1200px">
        <Flex justifyContent="space-evenly">
          <Card w="400px" backgroundImage={bg}>
            <CardBody>
              <Heading fontSize="2rem" color="white">
                Events
              </Heading>
            </CardBody>
          </Card>
          <Card w="400px" backgroundImage={sale}>
            <CardBody>
              <Heading fontSize="2rem" color="black">
                Sales
              </Heading>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default Events;
