import React from "react";
import {
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Wrap,
  Center,
  WrapItem,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import UserCard from "../components/UserCard/UserCard";

export const Homepage = () => {
  return (
    <>
      <Box backgroundColor="#FFFBDF" h="400px">
        <Stack direction={["column", "row"]}>
          <VStack>
            <Heading as="h3" py={4}>
              Showcasing Junior Developers to Recruiters
            </Heading>
            <Text pb={4}>
              Enance is a platform to showcase junior developers as well as be a
              community for developers to discuss and share ideas
            </Text>

            <Button colorScheme="pink" variant="solid">
              Get Started
            </Button>
          </VStack>

          <VStack h="100%" justify="center" align="center">
            <Image
              src={process.env.PUBLIC_URL + "avatar.png"}
              boxSize="300px"
            />
          </VStack>
        </Stack>
      </Box>

      <Container maxW="container.xl">
        <Heading as="h4" py={8}>
          Recent Signups
        </Heading>
        <UserCard />
      </Container>
    </>
  );
};
