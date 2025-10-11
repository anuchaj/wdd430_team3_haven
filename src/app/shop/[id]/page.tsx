// src/app/shop/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Product Not Found</h2>
        <p className={styles.sectionSubtitle}>
          Sorry, we couldn’t find the product you’re looking for.
        </p>
      </div>
    );
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className={styles.productsSection}>
      {/* Product Info Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
        <div style={{ flex: "1 1 350px", position: "relative", height: "350px" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>

        <div style={{ flex: "1 1 350px" }}>
          <h2 className={styles.sectionTitle}>{product.name}</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
            Category: <strong>{product.category}</strong>
          </p>
          <p
            style={{
              color: "var(--color-primary)",
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginBottom: "1rem",
            }}
          >
            ${product.price}.00
          </p>
          <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            {product.description || "No detailed description available for this product."}
          </p>
          <p style={{ fontStyle: "italic", color: "#555" }}>
            Seller: {product.seller}
          </p>
          <button className={styles.buttonPrimary}>Add to Cart</button>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className={styles.sectionTitle}>Related Products</h3>
          <p className={styles.sectionSubtitle}>
            More from the “{product.category}” category
          </p>

          <div className={styles.productGrid}>
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
