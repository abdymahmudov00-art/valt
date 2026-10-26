import type { InputHTMLAttributes } from "react";
import styles from "./field.module.css";

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  id: string;
  /** Занять всю строку в сетке формы */
  wide?: boolean;
  hint?: string;
}

const Field = ({ label, id, wide = false, hint, ...input }: FieldProps) => (
  <label htmlFor={id} className={`${styles.field} ${wide ? styles.wide : ""}`}>
    <span className={styles.label}>{label}</span>
    <input id={id} className={styles.input} {...input} />
    {hint && <span className={styles.hint}>{hint}</span>}
  </label>
);

export default Field;
