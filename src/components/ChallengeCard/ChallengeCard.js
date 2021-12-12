import { Button } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import "./ChallengeCard.css";

export const ChallengeCard = ({ id, title, description, challengeType }) => {
  return (
    <article className="card" key={id}>
      <h5>{title.length > 20 ? `${title.substring(0, 22)}...` : title}</h5>
      <p className="cardText">
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
      <Link to={`/challenges/${id}`}>
        <Button size="sm" colorScheme="teal" mt={2} variant="outline" rightIcon={<InfoIcon />}>
          View Challenge
        </Button>
      </Link>
    </article>
  );
};
