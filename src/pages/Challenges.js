import React from "react";
import Container from "../components/Container/Container";

export const Challenges = () => {
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const card = {
    height: "156px",
    width: "359px",
    background: "#FFFBDF",
    borderRadius: "8px",
    border: "1px solid black",
    padding: "8px 16px",
    margin: "16px 24px"
  };

  const cardText = {
    marginTop: "16px",
  };

  return (
    <Container>
      <h2>
        Technical <br />
        Challenges
      </h2>

      <ul style={ulStyles}>
        <li style={liStyles}>Frontend</li>
        <li style={liStyles}>Backend</li>
        <li style={liStyles}>Fullstack</li>
        <li style={liStyles}>Algorithms</li>
      </ul>

      <hr />

      <section style={containerCard}>
        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>

        <article style={card}>
          <h5>Lorem Ipsum Dolor</h5>
          <p style={cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            ratione!
          </p>
        </article>
      </section>
    </Container>
  );
};
