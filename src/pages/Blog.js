import React from "react";
import { Container, Wrap } from "@chakra-ui/react";
import { BlogCard } from "../components/Cards/BlogCard";

export const Blog = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Wrap justify="center">
        <BlogCard />
        <BlogCard />
      </Wrap>
    </Container>
  );
};
