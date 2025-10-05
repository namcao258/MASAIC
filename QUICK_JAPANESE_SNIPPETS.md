# Quick Japanese Translation Snippets

## ✅ HOÀN THÀNH
- ✅ index.html
- ✅ members.html

## 📝 CÒN LẠI - Copy & Paste Snippets

### 1. Publications.html

**Replace header section (line ~35-40):**
```html
<!-- Page Header -->
<section class="team-header">
    <div class="container">
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
    </div>
</section>
```

**After existing content, before `</div></div></section>`, add Japanese version:**
```html
<!-- Japanese Version -->
<div data-lang-content="ja" style="display: none;">
    <div class="publication-filters">
        <button class="filter-btn active">すべて</button>
        <button class="filter-btn">2024</button>
        <button class="filter-btn">2023</button>
        <button class="filter-btn">会議</button>
        <button class="filter-btn">ジャーナル</button>
    </div>

    <h2>2024</h2>
    <div class="publications-list">
        <div class="publication-item">
            <h3>[論文タイトル 1]</h3>
            <p class="authors">[著者 1], [著者 2], [著者 3]</p>
            <p class="venue"><strong>会議/ジャーナル:</strong> [会議/雑誌名]</p>
            <p class="abstract">
                [論文の概要。研究、方法論、主な結果についての簡単な説明。]
            </p>
            <div class="publication-links">
                <a href="#" class="pub-link">📄 PDF</a>
                <a href="#" class="pub-link">🔗 DOI</a>
                <a href="#" class="pub-link">💻 コード</a>
                <a href="#" class="pub-link">📊 スライド</a>
            </div>
        </div>
    </div>

    <h2 style="margin-top: 3rem;">2023</h2>
    <div class="publications-list">
        <div class="publication-item">
            <h3>[論文タイトル 2]</h3>
            <p class="authors">[著者 1], [著者 2]</p>
            <p class="venue"><strong>会議/ジャーナル:</strong> [会議/雑誌名]</p>
            <p class="abstract">[論文の概要。]</p>
            <div class="publication-links">
                <a href="#" class="pub-link">📄 PDF</a>
                <a href="#" class="pub-link">🔗 DOI</a>
            </div>
        </div>
    </div>

    <h2 style="margin-top: 3rem;">プレプリント・査読中</h2>
    <div class="publications-list">
        <div class="publication-item">
            <h3>[査読中の論文タイトル]</h3>
            <p class="authors">[著者 1], [著者 2], [著者 3]</p>
            <p class="venue"><strong>ステータス:</strong> [会議/雑誌名]にて査読中</p>
            <p class="abstract">[論文の概要。]</p>
            <div class="publication-links">
                <a href="#" class="pub-link">📄 arXiv</a>
            </div>
        </div>
    </div>

    <div class="publication-stats" style="margin-top: 3rem;">
        <h2>出版統計</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">15+</div>
                <div class="stat-label">総出版数</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">被引用数</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">10+</div>
                <div class="stat-label">会議論文</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">5+</div>
                <div class="stat-label">ジャーナル論文</div>
            </div>
        </div>
    </div>
</div>
```

### 2. News.html

**Replace header:**
```html
<section class="team-header">
    <div class="container">
        <div data-lang-content="en">
            <h1>News & Updates</h1>
            <p>Latest news, achievements, and announcements from MASAIC</p>
        </div>
        <div data-lang-content="ja" style="display: none;">
            <h1>ニュース・最新情報</h1>
            <p>MASAICの最新ニュース、成果、お知らせ</p>
        </div>
    </div>
</section>
```

