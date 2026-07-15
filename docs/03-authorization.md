==================================================
PHÂN QUYỀN VÀ USE CASES
==================================================

Admin

- Quản lý User (CRUD, Đặt lại mật khẩu cho user)
- Quản lý Project

Test Leader

- Quản lý Test Plan
- Quản lý Test Suite
- Quản lý Test Case (Review, Approve, Reject Test Case từ Tester)
- Phân công Tester

Tester

- Soạn thảo Test Case (Draft)
- Thực thi Test Case
- Báo Bug (Liên kết trực tiếp từ Test Execution)
- Bình luận trao đổi trên Bug

Developer

- Xem Bug được Assign cho mình
- Cập nhật trạng thái Bug
- Bình luận trao đổi trên Bug (với Tester)

Tất cả Role (General Use Cases)

- Login, Logout
- Refresh Token
- Change Password
- Quên mật khẩu / Reset mật khẩu (Tùy chọn)
