import { Box, Heading, Text } from "@chakra-ui/react";
import { SectionButton } from "../Button/SectionButton";

interface Props {
  link: { text: string; target: string };
}

export const Problems = ({ link }: Props) => {
  const navigateTo = (target: string) => {
    window.location.href = target;
  };

  return (
    <>
      <Box my="16" position="relative" display="flex">
        <Box ml="16" width="50%" overflow="visible">
          <Box bgImage="url(american_flag.jpeg)" width="140%" height="600px">
            &nbsp;
          </Box>
        </Box>
        <Box mt="16" mr="16" width="50%" zIndex="9">
          <Box mt="12" ml="12" p="20" bg="#fff" color="#161616">
            <Heading fontSize="5xl">We're solving big problems.</Heading>
            <Text fontSize="lg" mt="8" lineHeight="1.9">
              Our technologists have developed products to improve veterans'
              access to disability benefits, built sensor networks that saved
              lives in war-torn Syria, and launched secure and equitable
              services for U.S. Citizenship and Immigration Services. At Gray,
              we partner with government agencies to take on big problems and
              deliver digital services that are purposeful, trustworthy, and
              meet the needs of millions of Americans.
            </Text>

            <SectionButton onClick={() => navigateTo(link.target)}>
              <a title={link.text} href={link.target}>
                {link.text}
              </a>
            </SectionButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
