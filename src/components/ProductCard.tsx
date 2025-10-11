// src/components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.productCard}>
        <div
          style={{
            height: "200px",
            marginBottom: "1rem",
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h4>{product.name}</h4>
        <p style={{ color: "var(--color-primary)", fontWeight: "bold" }}>
          ${product.price}.00
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>{product.category}</p>
        <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
          by {product.seller}
        </p>
        <button className={styles.buttonPrimary}>Add to Cart</button>
      </div>
    </Link>
  );
}

