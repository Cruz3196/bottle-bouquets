// import the images
import { StaticImageData } from "next/image";
import Lemonade from "../../public/images/Lemonade.png";
import Roseta from "../../public/images/Roseta.png";
import StellaRoas from "../../public/images/StellaRosa.png";
import VillaAlena from "../../public/images/VillaAlena.png";
import BdayLemon from "../../public/images/BdayLemon.png";
import BlackStella from "../../public/images/BlackStella.png";
import RoseStella from "../../public/images/RoseStella.png";
import StellaLemon from "../../public/images/StellaLemon.png";
// creating a mock data file to simulate database data
interface CardData {
  id: string;
  title: string;
  imageUrl: string | StaticImageData;
}

// array of mock data objects
export const mockData: CardData[] = [
  {
    id: "1",
    title: "Elegant Rose Bouquet",
    imageUrl: Roseta,
  },
  {
    id: "2",
    title: "Sunflower Delight",
    imageUrl: Lemonade,
  },
  {
    id: "3",
    title: "Mixed Floral Arrangement",
    imageUrl: StellaRoas,
  },
  {
    id: "4",
    title: "Mixed Floral Arrangement",
    imageUrl: VillaAlena,
  },
  {
    id: "5",
    title: "Elegant Rose Bouquet",
    imageUrl: BdayLemon,
  },
  {
    id: "6",
    title: "Sunflower Delight",
    imageUrl: BlackStella,
  },
  {
    id: "7",
    title: "Mixed Floral Arrangement",
    imageUrl: RoseStella,
  },
  {
    id: "8",
    title: "Mixed Floral Arrangement",
    imageUrl: StellaLemon,
  },
];
