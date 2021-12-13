import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/react";
import { getChallenge } from "../services/challenges";

export const Challenge = ({ match }) => {
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    getChallenge(match.params.id).then((data) => {
      setChallenge(data);
    });
  }, []);

  if (!challenge) return "";

  return (
    <Container maxW="container.xl">
      <Heading as="h4" py={8}>
        {challenge.title}
      </Heading>
      <p>{challenge.description}</p>
    </Container>
  );
};
