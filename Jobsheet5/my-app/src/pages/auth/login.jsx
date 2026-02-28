import Link from "next/link";
import { useRouter } from "next/router";
import style from "./login.module.css";

const HalamanLogin = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={style.login}>
      <h1>Halaman Login</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => push("/product")}>Login</button>
      <button onClick={() => handleLogin()}>Login</button>
      <Link href="/auth/register">Register</Link>
    </div>
  );
};

export default HalamanLogin;
