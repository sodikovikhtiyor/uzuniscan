// Showcase.js

import React, { useState, useEffect } from "react";
import data from "../data/combined.json";
import Kard from "./Card";
import { Box, Input } from "@chakra-ui/react";
const Showcase = () => {
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
      <Box textAlign="center" padding="20px">
        <h1>Showcase with Search Bar</h1>
        <Input
          type="text"
          placeholder="Search..."
          //   value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          mb="4"
        />

        {/* Render your filtered data or showcase content here */}
        {data
          .slice(0, 10)
          .filter((item) => {
            return search.toLowerCase() === " "
              ? item
              : item?.name?.toLowerCase().includes(search);
          })
          .map((item, id) => {
            return (
              <div key={id}>
                <Kard
                  name={item.name}
                  type={item.type}
                  address={item.address}
                  tel={item.tel}
                />
              </div>
            );
          })}
      </Box>
  );
};

export default Showcase;
