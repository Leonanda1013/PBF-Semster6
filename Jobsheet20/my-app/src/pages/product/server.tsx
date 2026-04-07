import TampilanProduct from "../../views/product/index";
import { ProductType } from "../../types/Product.type";

const halamanProductServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduct products={products} />
    </div>
  );
};

export default halamanProductServer;

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:3000/api/product");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
  const respone = await res.json();
  return {
    props: {
      products: respone.data,
    },
  };
}
