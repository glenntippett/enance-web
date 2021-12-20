import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Icon, Link } from "@chakra-ui/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";

export const LoginButton = ({ hover }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      rightIcon={<Icon as={FiLogIn} />}
      mr={4}
      _hover={hover}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export const LogoutButton = ({ hover }) => {
  const { logout } = useAuth0();

  return (
    <Button
      rightIcon={<Icon as={FiLogOut} />}
      size="sm"
      mr={4}
      _hover={hover}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export const GetStartedButton = () => {
  return (
    <>
      <Button colorScheme="pink" variant="solid">
        Get Started
      </Button>
    </>
  );
};
