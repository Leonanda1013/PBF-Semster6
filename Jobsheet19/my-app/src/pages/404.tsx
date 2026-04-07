import Link from "next/dist/client/link";
import style from "../styles/404.module.scss";
import Image from "next/image";
const Custom404 = () => {
  return (
    <>
      <head>
        <title>404 - Page Not Found</title>
      </head>
      <div className={style.error}>
        <Image src="/page-not-found.png" alt="404" width={400} height={200} className={style.error__image} priority />
        <h1>404 - Page Not Found</h1>
        <p>Kamu Salah Masuk Halaman Wlekk.</p>
        <Link href="/">Kembali ke Beranda</Link>
      </div>
    </>
  );
};

export default Custom404;
