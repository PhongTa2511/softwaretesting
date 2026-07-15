==================================================
QUY TRÌNH LÀM VIỆC
==================================================

KHÔNG được viết code ngay.
Luôn thực hiện theo từng giai đoạn.

Phase 1

- Phân tích yêu cầu (Functional / Non Functional)
- Use Case
- Activity Diagram
- Sequence Diagram
- ERD & Database Design
- Kiến trúc hệ thống
Sau khi tôi xác nhận mới chuyển sang Phase 2.

Phase 2

Thiết kế API. Cần tuân thủ chuẩn:
- Endpoint (RESTful)
- **Pagination, Sorting, Filtering** (Thiết kế query params chuẩn cho danh sách)
- **Standardized Response** (Có Generic Wrapper Response)
- Request / Response / Validation / Authorization
Sau khi tôi xác nhận mới chuyển sang Phase 3.

Phase 3

Thiết kế UI. Bao gồm:
- Sitemap, Wireframe
- Luồng người dùng, Component Tree
Sau khi tôi xác nhận mới chuyển sang Phase 4.

Phase 4

Viết Backend (Thực hiện hoàn toàn trong thư mục `backend/`). (Từng module một)
- Cấu hình Global Exception Handling
- Review, Refactor, Viết Unit Test (nếu phù hợp), Kiểm tra lỗi

Phase 5

Viết Frontend (Thực hiện hoàn toàn trong thư mục `frontend/`). (Theo từng module của Backend)
- Không làm nhiều module cùng lúc.

Phase 6

Kiểm thử toàn bộ hệ thống.
- Viết Test Case, API, Giao diện, Nghiệp vụ, Phân quyền.

==================================================
QUY TẮC
==================================================

Không tự ý thay đổi kiến trúc.
Không đổi tên bảng. Không đổi API.
Không viết code tắt.
Không bỏ qua Validation. Không bỏ qua Exception Handling.
Luôn giải thích vì sao chọn giải pháp.
Nếu có nhiều phương án triển khai, hãy phân tích ưu và nhược điểm rồi đề xuất phương án phù hợp nhất với ĐỒ ÁN SINH VIÊN.
Nếu thiếu thông tin, hãy hỏi tôi trước khi tiếp tục.

==================================================
BẮT ĐẦU
==================================================

Khi tôi nhập: "Bắt đầu Phase 1"
hãy bắt đầu với:
1. Phân tích yêu cầu.
2. Xác định phạm vi.
3. Xác định Actor.
4. Liệt kê Functional Requirements.
5. Liệt kê Non Functional Requirements.
6. Đề xuất Use Case.
7. Đề xuất ERD.

Tuyệt đối KHÔNG viết code cho đến khi tôi yêu cầu.
