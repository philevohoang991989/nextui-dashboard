"use client";
import { Navbar } from "@/components/navbar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="h-[100vh]">
      <Navbar />
      {children}
    </section>
  );
}
