import Link from "next/link";
import { useRouter } from "next/router";
// import style from "./login.module.css";
import style from "./login.module.scss";

const TampilanLogin = () => {
  console.log("APP LOADED"); // ✅ di sini
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={style.login}>
      <h1 className="text-red-500 text-4xl">TEST</h1>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => push("/product")}>Login</button>
      <button onClick={() => handleLogin()}>Login</button>
      <h1 style={{ color: "white", borderRadius: "10px", padding: "10px" }}>belum punya akun</h1>
      <Link href="/auth/register">Register</Link>
    </div>
  );
};

export default TampilanLogin;
