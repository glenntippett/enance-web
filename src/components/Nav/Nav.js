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
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
          <Link to="/sign_up">Get Started</Link>
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
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.password) {
                    errors.password = "Required";
                  } 
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
                  userLogin(values);
                }}
              >
                {(props) => (
                  <Form>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="hello@there.com"
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <InputGroup>
                            <Input
                              {...field}
                              id="password"
                              placeholder="Password"
                              type={show ? "text" : "password"}
                            />
                            <InputRightElement width="4.5rem">
                              <Button
                                h="1.75rem"
                                size="sm"
                                onClick={handleClick}
                              >
                                {show ? "Hide" : "Show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme="blue"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Login
                    </Button>
                    <Button onClick={onClose} mt={4} ml={4}>
                      Cancel
                    </Button>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Nav;
