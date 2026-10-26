import Link from "next/link";
import { categories } from "@/components/mock/products";
import type { Product as ProductType } from "@/components/types/product";
import ProductInfo from "./productInfo/ProductInfo";
import ProductView from "./productView/ProductView";
import styles from "./product.module.css";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const category = categories.find((c) => c.id === product.category);

  return (
    <section className={styles.product}>
      <div className={styles.inner}>
        <nav aria-label="Навигация" className={styles.crumbs}>
          <Link href="/" className={styles.crumb}>
            Главная
          </Link>
          <span aria-hidden="true">/</span>
          {category && (
            <>
              <Link href={`/catalog?category=${category.id}`} className={styles.crumb}>
                {category.name}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className={styles.current}>{product.name}</span>
        </nav>

        <ProductView product={product}>
          <ProductInfo product={product} />
        </ProductView>
      </div>
    </section>
  );
};

export default Product;
