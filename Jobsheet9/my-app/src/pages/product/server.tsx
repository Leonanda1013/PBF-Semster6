import TampilanProduct from "../views/product/index";

const halamanProductServer = () => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduct products={[]} />
    </div>
  );
};

export default halamanProductServer;
