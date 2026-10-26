import styles from "./qtyStepper.module.css";

interface QtyStepperProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

const QtyStepper = ({ value, max, onChange }: QtyStepperProps) => (
  <div className={styles.stepper}>
    <button
      type="button"
      className={styles.btn}
      aria-label="Уменьшить количество"
      onClick={() => onChange(value - 1)}
    >
      −
    </button>
    <span className={styles.value} aria-live="polite">
      {value}
    </span>
    <button
      type="button"
      className={styles.btn}
      aria-label="Увеличить количество"
      disabled={value >= max}
      onClick={() => onChange(value + 1)}
    >
      +
    </button>
  </div>
);

export default QtyStepper;
