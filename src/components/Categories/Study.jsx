import { Container, Heading } from "@chakra-ui/react";
import Showcase from "../Showcase";
import study from "../../data/learningcenter.json";
function Study() {
  return (
    <Container maxW="1200px" textAlign="center" color="#319795">
      <Heading my="2rem">Learning Centers</Heading>
      <Showcase data={study} type='Learning Centers' />
    </Container>
  );
}

export default Study;
