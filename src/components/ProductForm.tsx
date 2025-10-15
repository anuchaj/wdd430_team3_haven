"use client";
import { useState, useEffect } from "react";
import { saveToStorage, getFromStorage } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { products as defaultProducts } from "@/data/products";

export default function ProductForm({ product }: { product?: any }) {
  const [form, setForm] = useState(
    product || { id: Date.now(), name: "", description: "", price: "", category: "", image: "" }
  );
  const router = useRouter();

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentProducts = getFromStorage("sellerProducts", defaultProducts);
    let updated;

    if (product) {
      updated = currentProducts.map((p: any) => (p.id === product.id ? form : p));
    } else {
      updated = [...currentProducts, { ...form, id: Date.now() }];
    }

    saveToStorage("sellerProducts", updated);
    alert("Product saved successfully!");
    router.push("/dashboard/products");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="w-full border p-2 rounded"
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
