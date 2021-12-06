import * as React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { SectionButton } from "../shared/Button/SectionButton";

interface Props {
  Link: any;
  Image: any;
  title: string;
  subtitle: string;
}
export const HomepageHero = ({ Image, title, subtitle, Link }: Props) => {
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
            {title}
          </Heading>
        </Box>

        <Box
          className="group"
          cursor="pointer"
          position="relative"
          rounded="lg"
          overflow="hidden"
        >
          <Image />
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
            {subtitle}
          </Heading>
        </Box>
        <Stack
          justify="left"
          direction={{ base: "column", md: "row" }}
          mt="10"
          mb="20"
          spacing="4"
        >
          <SectionButton colorScheme="light">
            <Link />
          </SectionButton>
        </Stack>
      </Box>
    </Box>
  );
};
