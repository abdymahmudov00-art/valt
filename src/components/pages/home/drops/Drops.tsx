import ArrowLink from "@/components/ui/arrowLink/ArrowLink";
import ProductCard from "@/components/ui/productCard/ProductCard";
import { newDrops } from "@/components/mock/products";
import styles from "./drops.module.css";

const Drops = () => {
  return (
    <section className={styles.drops}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Последние дропы +</h2>
          <ArrowLink href="/catalog">Смотреть все</ArrowLink>
        </div>
        <div className={styles.grid}>
          {newDrops.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drops;
