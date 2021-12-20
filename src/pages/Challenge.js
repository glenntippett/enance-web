import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/react";
import { getChallenge } from "../services/challenges";
import Markdown from "markdown-to-jsx";

export const Challenge = ({ match }) => {
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    getChallenge().then((data) => {
      console.log(data)
      setChallenge(data);
    });
  }, []);

  if (!challenge) return "";


  return (
    <Container maxW="container.xl">
      <Markdown>{challenge}</Markdown>
    </Container>
  );
};
