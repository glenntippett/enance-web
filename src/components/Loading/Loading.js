import { Box } from "@chakra-ui/react";
import { Oval } from "react-loading-icons";

export const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Oval stroke="#000" />
    </Box>
  );
};
