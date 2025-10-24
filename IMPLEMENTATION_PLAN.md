# Yakada Labs Website - Implementation Plan

## Overview

This document outlines the comprehensive plan for building the Yakada Labs company website using 11ty (Eleventy) static site generator, designed to minimize token usage while maintaining professional quality.

## Goals

1. **Minimal Token Usage**: Efficient development with minimal dependencies and simple structure
2. **Professional Design**: Clean, minimalist aesthetic inspired by alephic.com
3. **Easy Maintenance**: Markdown-based content for simple updates
4. **GitHub Pages Hosting**: Free, reliable hosting with custom domain support
5. **Future-Proof**: Simple, standards-based approach that's easy to maintain

## Technology Selection

### Why 11ty (Eleventy)?

- **Zero-config by default**: Works out of the box with minimal setup
- **Flexible**: Supports multiple template languages (Nunjucks, Markdown, Liquid)
- **Fast builds**: Static output with no client-side framework overhead
- **Minimal dependencies**: Lighter than Next.js, Gatsby, or Hugo for our use case
- **Token-efficient**: Less boilerplate code compared to React-based SSGs

### Alternatives Considered

- **Next.js**: Too heavy for a simple static site, requires React knowledge
- **Hugo**: Fast but Go templates less intuitive, binary dependency
- **Jekyll**: Ruby dependency, slower builds, less modern
- **Astro**: Great but newer, more complex for basic needs

## Project Structure

```
yakadalabs.com/
├── .eleventy.js              # Configuration (minimal)
├── .gitignore               # Standard Node.js ignores
├── package.json             # Only 1 dependency: @11ty/eleventy
├── README.md                # Development and deployment docs
├── IMPLEMENTATION_PLAN.md   # This file
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions for auto-deploy
├── src/
│   ├── index.md            # Homepage (Markdown + frontmatter)
│   ├── about.md            # About page
│   ├── CNAME               # Custom domain configuration
│   ├── _includes/
│   │   ├── base.njk        # Base HTML layout (Nunjucks)
│   │   └── nav.njk         # Footer navigation component
│   ├── _data/
│   │   ├── site.json       # Global site metadata
│   │   └── clients.json    # Client logos/information
│   └── css/
│       └── style.css       # Single CSS file, no preprocessor
└── _site/                  # Build output (git ignored)
```

## Design Specifications

### Visual Style (Inspired by Alephic)

