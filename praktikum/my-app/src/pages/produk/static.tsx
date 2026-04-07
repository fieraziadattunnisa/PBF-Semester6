import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

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

// ⬇️ LETAKNYA DI SINI (di bawah component)
export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:3000/api/produk');
    const response: ProductType[] = await res.json();

    return {
        props: {
            products: response || [],
        }
    }
}