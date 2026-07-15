# THIẾT KẾ WIREFRAME (LAYOUT MÔ TẢ BẰNG VĂN BẢN)

Tài liệu này mô tả chi tiết bố cục (layout) của từng màn hình trong hệ thống, không chứa mã nguồn UI hay CSS. Cấu trúc được trình bày dạng phân cấp để dễ dàng hình dung vị trí các thành phần trên màn hình.

---

## 1. MÀN HÌNH ĐĂNG NHẬP (LOGIN PAGE)
**Bố cục:** Toàn màn hình (Full Screen), canh giữa (Centered).

```text
[ Nền Xám nhạt / Trắng ]
+-----------------------------------------------------------+
|                                                           |
|        [ Khối Card Form Đăng Nhập - Rộng ~400px ]         |
|        |---------------------------------------|          |
|        |  (Logo Hệ thống)                      |          |
|        |  Title: Đăng nhập hệ thống            |          |
|        |                                       |          |
|        |  Label: Email                         |          |
|        |  [ Input: Email                 ]     |          |
|        |                                       |          |
|        |  Label: Mật khẩu                      |          |
|        |  [ Input: Password (có icon mắt)]     |          |
|        |                                       |          |
|        |  [Link: Quên mật khẩu?]               |          |
|        |                                       |          |
|        |  [ BUTTON PRIMARY: ĐĂNG NHẬP    ]     |          |
|        |---------------------------------------|          |
|                                                           |
+-----------------------------------------------------------+
```

---

## 2. BỐ CỤC CHUNG BẢNG ĐIỀU KHIỂN (DASHBOARD LAYOUT)
Tất cả các trang bên trong hệ thống (sau khi đăng nhập) đều dùng chung bố cục này.

```text
+----------------+------------------------------------------------------+
| [ SIDEBAR ]    | [ TOPBAR ]                                           |
| (Left, 250px)  | (Top, H=64px, Trải dài phần còn lại)                 |
|                | + BREADCRUMB: Trang chủ > Quản lý Project            |
| - Logo         | + ICONS: [Dark Mode] [Notification] [Avatar Dropdown]|
|                +------------------------------------------------------+
| - Dashboard    | [ CONTENT AREA ]                                     |
| - Projects     | (Cuộn dọc độc lập)                                   |
| - Test Plans   |                                                      |
| - Bugs         |  +------------------------------------------------+  |
| - Users (Admin)|  |                                                |  |
|                |  |  NỘI DUNG TỪNG TRANG SẼ RENDER Ở ĐÂY           |  |
| - Cài đặt      |  |                                                |  |
|                |  +------------------------------------------------+  |
+----------------+------------------------------------------------------+
```

---

## 3. MÀN HÌNH DASHBOARD TỔNG QUAN
**Mục tiêu:** Thống kê dữ liệu, biểu đồ.

```text
[ Tiêu đề: Tổng quan Hệ thống ]

[ HÀNG 1: Thẻ Thống Kê (4 thẻ ngang nhau) ]
+----------------+ +----------------+ +----------------+ +----------------+
| Tổng Projects  | | Tổng Test Case | | Pass Rate      | | Tổng Bugs      |
| [Icon] 12      | | [Icon] 350     | | [Icon] 85%     | | [Icon] 45      |
+----------------+ +----------------+ +----------------+ +----------------+

[ HÀNG 2: Biểu đồ ]
+-----------------------------------+ +-----------------------------------+
| Biểu đồ Tròn: Tỉ lệ Test Execution| | Biểu đồ Cột: Bug theo Mức độ      |
| (Pass / Fail / Blocked / Not Run) | | (Minor / Major / Critical)        |
| [ Recharts Pie Chart ]            | | [ Recharts Bar Chart ]            |
+-----------------------------------+ +-----------------------------------+
```

---

## 4. MÀN HÌNH QUẢN LÝ PROJECT / USER (DẠNG DANH SÁCH)
**Mục tiêu:** Hiển thị danh sách dữ liệu có phân trang, có bộ lọc.

