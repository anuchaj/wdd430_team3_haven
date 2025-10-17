import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Product deleted" });
}
