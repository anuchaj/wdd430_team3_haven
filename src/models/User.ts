// /models/User.ts
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: { type: String, enum: ["buyer", "seller"], default: "buyer" },
    image: { type: String, default: "/default-avatar.png" }, // 👈 added image field
    location: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
