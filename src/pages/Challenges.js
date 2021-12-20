import React, { useState, useEffect } from "react";
import {
  Heading,
  Wrap,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ChallengeCard } from "./../components/ChallengeCard/ChallengeCard";
import "react-tabs/style/react-tabs.css";

import CodingChallengeDataService from "./../services/codingChallenges";

export const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeTypes, setChallengeTypes] = useState([]);

  useEffect(() => {
    retrieveCodingChallenges();
  }, []);

  const retrieveCodingChallenges = () => {
    CodingChallengeDataService.getAll().then((response) => {
      console.log(response.data);
      setChallenges(response.data.coding_challenges);
      setChallengeTypes([
        ...new Set(response.data.coding_challenges.map((challenge) => challenge.challenge_type)),
      ]);
    });
  };

  if (!challenges || !challengeTypes) return "";

  return (
    <Container maxW="container.xl">
      <Heading as="h4" py={8}>
        Technical <br />
        Challenges
      </Heading>

      <Tabs variant="enclosed">
        <TabList>
          {challengeTypes.map((type) => (
            <Tab>{`${type.charAt(0).toUpperCase()}${type
              .toLowerCase()
              .slice(1)}`}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {challengeTypes.map((type) => (
            <TabPanel>
              <Wrap justify="center">
                {challenges
                  .filter(
                    (challenge) =>
                      challenge.challenge_type === `${type.toLowerCase()}`
                  )
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
        </TabPanels>
      </Tabs>
    </Container>
  );
};
