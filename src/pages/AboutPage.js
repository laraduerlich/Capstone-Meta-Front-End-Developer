import AtmosphereImage from "../images/photos/rustic-atmosphere.jpg";
import BrothersImage from "../images/photos/family-owned.jpg";
import FoodImage from "../images/photos/pasta.jpg";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page-inner">
        <div className="about-page-text">
          <h1>Über Little Lemon</h1>
          <h2>Ein Stück Mittelmeer mitten in Chicago</h2>

          <p>
            Little Lemon in Chicago, Illinois, ist ein familiengeführtes
            mediterranes Restaurant, das traditionelle Rezepte mit einem
            modernen Twist serviert. Inspiriert von italienischer, griechischer
            und türkischer Küche bietet die Speisekarte 12–15 Gerichte, die
            sich saisonal verändern.
          </p>
          <p>
            Die Atmosphäre ist rustikal und entspannt – der perfekte Ort für
            ein gemütliches Frühstück, ein leichtes Mittagessen oder ein
            Abendessen mit Freunden. Moderate Preise machen Little Lemon zu
            einer beliebten Adresse für jede Tageszeit.
          </p>
          <p>
            Geführt wird Little Lemon von den beiden italienischen Brüdern Mario
            und Adrian. Mario bringt seine Erfahrung als Koch in Italien und
            Familienrezepte in die Küche ein, während Adrian das Marketing
            verantwortet und die Speisekarte über die klassische italienische
            Küche hinaus auf den gesamten Mittelmeerraum erweitert hat.
          </p>
        </div>

        <div className="about-page-images">
          <figure className="about-image about-image--atmosphere">
            <img
              src={AtmosphereImage}
              alt="Rustikale und entspannte Atmosphäre im Little Lemon"
            />
          </figure>

          <div className="about-image-row">
            <figure className="about-image about-image--brothers">
              <img
                src={BrothersImage}
                alt="Die Brüder Mario und Adrian im Little Lemon"
              />
            </figure>

            <figure className="about-image about-image--food">
              <img
                src={FoodImage}
                alt="Mediterrane Gerichte im Little Lemon"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
