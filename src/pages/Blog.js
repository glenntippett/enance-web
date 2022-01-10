import React, { useState, useEffect } from "react";
import { Container, Wrap } from "@chakra-ui/react";
import { BlogCard } from "../components/Cards/BlogCard";
import BlogDataService from "../services/blogs";
import { LoadingSpinner } from "../components/Loading/Loading";
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

  if (blogs.length < 1) {
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
