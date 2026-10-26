import styles from "./barcode.module.css";

interface BarcodeProps {
  caption?: string;
  align?: "start" | "end";
}

const Barcode = ({ caption, align = "start" }: BarcodeProps) => (
  <div className={`${styles.barcode} ${align === "end" ? styles.end : ""}`}>
    <div className={styles.bars} aria-hidden="true" />
    {caption && <span className={styles.caption}>{caption}</span>}
  </div>
);

export default Barcode;
