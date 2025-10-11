# MASAIC Project Website

<!-- TODO: Thay đổi mô tả dự án ở đây -->
Website chính thức cho dự án MASAIC - Multi-Agent Systems for AI Innovation and Collaboration

## 🚀 Giới thiệu

Dự án MASAIC tập trung vào nghiên cứu và phát triển hệ thống robot thông minh tích hợp AI và Large Language Models (LLMs).

## 📁 Cấu trúc Project

```
MASAIC/
├── index.html              # Trang chủ
├── members.html            # Trang danh sách thành viên
├── publications.html       # Trang publications
├── news.html              # Trang tin tức
├── schedule.html          # Trang lịch làm việc
├── seminar.html           # Trang seminar series
├── collaboration.html     # Trang hợp tác
├── sponsors.html          # Trang nhà tài trợ
├── team-robotics.html     # Trang team Robotics & Control
├── team-ai.html           # Trang team AI & LLM Integration
├── team-perception.html   # Trang team Perception & Sensing
├── team-hri.html          # Trang team Human-Robot Interaction
├── styles.css             # File CSS chính
├── script.js              # File JavaScript chính
├── i18n.js                # File đa ngôn ngữ (EN/JP)
├── images/                # Thư mục chứa hình ảnh
├── seminars/              # Thư mục quản lý seminars
│   ├── upcoming/          # Seminars sắp diễn ra
│   │   ├── [Speaker Name]/
│   │   │   ├── photo.png
│   │   │   └── talk.pdf
│   │   └── seminars.json
│   └── past/              # Seminars đã diễn ra
│       ├── [Speaker Name]/
│       │   ├── photo.png
│       │   └── talk.pdf
│       └── seminars.json
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

## 🎓 Quản lý Seminar Page

### Thêm Seminar Mới

1. **Tạo thư mục cho diễn giả** trong `seminars/upcoming/` hoặc `seminars/past/`:
   ```
   seminars/upcoming/[Tên Diễn Giả]/
   ├── photo.png (hoặc .jpg)
   └── talk_info.pdf
   ```

2. **Yêu cầu tạo JSON entry**:
   - Nói với Claude Code: "Thêm diễn giả [Tên] vào upcoming/past"
   - Claude sẽ đọc PDF và tạo JSON entry tự động

3. **Review và chỉnh sửa** `seminars.json` nếu cần

### Cấu trúc JSON Entry

```json
{
  "id": "speaker-name-2024",
  "speaker": {
    "name": "Dr. Speaker Name",
    "title": "Position",
    "affiliation": "University/Institution",
    "website": "https://...",
    "photo": "seminars/upcoming/Speaker Name/photo.png",
    "bio": "Speaker biography..."
  },
  "title": "Talk Title",
  "type": "Online Lecture",
  "series": {
    "isSeries": true,
    "totalTalks": 3,
    "talks": [
      {
        "number": 1,
        "date": "2024-10-15",
        "time": "9:00-10:30",
        "status": "fixed"
      }
    ]
  },
  "zoom": {
    "url": "https://zoom.us/...",
    "meetingId": "123 456 7890",
    "passcode": "password"
  },
  "abstract": "Talk abstract...",
  "pdfPath": "seminars/upcoming/Speaker Name/talk.pdf"
}
```

### Move Seminar từ Upcoming sang Past

1. Di chuyển thư mục diễn giả từ `seminars/upcoming/` sang `seminars/past/`
2. Move JSON entry từ `upcoming/seminars.json` sang `past/seminars.json`
3. Cập nhật thông tin: thêm `youtube` URL, `date`, `time`

## 📝 Ghi chú

- Tất cả các vị trí cần thay đổi đều được đánh dấu bằng comment `<!-- TODO: ... -->`
- Website responsive, hoạt động tốt trên mobile và desktop
- Sử dụng vanilla HTML/CSS/JS, không cần build process
- Hỗ trợ đa ngôn ngữ (English/Japanese)
- Seminar page tự động load từ JSON files

## 📄 License

<!-- TODO: Thêm license cho dự án -->

## 👥 Contributors

<!-- TODO: Thêm danh sách contributors -->
