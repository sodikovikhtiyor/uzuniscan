import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Showcase />
      </ChakraProvider>
    </>
  );
}

export default App;
