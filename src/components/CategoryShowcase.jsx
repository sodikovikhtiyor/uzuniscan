import React from "react";
import Category from "./Category";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import StoreIcon from "@mui/icons-material/Store";
import ParkIcon from "@mui/icons-material/Park";
import { Link } from "react-router-dom";
function CategoryShowcase() {
  return (
    <Container maxW="1200px" py="2rem">
      <Heading my="2rem">Category</Heading>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Link to="/hotel">
          <Category icon={<HotelIcon />} type="Hotel" />
        </Link>
        <Link to="/study">
          <Category icon={<LocalLibraryIcon />} type="Learning Center" />
        </Link>
        <Link to="/park">
          <Category icon={<ParkIcon />} type="Parks" />
        </Link>
        <Link to="/touragency">
          <Category icon={<CardTravelIcon />} type="Tour Agency" />
        </Link>
        <Link to="/restaurants">
          <Category icon={<RestaurantIcon />} type="Restaurants" />
        </Link>
        <Link to="/museums">
          <Category icon={<AccountBalanceIcon />} type="Museums" />
        </Link>
        <Link to="/schools">
          <Category icon={<SchoolIcon />} type="Schools" />
        </Link>
        <Link to="/markets">
          <Category icon={<StoreIcon />} type="Markets" />
        </Link>
      </Flex>
      <Text textAlign="center" color="#319795" cursor='pointer' fontSize='1.2rem' fontWeight='500'>
        More...
      </Text>
    </Container>
  );
}

export default CategoryShowcase;
