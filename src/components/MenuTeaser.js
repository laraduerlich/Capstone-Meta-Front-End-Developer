import { Link } from "react-router-dom";
import MenuPhoto1 from "../images/photos/bruschetta.jpg";
import MenuPhoto2 from "../images/photos/pasta.jpg";

export default function MenuTeaser() {
  return (
    <section className="menu-teaser">
      <div className="menu-teaser-inner">
        {/* Text + Button */}
        <div className="menu-teaser-text">
          <h2>Entdecke unser Menü</h2>
          <p>
            Unsere Speisekarte umfasst 12–15 mediterrane Gerichte, die sich
            saisonal verändern. Von leichten Vorspeisen bis zu herzhaften
            Klassikern – alles inspiriert von italienischer, griechischer und
            türkischer Küche.
          </p>
          <p>
            Schau dir unsere aktuelle Auswahl an und finde dein neues
            Lieblingsgericht im Little Lemon.
          </p>

          <Link className="menu-teaser-button" to="/menu">
            View Menu
          </Link>
        </div>

        {/* 2 Fotos */}
        <div className="menu-teaser-photos">
            <figure className="menu-teaser-photo photo-main">
                <img src={MenuPhoto1} alt="Bruschetta" />
            </figure>
            <figure className="menu-teaser-photo photo-third">
                <img src={MenuPhoto2} alt="Pasta" />
            </figure>
        </div>
      </div>
    </section>
  );
}
