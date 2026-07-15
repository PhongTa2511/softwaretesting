# KIẾN TRÚC WORKSPACE (TÁCH BIỆT FRONTEND & BACKEND)

Tài liệu này xác định cách thiết lập cấu trúc tổng thể cho toàn bộ dự án tại thư mục gốc (Workspace), quản lý độc lập Frontend và Backend nhưng vẫn đảm bảo sự giao tiếp mượt mà.

---

## 1. Đánh giá tính nhất quán tài liệu (Docs Verification)
Việc tách riêng thư mục `frontend/` và `backend/` hoàn toàn **KHÔNG gây xung đột** với bất kỳ tài liệu nào trong thư mục `docs/`. Ngược lại, điều này còn củng cố trực tiếp nguyên lý tách biệt mối quan tâm (Separation of Concerns) đã được nêu rõ trong file `02-architecture-and-stack.md` (Giao tiếp qua RESTful API, không dùng Microservices).

---

## 2. Thiết kế Workspace Structure
Tại thư mục gốc (`d:\qltest\`), cấu trúc tổng thể như sau:

```text
qltest (Workspace)
│
├── docs/                 # Chứa toàn bộ tài liệu đặc tả, thiết kế, quy tắc
├── frontend/             # Next.js 15 Project (Node.js Workspace)
└── backend/              # ASP.NET Core 9 Web API Project (.NET Workspace)
```

---

## 3. Cấu trúc thư mục Frontend
Nằm trong thư mục `frontend/`, tuân thủ thiết kế từ file `08-frontend-architecture.md`.

```text
frontend/
├── package.json          # Quản lý dependencies
├── next.config.ts        # Cấu hình Next.js
├── tailwind.config.ts    # Cấu hình TailwindCSS
└── src/
    ├── app/              # (App Router) Pages, Layouts, Routing
    ├── components/       # (UI & Shared) Các thành phần giao diện tái sử dụng
    ├── features/         # (Feature-Sliced) Logic nghiệp vụ (Auth, Projects, Bugs)
    ├── hooks/            # Custom Hooks dùng chung
    ├── lib/              # Cấu hình Axios, TanStack Query, Utils
    ├── store/            # Quản lý State toàn cục (Zustand)
    └── types/            # Định nghĩa Interface (TypeScript)
```

---

## 4. Cấu trúc thư mục Backend
Nằm trong thư mục `backend/`, tổ chức theo mô hình **Clean Architecture tinh gọn** (Simplified N-Tier) phù hợp cho sinh viên:

```text
backend/
├── QLTest.sln                     # .NET Solution File
├── src/
│   ├── QLTest.API/                # Lớp Presentation (Controllers, Program.cs, Middlewares)
│   ├── QLTest.Application/        # Lớp Logic (Services, Interfaces, DTOs, FluentValidation)
│   ├── QLTest.Domain/             # Lớp Cốt lõi (Entities, Enums, Exceptions)
│   └── QLTest.Infrastructure/     # Lớp Dữ liệu (EF Core DbContext, Repositories, Migrations)
└── tests/
    └── QLTest.UnitTests/          # Unit Test cho Application & Domain Layer
```

---

## 5. Phương thức giao tiếp (Communication)
- Frontend đóng vai trò là một **Client độc lập**, hoàn toàn không phụ thuộc vào mã nguồn Backend.
- Giao tiếp thông qua **HTTP/HTTPS** sử dụng chuẩn RESTful API.
- Định dạng dữ liệu trao đổi: **JSON**.
- Frontend sử dụng `Axios` (bọc trong TanStack Query) để gửi Request. Backend sử dụng `Controllers` để nhận, xử lý và trả về JSON Response.

---

## 6. Quản lý biến môi trường (.env)
- **Frontend (`frontend/.env.local`):** 
  - Chứa đường dẫn gọi đến API.
  - Ví dụ: `NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1`
  - Các biến bắt đầu bằng `NEXT_PUBLIC_` sẽ được gọi ở cả Server/Client Component.
- **Backend (`backend/src/QLTest.API/appsettings.Development.json`):**
  - Chứa chuỗi kết nối DB (Connection String), JWT Secret Key, Expiration Time.
- **Quy tắc:** Tuyệt đối KHÔNG commit các file `.env` hoặc file cấu hình chứa mật khẩu thật lên Git. Bắt buộc phải có file `.env.example` hoặc `appsettings.example.json` làm mẫu.

---

## 7. Chạy dự án song song (Development Execution)
Trong quá trình phát triển (Local), hai project phải chạy trên 2 cổng độc lập (Ví dụ: Frontend `3000`, Backend `5000`).
- **Cách 1 (Terminal độc lập):**
  - Terminal 1: `cd frontend` -> `npm run dev`
  - Terminal 2: `cd backend/src/QLTest.API` -> `dotnet run`
- **Cách 2 (VS Code Tasks / npm-run-all):**
  - Có thể cấu hình `tasks.json` ở cấp workspace để một cú click chạy cả 2. Hoặc mở 2 split-terminal trong cùng một cửa sổ VS Code.

---

## 8. Cấu hình CORS (Cross-Origin Resource Sharing)
Do chạy ở hai cổng khác nhau (`localhost:3000` và `localhost:5000`), trình duyệt sẽ chặn Request từ Frontend nếu Backend không cấp quyền.
- **Tại Backend (`Program.cs`):**
  - Thêm middleware `app.UseCors()`.
  - Cho phép cụ thể Origin của Frontend: `WithOrigins("http://localhost:3000")`.
  - Cho phép mọi Header: `AllowAnyHeader()`.
  - Cho phép mọi Method (GET, POST, PUT, DELETE, PATCH): `AllowAnyMethod()`.
  - (Tùy chọn) `AllowCredentials()` nếu Frontend sử dụng Cookie HttpOnly gửi kèm request.

---

## 9. API URL Convention (Quy tắc định tuyến API)
Thống nhất chuẩn đường dẫn cho toàn bộ Backend:
- **Base URL:** `/api/v1/...` (Sử dụng versioning `v1` ngay từ đầu).
- **Naming:** Sử dụng danh từ số nhiều, kiểu chữ thường, gạch nối (Kebab-case).
- **RESTful Methods:**
  - `GET /api/v1/test-cases` (Lấy danh sách)
  - `GET /api/v1/test-cases/{id}` (Lấy chi tiết)
  - `POST /api/v1/test-cases` (Tạo mới)
  - `PUT /api/v1/test-cases/{id}` (Cập nhật toàn bộ)
  - `DELETE /api/v1/test-cases/{id}` (Xóa mềm)

---

## 10. JWT Authentication Convention
- **Cấp phát:** API `POST /api/v1/auth/login` sẽ kiểm tra thông tin. Nếu hợp lệ, trả về một khối JSON chứa `accessToken` và `refreshToken`.
- **Lưu trữ Frontend:** Frontend lưu `accessToken` vào Cookies (dễ dàng đọc được ở cả Next.js Middleware và Client).
- **Gửi Request:** Axios Interceptor ở Frontend tự động kẹp Header: `Authorization: Bearer <accessToken>` vào tất cả các Request gọi lên Backend.
- **Xác thực Backend:** ASP.NET Core sử dụng `JwtBearerDefaults` để đọc token từ Header, xác thực chữ ký (Signature) và gán `ClaimsPrincipal` vào context.
- **Hết hạn (Expiration):** Nếu token hết hạn, Backend trả về HTTP `401 Unauthorized`. Frontend Axios sẽ hứng mã lỗi 401, tự động gọi API `/api/v1/auth/refresh-token` để lấy token mới, sau đó gọi lại API vừa bị lỗi.
