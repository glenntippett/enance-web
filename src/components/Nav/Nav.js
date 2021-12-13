import React from "react";
import {
  Button,
  Flex,
  Spacer,
  Heading,
  Tag,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { userLogin } from "../../services/Authentication";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

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
        <Tag mr={4} px={4} py={2} _hover={textHover} onClick={onOpen}>
          <Link to="#">Login</Link>
        </Tag>

        <Button colorScheme="pink" variant="solid">
          <Link to="#">Get Started</Link>
        </Button>

        {/* Login Modal */}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder="email@example.com" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Nav;
