==================================================
MODULE & WORKFLOW
==================================================

1. Authentication & User Profile

- Login, Logout, Refresh Token, Change Password.
- Hỗ trợ xem thông tin cá nhân.

---

2. User & Role Management

- CRUD User & CRUD Role (Admin).

---

3. Project Management

- CRUD Project. Thêm/xóa thành viên (Add/Remove Member).

---

4. Test Plan & Test Suite

- CRUD Test Plan (Kế hoạch test cấp cao).
- CRUD Test Suite (Nhóm các Test Case liên quan).

---

5. Test Case Management

- CRUD Test Case.
- Thông tin cơ bản: Code, Title, Description (Rich Text), Preconditions, Test Steps, Expected Result, Priority, Severity, Status.
- **Workflow Trạng thái:** Draft -> In Review -> Approved -> Obsolete. (Chỉ Test Case 'Approved' mới được đưa vào chạy thực tế).

---

6. Test Execution (Thực thi Test)

- Tester tiến hành chạy các Test Case.
- Kết quả (Status): PASS, FAIL, BLOCKED, NOT RUN.
- Dữ liệu thu thập: Actual Result, Comment, **Screenshot/File đính kèm**.
- **Liên kết:** Nếu FAIL, cho phép tạo Bug mới trực tiếp (Auto link đến Test Case ID).

---

7. Bug Management

- CRUD Bug.
- Thông tin: Bug ID, Title, Description (Rich Text), Priority, Severity, Status, Assignee, **File đính kèm (Log/Screenshot)**.
- Giao diện hỗ trợ Kanban Board (Kéo thả).
- Hỗ trợ tính năng **Bình luận (Comments)** để Dev và Tester trao đổi.
- **Workflow Trạng thái:** Open -> Assigned -> In Progress -> Resolved -> Closed (hoặc Reopened).

---

8. Dashboard & Report

- Dashboard: Total Projects, Total Test Cases, Total Executions, Pass Rate, Fail Rate, Total Bugs, Bugs by Severity, Bugs by Status. Hiển thị bằng Recharts.
- Report (Xuất PDF): Test Execution Report, Bug Report, Test Case Report. Cần có Audit Log ngắn gọn (Ai xuất, ngày nào).
