import React from "react";
import { Button, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import UserCard from "../components/UserCard/UserCard";

export const Homepage = () => {
  return (
    <>
      <Box backgroundColor="#FFFBDF">
        <Container maxW="container.xl" h="405px">
          <Flex align="start" direction="column" justify="center" h="100%">
            <Box maxW='50%'>
              <Heading as="h3" py={4}>
                Showcasing junior developers to recruiters
              </Heading>
              <Text pb={4}>
                Enance is a platform to showcase junior developers as well as be
                a community for developers to discuss and share ideas
              </Text>
            </Box>
            <Button colorScheme="pink" variant="solid">
              Get Started
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Heading as='h4' py={8}>Recent Signups</Heading>
        <UserCard />
      </Container>
    </>
  );
};
