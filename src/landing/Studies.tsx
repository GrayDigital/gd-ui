import * as React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { SectionButton } from "../shared/Button/SectionButton";

type Props = {
  link?: { text: string; target: string };
};

export const Studies = ({ link }: Props) => {
  return (
    <>
      {/* TODO(low): Add color scheme for light mode */}
      <Box
        as="section"
        bg={useColorModeValue("gray.100", "white")}
        py="40"
        px={{ md: "8" }}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDir="column"
      >
        <Heading fontSize="5xl" lineHeight="1.4" color="#161616" maxWidth="6xl">
          Amazing clients have allowed us to produce work we are proud of.
        </Heading>

        {link && (
          <SectionButton>
            <a href={link.target}>{link.text}</a>
          </SectionButton>
        )}
      </Box>
    </>
  );
};
