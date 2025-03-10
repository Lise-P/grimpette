import { useState } from "react";

interface User {
  id: number;
  firstname: string;
  genre: string;
  age: number;
  niveau: string;
  salles: string;
  disponibilites: string;
}

function UserCard({ user }: { user: User }) {
  const [followed, setFollowed] = useState(false);

  return (
    <figure className="card" key={user.id}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className="bouttonSuivi" onClick={() => setFollowed(!followed)}>
        {followed ? "Suivi ✓" : "Suivre +"}
      </button>

      <h3>{user.firstname}</h3>
      <ul>
        <li>Genre: {user.genre}</li>
        <li>Âge: {user.age}</li>
        <li>Niveau: {user.niveau}</li>
        <li>Salles fréquentées: {user.salles}</li>
        <li>Disponibilités: {user.disponibilites}</li>
      </ul>
    </figure>
  );
}

export default UserCard;
