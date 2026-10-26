import Button from "@/components/ui/button/Button";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import styles from "./cartEmpty.module.css";

const CartEmpty = () => (
  <section className={styles.empty}>
    <Sparkle size={16} />
    <h1 className={styles.title}>Корзина пуста</h1>
    <p className={styles.text}>Дисциплина начинается с первого шага. Выберите форму для тренировок.</p>
    <Button href="/catalog" arrow>
      В каталог
    </Button>
  </section>
);

export default CartEmpty;
