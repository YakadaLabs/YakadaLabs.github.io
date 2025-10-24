# Yakada Labs Website

A minimal, clean static website built with 11ty (Eleventy) and hosted on GitHub Pages.

## Tech Stack

- **Static Site Generator**: 11ty (Eleventy)
- **Styling**: Vanilla CSS with CSS variables
- **Hosting**: GitHub Pages
- **Domain**: yakadalabs.com

## Local Development

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd yakadalabs.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080` and will automatically reload when you make changes.

## Building for Production

To build the site for production:

```bash
npm run build
```

The output will be in the `_site` directory.

## Project Structure

```
yakadalabs.com/
├── .eleventy.js           # 11ty configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── src/
│   ├── index.md           # Homepage
│   ├── about.md           # About page
│   ├── CNAME              # Custom domain config
│   ├── _includes/
│   │   ├── base.njk       # Base layout template
│   │   └── nav.njk        # Navigation component
│   ├── _data/
│   │   ├── site.json      # Site metadata
│   │   └── clients.json   # Client information
│   └── css/
│       └── style.css      # Main stylesheet
└── _site/                 # Build output (git ignored)
```

## Adding or Editing Content

### Editing Pages

Pages are written in Markdown and located in the `src/` directory:
- Homepage: `src/index.md`
- About page: `src/about.md`

Edit the markdown content between the `---` frontmatter and the rest of the file.

### Updating Site Metadata

Edit `src/_data/site.json` to update:
- Site title
- Description
- URL
- Author information

### Managing Client List

Edit `src/_data/clients.json` to add or modify client information.

### Styling

All styles are in `src/css/style.css`. The design uses:
- CSS variables for easy theming (defined in `:root`)
- Mobile-first responsive design
- Minimalist aesthetic inspired by Alephic

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### Initial GitHub Setup

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Configure GitHub Pages:
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - The site will deploy automatically

### Custom Domain Setup

1. Add your domain in GitHub repository settings under Pages > Custom domain
2. Configure DNS with your domain provider:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `<username>.github.io`

The `CNAME` file in `src/` ensures the custom domain persists across deployments.

## Design Philosophy

This site follows a minimalist design approach:
- Clean typography and ample whitespace
- Focused content without distractions
- Mobile-responsive layout
- Fast loading times
- Easy to maintain and update

## License

ISC
