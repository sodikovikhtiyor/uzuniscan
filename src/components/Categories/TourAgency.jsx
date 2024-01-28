
import { Container, Heading } from "@chakra-ui/react";
import Showcase from "../Showcase";
import tour from "../../data/touragency.json";
function TourAgency() {
  return (
    <Container maxW="1200px" textAlign="center" color="#319795">
      <Heading my="2rem">Tour Agency</Heading>
      <Showcase data={tour} type='Tour Agency'/>
    </Container>
  )
}

export default TourAgency