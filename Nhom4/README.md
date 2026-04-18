# 📝 Ghi Chú Cá Nhân (Personal Note Application)

Ứng dụng ghi chú cá nhân được xây dựng bằng React + Vite với các tính năng hiện đại.

## ✨ Tính Năng

### 1. **Thêm/Xóa Ghi Chú** (useState)
- Thêm ghi chú mới thông qua form
- Xóa ghi chú bằng nút ✕
- Dữ liệu được cập nhật tức thời

### 2. **Đếm Số Ghi Chú** (props)
- Hiển thị số lượng ghi chú ở Header
- Cập nhật tự động khi thêm/xóa ghi chú
- Truyền qua props từ App sang Header

### 3. **Dark/Light Mode** (Context API + useContext)
- Chuyển đổi giữa chế độ sáng và tối
- Áp dụng toàn bộ trang web
- Sử dụng Context API để quản lý trạng thái chủ đề
- Lưu tuỳ chọn theme vào localStorage

### 4. **Lưu Dữ Liệu Vĩnh Viễn** (useEffect + localStorage)
- Tất cả ghi chú được lưu vào localStorage
- Không mất dữ liệu khi reload trang
- Dữ liệu được tự động khôi phục khi vào lại ứng dụng

## 🚀 Cài Đặt và Chạy

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy ứng dụng ở chế độ phát triển
npm run dev

# 3. Build cho production
npm run build

# 4. Preview build
npm run preview
```

## 📁 Cấu Trúc Dự Án

```
BAI-TAP-TUONG-TAC/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Main App component (useState, useEffect)
    ├── index.css             # Styling (light/dark modes)
    ├── context/
    │   └── ThemeContext.jsx  # Theme context (Context API)
    └── components/
        ├── Header.jsx        # Header component (props)
        ├── NoteForm.jsx      # Form component (useState)
        └── NoteList.jsx      # List component
```

## 🎯 Các Yêu Cầu và Cách Triển Khai

| Yêu Cầu | Cách Triển Khai | Vị Trí |
|---------|-----------------|--------|
| Thêm/xóa ghi chú | useState hook | App.jsx, NoteForm.jsx, NoteList.jsx |
| Đếm số ghi chú | props | App.jsx → Header.jsx |
| Dark/Light mode | Context API + useContext | ThemeContext.jsx, App.jsx, Header.jsx, các components |
| Reload không mất dữ liệu | useEffect + localStorage | App.jsx, ThemeContext.jsx |

## 💡 Các Hook React Được Sử Dụng

- **useState**: Quản lý trạng thái notes, isDarkMode, noteText
- **useEffect**: Lưu và tải dữ liệu từ localStorage
- **useContext**: Truy cập thông tin theme từ ThemeContext
- **createContext**: Tạo context cho Dark/Light mode

## 🎨 Tính Năng Giao Diện

- Responsive design (tối ưu cho mobile, tablet, desktop)
- Smooth animations khi thêm/xóa ghi chú
- Theme switching với icon (🌙/☀️)
- Timestamp cho mỗi ghi chú
- Empty state khi không có ghi chú

## 📝 Ghi Chú Phát Triển

- Tất cả ghi chú được lưu với ID duy nhất (Date.now())
- Theme được lưu vào localStorage (ThemeContext)
- Notes được lưu vào localStorage (App.jsx)
- Sử dụng Vite cho build tool nhanh hơn
- CSS sử dụng CSS Variables cho dễ dàng quản lý màu sắc

Chúc mừng! 🎉
