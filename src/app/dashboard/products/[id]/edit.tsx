import ProductForm from "@/components/ProductForm";
import { products } from "@/data/products";

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <ProductForm product={product} />
    </div>
  );
}
