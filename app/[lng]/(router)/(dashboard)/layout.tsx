"use client";
import { SidebarContext } from "@/components/layout/layout-context";
import { Navbar } from "@/components/navbar";
import { NavbarWrapper } from "@/components/navbar/navbar";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { useLockedBody } from "@/hooks/useBodyLock";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return (
    <SidebarContext.Provider
    value={{
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar,
    }}
  >
    <section className="flex">
      <SidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  </SidebarContext.Provider>
  );
}
