"use client";

import { useEffect, useState } from "react";
// import TampilanProduct from "../views/product/index";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  // ✅ fungsi ambil data (bisa dipakai ulang)
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/product");
      const result = await response.json();
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ load pertama
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Product List</h1>

      {/* ✅ tombol refresh */}
      <button onClick={getProducts}>
        {loading ? "Loading..." : "Refresh Data"}
      </button>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Size: {product.size}</p>
        </div>
      ))}

      {/* <TampilanProduct /> */}
    </>
  );
};

export default Product;