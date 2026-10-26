import type { Metadata } from "next";
import Account from "@/components/pages/account/Account";

export const metadata: Metadata = {
  title: "Личный кабинет",
};

const page = () => {
  return <Account />;
};

export default page;
