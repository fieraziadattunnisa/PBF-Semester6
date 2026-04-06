import TampilanProduk from "../../views/produk";
import { ProductType } from "../types/Product.type";

const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/produk");
    const respone = await res.json();

    console.log("DATA:", respone);

    return {
      props: {
        products: respone || [], 
      },
    };
  } catch (error) {
    console.error("ERROR:", error);

    return {
      props: {
        products: [], 
      },
    };
  }
}