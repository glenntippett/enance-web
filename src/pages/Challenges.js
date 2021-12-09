import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import { getChallenges } from "./../services/challenges";
import { ChallengeCard } from './../components/ChallengeCard/ChallengeCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  const ulStyles = {
    display: "flex",
    listStyleType: "none",
    marginTop: "48px",
  };

  const liStyles = {
    marginRight: "24px",
    fontSize: "24px",
  };

  const containerCard = {
    padding: "8px 36px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const card = {
    height: "156px",
    width: "359px",
    background: "#FFFBDF",
    borderRadius: "8px",
    border: "1px solid black",
    padding: "8px 16px",
    margin: "16px 24px",
  };

  const cardText = {
    marginTop: "16px",
  };

  useEffect(() => {
    let mounted = true;
    getChallenges().then((data) => {
      if (mounted) {
        const challengesInfo = data.map((challenge) => {
          return {
            id: challenge.id,
            title: challenge.title,
            description: challenge.description,
						challenge_type: challenge.challenge_type,
          };
        });
        setChallenges(...challenges, challengesInfo);
			}
    });
    return () => (mounted = false);
  }, []);

  if (!challenges) return "";

  return (
    <Container>
      <h2>
        Technical <br />
        Challenges
      </h2>

			<Tabs>
    		<TabList>
      		<Tab>Frontend</Tab>
      		<Tab>Backend</Tab>
      		<Tab>Fullstack</Tab>
      		<Tab>Algorithms</Tab>
    		</TabList>
				
				<TabPanel>
					<section style={containerCard}>
						{challenges.filter(challenge => challenge.challenge_type === 'frontend').map((challenge) => (
							<ChallengeCard
								id={challenge.id}
								title={challenge.title}
								description={challenge.description}
								challengeType={challenge.challenge_type}
								card={card}
								cardText={cardText}
							/>	
						))}
					</section>
   	 		</TabPanel>

				<TabPanel>
					<section style={containerCard}>
						{challenges.filter(challenge => challenge.challenge_type === 'backend').map((challenge) => (
							<ChallengeCard
								id={challenge.id}
								title={challenge.title}
								description={challenge.description}
								challengeType={challenge.challenge_type}
								card={card}
								cardText={cardText}
							/>	
						))}
					</section>
   	 		</TabPanel>
  		
				<TabPanel>
					<section style={containerCard}>
						{challenges.filter(challenge => challenge.challenge_type === 'fullstack').map((challenge) => (
							<ChallengeCard
								id={challenge.id}
								title={challenge.title}
								description={challenge.description}
								challengeType={challenge.challenge_type}
								card={card}
								cardText={cardText}
							/>	
						))}
					</section>
   	 		</TabPanel>

				<TabPanel>
					<section style={containerCard}>
						{challenges.filter(challenge => challenge.challenge_type === 'algorithms').map((challenge) => (
							<ChallengeCard
								id={challenge.id}
								title={challenge.title}
								description={challenge.description}
								challengeType={challenge.challenge_type}
								card={card}
								cardText={cardText}
							/>	
						))}
					</section>
   	 		</TabPanel>
			</Tabs>
    </Container>
  );
};
