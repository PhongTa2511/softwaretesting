# THIẾT KẾ KIẾN TRÚC FRONTEND (NEXT.JS 15)

Dưới đây là bản thiết kế kiến trúc Frontend chi tiết cho đồ án "Hệ thống quản lý kiểm thử phần mềm", sử dụng Next.js 15 (App Router), React 19, TypeScript, TailwindCSS và các công nghệ đã thống nhất.

---

## 1. Cấu trúc thư mục (Directory Structure)
Sử dụng kiến trúc **Feature-Sliced Design (giản lược)** kết hợp với App Router của Next.js:

```text
frontend/
├── src/
│   ├── app/                  # Next.js App Router (Pages, Layouts, Routes)
│   │   ├── (auth)/           # Route Group cho Authentication
│   │   ├── (dashboard)/      # Route Group cho Dashboard
│   │   ├── layout.tsx        # Root Layout
│   │   └── globals.css       # Global Styles
│   ├── components/           # Reusable Components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── shared/           # Các component dùng chung
│   │   └── layouts/          # Layout components
│   ├── features/             # Các Module nghiệp vụ (Feature-based)
│   │   ├── auth/             
│   │   ├── projects/         
│   │   ├── test-cases/       
│   │   └── bugs/             
│   ├── lib/                  # Cấu hình thư viện bên thứ 3
│   ├── hooks/                # Global Custom Hooks
│   ├── store/                # Global State (Zustand)
│   ├── types/                # Global TypeScript interfaces/types
│   ├── constants/            # Global Constants
│   ├── utils/                # Helper functions
│   └── mocks/                # Mock data
```

## 2. Quy tắc đặt tên (Naming Conventions)
- **Thư mục/File logic:** Kebab-case (VD: `test-cases`, `use-auth.ts`, `data-table.tsx`).
- **React Components:** PascalCase trong file (VD: `export function DataTable() {}`).
- **Biến/Hàm (Variables/Functions):** camelCase (VD: `fetchTestCases`, `isLoading`).
- **Hằng số (Constants):** UPPER_SNAKE_CASE (VD: `MAX_UPLOAD_SIZE`, `API_URL`).
- **Interfaces/Types:** PascalCase, không dùng tiền tố `I` (VD: `User`, `Project`, `BugResponse`).

## 3. Route (App Router)
Sử dụng Route Groups để tách biệt UI không ảnh hưởng đến URL:
- `app/(auth)/login/page.tsx` -> `/login`
- `app/(dashboard)/projects/page.tsx` -> `/projects`
- `app/(dashboard)/test-cases/[id]/page.tsx` -> `/test-cases/1`

## 4. Layout
- **Root Layout (`app/layout.tsx`):** Chứa các Provider toàn cục (QueryClientProvider, ThemeProvider, ToastProvider).
- **Auth Layout (`app/(auth)/layout.tsx`):** Layout đơn giản, full màn hình, canh giữa cho form Login.
- **Dashboard Layout (`app/(dashboard)/layout.tsx`):** Chứa Sidebar (trái), Topbar (trên) và Content Area (phải/dưới).

## 5. Middleware
Sử dụng `middleware.ts` ở root project để bảo vệ Route:
- Kiểm tra JWT Token trong Cookies.
- Nếu người dùng truy cập `/projects` mà chưa có Token -> Redirect về `/login`.
- Nếu truy cập `/login` mà đã có Token -> Redirect về `/`.

## 6. Authentication Flow
- Form Login gọi API -> Nhận `accessToken` và `refreshToken`.
- Lưu `accessToken` và `refreshToken` vào **Cookies** (Bảo mật hơn LocalStorage, dễ đọc từ Middleware).
- Decode payload của JWT để lấy thông tin User (Role, ID) -> Đưa vào Zustand Store.
- Axios Interceptor sẽ tự động đính kèm `Bearer <token>` vào mọi request.
- Nếu token hết hạn (401), Axios Interceptor tự động gọi API Refresh Token, cập nhật cookie và retry request lỗi.

## 7. API Layer
- Đặt tại `src/lib/axios.ts` hoặc `src/api/api-client.ts`.
- Cấu hình một `axiosInstance` dùng chung.
- Tích hợp 2 Interceptors:
  - **Request Interceptor:** Đính kèm JWT token.
  - **Response Interceptor:** Xử lý Refresh Token và Handle Global Error (ví dụ lỗi 500 thì bắn Toast đỏ).

## 8. TanStack Query (React Query)
- Quản lý Server State (fetching, caching, synchronization).
- Không gọi API trực tiếp trong `useEffect`. Bắt buộc tạo Custom Hook trong từng Feature, VD: `useGetTestCases()`, `useCreateBug()`.
- Quản lý Query Keys tập trung: `export const queryKeys = { bugs: { all: ['bugs'], detail: (id) => ['bugs', id] } }`.

## 9. State Management
- **Server State:** Dùng hoàn toàn TanStack Query.
- **Client/UI State:** Dùng **Zustand** (Gọn nhẹ hơn Redux). Phù hợp cho việc lưu state của Sidebar (collapsed/expanded), Theme, hoặc Global Auth State (thông tin user đăng nhập).

## 10. Form Validation
- Kết hợp **React Hook Form** (quản lý state của form) và **Zod** (khai báo schema và validate).
- Ví dụ: `const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) })`.
- Sử dụng `@hookform/resolvers/zod` để tích hợp.

