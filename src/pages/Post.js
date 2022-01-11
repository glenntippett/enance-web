import React, { useState, useEffect } from "react";
import { Container, Avatar, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import BlogDataService from "./../services/blogs";
import { LoadingSpinner } from "../components/Loading/Loading";
import { BackToBlog } from "../components/Button/BackToBlog";

export const Post = (props) => {
  const [blogDescription, setBlogDescription] = useState("");
  const [blog, setBlog] = useState({
    id: null,
    title: "",
    challenge_type: "",
    url: "",
  });

  const getBlog = (id) => {
    BlogDataService.get(id)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((e) => {
        console.error(`Error fetching blog ${e}`);
      });
  };

  const getMarkdown = (filename) => {
    import(`'./../../src/markdown/blogs/${filename}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setBlogDescription(res));
      })
      .catch((err) => console.error("Error fetching Markdown:", err));
  };

  useEffect(() => {
    getBlog(props.match.params.id);
    getMarkdown(blog.md_filename);
  }, [props.match.params.id, blog.md_filename]);

  if (!blog || !blogDescription) {
    return <LoadingSpinner />;
  }

  return (
    <Container maxW={{ sm: "90%", md: "75%", lg: "50%" }} mb={8}>
      <BackToBlog />
      <Text color="gray.600">Author: {blog.author}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        children={blogDescription}
        skipHtml
      />
      <Avatar size="xl" mr={2} src={blog.avatar} />
      <BackToBlog />
    </Container>
  );
};
