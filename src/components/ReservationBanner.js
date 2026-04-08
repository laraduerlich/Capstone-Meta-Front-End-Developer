import { Link } from "react-router-dom";
import BannerImage from "../images/photos/seasonal-menu.jpg";

export default function ReservationBanner() {
  return (
    <section className="reservation-banner">
      <div className="reservation-banner-inner">
        {/* Textbereich links */}
        <div className="reservation-banner-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Wir sind ein familiengeführtes mediterranes Restaurant in der Maldove Street in Chicago, Illinois. 
            Wir legen Wert auf traditionelle Rezepte, die wir mit einem modernen Touch servieren.
          </p>

          <Link className="reservation-banner-button" to="/reservations">
            Book a Table
          </Link>
        </div>

        {/* Bildbereich rechts */}
        <div className="reservation-banner-image">
          <img
            src={BannerImage}
            alt="Mediterranean dishes at Little Lemon"
          />
        </div>
      </div>
    </section>
  );
}
