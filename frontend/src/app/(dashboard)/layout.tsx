import React from "react";
import { Sidebar } from "@/components/layouts/Sidebar";
import { Header } from "@/components/layouts/Header";
import { ProtectedLayout } from "@/components/layouts/ProtectedLayout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950 w-full overflow-hidden">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden md:flex w-64 shrink-0" />

        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-4 sm:p-6 w-full">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedLayout>
  );
}
