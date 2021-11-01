import "./nav.css";
import ButtonPrimary from "./../Button/Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">
          <h5>Enance</h5>
        </Link>
        <Link>
          <li>Profiles</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <Link to="/challenges">
          <li>Challenges</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
      </ul>
      <ul className="container-login-signup-links">
        <Link>
          <li>Login</li>
        </Link>
        <Link>
          <li>
            <ButtonPrimary buttonText="Get Started" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
