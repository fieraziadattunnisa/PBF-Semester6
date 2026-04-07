import useSWR from "swr";
import TampilanProduk from "../../views/produk";
import fetcher from "../../utils/swr/fetcher";

const ProdukPage = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data} />
    </div>
  );
};

export default ProdukPage;