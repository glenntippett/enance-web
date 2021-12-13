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
import { getChallenges } from "./../services/challenges";
import { ChallengeCard } from "./../components/ChallengeCard/ChallengeCard";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeTypes, setChallengeTypes] = useState([]);

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
        setChallengeTypes([
          ...new Set(
            challengesInfo.map((challenge) => challenge.challenge_type)
          ),
        ]);
      }
    });
    return () => (mounted = false);
  }, []);

  if (!challenges) return "";

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
