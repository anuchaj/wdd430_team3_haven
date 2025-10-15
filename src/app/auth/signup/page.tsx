"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now, just simulate signup (we'll store in MongoDB later)
    console.log("User registered:", formData);
    router.push("/auth/login");
  }

  return (
    <main style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          className={styles.inputField}
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className={styles.inputField}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <button className={styles.buttonPrimary} type="submit">
          Create Account
        </button>
      </form>
    </main>
  );
}
