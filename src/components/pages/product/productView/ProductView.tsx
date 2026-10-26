"use client";

import { useState } from "react";
import { addToCart, useCart } from "@/components/hooks/useCart/useCart";
import type { Product, Size } from "@/components/types/product";
import { formatPrice } from "@/components/utils/format";
import Button from "@/components/ui/button/Button";
import Sparkle from "@/components/ui/sparkle/Sparkle";
import ProductGallery from "../productGallery/ProductGallery";
import ProductOptions from "../productOptions/ProductOptions";
import styles from "./productView.module.css";

interface ProductViewProps {
  product: Product;
  /** Описание, состав, доставка — рендерятся на сервере */
  children: React.ReactNode;
}

const SIZE_ORDER: Size[] = ["XS", "S", "M", "L", "XL", "XXL", "ONE"];

function pickSize(stock: Partial<Record<Size, number>>, preferred?: Size): Size {
  const sizes = SIZE_ORDER.filter((s) => s in stock);
  if (preferred && (stock[preferred] ?? 0) > 0) return preferred;
  if ((stock.M ?? 0) > 0) return "M";
  return sizes.find((s) => (stock[s] ?? 0) > 0) ?? sizes[0];
}

const ProductView = ({ product, children }: ProductViewProps) => {
  const [colorId, setColorId] = useState(product.colors[0].id);
  const [size, setSize] = useState<Size>(() => pickSize(product.colors[0].stock));
  const [added, setAdded] = useState(false);
  const { items } = useCart();

  const color = product.colors.find((c) => c.id === colorId) ?? product.colors[0];
  const sizes = SIZE_ORDER.filter((s) => s in color.stock).map((s) => ({
    size: s,
    stock: color.stock[s] ?? 0,
  }));
  const stock = color.stock[size] ?? 0;
  const inCart =
    items.find((i) => i.slug === product.slug && i.colorId === colorId && i.size === size)
      ?.qty ?? 0;
  const canAdd = stock - inCart > 0;

  const changeColor = (id: string) => {
    const next = product.colors.find((c) => c.id === id);
    if (!next) return;
    setColorId(id);
    setSize(pickSize(next.stock, size));
    setAdded(false);
  };

  const changeSize = (s: Size) => {
    setSize(s);
    setAdded(false);
  };

  const add = () => {
    if (!canAdd) return;
    addToCart(product.slug, colorId, size);
    setAdded(true);
  };

  let stockText = "Нет в наличии";
  if (stock > 0 && !canAdd) stockText = "Все единицы этого размера уже в корзине";
  else if (stock > 2) stockText = `В наличии — ${stock} шт.`;
  else if (stock > 0) stockText = `Осталось мало — ${stock} шт.`;

  return (
    <div className={styles.view}>
      <ProductGallery product={product} color={color} />

      <div className={styles.panel}>
        <div className={styles.head}>
          {product.isNew && (
            <span className={styles.eyebrow}>
              <Sparkle size={10} /> Новый дроп
            </span>
          )}
          <h1 className={styles.title}>{product.name}</h1>
          <span className={styles.sku}>{product.sku}</span>
          <span className={styles.price}>{formatPrice(product.price)}</span>
        </div>

        <ProductOptions
          colors={product.colors}
          colorId={colorId}
          onColor={changeColor}
          sizes={sizes}
          size={size}
          onSize={changeSize}
          stockText={stockText}
          lowStock={stock > 0 && stock <= 2}
        />

        <div className={styles.actions}>
          <Button size="lg" arrow block onClick={add} disabled={!canAdd}>
            {added ? "Добавлено — ещё одну" : canAdd ? "Добавить в корзину" : "Нет в наличии"}
          </Button>
          {added && (
            <Button href="/cart" size="lg" variant="solid" block>
              Перейти в корзину
            </Button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProductView;
