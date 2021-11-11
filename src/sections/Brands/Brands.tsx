import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import * as Logos from "./BrandLogos";

type BrandsProps = {
  LogoImage?: any;
  asLogoLink?: any;
  Link?: any;
};

export const Brands = ({ LogoImage, Link, asLogoLink }: BrandsProps) => {
  return (
    <Box bg="white" color="black" as="section" pt="16" pb="24">
      <Box
        maxW={{ base: "xl", md: "5xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box textAlign="center">
          <Heading size="xl" mb="4">
            Who we’ve worked with.
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 2, lg: 5 }}
          spacing={{ base: "6", md: "12", lg: "16" }}
          mt="12"
          alignItems="center"
          justifyItems="center"
          fontSize="2xl"
          opacity={0.95}
        >
          <Logos.Eop />
          <Logos.Dod />
          <Logos.Va />
          <Logos.Dhs />
          <Logos.Dia />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
