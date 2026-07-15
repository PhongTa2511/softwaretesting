# HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)

Tài liệu này định nghĩa các quy tắc thiết kế giao diện cốt lõi cho dự án "Hệ thống quản lý kiểm thử phần mềm", đảm bảo tính đồng nhất, chuyên nghiệp và tối ưu trải nghiệm người dùng (UX) mà không đi sâu vào chi tiết mã nguồn.

---

## 1. Nền tảng thiết kế (Foundations)

### 1.1. Typography (Kiểu chữ)
- **Font chữ chính:** `Inter` hoặc `Roboto` (tối ưu cho đọc dữ liệu và bảng biểu).
- **Hệ thống phân cấp (Hierarchy):**
  - H1 (Page Title): 24px - 30px, Font-weight: SemiBold (600).
  - H2 (Section Title): 20px, Font-weight: SemiBold (600).
  - H3 (Card Title): 18px, Font-weight: Medium (500).
  - Body (Văn bản chính): 14px, Font-weight: Regular (400).
  - Small/Caption: 12px, Font-weight: Regular (400) - Dùng cho ghi chú, thời gian.

### 1.2. Spacing (Khoảng cách)
Tuân theo lưới 4-point (Base 4px) để tạo nhịp điệu thị giác:
- Tỉ lệ: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`.
- Padding trong Card: `24px`.
- Khoảng cách giữa các section: `32px`.
- Khoảng cách giữa các input trong form: `16px`.

### 1.3. Color (Màu sắc)
- **Primary (Thương hiệu/Hành động chính):** Xanh dương (Blue/Indigo) - Thể hiện sự tin cậy.
- **Success (Thành công/Hoàn thành):** Xanh lá cây (Green) - Dùng cho trạng thái Pass, thông báo thành công.
- **Warning (Cảnh báo/Đang chờ):** Vàng cam (Amber/Yellow) - Dùng cho trạng thái Pending.
- **Danger/Error (Lỗi/Xóa):** Đỏ (Red) - Dùng cho nút Xóa, trạng thái Fail, lỗi hệ thống.
- **Neutrals (Màu trung tính):** Các sắc độ Xám (Gray/Slate) - Dùng cho nền, viền, chữ (từ đậm đến nhạt).

### 1.4. Border Radius (Bo góc)
- **Nhỏ (Radius-sm):** `4px` - Dùng cho Checkbox, Tag nhỏ.
- **Vừa (Radius-md):** `6px` - Dùng cho Button, Input, Dropdown, Badge.
- **Lớn (Radius-lg):** `8px` hoặc `12px` - Dùng cho Card, Modal, Dialog.
- **Tròn (Radius-full):** `9999px` - Dùng cho Avatar, Status Indicator.

---

## 2. Thành phần cốt lõi (Core Components)

### 2.1. Button
- **Kích thước:** Small (cao 32px), Medium (cao 40px), Large (cao 48px).
- **Biến thể (Variants):**
  - *Primary:* Nền màu Primary, chữ trắng (Hành động chính như Lưu, Tạo mới).
  - *Secondary:* Nền Xám nhạt, chữ Đen (Hành động phụ như Hủy).
  - *Outline:* Viền màu, nền trong suốt (Hành động thay thế).
  - *Destructive:* Nền màu Đỏ, chữ trắng (Hành động xóa).
  - *Ghost:* Chỉ có chữ, không nền không viền (nền xuất hiện khi hover).

### 2.2. Input (Trường nhập liệu)
- Chiều cao tiêu chuẩn: `40px`.
- Viền: Xám nhạt, đổi màu Primary khi Focus (có focus ring).
- Trạng thái Lỗi: Viền Đỏ, kèm dòng text báo lỗi nhỏ (Caption) bên dưới.
- Disabled: Nền xám nhạt, chữ mờ, cursor not-allowed.

### 2.3. Card (Khối nội dung)
- Khối chứa thông tin độc lập. Nền Trắng, đổ bóng nhẹ (Shadow-sm), viền siêu mỏng (Border-gray-200).
- Cấu trúc: Header (Title, Action), Body (Nội dung), Footer (Phân trang, Action).

### 2.4. Table (Bảng dữ liệu)
- Header: Nền xám nhạt, chữ in hoa nhẹ hoặc in đậm, có icon sắp xếp (Sort).
- Dòng dữ liệu (Row): Viền dưới mỏng, đổi màu nền nhẹ khi Hover (Hover state).
- Mật độ (Density): Khoảng cách ô (cell padding) đủ rộng để dễ click nhưng không làm bảng quá dài.

### 2.5. Badge & Tag
- **Badge:** Hình con nhộng (Pill), kích thước nhỏ, dùng để đếm số lượng (VD: Notification badge).
- **Tag:** Hình chữ nhật bo góc, dùng để dán nhãn phân loại (VD: Tag "UI", "API"). Nền màu nhạt, chữ màu đậm cùng tone.

### 2.6. Avatar (Ảnh đại diện)
- Hình tròn (Circle). Nếu không có ảnh chụp, hiển thị chữ cái đầu tiên của Tên trên nền màu ngẫu nhiên nhưng cố định theo User.

---

## 3. Thành phần phản hồi (Feedback & Overlay)

### 3.1. Toast (Thông báo nổi)
- Xuất hiện ở góc dưới cùng bên phải (Bottom-Right).
- Tự động biến mất sau 3-5 giây.
- 4 Trạng thái: Success (Xanh lá), Error (Đỏ), Info (Xanh dương), Warning (Cam).
- Có icon minh họa và nút tắt (X).

### 3.2. Modal & Dialog
- **Modal:** Dùng để chứa Form hoặc nội dung lớn (VD: Form tạo Test Case). Khung rộng (Max-width 600px - 800px).
- **Dialog:** Nhỏ hơn Modal, chuyên dùng để xác nhận thao tác (VD: "Bạn có chắc chắn muốn xóa?").
- Có lớp phủ nền đen mờ (Backdrop overlay 50%). Khi mở, ngăn chặn cuộn trang (Body scroll lock).

### 3.3. Dropdown (Menu thả xuống)
- Xuất hiện khi click vào một nút (như Avatar hoặc nút "...").
- Nổi đè lên UI (Popover), có đổ bóng (Shadow-md). Đóng khi click ra ngoài màn hình (Click outside).

---

## 4. Điều hướng & Tương tác (Navigation & Interaction)

### 4.1. Pagination (Phân trang)
- Bao gồm nút "Previous" và "Next".
- Ở giữa là các số trang. Rút gọn bằng dấu "..." nếu quá nhiều trang (VD: 1 2 ... 8 9 10).
- Có hiển thị tổng số kết quả (VD: "Đang xem 1-10 trên 150 Bug").

### 4.2. Search Box (Thanh tìm kiếm)
- Luôn có Icon Kính lúp (Magnifying glass) ở bên trái.
- Có nút "X" (Clear) bên phải khi có text để xóa nhanh nội dung tìm kiếm.
- Có độ trễ (Debounce) khi gõ để tránh gọi API liên tục.

### 4.3. Filter Panel (Bảng bộ lọc)
- Dùng cho màn hình nhiều dữ liệu (Bug, Test Case).
- Nằm trên bảng (Inline) đối với các bộ lọc cơ bản.
- Trượt từ bên phải ra (Drawer/Sidebar) đối với các bộ lọc nâng cao phức tạp.

---

## 5. Hệ thống Trạng thái (Status & Badges)

### 5.1. Status Badge (Trạng thái công việc)
- **Open / New:** Nền Xanh lam nhạt (Blue), chữ Xanh lam đậm.
- **In Progress:** Nền Tím hoặc Cam nhạt, chữ Tím/Cam đậm.
- **Resolved / Pass:** Nền Xanh lá nhạt, chữ Xanh lá đậm.
- **Closed / Fail:** Nền Xám nhạt (hoặc Đỏ cho Fail), chữ Xám/Đỏ.

### 5.2. Priority Badge (Mức độ ưu tiên)
- **Low:** Icon mũi tên xuống (Màu Xám).
- **Medium:** Icon dấu bằng hoặc vạch ngang (Màu Xanh lam).
- **High:** Icon mũi tên lên (Màu Cam).
- **Urgent:** Icon ngọn lửa hoặc mũi tên đỏ (Màu Đỏ).

### 5.3. Severity Badge (Mức độ nghiêm trọng của Bug)
- **Minor / Trivial:** Xanh lam.
- **Major:** Cam / Vàng.
- **Critical / Blocker:** Đỏ đậm (Nền đỏ nhạt, text đỏ tươi để nổi bật tối đa).

---

## 6. Trạng thái chờ & Dữ liệu trống (Loading & Empty States)

### 6.1. Loading (Tải dữ liệu)
- Không dùng Spinner toàn màn hình gây giật lag.
- Nút bấm (Button): Trạng thái loading sẽ ẩn text, hiển thị Spinner nhỏ ngay trong nút.
- Bảng dữ liệu: Hiển thị Spinner mờ trên nền bảng cũ, hoặc dùng Skeleton.

### 6.2. Skeleton (Khung tải)
- Khối chữ nhật màu Xám nhạt, có hiệu ứng chớp tắt chậm (Pulse).
- Hình dáng Skeleton mô phỏng chính xác nội dung sắp hiển thị (Khung tròn cho Avatar, khung dài cho Dòng text).

### 6.3. Empty State (Màn hình trống)
- Thiết kế ở giữa vùng nội dung.
- Bao gồm: Một hình minh họa lớn (Illustration) hoặc Icon màu xám + Tiêu đề báo lỗi/trống + Nút Call-to-action (Ví dụ: "Bạn chưa có Project nào. Nhấn để tạo Project đầu tiên").

---

## 7. Các quy tắc mở rộng

### 7.1. Responsive Rules (Quy tắc thích ứng màn hình)
- **Desktop (Lớn hơn 1024px):** Hiển thị Sidebar đầy đủ (mở rộng). Form đặt nhiều cột.
- **Tablet (768px - 1024px):** Thu gọn Sidebar thành dạng chỉ có Icon.
- **Mobile (Nhỏ hơn 768px):** 
  - Ẩn hẳn Sidebar, mở bằng nút Hamburger Menu.
  - Các input trong Form từ nhiều cột chuyển thành 1 cột xếp chồng (Stack vertical).
  - Table chuyển sang dạng thu gọn (cắt bớt cột phụ) hoặc dạng Card list.

### 7.2. Dark Mode (Chế độ tối)
- Đảo ngược hệ màu trung tính (Neutrals): Nền Trắng thành nền Đen xám (Slate-900), Chữ Đen thành chữ Trắng (Slate-50).
- Giảm độ bão hòa (Desaturate) của các màu Primary, Success, Danger để không gây chói mắt trên nền tối.
- Shadow (đổ bóng) ở chế độ Light mode sẽ đổi thành viền (Border mỏng) màu xám đậm trong Dark mode để tách biệt các khối.
