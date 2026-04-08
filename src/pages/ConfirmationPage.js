import HeroImage from "../images/photos/salat.jpg";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
  return (
    <header className="confirmation-page">
      <img
        className="confirmation-bg"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      />

      <div className="confirmation-overlay" />

      <section className="menu-section confirmation-card">
        <h1 className="menu-title confirmation-title">
          Reservierung bestätigt
        </h1>

        <p className="confirmation-text">
          Wir haben Ihre Reservierung erfolgreich erhalten.
        </p>
        <p className="confirmation-text">
          Eine Bestätigung wurde an Ihre E‑Mail-Adresse gesendet.
        </p>
        <p className="confirmation-text">
          Wir freuen uns darauf, Sie im Little Lemon begrüßen zu dürfen!
        </p>

        <div className="confirmation-actions">
          <Link className="confirmation-button" to="/menu">
            Menu ansehen
          </Link>
          <Link className="confirmation-button" to="/">
            Zur Startseite
          </Link>
        </div>
      </section>
    </header>
  );
}