## 11. Folder theo Feature (Feature-Sliced)
Mỗi feature đóng gói riêng biệt để dễ bảo trì, ví dụ thư mục `src/features/bugs/`:
- `api/` (các hàm axios gọi lên server)
- `components/` (các component con chỉ dùng cho module bugs như `BugForm.tsx`, `BugKanban.tsx`)
- `hooks/` (các custom hook như `useBugs.ts`, `useUpdateBugStatus.ts`)
- `types/` (định nghĩa interface cho Bug)
- `schemas/` (Zod schemas cho form tạo/sửa Bug)

## 12. Shared Components
Các component phức tạp nhưng dùng ở nhiều tính năng (đặt tại `src/components/shared/`):
- `DataTable.tsx` (Bọc thư viện TanStack Table, hỗ trợ Pagination, Sorting chung).
- `RichTextEditor.tsx` (Bọc Quill hoặc TipTap).
- `FileUpload.tsx` (Component Dropzone).
- `ConfirmDialog.tsx` (Dialog xác nhận Xóa).

## 13. UI Components (shadcn/ui)
Tập trung tại `src/components/ui/`. Đây là các thẻ cơ bản (Button, Input, Select, Dialog, Toast) được generate từ shadcn/ui. Có thể tùy chỉnh style trực tiếp bằng Tailwind.

## 14. Hooks (Global)
Các logic tái sử dụng toàn cục:
- `useDebounce.ts` (Dùng cho ô search).
- `useMediaQuery.ts` (Kiểm tra kích thước màn hình cho Responsive).
- `useOnClickOutside.ts` (Đóng dropdown khi click ngoài).

## 15. Utils
Các hàm helper thuần túy (Pure functions):
- `utils/format.ts` (`formatDate`, `formatCurrency`).
- `utils/cn.ts` (Hàm `cn` kết hợp `clsx` và `tailwind-merge` của shadcn).

## 16. Constants
Lưu các giá trị không đổi:
- `constants/routes.ts` (`export const ROUTES = { LOGIN: '/login', BUGS: '/bugs' }`).
- `constants/roles.ts` (Định nghĩa `ADMIN`, `TESTER`...).

## 17. Types (Global)
- Định nghĩa kiểu Response chuẩn từ API Backend (VD: `PaginatedResponse<T>`, `ApiResponse<T>`).

## 18. Services
Với kiến trúc Feature-based, Services chính là các file API client trong từng thư mục Feature (ví dụ `features/projects/api/create-project.ts`).

## 19. Mock Data
Trong thời gian Backend chưa hoàn thiện, sử dụng dữ liệu tĩnh lưu tại `src/mocks/` hoặc cấu hình **MSW (Mock Service Worker)** để giả lập API response trực tiếp trên trình duyệt.

## 20. Error Handling
- Bắt lỗi API ở cấp độ Axios Interceptor (Hiển thị `toast.error(message)`).
- Sử dụng file `error.tsx` của Next.js (Error Boundary) cho các lỗi Crash UI của từng trang, hiển thị nút "Thử lại" (Try again).

## 21. Loading Strategy
- Sử dụng file `loading.tsx` (của App Router) hoặc React Suspense cho Server Components.
- Khi fetching data qua TanStack Query, hiển thị các component **Skeleton** thay cho Spinner xoay tròn để tạo hiệu ứng mượt mà (VD: `TableSkeleton`, `CardSkeleton`).

## 22. Theme
Tích hợp `next-themes`. 
Hỗ trợ Dark Mode / Light Mode / System Mode. Thay đổi qua nút Toggle trên Topbar. Các component của shadcn/ui mặc định hỗ trợ Dark mode qua biến CSS.

## 23. Permission Guard
Cơ chế kiểm tra quyền truy cập ở Frontend:
- **Cấp độ Route:** Chặn trong `middleware.ts` nếu User cố truy cập Route không thuộc Role của mình.
- **Cấp độ UI:** Viết Component `<RoleGuard allowedRoles={['Admin']}> {children} </RoleGuard>`. Nếu user không phải Admin, nút "Xóa User" sẽ bị ẩn hoàn toàn (không render).

## 24. Breadcrumb
Sử dụng component `Breadcrumb` đặt phía dưới Topbar hoặc gộp chung vào Topbar.
Dữ liệu sinh tự động dựa trên URL path (Sử dụng hook `usePathname()`), hoặc truyền tĩnh qua props của trang (VD: `Trang chủ > Quản lý Bug > Bug-123`).

## 25. Sidebar
- Thanh menu dọc nằm bên trái.
- Dữ liệu Menu items render động tùy theo Role lưu trong trạng thái Auth.
- Hỗ trợ trạng thái mở rộng (Expanded) hoặc thu gọn (Collapsed) để tiết kiệm không gian. Trên Mobile sẽ ẩn đi và mở ra qua nút Hamburger.

## 26. Topbar
Thanh ngang phía trên cùng, chứa:
- Tiêu đề trang hiện tại.
- Ô Global Search (tùy chọn).
- Toggle Dark/Light Mode.
- Dropdown Thông báo (Notifications).
- User Profile Menu (Avatar, Đổi mật khẩu, Nút Đăng xuất).
