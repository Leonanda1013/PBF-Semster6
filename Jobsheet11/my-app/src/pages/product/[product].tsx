import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProductType } from "@/types/Product.type";
import DetailProduct from "@/views/DetailProduct";
// Client side
const HalamanProduct = ({ product }: { product: ProductType }) => {
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);
  return (
    <div>
      <DetailProduct products={product} />
    </div>
  );
};

export default HalamanProduct;

// server side
// const HalamanProduct = ({ product }: { product: ProductType }) => {
//   return (
//     <div>
//       <DetailProduct products={product} />
//     </div>
//   );
// };

// export default HalamanProduct;

// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params?.product}`);
//   const respone = await res.json();

//   return {
//     props: {
//       product: respone.data,
//     },
//   };
// }

// SSG
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const respone = await res.json();

  const paths = respone.data.map((product: ProductType) => ({ params: { product: product.id } }));
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
