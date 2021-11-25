import * as React from "react";
import { Button } from "@chakra-ui/button";

interface Props {
  colorScheme?: "light" | "dark";
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
}

// TODO: colorScheme logic looks disgusting. Refactor.
export const SectionButton = ({
  colorScheme = "dark",
  children,
  onClick,
}: Props) => {
  return (
    <Button
      borderRadius="full"
      fontSize="lg"
      px="8"
      py="8"
      mt="8"
      bg={colorScheme === "dark" ? "#161616" : "#fff"}
      color={colorScheme === "dark" ? "#fff" : "#161616"}
      _hover={{
        bg: colorScheme === "dark" ? "gray.600" : "gray.100",
      }}
      _active={{
        bg: colorScheme === "dark" ? "gray.600" : "gray.100",
      }}
      onClick={() => onClick && onClick()}
    >
      {children}
    </Button>
  );
};
