"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { Role } from "@/features/auth/types";
import { ReactNode } from "react";

interface RoleGuardProps {
  allowedRoles: Role[];
  children: ReactNode;
  fallback?: ReactNode; // Giao diện hiển thị nếu không đủ quyền (thường là null hoặc báo lỗi)
}

export function RoleGuard({ allowedRoles, children, fallback = null }: RoleGuardProps) {
  const { user } = useAuthStore();

  if (!user || !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
