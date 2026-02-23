import Product from "./index";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Ini adalah halaman detail produk.</p>
      <p>Product ID: {query.id}</p>
      <Product />
    </div>
  );
};

export default ProductDetail;
