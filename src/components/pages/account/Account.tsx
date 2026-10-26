"use client";

import { useState } from "react";
import { customer, orders } from "@/components/mock/account";
import Barcode from "@/components/ui/barcode/Barcode";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import OrderRow from "./orderRow/OrderRow";
import styles from "./account.module.css";

type Tab = "orders" | "profile" | "addresses" | "favorites";

const tabs: { id: Tab; label: string }[] = [
  { id: "orders", label: "Заказы" },
  { id: "profile", label: "Профиль" },
  { id: "addresses", label: "Адреса" },
  { id: "favorites", label: "Избранное" },
];

const Account = () => {
  const [tab, setTab] = useState<Tab>("orders");
  const [saved, setSaved] = useState(false);
  const initials = `${customer.firstName[0]}${customer.lastName[0]}`;

  return (
    <section className={styles.account}>
      <div className={styles.inner}>
        <aside className={styles.side}>
          <div className={styles.user}>
            <span className={styles.avatar} aria-hidden="true">
              {initials}
            </span>
            <div className={styles.userText}>
              <span className={styles.userName}>
                {customer.firstName} {customer.lastName}
              </span>
              <span className={styles.userPhone}>{customer.phone}</span>
            </div>
          </div>

          <div className={styles.club}>
            <span>VALT Club</span>
            <strong>{customer.bonuses.toLocaleString("ru-RU")}</strong>
          </div>

          <nav className={styles.tabs} aria-label="Разделы кабинета">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`${styles.tab} ${t.id === tab ? styles.tabActive : ""}`}
                aria-current={t.id === tab ? "page" : undefined}
                onClick={() => {
                  setTab(t.id);
                  setSaved(false);
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className={styles.member}>
            <Barcode caption={`Member ID · ${customer.memberId}`} />
          </div>
        </aside>

        <div className={styles.content}>
          {tab === "orders" && (
            <>
              <h1 className={styles.title}>Мои заказы</h1>
              <ul className={styles.orders}>
                {orders.map((o) => (
                  <OrderRow key={o.id} order={o} />
                ))}
              </ul>
            </>
          )}

          {tab === "profile" && (
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSaved(true);
              }}
            >
              <h1 className={styles.title}>Профиль</h1>
              <div className={styles.fields}>
                <Field id="first-name" label="Имя" defaultValue={customer.firstName} autoComplete="given-name" />
                <Field id="last-name" label="Фамилия" defaultValue={customer.lastName} autoComplete="family-name" />
                <Field id="profile-phone" label="Телефон" type="tel" defaultValue={customer.phone} autoComplete="tel" />
                <Field id="profile-email" label="Эл. почта" type="email" defaultValue={customer.email} placeholder="name@example.com" autoComplete="email" />
                <Field id="profile-size" label="Размер одежды" defaultValue={customer.size} />
              </div>
              <div className={styles.formActions}>
                <Button type="submit">Сохранить</Button>
                {saved && <span className={styles.saved}>Сохранено</span>}
              </div>
            </form>
          )}

          {tab === "addresses" && (
            <>
              <h1 className={styles.title}>Адреса</h1>
              <div className={styles.address}>
                <span className={styles.addressTag}>Основной</span>
                <span>{customer.address}</span>
              </div>
              <Button variant="ghost" className={styles.addBtn}>
                + Добавить адрес
              </Button>
            </>
          )}

          {tab === "favorites" && (
            <div className={styles.empty}>
              <Sparkle size={14} />
              <h1 className={styles.title}>Избранное</h1>
              <p>Здесь появятся товары, отмеченные сердечком.</p>
              <Button href="/catalog" arrow>
                В каталог
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Account;
