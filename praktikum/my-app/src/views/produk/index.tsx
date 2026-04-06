import styles from "./produk.module.scss";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products = [] }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {products.length > 0 ? (
          // ✅ DATA ASLI
          products.map((product) => (
            <div key={product.id} className={styles.produk__content__item}>
              <div className={styles.produk__content__item__image}>
                <img src={product.image} alt={product.name} width={200} />
              </div>
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p>Rp {product.price.toLocaleString("id-ID")}</p>
            </div>
          ))
        ) : (
          // ✅ SKELETON
          Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className={styles.produk__content__item}>
                <div className={styles.skeleton}></div>
                <div className={styles.skeleton_text}></div>
                <div className={styles.skeleton_text}></div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;