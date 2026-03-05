import styles from "../../styles/produk.module.scss";

const ProdukPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Produk</h1>

      <div className={styles.card}>
        <p>Produk 1</p>
      </div>

      <div className={styles.card}>
        <p>Produk 2</p>
      </div>

      <div className={styles.card}>
        <p>Produk 3</p>
      </div>

    </div>
  );
};

export default ProdukPage;