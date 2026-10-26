import { FREE_DELIVERY_FROM } from "@/components/mock/checkout";
import type { PaymentId } from "@/components/types/cart";
import Barcode from "@/components/ui/barcode/Barcode";
import Button from "@/components/ui/button/Button";
import { formatPrice, pluralItems } from "@/components/utils/format";
import styles from "./orderSummary.module.css";

interface OrderSummaryProps {
  count: number;
  subtotal: number;
  shipping: number;
  payment: PaymentId;
  loading: boolean;
}

const OrderSummary = ({ count, subtotal, shipping, payment, loading }: OrderSummaryProps) => {
  const total = subtotal + shipping;
  const left = FREE_DELIVERY_FROM - subtotal;

  let label = `Оплатить ${formatPrice(total)}`;
  if (payment === "cash") label = "Оформить заказ";
  if (loading) label = "Обработка…";

  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>Итого</h2>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt>Товары ({pluralItems(count)})</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className={styles.row}>
          <dt>Доставка</dt>
          <dd>{shipping === 0 ? "бесплатно" : formatPrice(shipping)}</dd>
        </div>
      </dl>

      {shipping > 0 && left > 0 && (
        <p className={styles.note}>
          Добавьте ещё на {formatPrice(left)} — доставка по Бишкеку станет бесплатной
        </p>
      )}

      <div className={styles.promo}>
        <label htmlFor="promo" className="visually-hidden">
          Промокод
        </label>
        <input id="promo" type="text" placeholder="Промокод" className={styles.promoInput} />
        <Button size="sm">Ок</Button>
      </div>

      <div className={styles.total}>
        <span>К оплате</span>
        <strong>{formatPrice(total)}</strong>
      </div>

      <Button type="submit" variant="solid" size="lg" block disabled={loading}>
        {label}
      </Button>
      <p className={styles.secure}>Защищённая оплата · данные карты не хранятся на сайте</p>

      <div className={styles.barcode}>
        <Barcode caption="VALT Supply Co." />
      </div>
    </aside>
  );
};

export default OrderSummary;
