import styles from "@/styles/404.module.scss";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/undraw_welcome-cats_tw36.png" alt="404" className={styles.error__image} />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>

        <Link href="/">
        <button>Kembali ke Home</button>
      </Link>
      
    </div>
  );
};

export default Custom404;