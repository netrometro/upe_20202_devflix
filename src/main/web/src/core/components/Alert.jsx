import { AlertIcon, Alert as ChakraAlert, AlertProps } from "@chakra-ui/react";
import React from "react";

/**
 *
 * @param {AlertProps} props
 * @returns
 */
const Alert = ({ message, status, ...props }) => {
  return (
    <ChakraAlert status={status} {...props}>
      <AlertIcon />
      {message}
    </ChakraAlert>
  );
};

export default Alert;