import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";

import { seo } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}avataaars.png`,
              width: "350px",
              height: "350px",
              alt: "avatar",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage
          src="/avataaars.png"
          width="200"
          height="200"
          alt="avatar"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Sehajpreet Kaur{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>
          <Text py="4">
            A{" "}
            <Text as="span" fontWeight="600">
            third-year engineering student at Indraprastha University (New
      Delhi), pursuing a bachelor’s degree in Computer Science
            </Text>{" "}
            and my interests
      include{" "}
            <Text as="span" fontWeight="600">
             problem solving, learning to code, and exploring different Tech Stacks <span role="img">❤️</span>
            </Text>{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
