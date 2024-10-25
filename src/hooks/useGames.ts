import { useEffect, useState } from "react";
import { Game } from "../types/Game";
import sg from "../assets/sugar_rush.png";
import sc from "../assets/shaolin_crew.png";
import bbw from "../assets/big_bad_wolf.png";
import be from "../assets/book_of_egypt.png";
import pp from "../assets/pirates_power.png";
import cb from "../assets/crocodile_blitz.png";
import aw from "../assets/anacconda_wild_2.png";
import mj from "../assets/maya_jackpot.png";
import bl from "../assets/beach_life.png";
import ij from "../assets/inca_jackpot.png";
import pop from "../assets/pride_of_persia.png";
import az from "../assets/azteca.png";

const games: Game[] = [
  {
    id: "1",
    name: "Sugar Rush",
    img: sg,
    category: "SLOTS",
    provider: "Pragmatic Play",
    description: "A sweet adventure with thrilling gameplay.",
    releaseDate: "2021-01-15",
    rating: 4.5,
    providerId: "1",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Shaolin Crew",
    img: sc,
    category: "SLOTS",
    provider: "Evolution",
    description: "Join the Shaolin warriors for epic wins.",
    releaseDate: "2022-03-10",
    rating: 4.7,
    providerId: "2",
    isFavorite: false,
  },
  {
    id: "3",
    name: "Big Bad Wolf",
    img: bbw,
    category: "NEW",
    provider: "Provider A",
    description: "Experience the big bad wolf's adventures.",
    releaseDate: "2023-06-05",
    rating: 4.8,
    providerId: "3",
    isFavorite: false,
  },
  {
    id: "4",
    name: "Book of Egypt",
    img: be,
    category: "SLOTS",
    provider: "Provider B",
    description: "Uncover the treasures of ancient Egypt.",
    releaseDate: "2020-11-12",
    rating: 4.6,
    providerId: "4",
    isFavorite: false,
  },
  {
    id: "5",
    name: "Pirates Power",
    img: pp,
    category: "SLOTS",
    provider: "Provider B",
    description: "Set sail for treasure with the pirates!",
    releaseDate: "2022-07-20",
    rating: 4.3,
    providerId: "1",
    isFavorite: false,
  },
  {
    id: "6",
    name: "Crocodile Blitz Xtreme FB",
    img: cb,
    category: "NEW",
    provider: "Provider A",
    description: "Join the crocs in a fast-paced adventure.",
    releaseDate: "2023-04-15",
    rating: 4.4,
    providerId: "1",
    isFavorite: false,
  },
  {
    id: "7",
    name: "Anaconda Wild 2",
    img: aw,
    category: "SLOTS",
    provider: "Provider B",
    description: "Survive the wild with Anaconda!",
    releaseDate: "2021-09-30",
    rating: 4.5,
    providerId: "5",
    isFavorite: false,
  },
  {
    id: "8",
    name: "Maya Jackpot",
    img: mj,
    category: "SLOTS",
    provider: "Provider B",
    description: "Seek fortune in the ancient Maya ruins.",
    releaseDate: "2022-05-25",
    rating: 4.6,
    providerId: "6",
    isFavorite: false,
  },
  {
    id: "9",
    name: "Beach Life",
    img: bl,
    category: "NEW",
    provider: "Provider A",
    description: "Enjoy the sun and big wins at the beach.",
    releaseDate: "2023-07-01",
    rating: 4.2,
    providerId: "2",
    isFavorite: false,
  },
  {
    id: "10",
    name: "Inca Jackpot",
    img: ij,
    category: "SLOTS",
    provider: "Provider B",
    description: "Explore the Incan treasures and win big.",
    releaseDate: "2020-10-15",
    rating: 4.3,
    providerId: "2",
    isFavorite: false,
  },
  {
    id: "11",
    name: "Pride of Persia",
    img: pop,
    category: "SLOTS",
    provider: "Provider B",
    description: "Experience the wonders of Persia.",
    releaseDate: "2021-08-18",
    rating: 4.7,
    providerId: "3",
    isFavorite: false,
  },
  {
    id: "12",
    name: "Azteca",
    img: az,
    category: "NEW",
    provider: "Provider A",
    description: "Unravel the mysteries of the Aztec empire.",
    releaseDate: "2023-02-22",
    rating: 4.5,
    providerId: "4",
    isFavorite: false,
  },
  // Add more game objects here...
];

export const useGames = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate API call
      setGameList(games);
      setLoading(false);
    };
    fetchGames();
  }, []);

  return { gameList, loading };
};
