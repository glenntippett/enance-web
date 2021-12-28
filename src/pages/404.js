import { Flex, Heading, Image } from "@chakra-ui/react";

export const notFound = () => {
  return (
    <Flex minH="60vh" justify="center" align="center" direction='column'>
      <Heading as="h1" mb={4}>404 Not Found </Heading>
      <Image src={process.env.PUBLIC_URL + "404.gif"} minH='10rem' />
    </Flex>
  );
};
