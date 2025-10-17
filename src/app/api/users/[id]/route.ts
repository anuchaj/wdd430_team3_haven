import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const body = await request.json();
  const updatedUser = await User.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updatedUser);
}
