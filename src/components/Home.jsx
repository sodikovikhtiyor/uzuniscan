import React from "react";
import Showcase from "./Showcase";
import MainShowcase from "./MainShowcase";
import CategoryShowcase from "./CategoryShowcase";
import combained from "../data/combined.json";
import Events from "./Events";
function Home() {
  return (
    <>
      <MainShowcase />
      <CategoryShowcase />
      <Events/>
      <Showcase data={combained} type='Company'/>
    </>
  );
}

export default Home;
