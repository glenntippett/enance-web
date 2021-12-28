import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const BlogCard = () => {
  return (
    <Link to="*" style={{ textDecoration: "none" }}>
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"lg"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        style={{ transition: "transform 0.2s" }}
        _hover={{ transform: "scale(1.03)", cursor: "pointer" }}
      >
        <Stack direction="row" align="center">
          <Avatar
            size="lg"
            mr={2}
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <Stack direction="column">
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              isTruncated
            >
              Some cool blog title
            </Heading>
            <Text fontSize={"md"} color={"gray.500"} minH={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, veritatis.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};
