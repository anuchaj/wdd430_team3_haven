"use client";

// import Link from "next/link";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()}  Handcrafted Haven. Team #3. All rights reserved.</p>
        <div>
          <a href="/about">About</a> | <a href="#">Contact</a> |{" "}
          <a href="#">Terms</a>
        </div>
      </footer>
  );
}
