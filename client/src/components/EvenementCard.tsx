import { useState } from "react";
import "../CSS/EvenementCard.css";
interface EventProps {
  title: string;
  description: string;
  image: string;
}

function EventCard({ title, description, image }: EventProps) {
  const [going, setGoing] = useState(false);

  return (
    <figure className={`event-card ${going ? "going" : ""}`}>
      <img className="event-image" src={image} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="event-button"
          onClick={() => setGoing(!going)}
        >
          {going ? "✔ J'y vais !" : "Je participe"}
        </button>
      </figcaption>
    </figure>
  );
}

function EvenementCard() {
  return (
    <section>
      <h2>Nos événements</h2>
      <div className="events-container">
        <EventCard
          title="Disco Pogo à Mroc Part-Dieu"
          description="Une soirée grimpe et DJ set, ambiance assurée ! Viens tester tes skills sur des blocs en mode clubbing !"
          image="./images/cords_event1.jpg"
        />
        <EventCard
          title="Disco Pogo à Climb-Up Confluence"
          description="La même vibe, un autre spot ! Lumières tamisées, grimpe et fête au programme."
          image="./images/magnesie_event2.jpg"
        />
        <EventCard
          title="Challenge Bloc à Mroc Villeurbanne"
          description="Un contest ouvert à tous les niveaux, avec des cadeaux pour les meilleurs et un after chill entre grimpeurs."
          image="./images/challenge_bloc.jpg"
        />
      </div>
    </section>
  );
}

export default EvenementCard;
