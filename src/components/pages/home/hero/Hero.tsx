import Barcode from "@/components/ui/barcode/Barcode";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.meta}>
            <span>VALT Supply Co.</span>
            <span>Бишкек · KG</span>
          </div>
          <Sparkle className={styles.sparkleCopy} />
          <h1 className={styles.title}>
            Discipline
            <br />
            over motivation
          </h1>
          <p className={styles.subtitle}>Сила — это режим, а не настроение.</p>
          <Button href="/catalog" arrow className={styles.cta}>
            Смотреть коллекцию
          </Button>
          <Barcode caption="Сделано для зала" />
        </div>

        <div className={styles.visual}>
          <div className={styles.photo}>
            <Image src="/products/hero-generated.png" alt="Атлет в чёрном тренировочном лонгсливе" fill sizes="(max-width: 600px) 100vw, 55vw" className={styles.heroImage} />
          </div>
          <svg
            className={styles.orbit}
            viewBox="0 0 600 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse cx="300" cy="250" rx="290" ry="70" transform="rotate(-18 300 250)" />
          </svg>
          <Sparkle size={12} className={styles.sparkleVisual} />

          <div className={styles.side}>
            <span>Drop 01/05</span>
            <span className={styles.sideLine} />
            <svg className={styles.globe} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
            </svg>
          </div>

          <div className={styles.motto}>
            <span>Новый режим.</span>
            <span>Новая форма.</span>
            <span>Новый ты.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
