"use client";
import { useState, useEffect } from "react";
import { sellers } from "@/data/sellers";
import { saveToStorage, getFromStorage } from "@/utils/storage";
import styles from "../../page.module.css";

export default function ProfilePage() {
  const [seller, setSeller] = useState(sellers[0]);

  useEffect(() => {
    const saved = getFromStorage("sellerProfile", sellers[0]);
    setSeller(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveToStorage("sellerProfile", seller);
    alert("Profile updated successfully (mock save)!");
  };

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
            value={seller.location}
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
            value={seller.bio}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Write a short bio about yourself"
          />
        </div>

        <button type="submit" className={styles.buttonPrimary}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
