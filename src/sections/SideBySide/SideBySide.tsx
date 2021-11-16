import * as React from "react";
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { SectionButton } from "../Button/SectionButton";

interface Props {
  link: { text: string; target: string };
  title: string;
  content: string;
  imageUrl: string;
  imageOn: "left" | "right";
}

export const SideBySide = ({
  link,
  title,
  content,
  imageUrl,
  imageOn,
}: Props) => {
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");

  const navigateTo = (target: string) => {
    window.location.href = target;
  };

  return (
    <>
      {!isSmallerThan1280 && (
        //   TODO: flexDirection based on imageOn prop
        <Box
          my="16"
          position="relative"
          display="flex"
          flexDirection={imageOn === "right" ? "row-reverse" : "row"}
        >
          <Box ml="16" width="50%" overflow="visible">
            <Box
              bgImage={`url(${imageUrl})`}
              position={imageOn === "right" ? "relative" : "unset"}
              left={imageOn === "right" ? "-50%" : ""}
              width="140%"
              height="600px"
            >
              &nbsp;
            </Box>
          </Box>
          <Box mt="16" mr="16" width="50%" zIndex="9">
            <Box mt="12" ml="12" p="20" bg="#fff" color="#161616">
              <Heading fontSize="5xl">{title}</Heading>
              <Text fontSize="lg" mt="8" lineHeight="1.9">
                {content}
              </Text>

              <SectionButton onClick={() => navigateTo(link.target)}>
                <a title={link.text} href={link.target}>
                  {link.text}
                </a>
              </SectionButton>
            </Box>
          </Box>
        </Box>
      )}

      {isSmallerThan1280 && (
        <Box display="flex" flexWrap="wrap">
          <Box width="100%">
            <Box
              bgImage="url(american_flag.jpeg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="400px"
            >
              &nbsp;
            </Box>
          </Box>
          <Box zIndex="9">
            <Box px="8" py="20" bg="#fff" color="#161616">
              <Heading fontSize="5xl">{title}</Heading>
              <Text fontSize="lg" mt="8" lineHeight="1.9">
                {content}
              </Text>

              <SectionButton onClick={() => navigateTo(link.target)}>
                <a title={link.text} href={link.target}>
                  {link.text}
                </a>
              </SectionButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
