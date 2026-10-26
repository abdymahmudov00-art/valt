import type { Category, Product } from "@/components/types/product";

export const categories: Category[] = [
  { id: "tees", name: "Футболки" },
  { id: "hoodies", name: "Худи" },
  { id: "bottoms", name: "Шорты и джоггеры" },
  { id: "accessories", name: "Аксессуары" },
];

const black = { id: "black", name: "Чёрный", hex: "#0a0a0a", tone: "#0d0d0d" };
const graphite = { id: "graphite", name: "Графит", hex: "#4a4a4a", tone: "#1c1c1c" };
const grey = { id: "grey", name: "Серый", hex: "#bcbcbc", tone: "#bcbcbc" };
const milk = { id: "milk", name: "Молочный", hex: "#e8e3d8", tone: "#e8e3d8" };
const white = { id: "white", name: "Белый", hex: "#ededed", tone: "#ededed" };

// Временные данные: цены, остатки и описания нужно заменить на реальные.
export const products: Product[] = [
  {
    slug: "compression-tee",
    images: ["/products/compression-tee.png"],
    sku: "VT-TEE-01",
    name: "VALT Компрессионная",
    category: "tees",
    price: 1890,
    isNew: true,
    isBestseller: true,
    description:
      "Плотно облегает, поддерживает мышцы и не сковывает движения. Плоские швы не натирают на тяжёлых подходах.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [
      { ...black, images: ["/products/compression-tee.png"], stock: { S: 3, M: 9, L: 6, XL: 2, XXL: 0 } },
      { ...graphite, images: ["/products/compression-graphite-generated.png"], stock: { S: 1, M: 4, L: 4, XL: 0, XXL: 0 } },
      { ...white, images: ["/products/compression-white-generated.png"], stock: { S: 2, M: 5, L: 3, XL: 1, XXL: 0 } },
    ],
  },
  {
    slug: "essential-hoodie",
    images: ["/products/essential-hoodie-graphite.png"],
    sku: "VT-HOOD-02",
    name: "VALT Худи Essential",
    category: "hoodies",
    price: 3490,
    isNew: true,
    description:
      "Плотный футер, свободная посадка, глубокий капюшон. Для разминки, дороги в зал и после тренировки.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [
      { ...graphite, images: ["/products/essential-hoodie-graphite.png"], stock: { S: 0, M: 4, L: 1, XL: 0, XXL: 0 } },
      { ...milk, images: ["/products/essential-hoodie-milk.png"], stock: { S: 2, M: 6, L: 5, XL: 2, XXL: 1 } },
      { ...black, images: ["/products/hoodie-black-generated.png"], stock: { S: 2, M: 6, L: 5, XL: 2, XXL: 1 } },
    ],
  },
  {
    slug: "oversize-tee",
    images: ["/products/oversize-black-generated.png"],
    sku: "VT-TEE-03",
    name: "VALT Оверсайз Tee",
    category: "tees",
    price: 1690,
    isBestseller: true,
    description:
      "Свободный крой и спущенное плечо. Плотный хлопок, который держит форму после стирки.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [
      { ...black, images: ["/products/oversize-black-generated.png"], stock: { S: 4, M: 8, L: 7, XL: 3, XXL: 1 } },
      { ...white, images: ["/products/oversize-white-generated.png"], stock: { S: 2, M: 3, L: 0, XL: 1, XXL: 0 } },
    ],
  },
  {
    slug: "joggers",
    images: ["/products/joggers-grey.png"],
    sku: "VT-JOG-04",
    name: "VALT Джоггеры",
    category: "bottoms",
    price: 2990,
    isNew: true,
    isBestseller: true,
    description:
      "Зауженный низ на манжетах, карманы на молнии, эластичный пояс со шнурком.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [
      { ...grey, images: ["/products/joggers-grey.png"], stock: { S: 3, M: 11, L: 6, XL: 2, XXL: 0 } },
      { ...black, images: ["/products/joggers-black.png"], stock: { S: 3, M: 11, L: 6, XL: 2, XXL: 0 } },
      { ...graphite, images: ["/products/joggers-graphite-generated.png"], stock: { S: 1, M: 3, L: 2, XL: 1, XXL: 0 } },
    ],
  },
  {
    slug: "training-shorts",
    images: ["/products/shorts-2-in-1.png"],
    sku: "VT-SHR-05",
    name: "VALT Шорты Training",
    category: "bottoms",
    price: 1790,
    isBestseller: true,
    description:
      "Лёгкие шорты с внутренними тайтсами. Не задираются на приседе и выпадах.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [{ ...black, images: ["/products/shorts-2-in-1.png"], stock: { S: 2, M: 7, L: 5, XL: 2, XXL: 0 } }],
  },
  {
    slug: "cap",
    images: ["/products/cap-generated.png"],
    sku: "VT-CAP-06",
    name: "VALT Кепка",
    category: "accessories",
    price: 1290,
    isNew: true,
    description:
      "Шестиклинка с вышитым логотипом и регулируемой застёжкой сзади.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    colors: [{ ...black, images: ["/products/cap-generated.png"], stock: { ONE: 18 } }],
  },
  // Цена и остатки новых моделей пока демонстрационные, как у компрессионной футболки.
  {
    slug: "compression-longsleeve",
    sku: "VT-LS-07",
    name: "VALT Компрессионный лонгслив",
    category: "tees",
    price: 1890,
    isNew: true,
    description: "Чёрный компрессионный лонгслив с длинными рукавами и логотипом VALT на груди.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    images: ["/products/compression-longsleeve.png"],
    colors: [{ ...black, images: ["/products/compression-longsleeve.png"], stock: { S: 3, M: 9, L: 6, XL: 2, XXL: 0 } }],
  },
  {
    slug: "training-tank",
    sku: "VT-TANK-08",
    name: "VALT Майка Training",
    category: "tees",
    price: 1890,
    isNew: true,
    description: "Чёрная спортивная майка с круглым вырезом и логотипом VALT на груди.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    images: ["/products/training-tank.png"],
    colors: [{ ...black, images: ["/products/training-tank.png"], stock: { S: 3, M: 9, L: 6, XL: 2, XXL: 0 } }],
  },
  // Новые модели используют демонстрационные цены и остатки соответствующих категорий.
  {
    slug: "zip-hoodie", sku: "VT-HOOD-09", name: "VALT Худи на молнии",
    category: "hoodies", price: 3490, isNew: true,
    description: "Чёрное худи с капюшоном, застёжкой на молнию и боковыми карманами.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    images: ["/products/zip-hoodie-black.png"],
    colors: [{ ...black, images: ["/products/zip-hoodie-black.png"], stock: { S: 2, M: 6, L: 5, XL: 2, XXL: 1 } }],
  },
  {
    slug: "essential-shorts", sku: "VT-SHR-10", name: "VALT Шорты Essential",
    category: "bottoms", price: 1790, isNew: true,
    description: "Шорты с эластичным поясом, шнурком и боковыми карманами. Логотип VALT на левой штанине.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    images: ["/products/shorts-milk.png"],
    colors: [
      { ...milk, images: ["/products/shorts-milk.png"], stock: { S: 2, M: 7, L: 5, XL: 2, XXL: 0 } },
      { ...grey, images: ["/products/shorts-grey.png"], stock: { S: 2, M: 7, L: 5, XL: 2, XXL: 0 } },
      { ...black, images: ["/products/shorts-black.png"], stock: { S: 2, M: 7, L: 5, XL: 2, XXL: 0 } },
    ],
  },
  {
    slug: "basic-shorts", sku: "VT-SHR-11", name: "VALT Шорты Basic",
    category: "bottoms", price: 1790, isNew: true,
    description: "Чёрные шорты с эластичным поясом, боковыми карманами и белым логотипом VALT.",
    composition: "Состав ткани уточняется. Рекомендации по уходу — на ярлыке изделия.",
    images: ["/products/training-shorts.png"],
    colors: [{ ...black, images: ["/products/training-shorts.png"], stock: { S: 2, M: 7, L: 5, XL: 2, XXL: 0 } }],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const newDrops = products.filter((p) => p.isNew);
