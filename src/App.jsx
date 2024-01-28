import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hotel from "./components/Categories/Hotel";
import TourAgency from "./components/Categories/TourAgency";
import Jewelery from "./components/Categories/Parks";
import Study from "./components/Categories/Study";
import Restaurants from "./components/Categories/Restaurants";
import School from "./components/Categories/School";
import Museums from "./components/Categories/Museums";
import Parks from "./components/Categories/Parks";

function App() {
  return (
    <>
    
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/touragency" element={<TourAgency />} />
          <Route path="/parks" element={<Parks />} />
          <Route path="/study" element={<Study />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/schools" element={<School />} />
          <Route path="/museums" element={<Museums />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
