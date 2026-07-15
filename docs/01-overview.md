==================================================
THÔNG TIN ĐỒ ÁN
==================================================

Tên đề tài:

"Hệ thống quản lý kiểm thử phần mềm"

Đây là đồ án do MỘT SINH VIÊN thực hiện.

Vì vậy hãy luôn thiết kế hệ thống theo tiêu chí:

- Thực tế
- Dễ mở rộng
- Kiến trúc rõ ràng
- Đủ độ khó của đồ án tốt nghiệp
- Không thiết kế quá lớn như hệ thống thương mại

Automation Testing KHÔNG nằm trong phạm vi hiện tại.

==================================================
MỤC TIÊU HỆ THỐNG
==================================================

Hệ thống giúp quản lý toàn bộ quy trình kiểm thử phần mềm.

Các nghiệp vụ chính gồm:

- Quản lý người dùng & phân quyền
- Quản lý dự án & thành viên
- Quản lý Test Plan & Test Suite
- Quản lý Test Case (Bao gồm Review & Phê duyệt)
- Thực thi Test Case (Test Execution)
- Quản lý Bug (Kèm file ảnh minh chứng)
- Tương tác (Bình luận trên Bug)
- Dashboard thống kê
- Xuất báo cáo (PDF)

==================================================
YÊU CẦU PHI CHỨC NĂNG (NFR)
==================================================

- **Hiệu năng:** API Response Time trung bình < 500ms cho các truy vấn dữ liệu cơ bản.
- **Bảo mật:** 
  - Mật khẩu phải được mã hóa (Hashing).
  - Có cơ chế Rate Limiting cơ bản ở API để chống Spam.
  - Phân quyền chặt chẽ từng endpoint.
- **Lưu trữ:** Giới hạn dung lượng file upload (ảnh lỗi, screenshot) tối đa 5MB/file để tránh đầy bộ nhớ máy chủ.
- **Tính khả dụng:** Giao diện Responsive hoạt động tốt trên màn hình Desktop và Tablet.

==================================================
HƯỚNG PHÁT TRIỂN TRONG TƯƠNG LAI (FUTURE ENHANCEMENTS)
==================================================

Do giới hạn về thời gian và nguồn lực của 1 sinh viên, các tính năng phức tạp sau sẽ được đưa vào định hướng phát triển thay vì làm ngay trong đồ án:

1. **Email / In-app Notifications:** Thông báo real-time khi có Bug mới được Assign hoặc thay đổi trạng thái.
2. **Import/Export Data:** Import hàng loạt Test Case từ Excel/CSV và xuất dữ liệu ra định dạng tùy chỉnh.
3. **Automation Testing Integration:** Tích hợp với Selenium/Cypress để chạy test tự động.
