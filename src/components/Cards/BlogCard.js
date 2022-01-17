import {
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const BlogCard = ({ title, avatar, abstract, id }) => {
  return (
    <Link to={`/blog/${id}`} style={{ textDecoration: "none" }}>
      <Stack
        justify="center"
        maxW={"445px"}
        minH={"165px"}
        w={"full"}
        boxShadow={"sm"}
        rounded={"md"}
        border="1px"
        borderColor="gray.200"
        p={6}
        overflow={"hidden"}
        style={{ transition: "transform 0.2s" }}
        _hover={{ cursor: "pointer", border: "1px solid black" }}
      >
        <Stack direction="row" align="center">
          <Avatar size="lg" mr={2} src={avatar} />
          <Stack direction="column">
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              noOfLines={2}
            >
              {title}
            </Heading>
            <Text fontSize={"md"} color={"gray.500"} minH={4} noOfLines={2}>
              {abstract}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};
