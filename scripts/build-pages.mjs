#!/usr/bin/env node
/* ============================================================
 * Kanaky Tech — page builder
 *
 * Content lives in scripts/content/*.mjs, one object per page,
 * written by hand. This file only turns it into HTML: the site
 * chrome, the structured data, the internal links.
 *
 * The separation matters. Templating the *presentation* is fine.
 * Templating the *substance* is how you end up with fifty pages
 * that say nothing and a domain Google stops trusting.
 * ========================================================== */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { melanesiaMap } from './map-melanesia.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
const OG = 'https://kanaky.xyz/assets/og/cold-outreach-machine.png';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── inline markup: **bold**, *italic*, [text](url), `code` ── */
function inline(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) =>
      `<a href="${u}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} style="color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(200,240,96,0.3);">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--white);font-weight:500;">$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code style="background:var(--grey-1);padding:2px 6px;border-radius:4px;font-size:0.9em;">$1</code>');
}

/* ── body blocks ── */
function block(b, lang) {
  if (typeof b === 'string') return `<p>${inline(b)}</p>`;

  if (b.h) return `<h2 style="color:var(--white);font-size:1.55rem;font-weight:600;letter-spacing:-0.025em;margin:52px 0 18px;">${inline(b.h)}</h2>`;
  if (b.h3) return `<h3 style="color:var(--white);font-size:1.12rem;font-weight:600;margin:34px 0 12px;">${inline(b.h3)}</h3>`;

  if (b.lead) return `<p style="font-size:1.16rem;color:var(--white);font-weight:300;line-height:1.72;margin-bottom:34px;">${inline(b.lead)}</p>`;

  if (b.list) return `<ul style="color:var(--grey-4);line-height:1.85;padding-left:22px;margin:20px 0;">${
    b.list.map((li) => `<li style="margin-bottom:10px;">${inline(li)}</li>`).join('')}</ul>`;

  if (b.steps) return `<div style="margin:26px 0;">${b.steps.map((s, i) => `
      <div style="display:flex;gap:18px;padding:18px 0;border-top:1px solid var(--border);">
        <div style="color:var(--accent);font-weight:600;min-width:26px;font-variant-numeric:tabular-nums;">${i + 1}</div>
        <div style="color:var(--grey-4);line-height:1.75;flex:1;">${inline(s)}</div>
      </div>`).join('')}</div>`;

  if (b.table) return `<div style="border:1px solid var(--border);border-radius:14px;overflow-x:auto;margin:28px 0;">
      <table style="width:100%;border-collapse:collapse;min-width:${b.minWidth || 460}px;font-size:0.94rem;">
        <thead><tr style="border-bottom:1px solid var(--border);">${
          b.table.head.map((h) => `<th style="text-align:left;padding:15px 20px;font-weight:600;color:var(--white);">${inline(h)}</th>`).join('')
        }</tr></thead>
        <tbody style="color:var(--grey-4);">${
          b.table.rows.map((r, i) => `<tr${i < b.table.rows.length - 1 ? ' style="border-bottom:1px solid var(--border);"' : ''}>${
            r.map((c, j) => `<td style="padding:14px 20px;${j === 0 ? 'color:var(--white);' : ''}">${inline(c)}</td>`).join('')
          }</tr>`).join('')
        }</tbody>
      </table>
    </div>`;

  if (b.note) return `<div style="border-left:2px solid var(--accent);padding:4px 0 4px 22px;margin:30px 0;color:var(--grey-4);line-height:1.78;">${inline(b.note)}</div>`;

  if (b.cards) return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;margin:30px 0;">${
    b.cards.map((c) => `<div style="border:1px solid var(--border);border-radius:14px;padding:26px;">
        <div style="font-weight:600;margin-bottom:10px;">${inline(c.t)}</div>
        <p style="color:var(--grey-4);font-size:0.93rem;line-height:1.7;margin:0;">${inline(c.d)}</p>
      </div>`).join('')}</div>`;

  if (b.map) return melanesiaMap(lang);

  if (b.code) return `<pre style="background:var(--grey-1);border:1px solid var(--border);border-radius:12px;padding:20px;overflow-x:auto;margin:24px 0;"><code style="font-size:0.88rem;line-height:1.7;color:var(--grey-4);">${esc(b.code)}</code></pre>`;

  return '';
}

