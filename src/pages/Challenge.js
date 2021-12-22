import React, { useState, useEffect } from "react";
import { Heading, Container, Box } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import CodingChallengeDataService from './../services/codingChallenges';

import { Oval } from 'react-loading-icons'

export const Challenge = (props) => {
  const [challengeDescription, setChallengeDescription] = useState('')
  const [challenge, setChallenge] = useState({
    id: null,
    title: '',
    challenge_type: '',
    url: ''
  });

  const getChallenge = (id) => {
    CodingChallengeDataService.get(id)
      .then(response => {
        setChallenge(response.data)
      })
      .catch (e => {
        console.error(`Error fetching challenge ${e}`);
      });
  };

  const getMarkdown = (url) => {
    CodingChallengeDataService.markdown(url)
      .then(response => {
        setChallengeDescription(response.data)
      })
  };

  useEffect(() => {
    getChallenge(props.match.params.id);
    getMarkdown(challenge.url);
  }, [props.match.params.id, challenge.url]);

  if (!challenge || !challengeDescription) {
    return (
      <Box display="flex" minH="100vh" alignItems="center" justifyContent="center">
        <Oval stroke="#000" />
      </Box>
    )
  } 

  return (
    <Container maxW={{ sm: '90%', md: '75%', lg: '50%' }}>
      <Heading as="h4"  py={8}>{challenge.title}</Heading>
      <Markdown>{challengeDescription}</Markdown>
    </Container>
  );
};
