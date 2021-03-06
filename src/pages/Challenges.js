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
  IconButton,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ChallengeCard } from "./../components/ChallengeCard/ChallengeCard";
import "react-tabs/style/react-tabs.css";
import { LoadingSpinner } from "../components/Loading/Loading";

export const Challenges = ({ allChallenges, challengeTypes }) => {
  const [challenges, setChallenges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      setChallenges(allChallenges);
    }
  }, [allChallenges, search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setChallenges(
      allChallenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleIconClick = () => {
    setSearch("");
    document.querySelector(".searchInput").value = "";
  };

  return (
    <Container maxW="container.xl">
      <Heading as="h4" py={8}>
        Technical <br />
        Challenges
      </Heading>

      <Text maxW={{ sm: "100%", md: "75%", lg: "50%" }}>
        Below you will find a list of coding challenges that resemble real life
        challenges you may find when applying for jobs.
        <br />
        These types of challenges may be a command line application, frontend
        application or both.
        <br />
        <br />
        There are also some challenges which are designed to imitate a "day in
        the life" of a Junior Developer. This may include finding bugs in a
        code, implementing a new feature or reading and displaying data from an
        API - all within an existing codebase.
      </Text>

      <Tabs variant="enclosed" mt="2rem">
        <TabList>
          {challengeTypes.map((type) => (
            <Tab>{`${type.charAt(0).toUpperCase()}${type
              .toLowerCase()
              .slice(1)}`}</Tab>
          ))}
        </TabList>

        <FormControl mt={4} maxW={{ sm: "100%%", md: "50%", lg: "25%" }}>
          <InputGroup>
            <Input
              id="challenge-name"
              placeholder="Search..."
              onChange={handleChange}
              className="searchInput"
            />
            <InputRightElement
              children={
                <IconButton
                  size="xs"
                  icon={<DeleteIcon />}
                  onClick={handleIconClick}
                />
              }
            />
          </InputGroup>
        </FormControl>

        {challenges.length < 1 && <LoadingSpinner />}

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
                      tags={challenge.tags}
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
