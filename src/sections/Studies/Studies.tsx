import { Box, useColorModeValue, Button, Heading } from "@chakra-ui/react";

type Props = {
  Link?: any;
};

export const Studies = ({ Link }: Props) => {
  return (
    <>
      {/* TODO(low): Add color scheme for light mode */}
      <Box
        as="section"
        bg={useColorModeValue("gray.100", "white")}
        py="12"
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

        <Button
          borderRadius="full"
          fontSize="lg"
          px="8"
          py="8"
          mt="8"
          bg="#161616"
          _hover={{
            bg: "gray.600",
          }}
          _active={{
            bg: "gray.600",
          }}
        >
          Explore Case Study
        </Button>
      </Box>
    </>
  );
};
