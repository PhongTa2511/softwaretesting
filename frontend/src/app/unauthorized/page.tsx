import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 text-center px-4">
      <div className="rounded-full bg-orange-100 p-4 text-orange-600 dark:bg-orange-900/20 dark:text-orange-500 mb-4">
        <ShieldAlert className="h-12 w-12" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Từ chối truy cập
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-[500px]">
        Bạn không có quyền truy cập vào tính năng này. Vui lòng liên hệ quản trị viên để được cấp quyền.
      </p>
      <Button asChild className="mt-6" variant="default">
        <Link href="/">Quay lại Trang chủ</Link>
      </Button>
    </div>
  );
}
