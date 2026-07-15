"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderKanban, ClipboardList, Bug } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NAV_ITEMS = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Projects", href: "/projects", icon: FolderKanban },
  { title: "Test Cases", href: "/test-cases", icon: ClipboardList },
  { title: "Bugs", href: "/bugs", icon: Bug },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800", className)}>
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-slate-800 shrink-0">
        <span className="font-bold text-xl text-primary">QLTest</span>
      </div>
      
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {NAV_ITEMS.map((item) => {
            // Sửa logic Active Route: Khớp chính xác hoặc khớp với đường dẫn con
            const isActive = pathname === item.href || (item.href !== "/" && (pathname === item.href || pathname.startsWith(item.href + "/")));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-50 dark:hover:bg-slate-800"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      
      {/* Bottom Area */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-800 text-xs text-center text-gray-400">
        QLTest v1.0.0
      </div>
    </aside>
  );
}
