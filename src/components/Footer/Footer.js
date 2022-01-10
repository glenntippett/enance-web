import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Link to="/about">About</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Link to="/challenges">Challenges</Link>
          </Stack>
          {/* <Stack align={"flex-start"}>
            <Link to="/blog">Blog</Link>
          </Stack> */}
          <Stack align={"flex-start"}>
            <Link to="/contact">Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          Enance
          {/* <Logo /> */}
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} Enance
        </Text>
      </Box>
    </Box>
  );
}
