import { orderStatusLabel } from "@/components/mock/account";
import type { Order } from "@/components/types/order";
import ArrowIcon from "@/components/ui/arrowIcon/ArrowIcon";
import Image from "next/image";
import { products } from "@/components/mock/products";
import { formatPrice, pluralItems } from "@/components/utils/format";
import styles from "./orderRow.module.css";

interface OrderRowProps {
  order: Order;
}

const OrderRow = ({ order }: OrderRowProps) => {
  const thumbs = Array.from({ length: Math.min(order.itemsCount, 3) }, (_, i) => i);

  return (
    <li className={styles.row}>
      <div className={styles.thumbs}>
        {thumbs.map((i) => (
          <div key={i} className={styles.thumb}>
            <Image src={products[i].images![0]} alt="" width={48} height={48} />
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <span className={styles.id}>Заказ №{order.id}</span>
        <span className={styles.meta}>
          {order.date} · {pluralItems(order.itemsCount)}
        </span>
      </div>
      <span className={`${styles.status} ${styles[order.status]}`}>
        {orderStatusLabel[order.status]}
      </span>
      <span className={styles.total}>{formatPrice(order.total)}</span>
      <button type="button" className={styles.more} aria-label={`Подробнее о заказе №${order.id}`}>
        <ArrowIcon size={16} />
      </button>
    </li>
  );
};

export default OrderRow;
