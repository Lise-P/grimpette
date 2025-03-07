export interface Grimpeur {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  climbingLevel: string;
  frequentedGyms: string[];
  availability: string[];
  profilePicture: string;
}

export const climbers: Grimpeur[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Martin",
    gender: "Femme",
    age: 29,
    climbingLevel: "6a",
    frequentedGyms: ["Mroc Part-Dieu", "Climb Up Confluence"],
    availability: ["17h-19h", "weekend"],
    profilePicture: "https://picsum.photos/seed/alice/100",
  },
  {
    id: 2,
    firstName: "Paul",
    lastName: "Dupont",
    gender: "Homme",
    age: 35,
    climbingLevel: "6b",
    frequentedGyms: ["Mroc Laënnec", "Climb Up Gerland"],
    availability: ["en journée", "20h et +"],
    profilePicture: "https://picsum.photos/seed/paul/100",
  },
  {
    id: 3,
    firstName: "Marie",
    lastName: "Bernard",
    gender: "Femme",
    age: 24,
    climbingLevel: "5c",
    frequentedGyms: ["Mroc Villeurbanne", "Mroc Part-Dieu"],
    availability: ["18h-20h", "weekend"],
    profilePicture: "https://picsum.photos/seed/marie/100",
  },
  {
    id: 4,
    firstName: "Lucas",
    lastName: "Moreau",
    gender: "Homme",
    age: 30,
    climbingLevel: "6c",
    frequentedGyms: ["Climb Up Confluence", "Climb Up Gerland"],
    availability: ["20h et +", "weekend"],
    profilePicture: "https://picsum.photos/seed/lucas/100",
  },
  {
    id: 5,
    firstName: "Camille",
    lastName: "Roux",
    gender: "Femme",
    age: 27,
    climbingLevel: "5b",
    frequentedGyms: ["Mroc Laënnec"],
    availability: ["17h-19h", "en journée"],
    profilePicture: "https://picsum.photos/seed/camille/100",
  },
  {
    id: 6,
    firstName: "Hugo",
    lastName: "Leroy",
    gender: "Homme",
    age: 23,
    climbingLevel: "6a+",
    frequentedGyms: ["Mroc Part-Dieu", "Climb Up Gerland"],
    availability: ["20h et +", "weekend"],
    profilePicture: "https://picsum.photos/seed/hugo/100",
  },
  {
    id: 7,
    firstName: "Claire",
    lastName: "Gauthier",
    gender: "Femme",
    age: 26,
    climbingLevel: "5c+",
    frequentedGyms: ["Mroc Villeurbanne", "Climb Up Confluence"],
    availability: ["18h-20h"],
    profilePicture: "https://picsum.photos/seed/claire/100",
  },
  {
    id: 8,
    firstName: "Maxime",
    lastName: "Fabre",
    gender: "Homme",
    age: 28,
    climbingLevel: "7a",
    frequentedGyms: ["Climb Up Gerland"],
    availability: ["17h-19h", "weekend"],
    profilePicture: "https://picsum.photos/seed/maxime/100",
  },
  {
    id: 9,
    firstName: "Laura",
    lastName: "Perrin",
    gender: "Femme",
    age: 31,
    climbingLevel: "5a",
    frequentedGyms: ["Mroc Laënnec", "Climb Up Confluence"],
    availability: ["en journée", "18h-20h"],
    profilePicture: "https://picsum.photos/seed/laura/100",
  },
  {
    id: 10,
    firstName: "Antoine",
    lastName: "Girard",
    gender: "Homme",
    age: 33,
    climbingLevel: "6b+",
    frequentedGyms: ["Mroc Part-Dieu", "Mroc Villeurbanne"],
    availability: ["20h et +", "weekend"],
    profilePicture: "https://picsum.photos/seed/antoine/100",
  },
];

export default Grimpeur;
