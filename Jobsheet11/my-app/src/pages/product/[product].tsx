import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProductType } from "@/types/Product.type";
import DetailProduct from "@/views/DetailProduct";
// Client side
// const HalamanProduct = () => {
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);
//   return (
//     <div>
//       <DetailProduct products={isLoading ? [] : data.data} />
//     </div>
//   );
// };

// server side
const HalamanProduct = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduct products={product} />
    </div>
  );
};

export default HalamanProduct;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params?.product}`);
  const respone = await res.json();

  return {
    props: {
      product: respone.data,
    },
  };
}
