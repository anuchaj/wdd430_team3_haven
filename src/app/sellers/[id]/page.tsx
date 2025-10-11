// src/app/sellers/[id]/page.tsx

import { sellers } from "@/data/sellers";
import { products } from "@/data/products";
import Image from "next/image";
import styles from "@/app/page.module.css";
import ProductCard from "@/components/ProductCard";

type SellerDetailsProps = {
  params: { id: string };
};

export default function SellerDetailsPage({ params }: SellerDetailsProps) {
  const sellerId = parseInt(params.id);
  const seller = sellers.find((s) => s.id === sellerId);

  if (!seller) {
    return (
      <main style={{ textAlign: "center", padding: "4rem" }}>
        <h2>Seller not found</h2>
      </main>
    );
  }

  // Get all products by this seller
  const sellerProducts = products.filter(
    (product) => product.seller === seller.name
  );

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "2rem auto",
        padding: "0 1rem",
      }}
    >
      {/* Seller Header */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "200px",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            marginBottom: "1.5rem",
          }}
        >
          <Image
            src={seller.image}
            alt={seller.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <h2 className={styles.sectionTitle}>{seller.name}</h2>
        <p style={{ color: "#666", fontStyle: "italic", marginBottom: "0.5rem" }}>
          {seller.specialty}
        </p>
        <p style={{ color: "#888" }}>📍 {seller.location}</p>

        <p
          style={{
            maxWidth: "700px",
            marginTop: "1.5rem",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {seller.bio}{" **"}
          {seller.name} is one of our talented artisans specializing in{" "}
          <strong>{seller.specialty.toLowerCase()}</strong>. Each piece reflects
          a unique cultural story, crafted with skill and passion. We are proud
          to feature {seller.name} as part of the Handcrafted Haven community.{"** "}
        </p>

        
        {/* Contact Section */}
        <div className={styles.contactSection}>
            <h3>Contact Seller</h3>
            <p className={styles.contactEmail}>
                📧 <a href={`mailto:${seller.email}`}>{seller.email}</a>
            </p>
            <div className={styles.socialLinks}>
                {seller.socials?.instagram && (
                <a href={seller.socials.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                )}
                {seller.socials?.facebook && (
                <a href={seller.socials.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                )}
            </div>
        </div>


      </section>

      {/* Products by Seller */}
      <section className={styles.productsSection}>
        <h3 className={styles.sectionTitle}>Products by {seller.name}</h3>
        {sellerProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {sellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#777", marginTop: "2rem" }}>
            No products available from this seller yet.
          </p>
        )}
      </section>
    </main>
  );
}