const nav = `  <nav>
    <a href="/" class="logo-mark">
      <img class="logo-img" src="https://i.ibb.co/GvmCR1Rb/kanaky-tech-logo.jpg" alt="Kanaky Tech logo" />
      <span class="logo-text">Kanaky Tech</span>
    </a>
    <ul class="nav-links">
      <li><a href="/#services">Services</a></li>
      <li><a href="/ai-audit/">AI Audit</a></li>
      <li><a href="/guides/">Guides</a></li>
      <li><a href="/marketplace/">Marketplace</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li><a href="/contact/" class="nav-cta">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="/#services">Services</a>
    <a href="/ai-audit/">AI Audit</a>
    <a href="/guides/">Guides</a>
    <a href="/marketplace/">Marketplace</a>
    <a href="/blog/">Blog</a>
    <a href="/contact/">Contact</a>
  </div>`;

const footer = `  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="logo-mark"><img class="logo-img" src="https://i.ibb.co/GvmCR1Rb/kanaky-tech-logo.jpg" alt="Kanaky Tech logo" /><span class="logo-text">Kanaky Tech</span></a>
        <p>The Pacific's AI automation &amp; agent development studio. We build AI agents and automate business processes for SMEs, agencies and institutions across New Caledonia, New Zealand and the Pacific.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/machine-prospection-commerciale/">Machine de prospection (FR)</a>
        <a href="/marketplace/cold-outreach-machine/">Cold Outreach Machine (EN)</a>
        <a href="/cold-email-software-one-time-payment/">Buy once vs subscribe</a>
        <a href="/self-hosted-cold-email/">Self-hosted cold email</a>
        <a href="/guides/">All guides</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="/business-process-automation/">Business Process Automation</a>
        <a href="/ai-agents-new-caledonia/">AI Agent Development</a>
        <a href="/private-ai-systems/">Private AI Systems</a>
        <a href="/ai-audit/">AI Opportunity Audit</a>
      </div>
      <div class="footer-col">
        <h4>Mélanésie</h4>
        <a href="/melanesie/">Toute la Mélanésie · Melanesia</a>
        <a href="/automatisation-ia-nouvelle-caledonie/">Kanaky · Nouvelle-Calédonie</a>
        <a href="/ai-automation-papua-new-guinea/">Papua New Guinea</a>
        <a href="/ai-automation-fiji/">Fiji</a>
        <a href="/automatisation-ia-vanuatu/">Vanuatu</a>
        <a href="/ai-automation-solomon-islands/">Solomon Islands</a>
      </div>
      <div class="footer-col">
        <h4>Aussi</h4>
        <a href="/ai-automation-new-zealand/">New Zealand</a>
        <a href="/ai-automation-agency-auckland/">Auckland</a>
        <a href="/ai-automation-australia/">Australia</a>
        <a href="/automatisation-ia-tahiti/">Tahiti</a>
        <a href="/automatisation-ia-la-reunion/">La Réunion</a>
        <a href="/automatisation-ia-wallis-et-futuna/">Wallis-et-Futuna</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="/#about">About</a>
        <a href="/case-studies/">Case Studies</a>
        <a href="/blog/">Blog</a>
        <a href="/engagement-local/">Les 10 % reversés</a>
        <a href="/contact/">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Kanaky Tech · Nouméa · Auckland · kanaky.xyz</span>
      <div class="footer-social">
        <a href="https://www.linkedin.com/company/kanaky-tech" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="https://github.com/kanakytech" target="_blank" rel="noopener" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg></a>
        <a href="mailto:kevyn@kanaky.xyz" aria-label="Email"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></a>
      </div>
    </div>
  </footer>
  <script src="/assets/site.js"></script>`;

