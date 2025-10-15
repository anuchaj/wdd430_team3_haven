"use client";
import React from "react";

export default function DashboardHeader({ user }: { user: any }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Welcome, {user?.name || "Seller"}!</h1>
      <p className="text-gray-500">{user?.email}</p>
    </header>
  );
}
