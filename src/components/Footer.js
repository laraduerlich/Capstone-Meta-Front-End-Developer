import { Link } from "react-router-dom";
import citrus from "../images/logos/citrus.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={citrus} alt="Little Lemon logo" />
        </div>

        <div className="footer-column">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <li>(629)-243-6827</li>
            <li>
              <a
                href="mailto:info@littlelemon.com"
                target="_blank"
                rel="noreferrer"
              >
                info@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Join us!
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-note">Made with 🤍 from Lara</p>
    </footer>
  );
}
