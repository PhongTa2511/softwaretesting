"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-900/20 dark:text-red-500">
        <AlertCircle className="h-8 w-8" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Đã xảy ra lỗi không mong muốn!</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[500px]">
          Chúng tôi rất xin lỗi vì sự bất tiện này. Bạn có thể thử tải lại trang hoặc liên hệ quản trị viên.
        </p>
      </div>
      <Button onClick={() => reset()} variant="default">
        Thử lại ngay
      </Button>
    </div>
  );
}
