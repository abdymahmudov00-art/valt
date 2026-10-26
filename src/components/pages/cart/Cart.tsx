"use client";

import { useState } from "react";
import { clearCart, useCart } from "@/components/hooks/useCart/useCart";
import {
  deliveryOptions,
  FREE_DELIVERY_FROM,
  paymentOptions,
} from "@/components/mock/checkout";
import type { DeliveryId, PaymentId } from "@/components/types/cart";
import ChoiceGroup from "@/components/ui/choiceGroup/ChoiceGroup";
import Field from "@/components/ui/field/Field";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import CartEmpty from "./cartEmpty/CartEmpty";
import CartItem from "./cartItem/CartItem";
import OrderSuccess from "./orderSuccess/OrderSuccess";
import OrderSummary from "./orderSummary/OrderSummary";
import styles from "./cart.module.css";

const Cart = () => {
  const { items, count, subtotal, ready } = useCart();
  const [delivery, setDelivery] = useState<DeliveryId>("courier");
  const [payment, setPayment] = useState<PaymentId>("card");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  if (orderId) return <OrderSuccess orderId={orderId} paid={payment !== "cash"} />;
  if (!ready) return <section className={styles.loading} aria-busy="true" />;
  if (items.length === 0) return <CartEmpty />;

  const freeDelivery = subtotal >= FREE_DELIVERY_FROM;
  const deliveries = deliveryOptions.map((d) =>
    d.cost > 0 && freeDelivery ? { ...d, note: "Завтра · бесплатно" } : d,
  );
  const option = deliveryOptions.find((d) => d.id === delivery) ?? deliveryOptions[0];
  const shipping = option.cost > 0 && freeDelivery ? 0 : option.cost;

  // Тестовая оплата: имитируем ответ платёжного сервиса.
  // Позже здесь будет запрос к бэкенду и переход на страницу оплаты.
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setOrderId(String(10000 + Math.floor(Math.random() * 90000)));
      clearCart();
      setLoading(false);
    }, 1200);
  };

  return (
    <section className={styles.cart}>
      <form className={styles.inner} onSubmit={submit}>
        <div className={styles.main}>
          <div className={styles.notice}>
            <Sparkle size={10} />
            Тестовый режим оплаты — деньги не списываются
          </div>

          <div className={styles.section}>
            <h1 className={styles.title}>Корзина +</h1>
            <ul className={styles.list}>
              {items.map((item) => (
                <CartItem key={`${item.slug}-${item.colorId}-${item.size}`} item={item} />
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.title}>Доставка +</h2>
            <div className={styles.fields}>
              <Field id="name" label="Имя и фамилия" autoComplete="name" required />
              <Field
                id="phone"
                label="Телефон"
                type="tel"
                autoComplete="tel"
                placeholder="+996 ___ __ __ __"
                required
              />
              {delivery === "courier" && (
                <Field
                  id="address"
                  label="Адрес"
                  autoComplete="street-address"
                  placeholder="Город, улица, дом, квартира"
                  wide
                  required
                />
              )}
            </div>
            <ChoiceGroup
              name="delivery"
              label="Способ доставки"
              options={deliveries}
              value={delivery}
              onChange={setDelivery}
            />
          </div>

          <div className={styles.section}>
            <h2 className={styles.title}>Оплата +</h2>
            <ChoiceGroup
              name="payment"
              label="Способ оплаты"
              options={paymentOptions}
              value={payment}
              onChange={setPayment}
            />
            {payment === "card" && (
              <p className={styles.hint}>
                После нажатия «Оплатить» откроется защищённая страница платёжного сервиса.
                Данные карты на сайте не вводятся и не хранятся.
              </p>
            )}
          </div>
        </div>

        <OrderSummary
          count={count}
          subtotal={subtotal}
          shipping={shipping}
          payment={payment}
          loading={loading}
        />
      </form>
    </section>
  );
};

export default Cart;
