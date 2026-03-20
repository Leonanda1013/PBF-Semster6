import { ProductType } from "../../types/Product.type";
import styles from "../DetailProduct/detailProduct.module.scss";

const DetailProduct = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail product</h1>
      <div className={styles.productdetail}>
        <div className={styles.productdetail__image}>
          <img src={products.image && products.image} alt={products.name} />
        </div>

        <div className={styles.productdetail__info}>
          <h1 className={styles.productdetail__name}>{products.name}</h1>
          <p className={styles.productdetail__category}>{products.category}</p>
          <p className={styles.productdetail__price}>Rp {products.price && products.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
