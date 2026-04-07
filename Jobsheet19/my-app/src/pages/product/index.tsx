"use client";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import TampilanProduct from "../../views/product/index";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Product = () => {
  // const [products, setProducts] = useState([]);
  // // const [loading, setLoading] = useState(false);
  // const { data, error, isLoading } = useSWR("/api/product", fetcher);
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

  // // ✅ load pertama
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((response) => response.json())
  //     .then((responedata) => {
  //       setProducts(responedata.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  return (
    <>
      <TampilanProduct products={isLoading ? [] : data?.data || []} />
    </>
  );
};

export default Product;
