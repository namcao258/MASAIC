#!/usr/bin/env python3
"""
Script to add language switcher and data-i18n attributes to all HTML files
"""

import os
import re

# Navigation menu template with data-i18n
NAV_TEMPLATE = '''            <ul class="nav-menu">
                <li><a href="index.html"{active_home} data-i18n="nav.home">Home</a></li>
                <li><a href="index.html#about" data-i18n="nav.about">About</a></li>
                <li><a href="index.html#teams" data-i18n="nav.teams">Teams</a></li>
                <li><a href="members.html"{active_members} data-i18n="nav.members">Members</a></li>
                <li><a href="publications.html"{active_pubs} data-i18n="nav.publications">Publications</a></li>
                <li><a href="news.html"{active_news} data-i18n="nav.news">News</a></li>
                <li><a href="schedule.html"{active_sched} data-i18n="nav.schedule">Schedule</a></li>
                <li><a href="sponsors.html"{active_sponsors} data-i18n="nav.sponsors">Sponsors</a></li>
            </ul>
            <div class="language-switcher">
                <button class="lang-btn active" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="ja">日本語</button>
            </div>'''

# Files to update and their active menu item
FILES = {
    'publications.html': 'pubs',
    'news.html': 'news',
    'schedule.html': 'sched',
    'sponsors.html': 'sponsors',
    'team-robotics.html': None,
    'team-ai.html': None,
    'team-perception.html': None,
    'team-hri.html': None,
}

def update_file(filename, active_item=None):
    """Update a single HTML file"""
    print(f"Processing {filename}...")

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has language switcher
    if 'language-switcher' in content:
        print(f"  ✓ {filename} already has language switcher")
        return

    # Determine active states
    active = {
        'active_home': '',
        'active_members': '',
        'active_pubs': '',
        'active_news': '',
        'active_sched': '',
        'active_sponsors': ''
    }

    if active_item:
        active[f'active_{active_item}'] = ' class="active"'

    # Generate nav menu
    nav_menu = NAV_TEMPLATE.format(**active)

    # Replace old nav menu (find <ul class="nav-menu"> ... </ul>)
    pattern = r'<ul class="nav-menu">.*?</ul>\s*</div>\s*</nav>'
    replacement = nav_menu + '\n        </div>\n    </nav>'

    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    # Add i18n.js if not present
    if 'i18n.js' not in new_content:
        new_content = new_content.replace(
            '<script src="script.js">',
            '<script src="i18n.js"></script>\n    <script src="script.js">'
        )

    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  ✓ Updated {filename}")

def main():
    print("Adding language switcher to HTML files...\n")

    for filename, active_item in FILES.items():
        if os.path.exists(filename):
            update_file(filename, active_item)
        else:
            print(f"  ⚠ {filename} not found, skipping...")

    print("\n✅ Done! Language switcher added to all files.")
    print("\n📝 Next steps:")
    print("   1. Review the changes")
    print("   2. Add Japanese content using data-lang-content")
    print("   3. See LANGUAGE_GUIDE.md for examples")

if __name__ == '__main__':
    main()
