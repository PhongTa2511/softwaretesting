"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Mock true cho Sprint 2
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // TODO: Verify JWT token here when integrating with real Backend
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading authentication...</div>;
  }

  if (!isAuthenticated) {
    return null; // Tránh render flash content trước khi redirect
  }

  return <>{children}</>;
}
