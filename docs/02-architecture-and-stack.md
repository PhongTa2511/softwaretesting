==================================================
TECH STACK
==================================================

Frontend

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- TanStack Query
- React Hook Form
- Zod
- Axios

Backend

- ASP.NET Core 9 Web API
- C#
- Entity Framework Core
- SQL Server
- JWT Authentication
- Refresh Token
- Swagger

Database

SQL Server

Chart

Recharts

Report

QuestPDF

Authentication

JWT

==================================================
KIẾN TRÚC
==================================================

Frontend

Presentation Layer

↓

API Layer

↓

Business Components

↓

Shared Components

Backend

Controllers

↓

Services

↓

Repositories

↓

Entity Framework Core

↓

SQL Server

Áp dụng:

- Clean Code
- SOLID
- Repository Pattern
- Service Pattern
- Dependency Injection
- DTO
- AutoMapper
- Fluent Validation
- Global Exception Middleware
- Generic Response
- RESTful API

Quy định cấu trúc:

- **Giảm thiểu Boilerplate:** Ưu tiên cấu trúc N-Tier / Clean Architecture tinh gọn để phù hợp cho quy mô dự án 1 sinh viên, tránh lạm dụng quá nhiều lớp trung gian không cần thiết.
- Không sử dụng Microservice.
- Không sử dụng CQRS (có thể dùng nếu tích hợp MediatR gọn nhẹ nhưng không bắt buộc).
- Không sử dụng Event Sourcing.
- Không sử dụng Docker.
- Không sử dụng Kubernetes.

==================================================
CẤU TRÚC WORKSPACE (MONOREPO)
==================================================

Dự án sử dụng kiến trúc phân tách Frontend và Backend độc lập trong cùng một Workspace:

Workspace (qltest)
├── docs/                 # Tài liệu dự án
├── frontend/             # Next.js 15 Project
└── backend/              # ASP.NET Core 9 Web API Project
