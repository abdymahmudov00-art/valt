import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout.c";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "VALT — Performance Gymwear",
    template: "%s — VALT",
  },
  description:
    "VALT — одежда для тренировок из Кыргызстана. Discipline over motivation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
