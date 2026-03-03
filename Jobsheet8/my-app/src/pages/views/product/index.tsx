import styles from "../../product/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const TampilanProduct = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Daftar Product</h1>

      <div className={styles.product__content}>
        {/* {products.map((item: ProductType) => (
          <div key={item.id} className={styles.product__content__item}>
            <img src={item.image} alt={item.name} className={styles.product__content__item__image} />
            <h2 className={styles.product__content__item__name}>{item.name}</h2>
            <p className={styles.product__content__item__price}>Rp {item.price.toLocaleString()}</p>
            <p className={styles.product__content__item__category}>Category: {item.category}</p>
          </div>
        ))} */}

        <div className={styles.product__content__skeleton}>
          <div className={styles.product__content__skeleton__image}></div>
          <div className={styles.product__content__skeleton__name}></div>
          <div className={styles.product__content__skeleton__category}></div>
          <div className={styles.product__content__skeleton__price}></div>
        </div>
      </div>
    </div>
  );
};

export default TampilanProduct;
