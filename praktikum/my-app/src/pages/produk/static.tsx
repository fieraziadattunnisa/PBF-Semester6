import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/db/firebase";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "products"));

  const products = querySnapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: typeof data.title === "string" ? data.title : "",
      price: typeof data.price === "number" ? data.price : 0,
      image: typeof data.image === "string" ? data.image : "",
      description: typeof data.description === "string" ? data.description : "",
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}