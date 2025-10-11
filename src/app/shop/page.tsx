// src/app/shop/page.tsx
"use client";

import { useState } from "react";
import styles from "../page.module.css";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Shop All Products</h2>
      <p className={styles.sectionSubtitle}>
        Discover handmade treasures crafted with love.
      </p>

      {/* --- Filter Dropdown --- */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">All Categories</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Kitchenware">Kitchenware</option>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
          <option value="Art">Art</option>
          <option value="Jewelry">Jewelry</option>
        </select>
      </div>

      {/* --- Product Grid --- */}
      <main className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#777" }}>
            No products found in this category.
          </p>
        )}
      </main>
    </div>
  );
}
