import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import ButtonPrimary from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Nav />
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
    </div>
  );
}

export default App;
