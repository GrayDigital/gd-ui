import * as React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { SectionButton } from "../Button/SectionButton";

type Props = {
  link?: { text: string; target: string };
};

export const Hero = ({ link }: Props) => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h="1000px"
      bgImage="url(/capitol.jpeg)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "full",
        bg: "blackAlpha.700",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color="white"
          h="full"
        >
          <Heading size="2xl" lineHeight="1.4">
            Delivering transformational services to government agencies.
          </Heading>

          {link && (
            <SectionButton colorScheme="light">
              <a href={link.target}>{link.text}</a>
            </SectionButton>
          )}
        </Center>
      </Box>
    </Box>
  );
};
