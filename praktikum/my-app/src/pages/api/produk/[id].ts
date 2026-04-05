import type { NextApiRequest, NextApiResponse } from "next";

const dataProduk = [
  {
    id: "1",
    name: "Baju Polos",
    price: 100000,
    size: "M",
    category: "Pakaian",
  },
  {
    id: "2",
    name: "Celana Jeans",
    price: 300000,
    size: "L",
    category: "Pakaian",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const produk = dataProduk.find((item) => item.id === String(id));

  res.status(200).json({
    status: true,
    data: produk,
  });
}