import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  useColorModeValue as mode,
  LightMode,
} from "@chakra-ui/react";

type HeroProps = {
  Link?: any;
};

export const Hero = ({ Link }: HeroProps) => {
  return (
    <Box as="section" color="white" pt="5.5rem" pb="2">
      <Box mx="auto" px={{ base: "6", md: "8" }}>
        <Box textAlign="left" mb="5">
          <Heading
            as="h1"
            size="3xl"
            fontWeight=""
            mx="auto"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            Gray is a human-centered digital services company using design and
            technology to transform critical government services.
          </Heading>
        </Box>

        <Box
          className="group"
          cursor="pointer"
          position="relative"
          rounded="lg"
          overflow="hidden"
        >
          <Img alt="American Flag in Code" src="/american_flag_in_code.jpeg" />
        </Box>
        <Box textAlign="left" mt="5">
          <Heading
            as="h2"
            size="lg"
            fontWeight=""
            mx="auto"
            lineHeight="1.4"
            letterSpacing=""
          >
            We deploy highly-efficient, cross-functional digital service teams
            to empower government agencies and civil servants. These
            multi-disciplinary groups leverage agile software development,
            DevOps, and human-centered design to deliver mission-critical
            products with a purpose.
          </Heading>
        </Box>
        <Stack
          justify="left"
          direction={{ base: "column", md: "row" }}
          mt="10"
          mb="20"
          spacing="4"
        >
          <LightMode>
            <Button bg="white" color="black" size="lg" rounded="full">
              <Link />
            </Button>
          </LightMode>
        </Stack>
      </Box>
    </Box>
  );
};
