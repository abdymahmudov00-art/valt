import { FREE_DELIVERY_FROM } from "@/components/mock/checkout";
import { formatPrice } from "@/components/utils/format";
import Subscribe from "../subscribe/Subscribe";
import styles from "./benefits.module.css";

const items = [
  { title: "Доставка 24 ч", text: `По Бишкеку, бесплатно от ${formatPrice(FREE_DELIVERY_FROM)}` },
  { title: "Оплата онлайн", text: "Visa, Mastercard, Элкарт, QR" },
  { title: "Возврат 14 дней", text: "Не подошёл размер — обменяем" },
];

const Benefits = () => {
  return (
    <section id="delivery" className={styles.benefits}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.cell}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.text}>{item.text}</span>
          </div>
        ))}
        <div className={styles.cell}>
          <Subscribe />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
