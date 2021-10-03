import "./nav.css";
import ButtonPrimary from "./Button";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <h5>Enance</h5>
        <li>Profiles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>
          <ButtonPrimary buttonText="Get Started" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
