import React from "react";

import {
  Flex,
  Spacer,
  Heading,
  Text,
  Avatar,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginButton, LogoutButton } from "../../services/Authentication";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { user, isAuthenticated } = useAuth0();
  const { onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const textHover = {
    background: "#F7F7F7",
    cursor: "pointer",
    borderRadius: "8px",
  };

  return (
    <Flex
      align="center"
      h="64px"
      pl={16}
      pr={16}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex align="center">
        <Heading size="lg" pr={8}>
          <Link to="/">Enance</Link>
        </Heading>

        <Text mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">About</Link>
        </Text>

        <Link to="/challenges">
          <Text mr={4} px={4} py={2} _hover={textHover}>
            Challenges
          </Text>
        </Link>

        <Link to="/blog">
          <Text mr={4} px={4} py={2} _hover={textHover}>
            Blog
          </Text>
        </Link>

        <Text mr={4} px={4} py={2} _hover={textHover}>
          <Link to="#">Contact</Link>
        </Text>
      </Flex>

      <Spacer />

      <Flex align="center">
        {!isAuthenticated && <LoginButton hover={textHover} />}
        {isAuthenticated && (
          <>
            <Popover>
              <PopoverTrigger>
                <Flex align="center" mr={4} ref={btnRef} onClick={onOpen}>
                  <Text mr={2}>{user.name}</Text>
                  <Avatar src={user.picture} size="sm" name={user.name} />
                </Flex>
              </PopoverTrigger>

              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Link to="/profile">Profile</Link>
                  <Text>Something</Text>
                </PopoverBody>
                <PopoverFooter>
                  <LogoutButton
                    hover={textHover}
                    onClick={onClose}
                  />
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
