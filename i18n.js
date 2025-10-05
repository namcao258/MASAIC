// ========================================
// MASAIC Project - Internationalization (i18n)
// Language Switcher: English ⇄ Japanese
// ========================================

// Language data
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.teams': 'Teams',
        'nav.members': 'Members',
        'nav.publications': 'Publications',
        'nav.news': 'News',
        'nav.schedule': 'Schedule',
        'nav.sponsors': 'Sponsors',

        // Common
        'common.readmore': 'Read more',
        'common.learnmore': 'Learn More',
        'common.contactus': 'Contact Us',
        'common.viewall': 'View All',
        'common.backto': 'Back to',
    },
    ja: {
        // Navigation
        'nav.home': 'ホーム',
        'nav.about': '概要',
        'nav.teams': 'チーム',
        'nav.members': 'メンバー',
        'nav.publications': '研究成果',
        'nav.news': 'ニュース',
        'nav.schedule': 'スケジュール',
        'nav.sponsors': 'スポンサー',

        // Common
        'common.readmore': '続きを読む',
        'common.learnmore': '詳しく見る',
        'common.contactus': 'お問い合わせ',
        'common.viewall': 'すべて表示',
        'common.backto': '戻る',
    }
};

// Current language (default: English)
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language immediately (before DOMContentLoaded)
// This prevents blank content on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

function initLanguage() {
    // Set initial language
    setLanguage(currentLang);

    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang') || (this.textContent.trim() === 'EN' ? 'en' : 'ja');
            setLanguage(lang);
        });
    });
}

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update active state of language buttons - remove active from all first
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Then add active to the selected language button(s)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnText = btn.textContent.trim();
        if ((lang === 'en' && btnText === 'EN') || (lang === 'ja' && btnText === '日本語')) {
            btn.classList.add('active');
        }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Show/hide language-specific content
    document.querySelectorAll('[data-lang-content]').forEach(element => {
        const elementLang = element.getAttribute('data-lang-content');
        if (elementLang === lang) {
            element.style.display = ''; // Show current language
        } else {
            element.style.display = 'none'; // Hide other languages
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return currentLang;
}

// Translate key
function t(key) {
    return translations[currentLang][key] || key;
}
