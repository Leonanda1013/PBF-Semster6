import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./product.module.css";

const TampilanProduct = () => {
  return (
    <div className={style.container}>
      {/* Hero Section */}
      <section className={style.hero}>
        <h1>Welcome to Product Page</h1>
        <p>This is hero section</p>
      </section>

      {/* Main Section */}
      <main className={style.main}>
        <h2>Main Content</h2>
        <p>Isi utama website</p>
      </main>
    </div>
  );
};

export default TampilanProduct;
