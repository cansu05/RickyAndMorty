export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "Unknown" | "All";
  species:
    | "Human"
    | "alien"
    | "Mythological Creature"
    | "Robot"
    | "Animal"
    | "Cronenberg"
    | "Unknown"
    | "All";
  type: string;
  gender: "Male" | "Female" | "Genderless" | "Unknown" | "All";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};
