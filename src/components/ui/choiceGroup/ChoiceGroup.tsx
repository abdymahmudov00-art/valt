import styles from "./choiceGroup.module.css";

interface Choice<T extends string> {
  id: T;
  name: string;
  note: string;
}

interface ChoiceGroupProps<T extends string> {
  name: string;
  label: string;
  options: Choice<T>[];
  value: T;
  onChange: (id: T) => void;
}

/** Плитки-переключатели (доставка, оплата). Внутри — настоящие radio. */
const ChoiceGroup = <T extends string>({
  name,
  label,
  options,
  value,
  onChange,
}: ChoiceGroupProps<T>) => (
  <fieldset className={styles.group}>
    <legend className="visually-hidden">{label}</legend>
    {options.map((o) => (
      <label key={o.id} className={`${styles.choice} ${o.id === value ? styles.active : ""}`}>
        <input
          type="radio"
          name={name}
          value={o.id}
          checked={o.id === value}
          onChange={() => onChange(o.id)}
          className="visually-hidden"
        />
        <span className={styles.name}>{o.name}</span>
        <span className={styles.note}>{o.note}</span>
      </label>
    ))}
  </fieldset>
);

export default ChoiceGroup;
