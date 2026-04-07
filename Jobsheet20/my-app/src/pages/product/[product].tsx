import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduct = ({ product }: { product: ProductType }) => {

  return (
    <div>
      <DetailProduct products={product} />
    </div>
  );
};

export default HalamanProduct;


export async function getServerSideProps({ params }: { params: { produk: string } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
    const response = await res.json();

    return {
        props: {
            products: response.data
        }
    };
}
