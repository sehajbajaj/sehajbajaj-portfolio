import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaCode, FaBookReader, FaPaperclip } from "react-icons/fa";

import { MAX_WIDTH } from "config";

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: FaGithub, path: "https://github.com/sehajbajaj", title: "Github" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/sehajbajaj/", title: "Linkedin" },
  // { icon: FaBookReader, path: "https://sehajbajaj.hashnode.dev/", title: "Blogs" },
  { icon: FaPaperclip, path: "/MainResume.pdf", title: "Resume" },
];

const Footer = () => {
  return (
    <>
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="2">
        <Text>
        © 2022 by Sehajpreet Kaur. All rights reserved.
          <br/>
          Template by <ChakraLink
            href="https://github.com/imadatyatalah/nextjs-chakra-ui-portfolio-template"
            aria-label="source code"
            isExternal
          >Imad Atyat-Allah</ChakraLink>
            </Text>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Footer;
