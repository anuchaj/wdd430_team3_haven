// /dashboard/products/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (loading) return <p className={styles.container}>Loading...</p>;

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
            <div key={p._id} className={styles.card}>
              <img src={p.image || "/placeholder.jpg"} alt={p.name} className={styles.image} />
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.price}>${p.price}</p>
              <div className={styles.actions}>
                <Link href={`/dashboard/products/${p._id}/edit`} className={styles.edit}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(p._id)} className={styles.delete}>
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
