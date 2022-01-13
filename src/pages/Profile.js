import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Heading, Text, Avatar } from "@chakra-ui/react";

export const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Container maxW="container.xl" mt="2rem">
      <Avatar name={name} src={picture} size="xl" />
      <Heading as="h4" pt={8}>
        {name}
      </Heading>
      <Text>{email}</Text>
    </Container>
  );
};
