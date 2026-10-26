"use client";

import { useSyncExternalStore } from "react";
import { getProduct } from "@/components/mock/products";
import type { CartItem } from "@/components/types/cart";
import type { Size } from "@/components/types/product";

const STORAGE_KEY = "valt-cart";
const EMPTY: CartItem[] = [];

let items: CartItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) {
      items = (parsed as CartItem[]).filter(
        (i) => i && getProduct(i.slug) && typeof i.qty === "number" && i.qty > 0,
      );
    }
  } catch {
    items = EMPTY;
  }
}

function commit(next: CartItem[]) {
  items = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Хранилище недоступно (приватный режим) — корзина живёт до перезагрузки.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      loaded = false;
      load();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  load();
  return items;
}

function getServerSnapshot() {
  return EMPTY;
}

const same = (a: CartItem, slug: string, colorId: string, size: Size) =>
  a.slug === slug && a.colorId === colorId && a.size === size;

/** Сколько единиц варианта есть на складе */
export function getStock(slug: string, colorId: string, size: Size): number {
  const color = getProduct(slug)?.colors.find((c) => c.id === colorId);
  return color?.stock[size] ?? 0;
}

export function addToCart(slug: string, colorId: string, size: Size, qty = 1) {
  load();
  const stock = getStock(slug, colorId, size);
  const existing = items.find((i) => same(i, slug, colorId, size));
  if (existing) {
    commit(
      items.map((i) =>
        i === existing ? { ...i, qty: Math.min(stock, i.qty + qty) } : i,
      ),
    );
  } else if (stock > 0) {
    commit([...items, { slug, colorId, size, qty: Math.min(stock, qty) }]);
  }
}

export function setQty(slug: string, colorId: string, size: Size, qty: number) {
  load();
  const stock = getStock(slug, colorId, size);
  const nextQty = Math.max(0, Math.min(stock, qty));
  commit(
    nextQty === 0
      ? items.filter((i) => !same(i, slug, colorId, size))
      : items.map((i) => (same(i, slug, colorId, size) ? { ...i, qty: nextQty } : i)),
  );
}

export function removeFromCart(slug: string, colorId: string, size: Size) {
  load();
  commit(items.filter((i) => !same(i, slug, colorId, size)));
}

export function clearCart() {
  commit(EMPTY);
}

const noopSubscribe = () => () => {};

export function useCart() {
  const cart = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false на сервере и при гидратации, пока корзина ещё не прочитана из localStorage
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce(
    (sum, i) => sum + (getProduct(i.slug)?.price ?? 0) * i.qty,
    0,
  );
  return { items: cart, count, subtotal, ready };
}
