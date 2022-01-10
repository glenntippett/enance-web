import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const notFound = () => {
  return (
    <Flex minH="60vh" justify="center" align="center" direction='column'>
      <Heading as="h1">Not Found</Heading>
      <Text mb={4}>Have you tried turning it off and back on again?</Text>
      <Image src={process.env.PUBLIC_URL + "404.gif"} minH='10rem' />
    </Flex>
  );
};
