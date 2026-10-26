import Link from "next/link";
import styles from "./logo.module.css";

interface LogoProps {
  size?: "sm" | "md";
  /** Без ссылки — например, в подвале */
  asLink?: boolean;
}

// Знак VALT по предоставленному референсу.
const Mark = () => (
  <svg className={styles.mark} viewBox="210 65 1020 760" fill="none" aria-hidden="true">
    <path d="M225 311 L369 373 L367 413 L509 660 L725 301 L457 301 L1212 82 L819 296 L509 812 Z" fill="currentColor" />
  </svg>
);

const Logo = ({ size = "md", asLink = true }: LogoProps) => {
  const content = (
    <>
      <Mark />
      <span className={styles.word}>VALT</span>
    </>
  );
  const className = `${styles.logo} ${styles[size]}`;

  if (!asLink) return <span className={className}>{content}</span>;

  return (
    <Link href="/" className={className} aria-label="VALT — на главную">
      {content}
    </Link>
  );
};

export default Logo;
