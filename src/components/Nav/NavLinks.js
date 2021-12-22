import {
  Flex,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavLinks = ({ textHoverStyle, display }) => {
  if (display === "none") {
    return (
      <Flex align="center" display={["none", "none", "flex", "flex"]}>
        <Heading size="lg" pr={8}>
          <Link to="/">Enance</Link>
        </Heading>

        <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
          <Link to="#">About</Link>
        </Text>

        <Link to="/challenges">
          <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
            Challenges
          </Text>
        </Link>

        <Link to="/blog">
          <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
            Blog
          </Text>
        </Link>
      </Flex>
    );
  }

  if (display === "flex") {
    return (
      <Box
        flexDir="column"
        bgColor="gray.50"
        zIndex={20}
        display={display}
        mt="100px"
        h="200px"
        w="250px"
        justify="center"
        borderRadius='lg'
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="lg" pr={8}>
          <Link to="/">Enance</Link>
        </Heading>

        <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
          <Link to="#">About</Link>
        </Text>

        <Link to="/challenges">
          <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
            Challenges
          </Text>
        </Link>

        <Link to="/blog">
          <Text mr={4} px={4} py={2} _hover={textHoverStyle}>
            Blog
          </Text>
        </Link>
      </Box>
    );
  }
};
