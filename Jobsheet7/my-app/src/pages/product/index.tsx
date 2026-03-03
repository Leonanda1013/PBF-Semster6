import TampilanProduct from "../views/product/index";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
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
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Size: {product.size}</p>
        </div>
      ))}
      {/* <TampilanProduct /> */}
    </>
  );
};

export default kategori;
