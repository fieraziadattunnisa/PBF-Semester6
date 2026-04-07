import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal ambil data" });
  }
}