/* ── the two calls to action, picked per page ── */
const CTA = {
  product: {
    h: 'Hire a salesperson once.<br/>Keep them forever.',
    p: 'The Cold Outreach Machine finds the companies you sell to, writes a different email for each one, and sends them on its own — paced, inside working hours. US$299.99, paid once, live setup call included.',
    a: ['/marketplace/cold-outreach-machine/', 'See the machine'],
    b: ['/cold-email-software-one-time-payment/', 'Buy once vs subscribe'],
  },
  service: {
    h: 'Find out what AI<br/>can do for you.',
    p: 'Kanaky Tech is an AI automation agency working across New Zealand and the Pacific. Start with a free AI opportunity audit: we map how your business actually runs, rank what is worth automating, and give you a clear scope before anything is built — no obligation.',
    a: ['/ai-audit/', 'Book a free AI audit'],
    b: ['/ai-automation-new-zealand/', 'AI automation in New Zealand'],
  },
  private: {
    h: 'AI that runs<br/>on your terms.',
    p: 'Private AI systems in environments you control — your data never trains public models, and engagements are available under NDA.',
    a: ['/private-ai-systems/', 'Private AI systems'],
    b: ['/ai-audit/', 'Book a free audit'],
  },
  'service-fr': {
    h: 'Découvrez ce que l’IA<br/>peut faire pour vous.',
    p: 'Kanaky Tech est une agence d’automatisation IA du Pacifique — Nouméa et Auckland. Premier pas : un audit gratuit de vos opportunités IA. On regarde comment votre entreprise tourne réellement, on classe ce qui vaut la peine d’être automatisé, et vous repartez avec les conclusions — sans engagement.',
    a: ['/contact/', 'Écrivez-nous'],
    b: ['/automatisation-ia-nouvelle-caledonie/', 'Notre agence'],
  },
};

const UI = {
  en: { faq: 'Common questions', keep: 'Keep reading' },
  fr: { faq: 'Questions fréquentes', keep: 'À lire ensuite' },
};

