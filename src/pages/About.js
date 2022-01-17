import { Container, Heading, Text, Avatar, Flex } from "@chakra-ui/react";

export const About = () => {
  return (
    <Container maxW="container.md" pb={4}>
      <Heading as="h4">About</Heading>
      <br />
      <Heading as="h4" size="md" mb={2}>
        What is Enance?
      </Heading>
      <hr />
      <Text>
        Enance was born from the experience of looking for a first-time Junior
        Developer role. <br />
        There are a lot of jobs out there, and each has its way of hiring new
        people. Some require 2-4 interviews, some less, some more. Others ask
        you to complete a take-home coding challenge, while others do not.{" "}
        <br />
        It doesn't matter if your background is University, Bootcamp or
        self-taught, you're 18, 30 or 60, there is a job out there for you.
      </Text>
      <br />
      <Text>
        The coding challenge, for me, was one of the biggest mysteries. <br />
        What would it be? <br />
        How hard is it? <br />
        How long should I take? <br />
        The only way to prepare was to go through more interviews and attempt
        challenges. <br />
      </Text>
      <br />
      <Text>
        There are a couple of problems with this: sometimes you don't get the
        interview, and sometimes when you submit your challenge you get ghosted
        and don't receive any feedback. <br />
        <strong>This is the gap that Enance aims to bridge.</strong>
      </Text>
      <br />
      <Text>
        This site's goal is to provide as much information as possible to help
        you get your first job. <br />
        It aims to mentor you through the interview journey and set you up for
        success in your first developer role.
      </Text>

      <br />

      <Heading as="h4" size="md" mb={2}>
        A note on the challenges
      </Heading>
      <hr />
      <Text>
        When a company gives you a coding challenge they generally ask you to
        not make the challenge public. <br />
        In the interest of respecting this, the coding challenges here are
        slightly altered, however they still rely on the same concepts that are
        required to pass the challenge. For example: testing, API calls, DRY
        code, Object Oriented Programming etc.
      </Text>

      <br />

      <Heading as="h4" size="md" mb={2}>
        About me
      </Heading>
      <hr />
      <Flex align="center">
        <Text>
          👋 My name is Glenn, I'm a fullstack JavaScript developer at a tech
          startup and teacher of web development at a bootcamp in Melbourne,
          Australia. <br />
          If you have any questions please feel free to reach out {" "}
          <em style={{ textDecoration: "underline" }}>
            <a href="/contact">here.</a>
          </em>
        </Text>
        <Avatar
          m={4}
          name="Glenn Tippett"
          size="xl"
          border="1px solid #D53F8C"
          src="https://avatars.githubusercontent.com/u/48549970?v=4"
        />
      </Flex>
    </Container>
  );
};
