# MASAIC Project - Claude Code Context

## Project Overview

**MASAIC** (Multi-Agent Systems for AI Innovation and Collaboration) is a research project website focused on intelligent robotics systems integrating AI and Large Language Models (LLMs).

- **Type**: Static website (vanilla HTML/CSS/JS)
- **No build process**: Direct HTML/CSS/JS editing
- **Multi-language**: English and Japanese (via i18n.js)
- **Deployment**: GitHub Pages at `https://namcao258.github.io/MASAIC/`

## Project Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Internationalization**: Custom i18n.js system
- **Seminar Management**: JSON-based data files
- **No frameworks**: No React, Vue, or build tools required

### File Structure
```
MASAIC/
├── index.html              # Homepage
├── members.html            # Team members listing
├── publications.html       # Research publications
├── news.html              # News and events
├── schedule.html          # Work schedule
├── seminar.html           # Seminar series page
├── collaboration.html     # Collaboration opportunities
├── sponsors.html          # Sponsors page
├── team-robotics.html     # Robotics & Control team
├── team-ai.html           # AI & LLM Integration team
├── team-neuromorphic.html # Neuromorphic Computing team
├── team-vr-ar.html        # VR/AR team
├── styles.css             # Main stylesheet with CSS variables
├── script.js              # Main JavaScript
├── i18n.js                # Internationalization (EN/JP)
├── images/                # Image assets
└── seminars/              # Seminar management
    ├── upcoming/          # Future seminars
    │   ├── [Speaker Name]/
    │   │   ├── photo.png
    │   │   └── talk.pdf
    │   └── seminars.json
    └── past/              # Past seminars
        ├── [Speaker Name]/
        │   ├── photo.png
        │   └── talk.pdf
        └── seminars.json
```

## Development Guidelines

### 1. Editing HTML Files
- Look for `<!-- TODO: ... -->` comments to find customization points
- Maintain consistent structure across all pages
- Preserve the navigation structure and footer across pages
- Keep responsive design patterns intact

### 2. Styling (styles.css)
- Use CSS variables defined at the top of the file for colors:
  ```css
  :root {
      --primary-color: #2563eb;
      --secondary-color: #1e40af;
      --accent-color: #60a5fa;
  }
  ```
- Follow the existing mobile-first responsive design approach
- All styling changes should maintain mobile compatibility

### 3. Internationalization
- All user-facing text should support EN/JP via i18n.js
- Use `data-i18n` attributes for translatable content
- When adding new content, update both language versions in i18n.js

### 4. Image Management
- Store team images in `images/` directory
- Use appropriate formats: JPG for photos, PNG for graphics
- **IMPORTANT**: Never use HEIC format - browsers don't support it
- Optimize images before adding to reduce file size
- Naming convention: `team-[teamname].jpg`, `member-[name].jpg`

## Common Tasks

### Adding a New Team Member
1. Add member photo to `images/` directory
2. Update the appropriate team HTML file (e.g., `team-ai.html`)
3. Add member information to `members.html` if needed
4. Update translations in `i18n.js` for EN/JP versions

### Adding a New Seminar
1. Create folder: `seminars/upcoming/[Speaker Name]/`
2. Add `photo.png` (or .jpg) and `talk.pdf`
3. Either manually edit `seminars/upcoming/seminars.json` OR ask Claude to:
   - Read the PDF and extract information
   - Generate the JSON entry automatically
4. Structure required in JSON:
   ```json
   {
     "id": "unique-speaker-id",
     "speaker": {
       "name": "Dr. Speaker Name",
       "title": "Position",
       "affiliation": "Institution",
       "website": "URL",
       "photo": "path/to/photo.png",
       "bio": "Biography text"
     },
     "title": "Talk Title",
     "type": "Online Lecture / In-Person / Hybrid",
     "series": {...},
     "zoom": {...},
     "abstract": "Talk abstract",
     "pdfPath": "path/to/talk.pdf"
   }
   ```

### Moving Seminar from Upcoming to Past
1. Move folder from `seminars/upcoming/` to `seminars/past/`
2. Move JSON entry from upcoming to past seminars.json
3. Add `youtube` URL, confirm `date` and `time`

### Changing Colors/Theme
- Edit CSS variables in `styles.css` (lines 1-10)
- Changes propagate throughout the entire site

### Testing Locally
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```
Access at `http://localhost:8000`

## Important Notes

### Code Conventions
- **No emojis in code** unless explicitly requested
- Use consistent indentation (spaces preferred)
- Comment in English for code, Vietnamese OK for TODO notes
- Keep HTML semantic and accessible

### Git Workflow
- Main branch: `main`
- Always test locally before pushing
- Commit messages should be descriptive
- GitHub Pages auto-deploys from main branch

### Known Constraints
- Pure static site - no backend/database
- Seminar data managed via JSON files
- Manual deployment through git push
- No package.json - this is NOT a Node.js project

### Image Format Issues
- **Never use HEIC format** - convert to JPG or PNG first
- Browser compatibility issue: HEIC not supported in web browsers
- Past incident: f0c27ff fixed HEIC → JPG conversion

### Responsive Design
- Mobile-first approach
- All pages must work on: mobile, tablet, desktop
- Test responsive behavior after any layout changes

## When Working on This Project

1. **Always read files before editing** - understand context first
2. **Preserve existing structure** - this is a working website
3. **Test responsiveness** - check mobile and desktop views
4. **Update both languages** - EN and JP in i18n.js
5. **Optimize images** - compress before adding
6. **Check TODO comments** - they mark customization points

## Project Goals

The MASAIC project showcases:
- Research in intelligent robotics
- AI and LLM integration
- Multi-team collaboration structure
- Academic seminar series
- Research publications and news

Keep all changes aligned with the professional, academic nature of the project.
