import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={styles.register}>
      <h1>Halaman Register</h1>
      <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default TampilanRegister;
