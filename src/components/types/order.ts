export type OrderStatus = "paid" | "shipping" | "delivered" | "cancelled";

export interface Order {
  id: string;
  date: string;
  itemsCount: number;
  total: number;
  status: OrderStatus;
}

export interface Customer {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  size: string;
  bonuses: number;
  memberId: string;
  address: string;
}
