import { useState } from "react";
import type { Grimpeur } from "./Grimpeur";

interface GrimpeurCardProps {
  grimpeur: Grimpeur;
}

function GrimpeurCard({ grimpeur }: GrimpeurCardProps) {
  const [followed, setFollowed] = useState(false);

  return (
    <>
      <figure className="card">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="bouttonSuivi" onClick={() => setFollowed(!followed)}>
          {followed ? "Suivi ✓ " : "Suivre +"}
        </button>
        <img src={grimpeur.profilePicture} alt="image_grimpeur" />
        <h3>{grimpeur.firstName}</h3>
        <ul>
          <li>Genre: {grimpeur.gender}</li>
          <li>Age :{grimpeur.age}</li>
          <li>Niveau: {grimpeur.climbingLevel}</li>
          <li>
            {" "}
            Salle(s) fréquentée(s) : {grimpeur.frequentedGyms.join(", ")}
          </li>
          <li>Disponibilité(s) : {grimpeur.availability.join(", ")}</li>
        </ul>
      </figure>
    </>
  );
}

export default GrimpeurCard;
