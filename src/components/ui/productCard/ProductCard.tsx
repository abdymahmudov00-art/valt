import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/components/ui/placeholder/Placeholder";
import type { Product } from "@/components/types/product";
import { formatPrice } from "@/components/utils/format";
import styles from "./productCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const inStock = product.colors.some((c) =>
    Object.values(c.stock).some((n) => (n ?? 0) > 0),
  );

  return (
    <Link href={`/product/${product.slug}`} className={styles.card}>
      <div className={styles.media}>
        {product.images?.[0] ? (
          <Image src={product.images[0]} alt={product.name} width={1254} height={1254} sizes="(max-width: 520px) 50vw, (max-width: 1040px) 33vw, 25vw" className={styles.productPhoto} />
        ) : <Placeholder label="Фото товара" className={styles.photo} />}
        {product.isNew && <span className={styles.badge}>New</span>}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>
          {inStock ? formatPrice(product.price) : "Нет в наличии"}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
