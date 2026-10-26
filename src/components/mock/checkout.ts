import type { DeliveryOption, PaymentOption } from "@/components/types/cart";

export const FREE_DELIVERY_FROM = 5000;

export const deliveryOptions: DeliveryOption[] = [
  { id: "courier", name: "Курьер по Бишкеку", note: "Завтра · 200 сом", cost: 200 },
  { id: "pickup", name: "Самовывоз", note: "Сегодня · бесплатно", cost: 0 },
];

export const paymentOptions: PaymentOption[] = [
  { id: "card", name: "Карта", note: "Visa, Mastercard, Элкарт" },
  { id: "qr", name: "QR-оплата", note: "Через приложение банка" },
  { id: "cash", name: "При получении", note: "Наличными или картой" },
];
