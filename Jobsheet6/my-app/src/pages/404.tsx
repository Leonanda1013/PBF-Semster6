import Link from "next/dist/client/link";
import style from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <head>
        <title>404 - Page Not Found</title>
      </head>
      <div className={style.eror}>
        <img src="/page-not-found.png" alt="404" className={style.eror__image} />
        <h1>404 - Page Not Found</h1>
        <p>Kamu Salah Masuk Halaman Wlekk.</p>
        <Link href="/">Kembali ke Beranda</Link>
      </div>
    </>
  );
};

export default Custom404;
