import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import { getChallenges } from "./../services/challenges";

export const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  const ulStyles = {
    display: "flex",
    listStyleType: "none",
    marginTop: "48px",
  };

  const liStyles = {
    marginRight: "24px",
    fontSize: "24px",
  };

  const containerCard = {
    padding: "8px 36px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const card = {
    height: "156px",
    width: "359px",
    background: "#FFFBDF",
    borderRadius: "8px",
    border: "1px solid black",
    padding: "8px 16px",
    margin: "16px 24px",
  };

  const cardText = {
    marginTop: "16px",
  };

  useEffect(() => {
    let mounted = true;
    getChallenges().then((data) => {
      if (mounted) {
        const challengesInfo = data.map((challenge) => {
          return {
            id: challenge.id,
            title: challenge.title,
            description: challenge.description,
          };
        });
        setChallenges(...challenges, challengesInfo);
      }
    });
    return () => (mounted = false);
  }, []);

  if (!challenges) return "";

  return (
    <Container>
      <h2>
        Technical <br />
        Challenges
      </h2>

      <ul style={ulStyles}>
        <li style={liStyles}>Frontend</li>
        <li style={liStyles}>Backend</li>
        <li style={liStyles}>Fullstack</li>
        <li style={liStyles}>Algorithms</li>
      </ul>

      <hr />

      <section style={containerCard}>
        {challenges.map((challenge) => (
          <article style={card} key={challenge.id}>
									<h5>{challenge.title.length > 20 ? `${challenge.title.substring(0, 22)}...` : challenge.title}</h5>
									<p style={cardText}>{challenge.description.length > 100 ? `${challenge.description.substring(0, 100)}...` : challenge.description}</p>
          </article>
        ))}
      </section>
    </Container>
  );
};
