import { useRouter } from "next/router";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const ProdukPage = () => {
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Debug (opsional)
  console.log("DATA:", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error mengambil data</p>;

  return (
    <div>
      {/* ⚠️ PENTING: data sudah berupa array */}
      <TampilanProduk products={data || []} />
    </div>
  );
};

export default ProdukPage;