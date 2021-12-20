import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Heading, Text } from '@chakra-ui/react';

export const Profile = () => {
  const { user } = useAuth0();

  return (
    <Container maxW="container.xl">
      <Heading as="h4" pt={8}>
        {user.name}
      </Heading>
      <Text>{user.email}</Text>
    </Container>
  );
};