```text
[ Tiêu đề: Quản lý Dự án (Project) ]            [ BUTTON PRIMARY: + Tạo mới Project ]

[ Thanh Công Cụ (Toolbar) ]
[ Search Box: Tìm theo tên... ]  [ Filter: Trạng thái ]  [ Filter: Ngày tạo ]

[ Bảng Dữ Liệu (Data Grid) ]
+-----+-------------------+---------------+---------------+-------------------------+
| ID  | Tên Dự án         | Khách hàng    | Trạng thái    | Hành động               |
+-----+-------------------+---------------+---------------+-------------------------+
| 1   | Tên Project A     | Tên KH A      | [Badge: Open] | [Icon View][Icon Edit]  |
| 2   | Tên Project B     | Tên KH B      | [Badge: Close]| [Icon View][Icon Edit]  |
+-----+-------------------+---------------+---------------+-------------------------+

[ Phân trang (Pagination) ]
Đang hiển thị 1-10 / 50 kết quả                     [< Prev]  1 2 3 4 5  [Next >]
```

---

## 5. MÀN HÌNH CHI TIẾT DỰ ÁN (PROJECT DETAIL)
**Mục tiêu:** Xem chi tiết dự án và quản lý các entity con (Members, Test Plans).

```text
[ Tiêu đề: Tên Project A ]    [Status Badge]      [ BUTTON: Chỉnh sửa ] [ BUTTON: Xóa ]

[ TABS NAVIGATION ]
[ Thông tin chung (Active) ] | [ Thành viên ] | [ Test Plans ] | [ Test Suites ]

[ NỘI DUNG TAB (Vd: Tab Thành viên) ]
+-------------------------------------------------------------------------------+
| Bảng Danh Sách Thành Viên (Data Grid)                 [ BUTTON: Thêm thành viên]
|                                                                               |
| + User Name      + Role trong dự án      + Action                             |
| - Nguyễn Văn A   - Test Leader           - [ Xóa khỏi dự án ]                 |
| - Trần Thị B     - Tester                - [ Xóa khỏi dự án ]                 |
+-------------------------------------------------------------------------------+
```

---

## 6. MÀN HÌNH SOẠN THẢO TEST CASE (TẠO/SỬA)
**Mục tiêu:** Form nhập liệu phức tạp, chia 2 cột.

```text
[ Tiêu đề: Tạo mới Test Case ]                    [ BUTTON: Lưu Draft ] [ BUTTON: Gửi duyệt ]

+-----------------------------------------+-----------------------------------------+
| [ CỘT TRÁI - Nội dung chính ]           | [ CỘT PHẢI - Phân loại ]                |
|                                         |                                         |
| Label: Tiêu đề (Title)                  | Label: Dự án                            |
| [ Input ]                               | [ Select Dropdown ]                     |
|                                         |                                         |
| Label: Mô tả (Description)              | Label: Mức độ ưu tiên (Priority)        |
| [ Rich Text Editor ]                    | [ Select: High/Medium/Low ]             |
|                                         |                                         |
| Label: Điều kiện tiền đề (Precondition) | Label: Test Suite                       |
| [ Textarea ]                            | [ Select Dropdown ]                     |
|                                         |                                         |
| Label: Các bước thực hiện (Steps)       |                                         |
| [ Rich Text Editor ]                    |                                         |
|                                         |                                         |
| Label: Kết quả mong đợi (Expected)      |                                         |
| [ Rich Text Editor ]                    |                                         |
+-----------------------------------------+-----------------------------------------+
```

---

## 7. MÀN HÌNH TEST EXECUTION (THỰC THI TEST)
**Mục tiêu:** Tester chạy test và ghi nhận kết quả.

```text
[ Tiêu đề: Thực thi Test Case #TC-123 ]

[ THÔNG TIN TEST CASE (Read-only Card) ]
- Tiêu đề: Kiểm tra đăng nhập sai mật khẩu
- Các bước: 1. Vào trang... 2. Nhập sai pass... 3. Click Đăng nhập.
- Kết quả mong đợi: Hiển thị lỗi "Mật khẩu không đúng".

[ FORM GHI NHẬN KẾT QUẢ THỰC TẾ ]
Label: Trạng thái (Status)
( ) PASS    ( ) FAIL    ( ) BLOCKED    ( ) NOT RUN

Label: Kết quả thực tế (Actual Result)
[ Textarea ]

Label: Ảnh minh chứng (Screenshot - Bắt buộc nếu FAIL)
[ Vùng kéo thả (Dropzone) / Nút Upload File ]

[ BUTTON PRIMARY: Lưu kết quả ]  [ BUTTON (nếu FAIL): Báo Bug ngay ]
```

