import styles from "../../views/produk/produk.module.scss";
import Link from "next/link";
import { ProductType } from "../../types/Product.type";

const TampilanProduk = ({ products = [] }: { products?: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link
                href={`/produk/${product.id}`}
                key={product.id}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <img src={product.image} alt={product.name} width={200} />
                </div>
                <h4 className={styles.produk__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.produk__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.produk__content__item__price}>
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <p>Data produk kosong</p>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;