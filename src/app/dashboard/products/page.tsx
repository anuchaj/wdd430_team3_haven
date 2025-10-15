"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { products as defaultProducts } from "@/data/products";
import { saveToStorage, getFromStorage } from "@/utils/storage";
import styles from "./page.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const saved = getFromStorage("sellerProducts", defaultProducts);
    setProducts(saved);
  }, []);

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
    saveToStorage("sellerProducts", filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>My Products</h2>
        <Link href="/dashboard/products/new" className={styles.addButton}>
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <p className={styles.empty}>You have no products yet. Click “Add Product” to get started!</p>
      ) : (
        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <img src={p.image} alt={p.name} className={styles.image} />
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.price}>${p.price}</p>
              <div className={styles.actions}>
                <Link href={`/dashboard/products/${p.id}/edit`} className={styles.edit}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(p.id)} className={styles.delete}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
