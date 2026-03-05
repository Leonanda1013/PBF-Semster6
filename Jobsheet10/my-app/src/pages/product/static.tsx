import TampilanProduct from "../../views/product";
import { ProductType } from "../../types/Product.type";

const halamanProductStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Product Static</h1>
      <TampilanProduct products={products} />
    </div>
  );
};

export default halamanProductStatic;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response: { data: ProductType[] } = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
