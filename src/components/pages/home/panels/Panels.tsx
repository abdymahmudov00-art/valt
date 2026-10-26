import Link from "next/link";
import ArrowLink from "@/components/ui/arrowLink/ArrowLink";
import Image from "next/image";
import { categories } from "@/components/mock/products";
import styles from "./panels.module.css";

const Panels = () => {
  return (
    <section className={styles.panels}>
      <div className={styles.grid}>
        <article id="about" className={styles.panel}>
          <div className={styles.body}>
            <h2 className={styles.title}>О VALT +</h2>
            <p className={styles.text}>
              Мы шьём для тех, кто приходит в зал, когда не хочется. Это не просто одежда —
              это режим, характер и заявление.
            </p>
            <ArrowLink href="/#about">Наша миссия</ArrowLink>
          </div>
          <div className={styles.media}>
            <Image src="/products/essential-hoodie-graphite.png" alt="Худи VALT с фирменным знаком" fill sizes="(max-width: 960px) 42vw, 15vw" className={styles.fill} />
          </div>
        </article>

        <article id="collections" className={styles.panel}>
          <div className={styles.body}>
            <h2 className={styles.title}>Коллекции +</h2>
            <ul className={styles.list}>
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/catalog?category=${c.id}`} className={styles.listLink}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ArrowLink href="/catalog">Смотреть все</ArrowLink>
          </div>
          <div className={styles.media}>
            <Image src="/products/shorts-milk.png" alt="Молочные шорты из коллекции VALT" fill sizes="(max-width: 960px) 42vw, 15vw" className={styles.fill} />
          </div>
        </article>

        <article id="community" className={styles.panel}>
          <svg className={styles.world} viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" />
            <ellipse cx="100" cy="100" rx="40" ry="90" />
            <ellipse cx="100" cy="100" rx="70" ry="90" />
            <ellipse cx="100" cy="100" rx="90" ry="35" />
            <ellipse cx="100" cy="100" rx="90" ry="65" />
            <path d="M10 100h180M100 10v180" />
          </svg>
          <div className={styles.body}>
            <h2 className={styles.title}>Комьюнити +</h2>
            <p className={styles.mantra}>
              <span>Тренируйся.</span>
              <span>Восстанавливайся.</span>
              <span>Повторяй.</span>
            </p>
            <ArrowLink href="https://instagram.com/valt_kg" external>
              @valt_kg
            </ArrowLink>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Panels;
