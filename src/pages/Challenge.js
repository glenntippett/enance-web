import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import CodingChallengeDataService from "./../services/codingChallenges";
import { LoadingSpinner } from "../components/Loading/Loading";

export const Challenge = (props) => {
  const [challengeDescription, setChallengeDescription] = useState("");
  const [challenge, setChallenge] = useState({
    id: null,
    title: "",
    challenge_type: "",
    url: "",
  });

  const getChallenge = (id) => {
    CodingChallengeDataService.get(id)
      .then((response) => {
        setChallenge(response.data);
      })
      .catch((e) => {
        console.error(`Error fetching challenge ${e}`);
      });
  };

  const getMarkdown = (filename) => {
    import(`'./../../src/markdown/challenges/${filename}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setChallengeDescription(res));
      })
      .catch((err) => console.error("Error fetching Markdown:", err));
  };

  useEffect(() => {
    getChallenge(props.match.params.id);
    getMarkdown(challenge.md_filename);
  }, [props.match.params.id, challenge.md_filename]);

  if (!challenge || !challengeDescription) {
    return <LoadingSpinner />;
  }

  return (
    <Container maxW={{ sm: "90%", md: "75%", lg: "50%" }} mb={8}>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        children={challengeDescription}
        skipHtml
      />
    </Container>
  );
};
