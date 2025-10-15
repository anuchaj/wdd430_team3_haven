import styles from "../page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.pageMain}>
      <h2 className={styles.pageTitle}>Overview</h2>
      <p className={styles.pageText}>
        Here’s a quick summary of your seller account and recent activity.
      </p>
    </div>
  );
}
