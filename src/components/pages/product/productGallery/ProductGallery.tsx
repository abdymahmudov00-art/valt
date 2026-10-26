import Image from "next/image";
import type { Product, ProductColor } from "@/components/types/product";
import { getFabric } from "@/components/utils/fabric";
import styles from "./productGallery.module.css";

interface ProductGalleryProps { product: Product; color: ProductColor; }

const ProductGallery = ({ product, color }: ProductGalleryProps) => {
  const image = color.images?.[0] ?? product.images?.[0];
  const fabric = getFabric(product, color);
  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        {image && <Image src={image} alt={product.name + " · " + color.name} width={1254} height={1254} sizes="(max-width: 1040px) 100vw, 60vw" className={styles.productPhoto} />}
      </div>
      <figure className={styles.detail}>
        <div role="img" aria-label={fabric.label + " · " + color.name + ". Визуализация"} className={styles.fabricPhoto} style={{ backgroundPosition: fabric.position, filter: fabric.filter }} />
        <figcaption className={styles.detailLabel}>Ткань · {color.name}<small>Визуализация фактуры</small></figcaption>
      </figure>
      <figure className={styles.detail}>
        {image && <Image src={image} alt={"Силуэт · " + product.name + " · " + color.name} fill sizes="(max-width: 1040px) 50vw, 30vw" className={styles.silhouettePhoto} />}
        <figcaption className={styles.detailLabel}>Силуэт изделия</figcaption>
      </figure>
    </div>
  );
};
export default ProductGallery;
