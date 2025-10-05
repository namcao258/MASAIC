# MASAIC Project Website

<!-- TODO: Thay đổi mô tả dự án ở đây -->
Website chính thức cho dự án MASAIC - Multi-Agent Systems for AI Innovation and Collaboration

## 🚀 Giới thiệu

Dự án MASAIC tập trung vào nghiên cứu và phát triển hệ thống robot thông minh tích hợp AI và Large Language Models (LLMs).

## 📁 Cấu trúc Project

```
MASAIC/
├── index.html              # Trang chủ
├── team-robotics.html      # Trang team Robotics & Control
├── team-ai.html            # Trang team AI & LLM Integration
├── team-perception.html    # Trang team Perception & Sensing
├── team-hri.html          # Trang team Human-Robot Interaction
├── styles.css             # File CSS chính
├── script.js              # File JavaScript
├── images/                # Thư mục chứa hình ảnh
└── README.md              # File này
```

## 🎨 Tùy chỉnh nội dung

### 1. Thay đổi tên đầy đủ của dự án

Tìm tất cả các comment `<!-- TODO: Thay đổi tên đầy đủ của dự án ở đây -->` trong các file HTML và cập nhật.

### 2. Thay đổi màu sắc

Mở file `styles.css` và chỉnh sửa CSS Variables ở đầu file:

```css
:root {
    --primary-color: #2563eb;      /* Màu chính */
    --secondary-color: #1e40af;    /* Màu phụ */
    --accent-color: #60a5fa;       /* Màu nhấn */
}
```

### 3. Thêm hình ảnh cho các team

Thêm các file hình ảnh vào thư mục `images/`:
- `team-robotics.jpg`
- `team-ai.jpg`
- `team-perception.jpg`
- `team-hri.jpg`

### 4. Cập nhật nội dung

Tìm các comment `<!-- TODO: ... -->` trong các file HTML để biết nơi cần cập nhật:
- Giới thiệu dự án
- Tính năng
- Thông tin team
- Thông tin thành viên
- Thông tin liên hệ

## 🌐 Deploy lên GitHub Pages

### Cách 1: Qua GitHub Web Interface

1. Push code lên GitHub repository
2. Vào repository trên GitHub
3. Click **Settings** → **Pages**
4. Trong **Source**, chọn **main** branch
5. Click **Save**
6. Website sẽ có địa chỉ: `https://namcao258.github.io/MASAIC/`

### Cách 2: Qua Command Line (đã được cấu hình)

```bash
git add .
git commit -m "Initial commit: MASAIC project website"
git push origin main
```

Sau đó làm theo bước 2-6 ở Cách 1.

## 🛠️ Phát triển Local

Mở file `index.html` bằng trình duyệt để xem website locally.

Hoặc sử dụng local server:

```bash
# Python 3
python -m http.server 8000

# Hoặc nếu có Node.js
npx http-server
```

Sau đó truy cập: `http://localhost:8000`

## 📝 Ghi chú

- Tất cả các vị trí cần thay đổi đều được đánh dấu bằng comment `<!-- TODO: ... -->`
- Website responsive, hoạt động tốt trên mobile và desktop
- Sử dụng vanilla HTML/CSS/JS, không cần build process

## 📄 License

<!-- TODO: Thêm license cho dự án -->

## 👥 Contributors

<!-- TODO: Thêm danh sách contributors -->
