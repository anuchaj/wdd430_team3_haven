import styles from "../page.module.css";

export default function Sellers() {
  return (
    <div>

      <main style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "2rem" }}>
          Our Sellers
        </h2>

        {/* Seller grid */}
        <div className={styles.productGrid}>
          {["Alice – Jewelry", "Ben – Pottery", "Carmen – Textiles", "Diego – Woodwork"].map((seller, i) => (
            <div key={i} className={styles.productCard}>
              <div style={{ height: "100px", width: "100px", background: "#ccc", borderRadius: "50%", margin: "0 auto 1rem" }} />
              <h4>{seller.split(" – ")[0]}</h4>
              <p>{seller.split(" – ")[1]}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className={styles.buttonPrimary}>Become a Seller</button>
        </div>
      </main>

    </div>
  );
}
