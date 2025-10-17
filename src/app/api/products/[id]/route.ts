import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // <---- Notice the Promise here
): Promise<NextResponse> {
  const resolvedParams = await params;  // you have to await this Promise
  await connectToDatabase();
  await Product.findByIdAndDelete(resolvedParams.id);
  return NextResponse.json({ message: "Product deleted" });
}
