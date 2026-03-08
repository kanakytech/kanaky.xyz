# Kanaky Tech — Advanced Digital Solutions

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fkanaky.xyz&style=flat-square&label=kanaky.xyz)](https://kanaky.xyz)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?style=flat-square&logo=github)](https://kanaky.xyz)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](#license)

> AI systems, Web3 governance, and digital sovereignty solutions for public and private organisations worldwide.

## About

**Kanaky Tech** is a technology company based in the Pacific, building advanced digital infrastructure for governments, enterprises, and communities. We specialise in AI agent deployment, open data integration, and sovereign technology systems.

Our mission: empower organisations — especially in underserved regions — with the same calibre of technology available to Silicon Valley, adapted for local contexts and needs.

## Live Projects

| Project | Description | Status |
|---------|-------------|--------|
| [MCP Server data.gouv.nc](https://kanaky.xyz/mcp-datagouvnc/) | Model Context Protocol server connecting AI agents to New Caledonia's open data portal | **Live** |
| [Kanak Languages Dictionary](https://dictionnaire.kanaky.xyz) | Digital dictionary preserving and documenting indigenous Kanak languages | **Live** |
| [Pasifika AI](https://pasifika.ai) | AI assistant dedicated to preserving the cultural heritage of 1,300+ Pacific cultures | In Development |

## Blog

We publish analysis on AI, digital sovereignty, and emerging technology:

- [The Model Context Protocol: How AI Agents Connect to the Real World](https://kanaky.xyz/blog/claude-mcp-protocol-explained/)
- [Where Are AI Agents Actually Being Deployed? The 2026 Breakdown](https://kanaky.xyz/blog/where-ai-agents-deployed-2026/)
- [AI Agents in 2026: From Chatbots to Autonomous Systems](https://kanaky.xyz/blog/ai-agents-2026-landscape/)
- [Digital Sovereignty in the Pacific: Why Small Nations Can't Afford to Wait](https://kanaky.xyz/blog/digital-sovereignty-pacific-2026/)
- [Open Data + AI: The Untapped Potential for Government Efficiency](https://kanaky.xyz/blog/open-data-ai-government/)

## Tech Stack

```
HTML / CSS / JS (vanilla)  — Zero dependencies, maximum performance
GitHub Pages               — Global CDN, automatic HTTPS
Custom domain              — kanaky.xyz via CNAME
```

### Architecture

```
kanaky-site/
├── index.html                          # Main site (single-file, self-contained)
├── blog/
│   ├── index.html                      # Blog listing with category filters
│   ├── claude-mcp-protocol-explained/
│   ├── where-ai-agents-deployed-2026/
│   ├── ai-agents-2026-landscape/
│   ├── digital-sovereignty-pacific-2026/
│   └── open-data-ai-government/
├── mcp-datagouvnc/                     # MCP server documentation page
├── sitemap.xml                         # SEO sitemap
├── robots.txt                          # Crawler directives
└── CNAME                               # Custom domain config
```

### Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--black` | `#050505` | Background |
| `--white` | `#f0f0ec` | Primary text |
| `--accent` | `#c8f060` | Lime green — CTAs, highlights, data viz |
| `--grey-3` | `#666` | Secondary text |
| Font | Space Grotesk | All typography |

### Performance Features

- **Zero JavaScript frameworks** — vanilla JS, no build step, no bundle
- **Neural network canvas** — animated particle system on hero (disabled on mobile for perf)
- **CSS-only animations** — scroll reveals, glassmorphism cards, animated gradients
- **Film grain overlay** — SVG noise texture via CSS
- **Responsive** — full mobile support with hamburger nav and touch-optimised interactions

## SEO

- Semantic HTML5 with structured data (JSON-LD `Article` schema on all blog posts)
- Open Graph meta tags for social sharing
- XML sitemap at [`/sitemap.xml`](https://kanaky.xyz/sitemap.xml)
- `robots.txt` allowing full crawl access
- Canonical URLs on every page
- Descriptive `<title>` and `<meta description>` per page

## Deployment

The site is deployed automatically via GitHub Pages on push to `main`.

```bash
# Clone
git clone https://github.com/kanakytech/kanaky.xyz.git

# Serve locally
python3 -m http.server 3336

# Deploy — just push to main
git push origin main
```

## Connect

- **Website**: [kanaky.xyz](https://kanaky.xyz)
- **LinkedIn**: [Kanaky Tech](https://www.linkedin.com/company/kanaky-tech)
- **GitHub**: [kanakytech](https://github.com/kanakytech)
- **TikTok**: [@kanaky.tech](https://www.tiktok.com/@kanaky.tech)

## License

All rights reserved. This codebase and its contents are proprietary to Kanaky Tech.

---

Built in the Pacific. Deployed globally.
