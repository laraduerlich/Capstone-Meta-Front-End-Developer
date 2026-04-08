import { useState } from "react";
import {useNavigate} from "react-router-dom";

const ReservationForm = () => {
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const [date, setDate] = useState(today);
  const [time, setTime] = useState("18:00");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Geburtstag");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]  = useState("");
  const [email, setEmail]        = useState("");
  const [phone, setPhone]        = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date,
      time,
      guests,
      occasion,
      firstName,
      lastName,
      email,
      phone,
    });
    navigate('/conformation')};

  return (
    <section className="menu-section">
      <h2 className="menu-title">Tisch reservieren</h2>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>
          Datum
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label>
          Uhrzeit
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
          </select>
        </label>

        <label>
          Gäste
          <input
            type="number"
            min={1}
            max={10}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </label>

        <label>
          Anlass
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option>Geburtstag</option>
            <option>Jahrestag</option>
            <option>Sonstiges</option>
          </select>
        </label>
        <label>
            Vorname
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>

          <label>
            Nachname
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>

          <label>
            E-Mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Tel.
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

        <button type="submit" className="reservation-submit">
          Reservieren
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
