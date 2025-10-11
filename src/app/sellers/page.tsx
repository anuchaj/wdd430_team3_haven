// src/app/sellers/page.tsx

"use client";

import styles from "../page.module.css";
import { sellers } from "@/data/sellers";
import SellerCard from "@/components/SellerCard";

export default function SellersPage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
      <h2 className={styles.sectionTitle}>Our Sellers</h2>
      <p className={styles.sectionSubtitle}>
        Meet the talented artisans bringing creativity to life across Africa.
      </p>

      {/* Seller Grid */}
      <div className={styles.productGrid}>
        {sellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <p style={{ marginBottom: "1rem", color: "#555" }}>
          Are you a craftsman, artist, or creative seller?
        </p>
        <button className={styles.buttonPrimary}>Become a Seller</button>
      </div>
    </main>
  );
}
