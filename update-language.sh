#!/bin/bash

# Script to add language switcher to all HTML pages
# Run this after creating new pages

echo "Adding i18n.js and language switcher to HTML files..."

for file in *.html; do
    # Skip if already has i18n.js
    if grep -q "i18n.js" "$file"; then
        echo "✓ $file already has i18n.js"
        continue
    fi

    # Add i18n.js before script.js
    sed -i 's|<script src="script.js">|<script src="i18n.js"></script>\n    <script src="script.js">|' "$file"
    echo "✓ Added i18n.js to $file"
done

echo "Done! Don't forget to:"
echo "1. Add data-i18n attributes to navigation menu items"
echo "2. Add language-switcher div to navbar"
echo "3. Add data-lang-content for bilingual content"
echo ""
echo "See LANGUAGE_GUIDE.md for details"
