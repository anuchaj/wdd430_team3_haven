import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

type Seller = {
  id: number;
  name: string;
  location: string;
  specialty: string;
  image: string;
};

type SellerCardProps = {
  seller: Seller;
};

export default function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className={styles.productCard}>
      <Link href={`/sellers/${seller.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            height: "180px",
            width: "180px",
            margin: "0 auto 1rem",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={seller.image}
            alt={seller.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h4>{seller.name}</h4>
        <p style={{ fontStyle: "italic", color: "#666" }}>{seller.specialty}</p>
        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
          📍 {seller.location}
        </p>
      </Link>

      <Link href={`/sellers/${seller.id}`}>
        <button className={styles.buttonPrimary}>View Profile</button>
      </Link>
    </div>
  );
}
