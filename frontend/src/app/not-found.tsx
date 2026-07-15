import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 text-center px-4">
      <h1 className="text-9xl font-black text-gray-200 dark:text-slate-800">404</h1>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Không tìm thấy trang
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-[500px]">
        Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không thể truy cập.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Quay lại Trang chủ</Link>
      </Button>
    </div>
  );
}
