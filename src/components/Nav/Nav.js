import { Button, Flex, Spacer, Heading, Tag, useDisclosure, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ModalLogin } from './../Modal/Modal';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textHover = {
    background: "#F7F7F7",
    cursor: "pointer",
    borderRadius: '8px'
  };

  return (
    <Flex align="center" h="64px" pl={16} pr={16} borderBottom='1px' borderColor='gray.200'>
      <Flex align="center">
        <Heading size="lg" pr={8}>
          <Link to="/">Enance</Link>
        </Heading>

        <Text mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">Profiles</Link>
        </Text>

        <Text mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">About</Link>
        </Text>

        <Link to="/challenges">
          <Text mr={4} px={4} py={2} _hover={textHover}>
            Challenges
          </Text>
        </Link>
        <Text mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">Contact</Link>
        </Text>
      </Flex>

      <Spacer />

      <Flex align="center">
        <Tag mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">Login</Link>
        </Tag>

        <Button colorScheme="pink" variant="solid" onClick={onOpen}>
          <Link to="#">Get Started</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Nav;
