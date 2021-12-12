import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import { getChallenge } from "../services/challenges";

export const Challenge = ({ match }) => {
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    getChallenge(match.params.id).then((data) => {
      setChallenge(data)
    });
  }, []);

  if (!challenge) return ''

  return (
    <Container>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
    </Container>
  );
};
