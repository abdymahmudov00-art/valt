import type { ProductColor, Size } from "@/components/types/product";
import styles from "./productOptions.module.css";

interface ProductOptionsProps {
  colors: ProductColor[];
  colorId: string;
  onColor: (id: string) => void;
  sizes: { size: Size; stock: number }[];
  size: Size;
  onSize: (size: Size) => void;
  stockText: string;
  lowStock: boolean;
}

const sizeLabel = (s: Size) => (s === "ONE" ? "Единый" : s);

const ProductOptions = ({
  colors,
  colorId,
  onColor,
  sizes,
  size,
  onSize,
  stockText,
  lowStock,
}: ProductOptionsProps) => {
  const colorName = colors.find((c) => c.id === colorId)?.name;

  return (
    <div className={styles.options}>
      <fieldset className={styles.group}>
        <legend className={styles.label}>
          Цвет — <span className={styles.value}>{colorName}</span>
        </legend>
        <div className={styles.colors}>
          {colors.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`${styles.swatch} ${c.id === colorId ? styles.swatchActive : ""}`}
              style={{ background: c.hex }}
              aria-label={c.name}
              aria-pressed={c.id === colorId}
              onClick={() => onColor(c.id)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.label}>Размер</legend>
        <div className={styles.sizes}>
          {sizes.map(({ size: s, stock }) => (
            <button
              key={s}
              type="button"
              className={`${styles.size} ${s === size ? styles.sizeActive : ""}`}
              disabled={stock === 0}
              aria-pressed={s === size}
              onClick={() => onSize(s)}
            >
              {sizeLabel(s)}
            </button>
          ))}
        </div>
        <span className={`${styles.stock} ${lowStock ? styles.stockLow : ""}`}>
          ● {stockText}
        </span>
      </fieldset>
    </div>
  );
};

export default ProductOptions;
