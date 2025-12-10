
"use client";

import React, { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useAuthContext } from "../provider";
import { useRouter } from "next/navigation";

function DashboardProvider({ children }) {
  const { user } = useAuthContext(); 
  const router = useRouter();

  useEffect(() => {
    checkUserAuthenticated();
  }, [user]);

  const checkUserAuthenticated = () => {
    if (!user) {
      router.replace("/"); 
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full px-2">
        <AppHeader />
        <div className="p-10">
        {children}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardProvider;


