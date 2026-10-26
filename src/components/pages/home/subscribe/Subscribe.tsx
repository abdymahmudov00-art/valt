"use client";

import { useState } from "react";
import Button from "@/components/ui/button/Button";
import styles from "./subscribe.module.css";

/** Подписка на дропы. Пока без отправки — подключим к бэкенду позже. */
const Subscribe = () => {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className={styles.done}>Спасибо! Сообщим о следующем дропе.</p>;
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="subscribe-email" className="visually-hidden">
        Эл. почта
      </label>
      <input
        id="subscribe-email"
        type="email"
        required
        placeholder="E-mail для дропов"
        className={styles.input}
      />
      <Button type="submit" size="sm">
        Подписаться
      </Button>
    </form>
  );
};

export default Subscribe;
