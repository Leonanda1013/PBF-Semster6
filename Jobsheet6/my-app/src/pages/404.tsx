import style from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={style.eror}>
      <img src="/page-not-found.png" alt="404" className={style.eror__image} />
      <h1>404 - Page Not Found</h1>
      <p>Kamu Salah Masuk Halaman Wlekk.</p>
    </div>
  );
};

export default Custom404;
