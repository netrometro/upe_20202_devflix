import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ThemeProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ThemeProvider;
