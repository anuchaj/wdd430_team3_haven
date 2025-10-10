import styles from "../page.module.css";

export default function Shop() {
  return (
    <div>

      <main style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "1rem" }}>
          Shop Products
        </h2>

        {/* Filter placeholder */}
        <div style={{ marginBottom: "2rem" }}>
          <label style={{ marginRight: "1rem" }}>Filter by Category:</label>
          <select>
            <option>All</option>
            <option>Jewelry</option>
            <option>Home Decor</option>
            <option>Clothing</option>
          </select>
        </div>

        {/* Product grid */}
        <div className={styles.productGrid}>
          {[40, 60, 25, 80].map((price, i) => (
            <div key={i} className={styles.productCard}>
              <div style={{ height: "150px", background: "#eee", borderRadius: "8px", marginBottom: "1rem" }} />
              <h4>Product {i + 1}</h4>
              <p>${price}.00</p>
              <button className={styles.buttonPrimary}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
