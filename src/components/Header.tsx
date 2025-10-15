"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "../app/page.module.css";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <Link href="/"><h1>Handcrafted Haven</h1></Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/sellers">Sellers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart</Link>

        {session ? (
          <>
            <Link href="/dashboard/profile">My Account</Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className={styles.buttonSecondary}
              style={{ marginLeft: "1rem" }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
