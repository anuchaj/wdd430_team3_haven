//src/app/about/page.tsx

import styles from "../page.module.css";

export default function About() {
  return (
    <div>
      <main className={styles.pageMain}>
        <h2 className={styles.pageTitle}>Our Story</h2>
        <p className={styles.pageText}>
          <strong>Handcrafted Haven</strong> is a place where artisans and shoppers connect. We believe in the value of
          craftsmanship, sustainability, and supporting small businesses. Our mission is to provide a
          platform where artisans can showcase their unique creations and shoppers can discover
          meaningful, handmade treasures. Handcrafted Haven is a marketplace connecting artisans 
          and buyers who value authenticity, quality, and culture.
        </p>

        {/* Google Map Embed */}
        <div className={styles.mapContainer}>
          <iframe
            title="Handcrafted Haven Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7346408825954!2d7.358876674051947!3d5.105349939889889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042d179eae66a9b%3A0x2e19cb3ebf7266e1!2sAba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1698776543210!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <h3 className={styles.pageSubtitle}>Our Mission</h3>
        <p className={styles.pageText}>
          To support artisans worldwide by connecting them with buyers who value quality, authenticity,
          and creativity. Together, we celebrate craftsmanship and culture.
        </p>
      </main>
    </div>
  );
}
