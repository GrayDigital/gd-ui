import * as React from "react";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

export const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />;
};
