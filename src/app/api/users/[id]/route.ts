import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // <-- params is a Promise here
) {
  const resolvedParams = await params; // await to get the actual params object
  await connectToDatabase();
  const body = await request.json();
  const updatedUser = await User.findByIdAndUpdate(resolvedParams.id, body, { new: true });
  return NextResponse.json(updatedUser);
}
