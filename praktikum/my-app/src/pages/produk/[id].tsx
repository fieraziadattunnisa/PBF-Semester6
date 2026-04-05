import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailProduk = () => {
  const router = useRouter();
  const { id } = router.query;

  const [produk, setProduk] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/produk/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduk(data.data);
        });
    }
  }, [id]);


  return (
    <div>
      <h1>Detail Produk</h1>
      <h2>{produk.name}</h2>
      <p>Kategori: {produk.category}</p>
      <p>Harga: {produk.price}</p>
      <p>Ukuran: {produk.size}</p>
    </div>
  );
};

export default DetailProduk;