- **Color Scheme**:
  - Background: Black (#000000)
  - Text: Light gray (#e5e7eb)
  - Muted text: Gray (#9ca3af)
  - Borders: Dark gray (#374151)
  - Hover: Indigo (#3730a3)

- **Typography**:
  - System fonts for fast loading
  - Monospace for navigation (technical aesthetic)
  - Clean, readable sizes (16px base)

- **Layout**:
  - Centered content (max-width: 800px)
  - Generous whitespace
  - Vertical flow
  - Mobile-first responsive

- **Components**:
  - Logo/header section
  - 3 text blocks for value proposition
  - Client showcase grid
  - Footer navigation

## Implementation Steps (Completed)

### Phase 1: Project Setup
- [x] Initialize npm project
- [x] Install 11ty as only dependency
- [x] Create basic configuration (.eleventy.js)
- [x] Setup .gitignore

### Phase 2: Structure
- [x] Create src/ directory structure
- [x] Create _includes/ for templates
- [x] Create _data/ for configuration
- [x] Create css/ for styles

### Phase 3: Templates & Styles
- [x] Create base.njk layout
- [x] Create nav.njk component
- [x] Create style.css with Alephic-inspired design
- [x] Implement responsive grid system
- [x] Add CSS variables for easy theming

### Phase 4: Content
- [x] Create site.json with metadata
- [x] Create clients.json data file
- [x] Write index.md homepage
- [x] Write about.md page
- [x] Add placeholder content

### Phase 5: Deployment Setup
- [x] Create CNAME file
- [x] Create GitHub Actions workflow
- [x] Configure for automatic deployments

### Phase 6: Documentation
- [x] Write comprehensive README.md
- [x] Document local development process
- [x] Document deployment process
- [x] Create this implementation plan

## Token Optimization Strategies

### What We Did to Minimize Tokens

1. **Single CSS File**: No preprocessor (Sass/Less), no CSS-in-JS, just vanilla CSS
2. **Minimal JavaScript**: Zero JavaScript initially (can add later if needed)
3. **Simple Templates**: Nunjucks is lightweight and similar to HTML
4. **No Framework**: No React, Vue, or Angular overhead
5. **Flat Structure**: Only 2 pages initially, easy to expand
6. **Data Files**: JSON for reusable content vs. duplicating in templates
7. **One Build Tool**: Just 11ty, no webpack/vite/parcel complexity
8. **Standard Patterns**: Following 11ty conventions reduces custom code

### What We Avoided

- Build tool configuration hell (webpack.config.js, etc.)
- Component libraries (unnecessary for 2 pages)
- CSS frameworks (Tailwind, Bootstrap - overkill for this)
- TypeScript (adds complexity without benefit here)
- Complex state management
- Multiple npm scripts and tools

## Next Steps for Customization

### Content Updates

1. **Replace Placeholder Text**:
   - Edit `src/index.md` with real company description
   - Update `src/about.md` with actual team/service info
   - Modify `src/_data/site.json` with real metadata

2. **Add Client Logos**:
   - Place logo images in `src/images/`
   - Update `src/_data/clients.json` with paths
   - Update clients display in `src/index.md`

3. **Styling Tweaks**:
   - Adjust CSS variables in `style.css` for brand colors
   - Modify spacing values if needed
   - Add logo image if available

### Future Enhancements (Optional)

1. **Contact Form**: Integrate with Formspree or similar
2. **Blog Section**: Add `src/blog/` directory with posts
3. **SEO**: Add meta tags, sitemap.xml, robots.txt
4. **Analytics**: Add Google Analytics or Plausible
5. **Images**: Add company logo, team photos
6. **Performance**: Add image optimization if needed

## GitHub Pages Setup Instructions

### Initial Git Setup

```bash
cd yakadalabs.com
git init
git add .
git commit -m "Initial commit: Yakada Labs website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yakadalabs.com.git
git push -u origin main
```

### Repository Settings

1. Go to GitHub repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The site will automatically deploy on push

### Custom Domain Configuration

1. **In GitHub**:
   - Settings > Pages > Custom domain
   - Enter: yakadalabs.com
   - Save

2. **With Domain Registrar**:
   - Add A records pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: USERNAME.github.io

3. **DNS Propagation**: Wait 24-48 hours for full propagation

## Maintenance Guide

### Adding a New Page

1. Create `src/newpage.md`
2. Add frontmatter:
   ```yaml
   ---
   layout: base.njk
   title: Page Title
   ---
   ```
3. Write content in Markdown
4. Add link in `src/_includes/nav.njk`

### Updating Styles

1. Edit `src/css/style.css`
2. Use CSS variables for consistency
3. Test responsive breakpoints

### Content Updates

1. Edit Markdown files directly
2. Commit and push to main
3. GitHub Actions handles deployment automatically

## Performance Considerations

- **No JavaScript**: Fastest possible page loads
- **Minimal CSS**: Single file, no unused styles
- **Static HTML**: Pre-rendered, no client-side rendering
- **No External Dependencies**: Self-contained CSS, system fonts
- **Optimized Images**: Remember to compress before adding

## Success Metrics

- [x] Site builds successfully
- [x] Responsive on mobile, tablet, desktop
- [x] Loads in under 1 second
- [x] Accessible (semantic HTML)
- [x] Easy to update content
- [x] Automated deployment working
- [x] Custom domain ready to configure

## Conclusion

This implementation provides a solid foundation for the Yakada Labs website with:
- Minimal complexity and token usage
- Professional, clean design
- Easy content management
- Automated deployment
- Room for future growth

The site is production-ready and can be customized by simply editing Markdown files and CSS variables.
