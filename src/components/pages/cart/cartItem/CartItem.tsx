import Link from "next/link";
import Image from "next/image";
import { getStock, removeFromCart, setQty } from "@/components/hooks/useCart/useCart";
import { getProduct } from "@/components/mock/products";
import type { CartItem as CartItemType } from "@/components/types/cart";
import Placeholder from "@/components/ui/placeholder/Placeholder";
import QtyStepper from "@/components/ui/qtyStepper/QtyStepper";
import { formatPrice } from "@/components/utils/format";
import styles from "./cartItem.module.css";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const product = getProduct(item.slug);
  if (!product) return null;

  const color = product.colors.find((c) => c.id === item.colorId);
  const sizeLabel = item.size === "ONE" ? "единый размер" : item.size;
  const max = getStock(item.slug, item.colorId, item.size);

  return (
    <li className={styles.item}>
      <Link href={`/product/${product.slug}`} className={styles.thumb} tabIndex={-1}>
        {color?.images?.[0] ? <Image src={color.images[0]} alt={product.name + " · " + color.name} width={68} height={68} className={styles.productPhoto} /> : <Placeholder label="" tone={color?.tone} />}
      </Link>
      <div className={styles.info}>
        <Link href={`/product/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>
        <span className={styles.meta}>
          {color?.name} · {sizeLabel}
        </span>
        <button
          type="button"
          className={styles.remove}
          onClick={() => removeFromCart(item.slug, item.colorId, item.size)}
        >
          Удалить
        </button>
      </div>
      <QtyStepper
        value={item.qty}
        max={max}
        onChange={(q) => setQty(item.slug, item.colorId, item.size, q)}
      />
      <span className={styles.sum}>{formatPrice(product.price * item.qty)}</span>
    </li>
  );
};

export default CartItem;
