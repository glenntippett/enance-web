import React, { useState, useEffect } from "react";
import { Heading, Container } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import CodingChallengeDataService from './../services/codingChallenges';

export const Challenge = ({ match }) => {
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    CodingChallengeDataService.get(match).then((data) => {
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
