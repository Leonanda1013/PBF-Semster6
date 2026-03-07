import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

import DetailProduct from "@/views/DetailProduct";

const HalamanProduct = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);
  return (
    <div>
      <DetailProduct products={isLoading ? [] : data.data} />
    </div>
  );
};

export default HalamanProduct;
