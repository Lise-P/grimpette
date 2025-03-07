import type { Grimpeur } from "./Grimpeur";
import GrimpeurCard from "./GrimpeurCard";

interface GrimpeurListProps {
  grimpeurs: Grimpeur[];
}

function GrimpeurList({ grimpeurs }: GrimpeurListProps) {
  return (
    <div>
      {grimpeurs.map((grimpeur: Grimpeur) => (
        <GrimpeurCard key={grimpeur.id} grimpeur={grimpeur} />
      ))}
    </div>
  );
}

export default GrimpeurList;
