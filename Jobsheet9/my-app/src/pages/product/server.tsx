import TampilanProduct from "../views/product/index";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

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
  const res = await fetch("http://localhost:3000/api/product");
  const respone = await res.json();
  return {
    props: {
      products: respone.data,
    },
  };
}
