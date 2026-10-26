"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ui/productCard/ProductCard";
import { categories, products } from "@/components/mock/products";
import type { CategoryId } from "@/components/types/product";
import styles from "./catalog.module.css";

const isCategory = (v: string | null): v is CategoryId =>
  categories.some((c) => c.id === v);

const Catalog = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const raw = params.get("category");
  const active = isCategory(raw) ? raw : null;
  const list = active ? products.filter((p) => p.category === active) : products;

  const select = (id: CategoryId | null) => {
    router.replace(id ? `${pathname}?category=${id}` : pathname, { scroll: false });
  };

  return (
    <CatalogView active={active} count={list.length} onSelect={select}>
      {list.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </CatalogView>
  );
};

interface CatalogViewProps {
  active: CategoryId | null;
  count: number;
  onSelect?: (id: CategoryId | null) => void;
  children: React.ReactNode;
}

/** Разметка каталога — используется и как заглушка до загрузки параметров */
export const CatalogView = ({ active, count, onSelect, children }: CatalogViewProps) => {
  const filters: { id: CategoryId | null; name: string }[] = [
    { id: null, name: "Все" },
    ...categories,
  ];

  return (
    <section className={styles.catalog}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.titleWrap}>
            <span className={styles.eyebrow}>Магазин · {count}</span>
            <h1 className={styles.title}>Каталог</h1>
          </div>
          <div className={styles.filters} role="group" aria-label="Категории">
            {filters.map((f) => (
              <button
                key={f.name}
                type="button"
                className={`${styles.filter} ${f.id === active ? styles.filterActive : ""}`}
                aria-pressed={f.id === active}
                onClick={() => onSelect?.(f.id)}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>
        {count === 0 ? (
          <p className={styles.empty}>В этой категории пока пусто — скоро новый дроп.</p>
        ) : (
          <div className={styles.grid}>{children}</div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
