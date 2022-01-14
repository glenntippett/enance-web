import { ContactForm } from "./../components/Contact/ContactForm";
import { Container, Box, Stack } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Stack maxW={"5xl"} py={12} minH="75vh" justify="center" align="center" p={4}>
      <Container maxW={"5xl"} py={12}>
        <Box borderColor="gray.200" justify="center" height="100%">
          <ContactForm />
        </Box>
      </Container>
    </Stack>
  );
};
