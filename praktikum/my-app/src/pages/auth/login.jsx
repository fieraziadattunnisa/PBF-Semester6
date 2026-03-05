import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  // simulasi kondisi sudah login
  const isLogin = false;

  useEffect(() => {
    if (isLogin) {
      router.push("/produk");
    }
  }, [isLogin, router]);

  return (
    <div>
      <h1>Halaman Login</h1>

      <p>Anda akan diarahkan ke halaman produk...</p>

      <p>
        Belum punya akun?{" "}
        <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;