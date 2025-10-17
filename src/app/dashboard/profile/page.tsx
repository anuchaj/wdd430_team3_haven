// /dashboard/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "../../page.module.css";

interface User {
  _id?: string;
  name: string;
  email: string;
  image: string;
  location?: string;
  bio?: string;
  accountType?: string;
}

export default function ProfilePage() {
  const [seller, setSeller] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user from API
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.length > 0) setSeller(data[0]); // Use first user (mock "logged in" user)
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!seller) return;
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seller?._id) return alert("No user found.");

    try {
      const res = await fetch(`/api/users/${seller._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seller),
      });

      if (res.ok) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (loading) return <p className={styles.pageMain}>Loading...</p>;
  if (!seller) return <p className={styles.pageMain}>No user found.</p>;

  return (
    <div className={styles.pageMain}>
      <h2 className={styles.pageTitle}>Edit Profile</h2>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={seller.name}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={seller.location || ""}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter your location"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={seller.bio || ""}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Write a short bio about yourself"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Profile Image URL</label>
          <input
            id="image"
            type="text"
            name="image"
            value={seller.image}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Enter image URL"
          />
        </div>

        <button type="submit" className={styles.buttonPrimary}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
