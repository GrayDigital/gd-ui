import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

export const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />;
};
