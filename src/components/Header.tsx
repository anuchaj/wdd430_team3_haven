"use client";

// import Link from "next/link";
import styles from "../app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1
          style={{
            color: "var(--color-primary)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <a href="/">Handcrafted Haven</a>
        </h1>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/sellers">Sellers</a>
          <a href="/about">About</a>
        </nav>
        <div>
          <button className={styles.buttonPrimary}>Login</button>
          <button className={styles.buttonSecondary}>Cart</button>
        </div>
      </header>
  );
}
