import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailProductView from "@/views/DetailProduct";

type ProductType = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  size?: string;
};

const DetailProdukPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (id) {
      console.log("ID DARI URL:", id);

      fetch(`/api/produk/${id}`)
        .then((res) => res.text()) // sementara pakai text dulu untuk debug
        .then((text) => {
          console.log("HASIL FETCH:", text);

          const data = JSON.parse(text);
          setProduct(data.data);
        });
    }
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return <DetailProductView products={product} />;
};

export default DetailProdukPage;