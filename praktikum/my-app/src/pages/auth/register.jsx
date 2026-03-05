import styles from "@/styles/register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Register</h1>

      <input
        type="text"
        placeholder="Username"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        className={styles.input}
      />

      <button className={styles.button}>
        Register
      </button>
    </div>
  );
};

export default Register;