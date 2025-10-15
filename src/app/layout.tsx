"use client";

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <main className={styles.productsSection}>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
