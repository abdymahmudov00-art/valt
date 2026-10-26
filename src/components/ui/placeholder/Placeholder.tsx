import styles from "./placeholder.module.css";

interface PlaceholderProps {
  label?: string;
  /** Фон заглушки — для товаров берётся из цвета */
  tone?: string;
  ratio?: "square" | "portrait" | "wide";
  icon?: "tee" | "person" | "none";
  className?: string;
}

/** Заглушка вместо фото. Заменить на next/image, когда появятся снимки. */
const Placeholder = ({
  label = "Фото",
  tone,
  ratio = "square",
  icon = "tee",
  className = "",
}: PlaceholderProps) => {
  const light = tone ? isLight(tone) : false;

  return (
    <div
      className={`${styles.placeholder} ${styles[ratio]} ${light ? styles.light : ""} ${className}`}
      style={tone ? { background: tone } : undefined}
    >
      {icon === "tee" && (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 3l-5 3 2 4 3-1v12h8V9l3 1 2-4-5-3c-.5 1.5-2 2.5-4 2.5S8.5 4.5 8 3z" />
        </svg>
      )}
      {icon === "person" && (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="7" r="4" />
          <path d="M4 22c1.5-5 4.5-8 8-8s6.5 3 8 8" />
        </svg>
      )}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

function isLight(hex: string) {
  const v = hex.replace("#", "");
  if (v.length !== 6) return false;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export default Placeholder;
