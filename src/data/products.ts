// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  seller: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: 45,
    image: "/images/basket.jpg",
    category: "Home Decor",
    description: " ",
    seller: "Ada Crafts",
  },
  {
    id: 2,
    name: "Clay Pot",
    price: 35,
    image: "/images/clay-pot.jpg",
    category: "Kitchenware",
    description: " ",
    seller: "Obi Pottery",
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: 50,
    image: "/images/wallet.jpg",
    category: "Accessories",
    description: " ",
    seller: "Tunde Leatherworks",
  },
  {
    id: 4,
    name: "Wooden Sculpture",
    price: 120,
    image: "/images/sculpture.jpg",
    category: "Art",
    description: " ",
    seller: "Chika Woodworks",
  },
  {
    id: 5,
    name: "Beaded Necklace",
    price: 25,
    image: "/images/necklace.jpg",
    category: "Jewelry",
    description: " ",
    seller: "Ngozi Beads",
  },
];
