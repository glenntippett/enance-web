import { Button, Flex, Spacer, Heading, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const tagHover = {
    background: "#F7F7F7",
    color: "teal.500",
    cursor: "pointer",
  };

  return (
    <Flex align="center" h="64px" pl={16} pr={16} borderBottom='1px' borderColor='gray.200'>
      <Flex align="center">
        <Heading size="md" pr={8}>
          <Link to="/">Enance</Link>
        </Heading>

        <Tag mr={4} px={4} py={2} _hover={tagHover}>
          <Link to="#">Profiles</Link>
        </Tag>

        <Tag mr={4} px={4} py={2} _hover={tagHover}>
          <Link to="#">About</Link>
        </Tag>

        <Link to="/challenges">
          <Tag mr={4} px={4} py={2} _hover={tagHover}>
            Challenges
          </Tag>
        </Link>
        <Tag mr={4} px={4} py={2} _hover={tagHover}>
          <Link to="#">Contact</Link>
        </Tag>
      </Flex>

      <Spacer />

      <Flex align="center">
        <Tag mr={4} px={4} py={2} _hover={tagHover}>
          <Link to="#">Login</Link>
        </Tag>

        <Button colorScheme="pink" variant="solid">
          <Link to="#">Get Started</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Nav;
