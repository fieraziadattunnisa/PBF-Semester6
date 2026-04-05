import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = [
    {
      id: 1,
      name: "Sepatu Nike Air",
      category: "Sepatu",
      price: 1500000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      category: "Sepatu",
      price: 1800000,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    }
  ];

  res.status(200).json(products);
}