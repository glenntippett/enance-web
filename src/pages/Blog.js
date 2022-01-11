import React from "react";
import { Container, Wrap } from "@chakra-ui/react";
import { BlogCard } from "../components/Cards/BlogCard";
import { LoadingSpinner } from "../components/Loading/Loading";

export const Blog = ({ blogs }) => {
  if (!blogs) {
    return <LoadingSpinner />;
  }

  return (
    <Container maxW="container.xl" minH="70vh" p={4}>
      <Wrap justify="center" mt={4}>
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            avatar={blog.avatar}
            abstract={blog.abstract}
            id={blog._id}
          />
        ))}
      </Wrap>
    </Container>
  );
};
