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
  FormControl,
  Input,
  Text,
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
      setChallenges(response.data.coding_challenges);
      setChallengeTypes([
        ...new Set(
          response.data.coding_challenges.map(
            (challenge) => challenge.challenge_type
          )
        ),
      ]);
    });
  };

  const handleChange = (e) => {
    const query = e.target.value;
    CodingChallengeDataService.find(query)
      .then((response) => {
        setChallenges(response.data.coding_challenges);
      })
      .catch((e) => {
        console.error(`Error filtering by ${query}: ${e}`);
      });
  };

  if (!challenges || !challengeTypes) return "";

  return (
    <Container maxW="container.xl">
      <Heading as="h4" py={8}>
        Technical <br />
        Challenges
      </Heading>

      <Text maxW={{ sm: '100%%', md: '75%', lg: '50%' }}>
        Below you will find a list of coding challenges that resemble real life
        challenges you may find when applying for jobs.
        <br />
        These types of challenges may be a command line, frontend application or both.
        <br />
        <br />
        There are also some challenges which are designed to imitate a "day in
        the life" of a Junior Developer. This may include finding bugs in a
        code, implementing a new feature or reading and displaying data from an
        API - all within an existing codebase.
      </Text>

      <Tabs variant="enclosed" mt='2rem'>
        <TabList>
          {challengeTypes.map((type) => (
            <Tab>{`${type.charAt(0).toUpperCase()}${type
              .toLowerCase()
              .slice(1)}`}</Tab>
          ))}
        </TabList>

        <FormControl maxW={{ sm: '100%%', md: '50%', lg: '25%' }}>
          <Input
            id="challenge-name"
            placeholder="Search..."
            mt={4}
            onChange={handleChange}
          />
        </FormControl>

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
                      id={challenge._id}
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
