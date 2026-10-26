import type { Metadata } from "next";
import Cart from "@/components/pages/cart/Cart";

export const metadata: Metadata = {
  title: "Корзина",
};

const page = () => {
  return <Cart />;
};

export default page;
