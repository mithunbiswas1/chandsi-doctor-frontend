'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Template({ children }) {
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith("/dashboard")
    || pathname.startsWith("/appointments")
    || pathname.startsWith("/patients")
    || pathname.startsWith("/billing")
    || pathname.startsWith("/doctors")
    || pathname.startsWith("/reports");

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      {children}
      {!isDashboardRoute && <Footer />}
    </>
  );
}
