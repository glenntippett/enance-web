import {
  Box,
  Image,
  Heading,
  Text,
  Badge,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getLatestUsers } from "./../../services/users";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLatestUsers().then((data) => {
      if (mounted) {
        const userInfo = data.map((person) => {
          return {
            id: person.id,
            firstName: person.first_name,
            lastName: person.last_name,
            country: person.country,
            state: person.state,
            avatar: person.avatar,
          };
        });
        setUsers(userInfo);
      }
    });
    return () => (mounted = false);
  }, []);

  if (!users) return "";

  return (
    <Wrap justify='center' spacing='24px'>
      {users.map((user) => (
        <Box
          key={user.id}
          maxW="sm"
          minW="sm"
          borderWidth="1px"
          borderRadius="lg"
        >
          <Image src={user.avatar} htmlWidth={384} loading="lazy" />
          <Box p="6">
            <Heading as="h6">
              {user.firstName} {user.lastName}
            </Heading>
            <Text>Front-end Developer</Text>
            <Badge px="2" colorScheme="teal">
              JavaScript
            </Badge>
          </Box>
        </Box>
      ))}
    </Wrap>
  );
};

export default UserCard;
