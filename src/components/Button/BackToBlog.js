import { Link } from "react-router-dom";
import { MdOutlineWest } from "react-icons/md";
import { Text, Icon, Stack } from "@chakra-ui/react";

export const BackToBlog = () => {
  return (
    <Link to="/blog">
      <Stack direction="row" align="center" my={4}>
        <Icon as={MdOutlineWest} w={8} h={8} color="green.500" />
        <Text fontSize="sm">Back to blog</Text>
      </Stack>
    </Link>
  );
};
