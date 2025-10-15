"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Appointments", href: "/appointments", icon: <Calendar size={20} /> },
    { name: "Patients", href: "/patients", icon: <Users size={20} /> },
    // { name: "Settings", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar visible dashboard routes */}
      <div className="w-64 bg-darkblue shadow-md flex flex-col ">
        {/* Sidebar Header */}
        <div className="px-6 py-4 border-b">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            HealthCare
          </Link>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-4 py-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-2 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white font-medium "
                    : "text-white hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-red-500 transition-all w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
