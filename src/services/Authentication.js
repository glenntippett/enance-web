import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from 'react-router-dom';
import { Button, Icon } from "@chakra-ui/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

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
