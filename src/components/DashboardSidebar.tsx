"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const DashboardSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `block py-2 px-4 rounded-lg transition ${
      pathname === path ? "bg-gray-800 text-white" : "hover:bg-gray-200"
    }`;

  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-6">Seller Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className={linkClasses("/dashboard")}>Overview</Link>
        <Link href="/dashboard/profile" className={linkClasses("/dashboard/profile")}>Profile</Link>
        <Link href="/dashboard/products" className={linkClasses("/dashboard/products")}>My Products</Link>
        <Link href="/dashboard/products/new" className={linkClasses("/dashboard/products/new")}>Add Product</Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-6 bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
