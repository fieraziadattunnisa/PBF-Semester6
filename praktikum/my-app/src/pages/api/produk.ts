import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../../utils/db/servicefirebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await retrieveProducts("products");

    return res.status(200).json({
      status: true,
      status_code: 200,
      data: products,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      status: false,
      status_code: 500,
      message: "Gagal mengambil data produk",
      error: String(error),
    });
  }
}