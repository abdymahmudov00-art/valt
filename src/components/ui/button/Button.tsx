import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import ArrowIcon from "@/components/ui/arrowIcon/ArrowIcon";
import styles from "./button.module.css";

type Variant = "outline" | "ghost" | "solid";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Стрелка справа, текст и стрелка разносятся по краям */
  arrow?: boolean;
  /** Растянуть на всю ширину */
  block?: boolean;
  /** Выбранное состояние (белая заливка) */
  active?: boolean;
  className?: string;
}

type LinkButtonProps = BaseProps & { href: string; "aria-label"?: string };
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const Button = ({
  children,
  variant = "outline",
  size = "md",
  arrow = false,
  block = false,
  active = false,
  className = "",
  ...rest
}: ButtonProps) => {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    arrow && styles.withArrow,
    block && styles.block,
    active && styles.active,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon className={styles.arrow} />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link href={rest.href} className={cls} aria-label={rest["aria-label"]}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest;
  return (
    <button type={type} className={cls} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;