**Wrap content and add Japanese (example for one news item):**
```html
<!-- English -->
<div data-lang-content="en">
    <div class="news-grid">
        <div class="news-item">
            <div class="news-date">
                <span class="date-day">15</span>
                <span class="date-month">Dec 2024</span>
            </div>
            <div class="news-content">
                <span class="news-category">Award</span>
                <h3>[News Title - Example: Won Best Paper Award]</h3>
                <p>[News description...]</p>
                <a href="#" class="read-more">Read more →</a>
            </div>
        </div>
    </div>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <div class="news-grid">
        <div class="news-item">
            <div class="news-date">
                <span class="date-day">15</span>
                <span class="date-month">2024年12月</span>
            </div>
            <div class="news-content">
                <span class="news-category">受賞</span>
                <h3>[ニュースタイトル - 例：最優秀論文賞を受賞]</h3>
                <p>[ニュースの説明...]</p>
                <a href="#" class="read-more">続きを読む →</a>
            </div>
        </div>
    </div>
</div>
```

**News categories translation:**
```
Award → 受賞
Publication → 出版
Event → イベント
Demo → デモ
Collaboration → 協力
Team → チーム
```

### 3. Schedule.html

**Header:**
```html
<section class="team-header">
    <div class="container">
        <div data-lang-content="en">
            <h1>Project Schedule & Events</h1>
            <p>Upcoming events, milestones, and important dates</p>
        </div>
        <div data-lang-content="ja" style="display: none;">
            <h1>プロジェクトスケジュール・イベント</h1>
            <p>今後のイベント、マイルストーン、重要な日程</p>
        </div>
    </div>
</section>
```

**Event example:**
```html
<!-- English -->
<div data-lang-content="en">
    <h2>Upcoming Events</h2>
    <div class="timeline-item upcoming">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="event-date">January 15, 2025</div>
            <h3>[Event Name - Example: Project Workshop]</h3>
            <p class="event-type">🎓 Workshop</p>
            <p class="event-description">[Description...]</p>
            <p class="event-location">📍 [Location]</p>
        </div>
    </div>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h2>今後のイベント</h2>
    <div class="timeline-item upcoming">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="event-date">2025年1月15日</div>
            <h3>[イベント名 - 例：プロジェクトワークショップ]</h3>
            <p class="event-type">🎓 ワークショップ</p>
            <p class="event-description">[説明...]</p>
            <p class="event-location">📍 [場所]</p>
        </div>
    </div>
</div>
```

**Milestone statuses:**
```
Completed → 完了
In Progress → 進行中
Upcoming → 予定
```

### 4. Sponsors.html

**Header:**
```html
<section class="team-header">
    <div class="container">
        <div data-lang-content="en">
            <h1>Our Sponsors & Partners</h1>
            <p>Supporting organizations and institutions that make MASAIC possible</p>
        </div>
        <div data-lang-content="ja" style="display: none;">
            <h1>スポンサー・パートナー</h1>
            <p>MASAICプロジェクトを支援する組織と機関</p>
        </div>
    </div>
</section>
```

**Sections:**
```html
<!-- English -->
<div data-lang-content="en">
    <h2>Principal Sponsors</h2>
    <h2>Funding Organizations</h2>
    <h2>Collaborating Institutions</h2>
    <h2>Equipment & In-Kind Support</h2>
</div>

<!-- Japanese -->
<div data-lang-content="ja" style="display: none;">
    <h2>主要スポンサー</h2>
    <h2>助成機関</h2>
    <h2>協力機関</h2>
    <h2>機器・現物支援</h2>
</div>
```

## 🔧 Quick Steps

Cho mỗi file:

1. **Open file HTML**
2. **Find the header section** → Replace với snippet trên
3. **Wrap nội dung hiện có trong `<div data-lang-content="en">`**
4. **Copy Japanese version** từ snippets trên
5. **Paste before closing `</div></div></section>`**
6. **Save và test** bằng cách reload trang + click 日本語

## 🎯 Priority Order

1. ✅ index.html - DONE
2. ✅ members.html - DONE
3. ⏳ publications.html - Use snippet above
4. ⏳ news.html - Use snippet above
5. ⏳ schedule.html - Use snippet above
6. ⏳ sponsors.html - Use snippet above

## 📌 Testing

Sau mỗi file:
```bash
git add [filename].html
git commit -m "Add Japanese translation for [filename]"
git push origin main
```

Đợi 1-2 phút → Test trên https://namcao258.github.io/MASAIC/
