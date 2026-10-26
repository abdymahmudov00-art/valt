import Link from "next/link";
import ArrowIcon from "@/components/ui/arrowIcon/ArrowIcon";
import styles from "./arrowLink.module.css";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const ArrowLink = ({ href, children, external = false }: ArrowLinkProps) => {
  const content = (
    <>
      {children}
      <ArrowIcon size={16} className={styles.arrow} />
    </>
  );

  if (external) {
    return (
      <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.link}>
      {content}
    </Link>
  );
};

export default ArrowLink;
