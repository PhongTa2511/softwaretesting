"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { AppBreadcrumb } from "./AppBreadcrumb";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { UserDropdown } from "./UserDropdown";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SheetTitle className="sr-only">Menu Navigation</SheetTitle>
            <SheetDescription className="sr-only">Main application navigation menu</SheetDescription>
            <Sidebar className="h-full w-full border-r-0" />
          </SheetContent>
        </Sheet>

        <AppBreadcrumb />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserDropdown />
      </div>
    </header>
  );
}
