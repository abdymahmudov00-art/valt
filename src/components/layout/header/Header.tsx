"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/ui/logo/Logo";
import { useCart } from "@/components/hooks/useCart/useCart";
import styles from "./header.module.css";

const nav = [
  { href: "/catalog", label: "Магазин" },
  { href: "/#collections", label: "Коллекции" },
  { href: "/#about", label: "О бренде" },
  { href: "/#community", label: "Комьюнити" },
];

const Header = () => {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Закрываем мобильное меню при переходе на другую страницу.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>Бесплатная доставка по Бишкеку от 5 000 сом</div>
      <div className={styles.inner}>
        <Logo />

        <nav
          id="main-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Основное меню"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.active : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/account"
            className={`${styles.link} ${styles.mobileOnly} ${isActive("/account") ? styles.active : ""}`}
          >
            Кабинет
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link
            href="/account"
            className={`${styles.link} ${styles.account} ${isActive("/account") ? styles.active : ""}`}
          >
            Кабинет
          </Link>
          <Link
            href="/cart"
            className={`${styles.link} ${styles.cart} ${isActive("/cart") ? styles.active : ""}`}
            aria-label={`Корзина, товаров: ${count}`}
          >
            Корзина ({count})
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.burgerLine} ${open ? styles.burgerTop : ""}`} />
            <span className={`${styles.burgerLine} ${open ? styles.burgerBottom : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
