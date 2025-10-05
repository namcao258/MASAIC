# Hướng dẫn sử dụng Đa ngôn ngữ (Multi-language Guide)

## 🌐 Ngôn ngữ hỗ trợ
- 🇬🇧 **English (EN)** - Tiếng Anh
- 🇯🇵 **日本語 (JA)** - Tiếng Nhật

## 📝 Cách thêm nội dung đa ngôn ngữ

### Phương pháp 1: Sử dụng `data-i18n` cho text đơn giản

Thêm attribute `data-i18n` vào element với key tương ứng:

```html
<h2 data-i18n="section.title">Section Title</h2>
<p data-i18n="section.description">Description text</p>
```

Sau đó thêm translation vào file `i18n.js`:

```javascript
const translations = {
    en: {
        'section.title': 'Section Title',
        'section.description': 'Description text'
    },
    ja: {
        'section.title': 'セクションタイトル',
        'section.description': '説明文'
    }
};
```

### Phương pháp 2: Sử dụng `data-lang-content` cho nội dung phức tạp

Tạo 2 version của nội dung, một cho tiếng Anh và một cho tiếng Nhật:

```html
<!-- English Version -->
<div data-lang-content="en">
    <h2>About MASAIC</h2>
    <p>
        MASAIC is a cutting-edge research project exploring the integration of
        Large Language Models (LLMs) and AI technologies in autonomous robotic systems.
    </p>
</div>

<!-- Japanese Version -->
<div data-lang-content="ja">
    <h2>MASAICについて</h2>
    <p>
        MASAICは、大規模言語モデル（LLM）とAI技術を自律ロボットシステムに
        統合する最先端の研究プロジェクトです。
    </p>
</div>
```

## 🎯 Ví dụ cụ thể

### Navigation Menu (Đã được implement)

```html
<ul class="nav-menu">
    <li><a href="index.html" data-i18n="nav.home">Home</a></li>
    <li><a href="#about" data-i18n="nav.about">About</a></li>
    <li><a href="#teams" data-i18n="nav.teams">Teams</a></li>
</ul>
```

### Hero Section Example

```html
<!-- English -->
<div class="hero-content" data-lang-content="en">
    <h1 class="hero-title">Advancing the Future of Intelligent Robotics</h1>
    <p class="hero-description">
        MASAIC is a cutting-edge research project...
    </p>
</div>

<!-- Japanese -->
<div class="hero-content" data-lang-content="ja">
    <h1 class="hero-title">インテリジェントロボティクスの未来を切り拓く</h1>
    <p class="hero-description">
        MASAICは最先端の研究プロジェクト...
    </p>
</div>
```

### Team Cards Example

```html
<a href="team-robotics.html" class="team-card">
    <div class="team-image">
        <img src="images/team-robotics.jpg" alt="Robotics Team">
    </div>
    <!-- English -->
    <div class="team-info" data-lang-content="en">
        <h3>Robotics & Control</h3>
        <p>Developing advanced robotic platforms and control systems</p>
    </div>
    <!-- Japanese -->
    <div class="team-info" data-lang-content="ja">
        <h3>ロボティクス・制御</h3>
        <p>高度なロボットプラットフォームと制御システムの開発</p>
    </div>
</a>
```

## 📋 Translation Keys có sẵn

### Navigation
- `nav.home` - Home / ホーム
- `nav.about` - About / 概要
- `nav.teams` - Teams / チーム
- `nav.members` - Members / メンバー
- `nav.publications` - Publications / 研究成果
- `nav.news` - News / ニュース
- `nav.schedule` - Schedule / スケジュール
- `nav.sponsors` - Sponsors / スポンサー

### Common Actions
- `common.readmore` - Read more / 続きを読む
- `common.learnmore` - Learn More / 詳しく見る
- `common.contactus` - Contact Us / お問い合わせ
- `common.viewall` - View All / すべて表示
- `common.backto` - Back to / 戻る

## ➕ Thêm Translation Keys mới

Mở file `i18n.js` và thêm vào object `translations`:

```javascript
const translations = {
    en: {
        // ... existing translations
        'yourkey.name': 'Your English Text',
    },
    ja: {
        // ... existing translations
        'yourkey.name': 'あなたの日本語テキスト',
    }
};
```

## 🔧 Testing

1. Mở website
2. Click nút "EN" hoặc "日本語" ở góc phải navigation
3. Kiểm tra nội dung có chuyển đổi đúng không
4. Refresh trang - ngôn ngữ được lưu trong localStorage

## 📌 Lưu ý quan trọng

1. **Tất cả các trang** cần include cả 2 script:
   ```html
   <script src="i18n.js"></script>
   <script src="script.js"></script>
   ```

2. **Language switcher** cần có trên mọi trang:
   ```html
   <div class="language-switcher">
       <button class="lang-btn active" data-lang="en">EN</button>
       <button class="lang-btn" data-lang="ja">日本語</button>
   </div>
   ```

3. Ngôn ngữ được lưu trong **localStorage**, nên user không phải chọn lại mỗi lần

4. Đối với nội dung dài/phức tạp, nên dùng `data-lang-content` thay vì `data-i18n`

## 🎨 Styling cho Japanese Font

Nếu cần font chữ Nhật đẹp hơn, thêm vào CSS:

```css
html[lang="ja"] {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3',
                 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
```

## TODO: Các trang cần thêm nội dung tiếng Nhật

- [ ] index.html - Hero, About, Features sections
- [ ] team-*.html - Team descriptions
- [ ] members.html - Member roles and descriptions
- [ ] publications.html - Publication titles and abstracts
- [ ] news.html - News items
- [ ] schedule.html - Events and milestones
- [ ] sponsors.html - Sponsor descriptions
