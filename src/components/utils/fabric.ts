import type { Product, ProductColor } from "@/components/types/product";

/** Иллюстрации фактуры; не спецификация фактического состава ткани. */
export function getFabric(product: Product, color?: ProductColor) {
  const light = color?.id === "milk" || color?.id === "white";
  const fleece = product.category === "hoodies" || product.slug === "joggers" || product.slug === "essential-shorts";
  const woven = product.category === "accessories" || product.slug === "basic-shorts";
  const position = light ? "0% 100%" : woven ? "100% 100%" : fleece ? "100% 0%" : "0% 0%";
  const label = woven ? "Диагональное плетение" : fleece ? "Плотная трикотажная фактура" : "Мелкая трикотажная фактура";
  const filter = light ? (color?.id === "white" ? "grayscale(1) brightness(1.1)" : "none") : color?.id === "black" && fleece ? "brightness(.55)" : color?.id === "graphite" && !fleece ? "brightness(1.6)" : color?.id === "grey" ? "brightness(1.35)" : "none";
  return { position, label, filter };
}
