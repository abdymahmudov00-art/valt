export type CategoryId = "tees" | "hoodies" | "bottoms" | "accessories";

export interface Category {
  id: CategoryId;
  name: string;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "ONE";

export interface ProductColor {
  id: string;
  name: string;
  /** Цвет кружка-переключателя */
  hex: string;
  /** Фон заглушки фото, пока нет реальных снимков */
  tone: string;
  /** Фотографии конкретного цвета */
  images?: string[];
  /** Остаток по размерам для этого цвета */
  stock: Partial<Record<Size, number>>;
}

export interface Product {
  slug: string;
  sku: string;
  name: string;
  category: CategoryId;
  price: number;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
  composition: string;
  colors: ProductColor[];
  /** Пути к фото, когда они появятся (public/...) */
  images?: string[];
}
