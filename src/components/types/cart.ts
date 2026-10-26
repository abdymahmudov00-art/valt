import type { Size } from "./product";

export interface CartItem {
  slug: string;
  colorId: string;
  size: Size;
  qty: number;
}

export type DeliveryId = "courier" | "pickup";
export type PaymentId = "card" | "qr" | "cash";

export interface DeliveryOption {
  id: DeliveryId;
  name: string;
  note: string;
  cost: number;
}

export interface PaymentOption {
  id: PaymentId;
  name: string;
  note: string;
}
