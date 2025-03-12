import { useEffect, useState } from "react";
import "../CSS/UserCard.css";

interface User {
  id: number;
  firstname: string;
  genre: string;
  age: number;
  niveau: string;
  salles: string;
  disponibilites: string;
  profileImage?: string;
  profilePicture?: string;
}

function UserCard({ user }: { user: User }) {
  const [followed, setFollowed] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setProfilePic(data.results[0].picture.medium);
      })
      .catch(() => {
        setProfilePic(`https://picsum.photos/seed/${user.id}/150`); // Fallback en cas d'erreur
      });
  }, []);
  return (
    <figure className="card" key={user.id}>
      <img
        className="profile-pic"
        src={profilePic}
        // biome-ignore lint/a11y/noRedundantAlt: <explanation>
        alt={`Photo de ${user.firstname}`}
      />
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
