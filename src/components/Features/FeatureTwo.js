import {
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FcFolder, FcReading, FcApproval } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export function FeatureTwo() {
  return (
    <Container p={4} my={4} maxW="container.xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcFolder} w={10} h={10} />}
          title={"Real Challenges"}
          text={
            "Solve challenges based on real technical interviews, know what is expected for your next take home challenge"
          }
        />
        <Feature
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={"Learn from Others"}
          text={
            "Read other people's interview and job hunting stories, find out what is involved in the interview process"
          }
        />
        <Feature
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={"Portfolio Ideas"}
          text={
            "Improve your portfolio by reading our blog posts, get ideas to show off at your next interview"
          }
        />
      </SimpleGrid>
    </Container>
  );
}
