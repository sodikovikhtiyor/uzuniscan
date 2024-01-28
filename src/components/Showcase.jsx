// Showcase.js

import React, { useState, useEffect } from "react";
// import data from "../data/combined.json";
import Kard from "./Kard";
import { Box, Container, Heading, Input } from "@chakra-ui/react";
import CategoryShowcase from "./CategoryShowcase";
import Category from "./Category";
const Showcase = ({ data, type }) => {
  const [search, setSearch] = useState("");
  // Inside the Showcase component

  //   useEffect(() => {
  //     fetch("../data/hotels.json")
  //       .then((response) => {
  //         response.json();
  //         setData(response);
  //       })
  //       .then((json) => console.log(json));
  //     axios
  //       .get("../data/hotels.json")
  //       .then((res) => {
  //         console.log(res );
  //         setData(res);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <Container maxW="1200px" textAlign="center" py="3rem" mt='2rem'>
      <Heading mt="0" fontSize="20px" my="20px" color="black">
        Type A {type} Name
      </Heading>
      <Input
        type="text"
        placeholder="Search..."
        //   value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        mb="3rem"
        width="50%"
        border="2px solid grey"
      />

      {/* Render your filtered data or showcase content here */}

      {data
        .filter((item) => {
          return search.toLowerCase() === " "
            ? item
            : item?.name?.toLowerCase().includes(search);
        })
        .map((item, id) => {
          return (
            <Box mb="20px" borderRadius="20px" key={id}>
              <Kard
                name={item?.name}
                type={item?.type}
                email={item?.email || item?.mail}
                address={item?.address || item?.Legaladdress || item?.addr}
                tel={item?.Legaladdress || item?.tel.split(",")[0]}
                regnum={item?.regnum || item?.TIN || item?.licnum}
                // tel={item?.tel.split("")}
              />
            </Box>
          );
        })}
    </Container>
    // <Category />
  );
};

export default Showcase;
