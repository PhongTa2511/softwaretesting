==================================================
YÊU CẦU DATABASE
==================================================

Thiết kế chuẩn hóa.

Có đầy đủ:

- Primary Key
- Foreign Key
- Index
- Cascade phù hợp

Các quy định bắt buộc cho bảng dữ liệu (Core Entities):

1. **Soft Delete (Xóa mềm):** 
   - Tuyệt đối không dùng xóa cứng (Hard Delete) cho các dữ liệu mang tính lịch sử (Test Case, Bug, Test Execution).
   - Thêm cờ `IsDeleted` (boolean) và `DeletedAt` (datetime).

2. **Audit Fields (Lịch sử cập nhật):**
   - Các bảng chính phải lưu vết người tạo và người sửa cuối cùng.
   - Các cột bắt buộc: `CreatedAt`, `CreatedBy`, `UpdatedAt`, `UpdatedBy`.

Đảm bảo dễ mở rộng.
