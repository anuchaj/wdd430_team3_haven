import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
        <button className={styles.buttonPrimary}>Shop Now</button>
      </section>

      {/* Featured Products Section */}
      <main className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <p className={styles.sectionSubtitle}>
          Our best picks, crafted with love and care
        </p>
        <div className={styles.productGrid}>
          {[45, 55, 30, 20].map((price, i) => (
            <div key={i} className={styles.productCard}>
              <div
                style={{
                  height: "150px",
                  background: "#eee",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h4>Product Title</h4>
              <p>${price}.00</p>
              <button className={styles.buttonPrimary}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer has moved to sepaarate component*/}
    </div>
  );
}
