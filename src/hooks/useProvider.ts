import { useEffect, useState } from "react";
import { Provider } from "../types/Provider";
import pp from "../assets/PP.png";
import em from "../assets/EM.png";
import evo from "../assets/EVO.png";
import exp from "../assets/EXPANSE.png";
import hab from "../assets/HAB.png";
import hacksaw from "../assets/HACKSAW.png";
import ib from "../assets/INBET.png";
import mp from "../assets/MPLAY.png";
import ne from "../assets/NETENT.png";
import pg from "../assets/PGSOFT.png";
import png from "../assets/PNG.png";
import ps from "../assets/PS.png";
import pt from "../assets/PT.png";
import rt from "../assets/REDTIGER.png";
import r from "../assets/RELAX.png";

const games: Provider[] = [
  {
    id: "1",
    name: "Pragmatic Play",
    img: pp,
  },

  {
    id: "2",
    name: "Every Matrix",
    img: em,
  },
  {
    id: "3",
    name: "Evolution",
    img: evo,
  },
  {
    id: "4",
    name: "Expanse",
    img: exp,
  },
  {
    id: "5",
    name: "Habanero",
    img: hab,
  },
  {
    id: "6",
    name: "Hacksaw",
    img: hacksaw,
  },
  {
    id: "7",
    name: "Inbet",
    img: ib,
  },
  {
    id: "8",
    name: "M Play",
    img: mp,
  },
  {
    id: "9",
    name: "Netent",
    img: ne,
  },
  {
    id: "10",
    name: "PGsoft",
    img: pg,
  },
  {
    id: "11",
    name: "PNG",
    img: png,
  },
  {
    id: "12",
    name: "Playson",
    img: ps,
  },
  {
    id: "13",
    name: "Playtech",
    img: pt,
  },
  {
    id: "14",
    name: "Red Tiger",
    img: rt,
  },
  {
    id: "15",
    name: "Relax",
    img: r,
  },

  // Add more game objects here...
];

export const useProvider = () => {
  const [providerList, setProviderList] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProvider = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate API call
      setProviderList(games);
      setLoading(false);
    };
    fetchProvider();
  }, []);

  return { providerList, loading };
};
