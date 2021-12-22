import React, { useState, useEffect } from "react";

import {
  Flex,
  Spacer,
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
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { LoginButton, LogoutButton } from "../../services/Authentication";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLinks } from "./NavLinks";

const Nav = () => {
  const [display, setDisplay] = useState("none");
  const { user, isAuthenticated } = useAuth0();
  const { onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const textHover = {
    background: "#F7F7F7",
    cursor: "pointer",
    borderRadius: "8px",
  };

  console.log(display)

  useEffect(() => {
    // ...
  }, [display]);

  return (
    <Flex
      align="center"
      h="64px"
      pl={16}
      pr={16}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <IconButton
        aria-label="Open Menu"
        size="md"
        mr={2}
        icon={display === 'none' ? <HamburgerIcon /> : <CloseIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={() => display === 'flex' ? setDisplay('none') : setDisplay('flex')}
      />

      <NavLinks textHoverStyle={textHover} display={display} />


      {/* <IconButton
        mt={2}
        mr={2}
        aria-label="Close Menu"
        size="lg"
        icon={<CloseIcon />}
        display={display}
        onClick={() => setDisplay('none')}
      /> */}

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
                  <LogoutButton hover={textHover} onClick={onClose} />
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
