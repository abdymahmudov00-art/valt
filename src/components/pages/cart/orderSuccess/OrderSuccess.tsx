import Button from "@/components/ui/button/Button";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import styles from "./orderSuccess.module.css";

interface OrderSuccessProps {
  orderId: string;
  /** false — оплата при получении */
  paid: boolean;
}

const OrderSuccess = ({ orderId, paid }: OrderSuccessProps) => (
  <section className={styles.success}>
    <Sparkle size={18} />
    <span className={styles.eyebrow}>Заказ №{orderId}</span>
    <h1 className={styles.title}>{paid ? "Оплата прошла" : "Заказ оформлен"}</h1>
    <p className={styles.text}>
      Товары зарезервированы на складе, подтверждение отправлено на телефон.
      {paid ? "" : " Оплата — при получении."} Статус заказа — в личном кабинете.
    </p>
    <div className={styles.actions}>
      <Button href="/account">Мои заказы</Button>
      <Button href="/" variant="ghost">
        На главную
      </Button>
    </div>
  </section>
);

export default OrderSuccess;
