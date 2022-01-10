import React, { useState, useEffect } from "react";
import { Container, Wrap, Box } from "@chakra-ui/react";
import { BlogCard } from "../components/Cards/BlogCard";
import BlogDataService from "../services/blogs";
import { Oval } from "react-loading-icons";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    retrieveCodingChallenges();
  }, []);

  const retrieveCodingChallenges = () => {
    BlogDataService.getAll().then((response) => {
      setBlogs(response.data.blogs);
    });
  };

  if (!blogs) {
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
  }

  return (
    <Container maxW="container.xl" p={4}>
      <Wrap justify="center">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            avatar={blog.avatar}
            abstract={blog.abstract}
          />
        ))}
      </Wrap>
    </Container>
  );
};
