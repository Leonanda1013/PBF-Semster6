import TampilanProduct from "../views/product/index";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: string;
  ukuran: string;
  warna: string;
};

const kategori = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
      .then((response) => response.json())
      .then((respondata) => setProducts(respondata.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <h1>Product List</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
      {/* <TampilanProduct /> */}
    </>
  );
};

export default kategori;
