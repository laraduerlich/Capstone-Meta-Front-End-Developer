import { Link } from "react-router-dom";
import logo from "../images/logos/LogoSmall.jpg";
import menuImage from "../images/logos/citrus.png";

export default function NavBar({ variant = "desktop" }) {
  const isMobile = variant === "mobile";

  return (
    <nav className={`navbar ${variant}`}>
      {!isMobile && (
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Little Lemon logo" className="nav-image" />
        </Link>
      )}

      <ul className={`navbar-menu ${variant}`}>
        {isMobile && (
          <li className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Little Lemon logo" className="nav-image" />
            </Link>
          </li>
        )}

        <li>
          <Link className="hover-effect" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover-effcet" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/reservation">
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