---

## 8. MÀN HÌNH QUẢN LÝ BUG (DẠNG KANBAN BOARD)
**Mục tiêu:** Quản lý luồng xử lý Bug kéo thả trực quan.

```text
[ Tiêu đề: Quản lý Bug ]               [ Nút Chuyển Đổi View: Bảng / Kanban ]

[ Thanh Công Cụ: Search | Lọc theo Assignee | Lọc theo Priority ]

+--------------------+ +--------------------+ +--------------------+ +--------------------+
| OPEN (2)           | | ASSIGNED (1)       | | IN PROGRESS (1)    | | RESOLVED (3)       |
+--------------------+ +--------------------+ +--------------------+ +--------------------+
| [ BUG-01 ]         | | [ BUG-03 ]         | | [ BUG-04 ]         | | [ BUG-05 ]         |
| Lỗi nút Đăng nhập  | | Lỗi crash khi...   | | Sai màu nền...     | | Typo trang chủ     |
| Priority: [High]   | | Priority: [Crit]   | | Priority: [Low]    | | Priority: [Min]    |
| Assign: Nguyễn A   | | Assign: Trần B     | | Assign: Lê C       | | Assign: Nguyễn A   |
| (Kéo thả được)     | | (Kéo thả được)     | | (Kéo thả được)     | | (Kéo thả được)     |
+--------------------+ +--------------------+ +--------------------+ +--------------------+
| [ BUG-02 ]         | |                    | |                    | | [ BUG-06 ]         |
| 404 trang chủ      | |                    | |                    | | ...                |
+--------------------+ +--------------------+ +--------------------+ +--------------------+
```

---

## 9. MÀN HÌNH CHI TIẾT BUG & BÌNH LUẬN (BUG DETAIL)
**Mục tiêu:** Xem chi tiết Bug và tương tác giữa Dev - Tester.

```text
[ Tiêu đề: [BUG-01] Lỗi không thể upload ảnh đại diện ] 

+-----------------------------------------+-----------------------------------------+
| [ CỘT TRÁI - Chi tiết Bug & Bình luận ] | [ CỘT PHẢI - Trạng thái & Assign ]      |
|                                         |                                         |
| [ Mô tả Bug (Description) ]             | Trạng thái hiện tại: [Badge: Assigned]  |
| Nội dung rich text mô tả lỗi...         |                                         |
|                                         | [ BUTTON: Chuyển sang In Progress ]     |
| [ Ảnh đính kèm (Attachments) ]          | [ BUTTON: Chuyển sang Resolved ]        |
| [ Thumbnail 1 ] [ Thumbnail 2 ]         |                                         |
|                                         | Phân công cho (Assignee):               |
| --------------------------------------- | [ Dropdown: Dev A ]                     |
|                                         |                                         |
| [ KHU VỰC BÌNH LUẬN (Comments) ]        | Mức độ nghiêm trọng (Severity):         |
|                                         | [Badge: Major]                          |
| - Tester X (10:00): "Tôi vừa test lại..."|                                         |
| - Dev A (11:00): "Đã sửa trên staging." | Mức ưu tiên (Priority):                 |
|                                         | [Badge: High]                           |
| [ Rich Text Editor để gõ Comment ]      |                                         |
| [ BUTTON: Gửi bình luận ]               | Thuộc Test Case: #TC-123                |
+-----------------------------------------+-----------------------------------------+
```

---

## 10. MODAL & DIALOG (SỬ DỤNG CHUNG)
- Các thao tác Thêm mới/Sửa đơn giản (như Thêm User, Thêm Test Suite) sẽ sử dụng Modal dạng Overlay đè lên màn hình hiện tại thay vì chuyển trang.

```text
[ Màn hình đen mờ 50% ]
      +-------------------------------------------+
      | Tạo mới Test Suite                    [X] |
      |-------------------------------------------|
      | Label: Tên Test Suite                     |
      | [ Input ]                                 |
      |                                           |
      | Label: Mô tả                              |
      | [ Textarea ]                              |
      |-------------------------------------------|
      | [ Hủy ]                     [ LƯU LẠI ]   |
      +-------------------------------------------+
```
