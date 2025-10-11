import styles from "../page.module.css";

export default function Contact() {
  return (
    <div>
      <main className={styles.pageMain}>
        <h2 className={styles.pageTitle}>Get in Touch</h2>
        <p className={styles.pageText}>
          We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries,
          our team is here to help.
        </p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className={styles.buttonPrimary}>Send Message</button>
        </form>

        <div className={styles.contactInfo}>
          <h3>Our Office</h3>
          <p>Aba, Abia State, Nigeria</p>
          <p>Email: <a href="mailto:info@handcraftedhaven.com">info@handcraftedhaven.com</a></p>
          <p>Phone: +234 806 432 7684</p>
        </div>
      </main>
    </div>
  );
}
