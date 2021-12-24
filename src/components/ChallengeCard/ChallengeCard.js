import { Button, WrapItem, Heading, Box, Tag } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const ChallengeCard = ({ id, title, tags }) => {
  return (
    <WrapItem
      backgroundColor="#FFFBDF"
      key={id}
      w="380px"
      h="180px"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box p={4}>
        <Box h="100px">
          <Heading as="h5" mb={2} noOfLines={1}>
            {title.length > 20 ? `${title.substring(0, 22)}...` : title}
          </Heading>
          {tags &&
            tags.map((tag) => (
              <Tag mr={4} key={tag} variant="solid" colorScheme="gray">
                {tag}
              </Tag>
            ))}
        </Box>

        <Box>
          <Link to={`/challenges/${id}`}>
            <Button
              size="sm"
              colorScheme="teal"
              mt={4}
              variant="outline"
              rightIcon={<InfoIcon />}
            >
              View Challenge
            </Button>
          </Link>
        </Box>
      </Box>
    </WrapItem>
  );
};
