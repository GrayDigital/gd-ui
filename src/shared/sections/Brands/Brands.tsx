import * as React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

type BrandsProps = {
  Logos: any[];
  title: string;
};

export const Brands = ({ Logos, title }: BrandsProps) => {
  return (
    <Box bg="white" color="black" as="section" pt="16" pb="24">
      <Box
        maxW={{ base: "xl", md: "5xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box textAlign="center">
          <Heading size="xl" mb="4">
            {title}
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
          {Logos.map((Logo) => {
            return Logo;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
