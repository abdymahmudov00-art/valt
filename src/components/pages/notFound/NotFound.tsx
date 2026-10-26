import Button from "@/components/ui/button/Button";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import styles from "./notFound.module.css";

const NotFound = () => (
  <section className={styles.notFound}>
    <Sparkle size={16} />
    <h1 className={styles.title}>404</h1>
    <p className={styles.text}>Такой страницы нет. Возможно, товар уже распродан.</p>
    <Button href="/catalog" arrow>
      В каталог
    </Button>
  </section>
);

export default NotFound;
