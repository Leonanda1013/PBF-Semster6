import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduct = ({ product }: { product: ProductType }) => {
  {
    /digunakan client-side rendering/;
  }
  // // const Router = useRouter();
  // // console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.produk}`,
  //   fetcher,
  // );
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduct products={product} />
    </div>
  );
};

export default HalamanProduct;

{
  /digunakan server-side rendering/;
}
// //export async function getServerSideProps({ params }: { params: { produk: string } }) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//     const respone = await res.json();
//     // console.log("Data produk yang diambil dari API:", respone);
//     return {
//         props: {
//             product: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
//         },
//      };
// }

{
  /digunakan static-site generation/;
}
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: { product: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params?.product}`);
  const response: { data: ProductType[] } = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
