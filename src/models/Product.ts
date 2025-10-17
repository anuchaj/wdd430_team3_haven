import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String },
    sellerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Product = models.Product || mongoose.model("Product", productSchema);
export default Product;
