import type { Customer, Order, OrderStatus } from "@/components/types/order";

// Временные данные до подключения бэкенда.
export const customer: Customer = {
  firstName: "Нурлан",
  lastName: "Умотов",
  phone: "+996 555 12 34 56",
  email: "",
  size: "M",
  bonuses: 1240,
  memberId: "004812",
  address: "Бишкек, ул. Киевская 95, кв. 12",
};

export const orders: Order[] = [
  { id: "10482", date: "26 октября 2026", itemsCount: 2, total: 5580, status: "paid" },
  { id: "10317", date: "12 октября 2026", itemsCount: 1, total: 1890, status: "shipping" },
  { id: "10021", date: "28 сентября 2026", itemsCount: 3, total: 6270, status: "delivered" },
  { id: "09874", date: "3 сентября 2026", itemsCount: 1, total: 1290, status: "cancelled" },
];

export const orderStatusLabel: Record<OrderStatus, string> = {
  paid: "Оплачен",
  shipping: "В пути",
  delivered: "Доставлен",
  cancelled: "Отменён",
};
