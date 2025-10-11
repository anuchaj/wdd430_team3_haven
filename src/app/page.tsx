// src/app/page.tsx
//"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import SellerCard from "@/components/SellerCard";
import { products } from "@/data/products";
import { sellers } from "@/data/sellers";


export default function Home() {
  // Randomly select 4 unique products
  const featuredProducts = [...products]
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 4); // Take 4 items
  
  // Randomly select 3 sellers
  const featuredSellers = [...sellers].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div>
      {/* Header has moved to sepaarate component */}

      {/* Hero */}
      <section className={styles.hero}>
        <h2>Discover Handmade Treasures</h2>
        <p>
          Support artisans, shop unique crafts, and find one-of-a-kind
          creations.
        </p>
        <a href="/shop"><button className={styles.buttonPrimary}>Shop Now</button></a> 
      </section>

      {/* Featured Products Section */}
      <main className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <p className={styles.sectionSubtitle}>  
          {/* Curated from our best artisans and top-rated sellers.*/}
          Our best picks, crafted with love and care
        </p>

        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="/shop" className={styles.buttonPrimary}>
            View All Products
          </a>
        </div>

         {/* Meet Our Sellers Section */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Meet Our Sellers</h2>
        <p className={styles.sectionSubtitle}>
          The creative minds and hands behind our beautiful handcrafted collections.
        </p>

        <div className={styles.productGrid}>
          {featuredSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="/sellers" className={styles.buttonPrimary}>
            Meet All Sellers
          </a>
        </div>
      </section>
      </main>

      {/* Footer has moved to sepaarate component*/}
    </div>
  );
}