function render(p) {
  const url = `https://kanaky.xyz/${p.slug}/`;
  const cta = CTA[p.cta || 'service'];
  const faq = p.faq || [];
  const ui = UI[p.lang === 'fr' ? 'fr' : 'en'];
  // p.alt = { lang, url } — version de cette page dans l'autre langue.
  // x-default = la version anglaise, par convention du site.
  const hreflang = p.alt ? `
  <link rel="alternate" hreflang="${p.lang === 'fr' ? 'fr' : 'en'}" href="${url}" />
  <link rel="alternate" hreflang="${p.alt.lang}" href="${p.alt.url}" />
  <link rel="alternate" hreflang="x-default" href="${p.alt.lang === 'en' ? p.alt.url : url}" />` : '';

  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: p.h1.replace(/<[^>]+>/g, ''),
      description: p.description,
      datePublished: p.published || BUILD_DATE,
      dateModified: BUILD_DATE,
      inLanguage: p.lang === 'fr' ? 'fr' : 'en',
      author: { '@type': 'Person', name: 'Kevyn Wahuzue', url: 'https://www.linkedin.com/in/kevyn-wahuzue/' },
      publisher: { '@type': 'Organization', name: 'Kanaky Tech', url: 'https://kanaky.xyz/' },
      mainEntityOfPage: url,
      image: [OG],
    },
    ...(faq.length ? [{
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }] : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Kanaky Tech', item: 'https://kanaky.xyz/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://kanaky.xyz/guides/' },
        { '@type': 'ListItem', position: 3, name: p.short || p.title, item: url },
      ],
    },
    ...(p.extraGraph || []),
  ];

  const related = (p.related || []).map((r) =>
    `<a href="${r[0]}" class="project-link" style="display:block;margin-bottom:14px;">${esc(r[1])} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>`
  ).join('\n        ');

  return `<!DOCTYPE html>
<html lang="${p.lang === 'fr' ? 'fr' : 'en'}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}" />
  ${p.keywords ? `<meta name="keywords" content="${esc(p.keywords)}" />` : ''}
  <link rel="canonical" href="${url}" />${hreflang}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(p.ogTitle || p.title)}" />
  <meta property="og:description" content="${esc(p.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="Kanaky Tech" />
  <meta property="og:image" content="${OG}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${OG}" />
  <link rel="icon" type="image/jpeg" href="https://i.ibb.co/GvmCR1Rb/kanaky-tech-logo.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/kanaky.css">

  <script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}
  </script>
</head>
<body>
  <div class="cursor-ring" id="cursor-ring"></div>
${nav}

  <section class="section" style="padding-top:140px;max-width:820px;margin:0 auto;">
    <div class="section-label reveal-left">${esc(p.eyebrow || 'Guide')}</div>
    <h1 class="reveal" style="font-size:clamp(1.9rem,4.4vw,3rem);font-weight:700;letter-spacing:-0.035em;line-height:1.14;margin:0 0 26px;">${p.h1}</h1>

    <div class="reveal delay-1" style="color:var(--grey-4);font-size:1.06rem;line-height:1.85;">
${p.body.map((b) => block(b, p.lang)).map((s) => '      ' + s).join('\n')}
${faq.length ? `
      <h2 style="color:var(--white);font-size:1.55rem;font-weight:600;letter-spacing:-0.025em;margin:56px 0 8px;">${ui.faq}</h2>
${faq.map((f, i) => `      <div style="border-top:1px solid var(--border);${i === faq.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}padding:24px 0;">
        <h3 style="font-size:1.03rem;font-weight:600;margin:0 0 10px;color:var(--white);">${esc(f.q)}</h3>
        <p style="margin:0;line-height:1.78;">${inline(f.a)}</p>
      </div>`).join('\n')}` : ''}
${related ? `
      <div style="border-top:1px solid var(--border);margin-top:52px;padding-top:30px;">
        <div style="color:var(--grey-3);font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:18px;">${ui.keep}</div>
        ${related}
      </div>` : ''}
    </div>
  </section>

  <section class="cta-section">
    <h2 class="reveal">${cta.h}</h2>
    <p class="reveal delay-1">${esc(cta.p)}</p>
    <div class="cta-actions reveal delay-2">
      <a href="${cta.a[0]}" class="btn-primary">${cta.a[1]}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="${cta.b[0]}" class="btn-ghost">${cta.b[1]}</a>
    </div>
  </section>

${footer}
</body>
</html>
`;
}

/* ── build ── */
const modules = ['outreach', 'legal', 'alternatives', 'local-ai', 'industries', 'automation', 'locations', 'fr', 'pacifique', 'gang-pacifique', 'melanesie', 'engagement', 'produit-fr'];
let pages = [];
for (const m of modules) {
  const f = path.join(HERE, 'content', `${m}.mjs`);
  if (!fs.existsSync(f)) { console.log(`  (skip ${m} — not written yet)`); continue; }
  const mod = await import(`file://${f}`);
  pages = pages.concat(mod.default.map((p) => ({ ...p, cluster: m })));
}

const slugs = new Set();
for (const p of pages) {
  if (slugs.has(p.slug)) throw new Error(`duplicate slug: ${p.slug}`);
  slugs.add(p.slug);
  const dir = path.join(ROOT, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(p));
}

console.log(`\n  ${pages.length} pages generated`);
for (const m of modules) {
  const n = pages.filter((p) => p.cluster === m).length;
  if (n) console.log(`    ${m.padEnd(14)} ${n}`);
}

export { pages, render };
