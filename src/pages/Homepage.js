import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Center,
  VStack,
  Stack,
  Container,
} from "@chakra-ui/react";
import { GetStartedButton } from "../services/Authentication";

export const Homepage = () => {
  return (
    <>
      <Box backgroundColor="#FFFBDF" h="400px" justifyContent="center">
        <Stack direction={["column", "row"]} h="100%" maxW="90%">
          <VStack h="100%" w="100%" justify="center" align="center">
            <Box maxW="70%">
              <Heading as="h3" py={4}>
                Showcasing Junior Developers to Recruiters
              </Heading>
              <Text pb={4}>
                Enance is a platform to showcase junior developers as well as be
                a community for developers to discuss and share ideas
              </Text>

              <GetStartedButton />
            </Box>
          </VStack>

          <VStack h="100%" w="100%" justify="center" align="center">
            <Center h="100%" w="100%">
              <Image
                src={process.env.PUBLIC_URL + "avatar.png"}
                boxSize="300px"
              />
            </Center>
          </VStack>
        </Stack>
      </Box>

      <Container maxW="container.xl">
        <Heading as="h4" py={8}>
          Recent Signups
        </Heading>
      </Container>
    </>
  );
};
