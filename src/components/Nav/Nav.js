import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FcHome } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import { LoginButton, LogoutButton } from "../../services/Authentication";
import { useAuth0 } from "@auth0/auth0-react";
import "./Nav.css";
const Links = ["About", "Challenges", "Blog", "Contact"];

const NavigationLinks = ({ children }) => {
  return (
    <NavLink
      px={2}
      py={1}
      rounded={"md"}
      activeClassName="selected"
      className="nav-link"
      to={`/${children}`}
    >
      {children}
    </NavLink>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Box px={4} borderBottom="1px" borderColor="gray.200">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Heading size="lg" pr={8}>
              <Link to="/">Enance</Link>
            </Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavigationLinks key={link}>{link}</NavigationLinks>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && (
              <Menu>
                <Text mr={2}>{user.name}</Text>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar src={user.picture} size="sm" name={user.name} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <LogoutButton />
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        <Drawer
          placement={"bottom"}
          onClose={onClose}
          isOpen={isOpen}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <HStack justify="space-between">
                <Link to="/">
                  {" "}
                  <Icon
                    as={FcHome}
                    w={6}
                    h={6}
                    ml={2}
                  />
                </Link>
                <Button colorScheme={"red"} onClick={onClose} size="sm">
                  <CloseIcon />
                </Button>
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavigationLinks key={link} onClick={onClose}>
                    {link}
                  </NavigationLinks>
                ))}
              </Stack>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
