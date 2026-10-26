import type { Metadata } from "next";
import { Suspense } from "react";
import Catalog, { CatalogView } from "@/components/pages/catalog/Catalog";
import ProductCard from "@/components/ui/productCard/ProductCard";
import { products } from "@/components/mock/products";

export const metadata: Metadata = {
  title: "Каталог",
};

const page = () => {
  return (
    <Suspense
      fallback={
        <CatalogView active={null} count={products.length}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </CatalogView>
      }
    >
      <Catalog />
    </Suspense>
  );
};

export default page;
