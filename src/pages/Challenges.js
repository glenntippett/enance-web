import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import { Wrap } from "@chakra-ui/react";
import { getChallenges } from "./../services/challenges";
import { ChallengeCard } from "./../components/ChallengeCard/ChallengeCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./../components/ChallengeCard/ChallengeCard.css";

export const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    let mounted = true;
    getChallenges().then((data) => {
      if (mounted) {
        const challengesInfo = data.map((challenge) => {
          return {
            id: challenge.id,
            title: challenge.title,
            description: challenge.description,
            challenge_type: challenge.challenge_type,
          };
        });
        setChallenges(challengesInfo);
      }
    });
    return () => (mounted = false);
  }, []);

  if (!challenges) return "";

  const challengeTypes = ["Frontend", "Backend", "Fullstack", "Algorithms"];

  return (
    <Container>
      <h2>
        Technical <br />
        Challenges
      </h2>

      <Tabs>
        <TabList>
          {challengeTypes.map((type) => (
            <Tab key={type}>{type}</Tab>
          ))}
        </TabList>

        {challengeTypes.map((type) => (
          <TabPanel key={type}>
						<Wrap justify='center'>
							{challenges
								.filter((challenge) => challenge.challenge_type === `${type.toLowerCase()}`)
								.map((challenge) => (
									<ChallengeCard
										id={challenge.id}
										title={challenge.title}
										description={challenge.description}
										challengeType={challenge.challenge_type}
									/>
								))}
						</Wrap>
					</TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};
