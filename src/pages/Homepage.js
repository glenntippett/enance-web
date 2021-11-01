import React from "react";
import ButtonPrimary from "../components/Button/Button";
import Container from "../components/Container/Container";
import Banner from "../components/Banner/Banner";
import UserCard from "../components/UserCard/UserCard";

export const Homepage = () => {
  return (
    <>
      <Banner>
        <Container>
          <h3>Showcasing junior developers to recruiters</h3>
          <p>
            Enance is a platform to showcase junior developers as well as be a
            community for developers to discuss and share ideas
          </p>
          <ButtonPrimary buttonText="Get Started" />
        </Container>
      </Banner>
      <UserCard />
    </>
  );
};
