import Link from "next/link";

const Register = () => {
  return (
    <div>
      <h1>Halaman Register</h1>

      <p>
        Sudah punya akun?{" "}
        <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;