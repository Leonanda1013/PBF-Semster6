"use client";

import { useEffect, useState } from "react";
import TampilanProduct from "../views/product/index";

const Product = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // ✅ fungsi ambil data (bisa dipakai ulang)
  // const getProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/product");
  //     const result = await response.json();
  //     setProducts(result.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ✅ load pertama
  useEffect(() => {
    fetch("/api/product")
      .then((response) => response.json())
      .then((responedata) => {
        setProducts(responedata.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <TampilanProduct products={products} />
    </>
  );
};

export default Product;
