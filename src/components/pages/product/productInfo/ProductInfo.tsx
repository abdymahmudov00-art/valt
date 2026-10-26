import { FREE_DELIVERY_FROM } from "@/components/mock/checkout";
import type { Product } from "@/components/types/product";
import { formatPrice } from "@/components/utils/format";
import styles from "./productInfo.module.css";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const sections = [
    { title: "Описание", text: product.description, open: true },
    { title: "Ткань и уход", text: product.composition },
    {
      title: "Доставка и возврат",
      text: `По Бишкеку — на следующий день, бесплатно от ${formatPrice(FREE_DELIVERY_FROM)}. По регионам — 2–4 дня. Возврат и обмен в течение 14 дней.`,
    },
  ];

  return (
    <div className={styles.info}>
      {sections.map((s) => (
        <details key={s.title} className={styles.item} open={s.open}>
          <summary className={styles.summary}>
            {s.title}
            <span className={styles.plus} aria-hidden="true" />
          </summary>
          <p className={styles.text}>{s.text}</p>
        </details>
      ))}
    </div>
  );
};

export default ProductInfo;
