"use client";
import { Navbar } from "@/components/navbar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
