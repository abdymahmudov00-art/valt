import Link from "next/link";
import Barcode from "@/components/ui/barcode/Barcode";
import Logo from "@/components/ui/logo/Logo";
import styles from "./footet.module.css";

const links = [
  { href: "/catalog", label: "Каталог" },
  { href: "/#delivery", label: "Доставка" },
  { href: "/#delivery", label: "Возврат" },
  { href: "/#delivery", label: "Размеры" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <svg className={styles.globe} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
          </svg>
          <span>
            Сделано
            <br />в Кыргызстане
          </span>
        </div>

        <Logo />

        <nav className={styles.links} aria-label="Покупателям">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/valt_kg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        <Barcode caption="VALT Supply Co. · Est. 2026" align="end" />
      </div>
      <div className={styles.bottom}>© 2026 VALT. Все права защищены.</div>
    </footer>
  );
};

export default Footer;
