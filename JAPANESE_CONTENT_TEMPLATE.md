# Template nội dung tiếng Nhật cho các trang

## 📋 Danh sách các thuật ngữ thường dùng

### Robotics & AI Terms
| English | Japanese |
|---------|----------|
| Robotics | ロボティクス |
| Control | 制御 |
| AI Integration | AI統合 |
| Large Language Model (LLM) | 大規模言語モデル |
| Perception | 知覚 |
| Sensing | センシング |
| Computer Vision | コンピュータビジョン |
| Sensor Fusion | センサフュージョン |
| Human-Robot Interaction | 人間ロボット相互作用 |
| Multi-Agent System | マルチエージェントシステム |
| Autonomous System | 自律システム |
| Decision Making | 意思決定 |
| Real-Time Processing | リアルタイム処理 |
| Machine Learning | 機械学習 |
| Deep Learning | 深層学習 |
| Natural Language Processing | 自然言語処理 |

### Academic Terms
| English | Japanese |
|---------|----------|
| Research | 研究 |
| Project | プロジェクト |
| Team | チーム |
| Member | メンバー |
| Publication | 研究成果 / 論文 |
| Conference | 会議 / カンファレンス |
| Journal | ジャーナル / 学術誌 |
| Paper | 論文 |
| Award | 賞 |
| Collaboration | 協力 / 協働 |
| Innovation | イノベーション |
| Technology | 技術 |

### Common Phrases
| English | Japanese |
|---------|----------|
| About | について |
| Overview | 概要 |
| Research Focus | 研究テーマ |
| Principal Investigator | 主任研究員 |
| Research Scientist | 研究員 |
| PhD Student | 博士課程学生 |
| Research Assistant | 研究補助員 |
| Our Mission | 私たちの使命 |
| Latest News | 最新ニュース |
| Contact Us | お問い合わせ |
| Learn More | 詳しく見る |
| Read More | 続きを読む |

## 🎯 Template cho các page

### Members Page - Header
```html
<!-- English -->
<div data-lang-content="en">
    <h1>Our Members</h1>
    <p>Meet the talented researchers and engineers behind MASAIC</p>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h1>メンバー紹介</h1>
    <p>MASAICプロジェクトを支える優秀な研究者とエンジニア</p>
</div>
```

### Members Page - Sections
```html
<h2>Principal Investigators</h2>     → <h2>主任研究員</h2>
<h2>Research Scientists</h2>         → <h2>研究員</h2>
<h2>PhD Students</h2>                → <h2>博士課程学生</h2>
<h2>Research Assistants</h2>         → <h2>研究補助員</h2>
<h2>Alumni</h2>                      → <h2>卒業生</h2>
```

### Publications Page
```html
<!-- English -->
<div data-lang-content="en">
    <h1>Publications</h1>
    <p>Research papers and publications from the MASAIC project</p>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h1>研究成果</h1>
    <p>MASAICプロジェクトの研究論文と出版物</p>
</div>
```

### News Page
```html
<!-- English -->
<div data-lang-content="en">
    <h1>News & Updates</h1>
    <p>Latest news, achievements, and announcements from MASAIC</p>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h1>ニュース・最新情報</h1>
    <p>MASAICの最新ニュース、成果、お知らせ</p>
</div>
```

### Schedule Page
```html
<!-- English -->
<div data-lang-content="en">
    <h1>Project Schedule & Events</h1>
    <p>Upcoming events, milestones, and important dates</p>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h1>プロジェクトスケジュール・イベント</h1>
    <p>今後のイベント、マイルストーン、重要な日程</p>
</div>
```

### Sponsors Page
```html
<!-- English -->
<div data-lang-content="en">
    <h1>Our Sponsors & Partners</h1>
    <p>Supporting organizations and institutions that make MASAIC possible</p>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h1>スポンサー・パートナー</h1>
    <p>MASAICプロジェクトを支援する組織と機関</p>
</div>
```

## 📝 Cách translate nội dung TODO

Tất cả các phần có `<!-- TODO: ... -->` đều cần được translate. Dưới đây là template:

### Team Pages

#### Robotics & Control Team
```
EN: Robotics & Control Team
JA: ロボティクス・制御チーム

EN: Developing advanced robotic platforms and control systems
JA: 高度なロボットプラットフォームと制御システムの開発
```

#### AI & LLM Integration Team
```
EN: AI & LLM Integration Team
JA: AI・LLM統合チーム

EN: Integrating large language models for intelligent decision-making
JA: 知的意思決定のための大規模言語モデルの統合
```

#### Perception & Sensing Team
```
EN: Perception & Sensing Team
JA: 知覚・センシングチーム

EN: Computer vision and sensor fusion for environmental understanding
JA: 環境理解のためのコンピュータビジョンとセンサフュージョン
```

#### Human-Robot Interaction Team
```
EN: Human-Robot Interaction Team
JA: 人間ロボット相互作用チーム

EN: Natural and intuitive interfaces for human-robot collaboration
JA: 人間とロボットの協働のための自然で直感的なインターフェース
```

## ✅ Checklist cho mỗi trang

- [ ] Thêm `<div data-lang-content="en">` wrap content tiếng Anh
- [ ] Thêm `<div data-lang-content="ja" style="display: none;">` với nội dung tiếng Nhật
- [ ] Translate tất cả headings (h1, h2, h3)
- [ ] Translate tất cả paragraphs
- [ ] Translate button text và links
- [ ] Kiểm tra navigation menu có data-i18n attributes
- [ ] Kiểm tra có language-switcher buttons
- [ ] Test bằng cách click nút 日本語

## 🔧 Script tự động (Nếu cần)

Để tự động wrap content hiện tại vào English version:

```javascript
// Wrap existing content with English div
const sections = document.querySelectorAll('section .container');
sections.forEach(container => {
    if (!container.querySelector('[data-lang-content]')) {
        const content = container.innerHTML;
        container.innerHTML = `
            <div data-lang-content="en">
                ${content}
            </div>
            <div data-lang-content="ja" style="display: none;">
                <!-- TODO: Add Japanese content here -->
            </div>
        `;
    }
});
```

## 📌 Lưu ý quan trọng

1. **Giữ nguyên HTML structure** - chỉ thay đổi text content
2. **Không translate** các phần:
   - Email addresses
   - URLs
   - Code examples
   - File names
   - Technical IDs

3. **Cần translate**:
   - Headings và titles
   - Descriptions và paragraphs
   - Button labels
   - Alt text cho images
   - Placeholder text

4. **Testing**: Sau khi add, luôn test bằng cách:
   - Click nút EN/日本語
   - Refresh trang (language should persist)
   - Check trên mobile view
