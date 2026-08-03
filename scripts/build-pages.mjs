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
/* date locale Nouvelle-Zélande : un build du matin en UTC daterait la
   veille (Pacific/Auckland = UTC+12/13) */
const BUILD_DATE = process.env.BUILD_DATE
  || new Date().toLocaleDateString('en-CA', { timeZone: 'Pacific/Auckland' });
const OG_COLD = 'https://kanaky.xyz/assets/og/cold-outreach-machine.png';
const OG_BRAND = 'https://kanaky.xyz/assets/og/kanaky-tech.png';
const ogFor = (p) => /cold|outreach|email|spam|deliverab|prospection|instantly|smartlead|lemlist|apollo|warm-up|spf-dkim|sending-domain/.test(p.slug + ' ' + (p.keywords || '')) ? OG_COLD : OG_BRAND;

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

/* ── pictogrammes SVG (jamais d'emoji dans l'interface) ── */
const ICO = {
  note: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
  bullet: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  toc: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  card: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
};

const slugify = (s) => String(s).toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);

/* ── body blocks ── */
function block(b, lang, i = 0) {
  const rv = `reveal${i % 3 ? ` delay-${i % 3}` : ''}`;

  if (typeof b === 'string') return `<p class="${rv}">${inline(b)}</p>`;

  if (b.h) return `<h2 id="${slugify(b.h)}" class="${rv} gx-h2">${inline(b.h)}</h2>`;
  if (b.h3) return `<h3 class="${rv} gx-h3">${inline(b.h3)}</h3>`;

  if (b.lead) return `<p class="${rv} gx-lead">${inline(b.lead)}</p>`;

  if (b.list) return `<ul class="${rv} gx-list">${
    b.list.map((li) => `<li><i>${ICO.bullet}</i><span>${inline(li)}</span></li>`).join('')}</ul>`;

  if (b.steps) return `<ol class="${rv} gx-steps">${b.steps.map((s) => `
        <li><span class="gx-num"></span><div>${inline(s)}</div></li>`).join('')}</ol>`;

  if (b.table) return `<div class="${rv} gx-tablewrap">
      <table style="min-width:${b.minWidth || 460}px">
        <thead><tr>${b.table.head.map((h) => `<th>${inline(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;

  if (b.note) return `<aside class="${rv} gx-note"><i>${ICO.note}</i><div>${inline(b.note)}</div></aside>`;

  if (b.cards) return `<div class="${rv} gx-cards">${
    b.cards.map((c) => `<div class="gx-card"><i>${ICO.card}</i><h4>${inline(c.t)}</h4><p>${inline(c.d)}</p></div>`).join('')}</div>`;

  if (b.code) return `<pre class="${rv} gx-code"><code>${esc(b.code)}</code></pre>`;

  /* term : comme code, mais rejoué en animation par term-replay.js.
   * Le ?v= est indispensable : sans lui, un visiteur déjà venu garde
   * l'ancien script en cache et voit le scénario d'un autre produit.
   * À incrémenter à chaque changement de term-replay.js.
   * (le transcript statique reste le fallback sans JS / reduced-motion) */
  if (b.term) return `<pre class="${rv} gx-code" data-term-replay${b.scene ? ` data-term-scene="${esc(b.scene)}"` : ''}><code>${esc(b.term)}</code></pre>
<script src="/assets/term-replay.js?v=2" defer></script>`;

  if (b.map) return melanesiaMap(lang);

  return '';
}

/* ── sommaire : seulement si la page est assez longue pour en avoir besoin ── */
function toc(body, lang) {
  const hs = body.filter((b) => b && b.h).map((b) => ({ t: b.h, id: slugify(b.h) }));
  if (hs.length < 4) return '';
  const label = lang === 'fr' ? 'Sur cette page' : 'On this page';
  return `<nav class="gx-toc reveal" aria-label="${label}">
        <div class="gx-toc-head"><i>${ICO.toc}</i>${label}</div>
        <ol>${hs.map((h) => `<li><a href="#${h.id}">${inline(h.t)}</a></li>`).join('')}</ol>
      </nav>`;
}

/* ── habillage visuel des guides ── */
const GX_CSS = `<style>
    /* ── ambiance héritée de la page produit ── */
    .gx-hero{position:relative}
    .gx-hero::before{content:'';position:absolute;top:-140px;left:50%;transform:translateX(-50%);width:min(900px,120vw);height:480px;background:radial-gradient(ellipse at 50% 40%,rgba(200,240,96,.055),transparent 62%);pointer-events:none;z-index:-1}
    .gx-eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);border:1px solid rgba(200,240,96,.25);border-radius:99px;padding:7px 14px;margin-bottom:26px}
    .gx-eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);animation:gxPulse 2.4s ease-in-out infinite}
    @keyframes gxPulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(200,240,96,.4)}50%{opacity:.65;box-shadow:0 0 0 5px rgba(200,240,96,0)}}
    .gx-in{opacity:0;transform:translateY(28px);animation:gxRise 1.05s cubic-bezier(.16,1,.3,1) forwards}
    .gx-in.d1{animation-delay:.12s}.gx-in.d2{animation-delay:.24s}.gx-in.d3{animation-delay:.36s}
    @keyframes gxRise{to{opacity:1;transform:translateY(0)}}
    h1.gx-title{letter-spacing:-.04em;line-height:1.06}
    .gx-h2{position:relative;border-left:none;padding-left:0}
    .gx-h2::after{content:'';display:block;width:52px;height:2px;margin-top:12px;background:linear-gradient(90deg,var(--accent),rgba(200,240,96,.15))}
    .gx-note{position:relative;overflow:hidden}
    .gx-note::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 32%,rgba(255,255,255,.045) 46%,transparent 60%);background-size:220% 100%;animation:gxSheen 7s ease-in-out 1.4s infinite;pointer-events:none}
    @keyframes gxSheen{0%{background-position:130% 0}45%,100%{background-position:-60% 0}}
    .gx-card{background:linear-gradient(180deg,rgba(200,240,96,.03),transparent 65%)}
    .gx-card:hover{box-shadow:0 14px 40px -18px rgba(200,240,96,.14)}
    .gx-steps li:hover .gx-num{background:var(--accent);color:#050505;border-color:var(--accent);transition:all .35s cubic-bezier(.16,1,.3,1)}
    .gx-tablewrap{background:linear-gradient(180deg,rgba(255,255,255,.012),transparent)}
    .gx-tablewrap tbody tr{transition:background .3s ease}
    .gx-tablewrap tbody tr:hover{background:rgba(200,240,96,.035)}
    .gx-toc a{position:relative}
    .gx-toc a:hover{padding-left:4px;transition:all .3s cubic-bezier(.16,1,.3,1)}
    @media(prefers-reduced-motion:reduce){.gx-in{opacity:1;transform:none;animation:none}.gx-eyebrow::before{animation:none}.gx-note::after{animation:none}}
    .gx-lead{font-size:1.17rem;color:var(--white);font-weight:300;line-height:1.72;margin-bottom:34px}
    .gx-h2{color:var(--white);font-size:1.55rem;font-weight:600;letter-spacing:-.025em;margin:56px 0 18px;padding-left:16px;border-left:2px solid var(--accent);scroll-margin-top:96px}
    .gx-h3{color:var(--white);font-size:1.12rem;font-weight:600;margin:34px 0 12px}
    .gx-list{list-style:none;padding:0;margin:22px 0}
    .gx-list li{display:flex;gap:12px;margin-bottom:13px;line-height:1.8}
    .gx-list li>i{flex:none;color:var(--accent);opacity:.75;margin-top:6px;line-height:0}
    .gx-steps{list-style:none;padding:0;margin:26px 0;counter-reset:gx}
    .gx-steps li{display:flex;gap:18px;padding:18px 0;border-top:1px solid var(--border);line-height:1.75}
    .gx-steps li:last-child{border-bottom:1px solid var(--border)}
    .gx-num{flex:none;counter-increment:gx;width:26px;height:26px;border-radius:50%;border:1px solid rgba(200,240,96,.3);color:var(--accent);display:grid;place-items:center;font-size:.78rem;font-variant-numeric:tabular-nums;margin-top:2px}
    .gx-num::before{content:counter(gx)}
    .gx-tablewrap{border:1px solid var(--border);border-radius:14px;overflow-x:auto;margin:28px 0}
    .gx-tablewrap table{width:100%;border-collapse:collapse;font-size:.94rem}
    .gx-tablewrap th{text-align:left;padding:15px 20px;font-weight:600;color:var(--white);border-bottom:1px solid var(--border);white-space:nowrap}
    .gx-tablewrap td{padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.04)}
    .gx-tablewrap td:first-child{color:var(--white)}
    .gx-tablewrap tr:last-child td{border-bottom:none}
    .gx-note{display:flex;gap:14px;margin:32px 0;padding:20px 22px;border-radius:14px;border:1px solid rgba(200,240,96,.16);background:linear-gradient(180deg,rgba(200,240,96,.05),transparent 70%);line-height:1.78}
    .gx-note>i{flex:none;color:var(--accent);margin-top:3px;line-height:0}
    .gx-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:30px 0}
    .gx-card{border:1px solid var(--border);border-radius:14px;padding:24px;transition:border-color .4s ease,transform .4s cubic-bezier(.16,1,.3,1)}
    .gx-card:hover{border-color:rgba(200,240,96,.28);transform:translateY(-2px)}
    .gx-card>i{color:var(--accent);opacity:.8;line-height:0;display:block;margin-bottom:12px}
    .gx-card h4{margin:0 0 9px;font-size:1rem;font-weight:600;color:var(--white)}
    .gx-card p{margin:0;font-size:.93rem;line-height:1.7}
    .gx-code{background:var(--grey-1);border:1px solid var(--border);border-radius:12px;padding:20px;overflow-x:auto;margin:24px 0}
    .gx-code code{font-size:.88rem;line-height:1.7;color:var(--grey-4)}
    .gx-toc{margin:34px 0 44px;padding:22px 24px;border:1px solid var(--border);border-radius:14px;background:rgba(255,255,255,.012)}
    .gx-toc-head{display:flex;align-items:center;gap:9px;font-size:.74rem;letter-spacing:.1em;text-transform:uppercase;color:var(--grey-3);margin-bottom:14px}
    .gx-toc-head i{color:var(--accent);line-height:0}
    .gx-toc ol{margin:0;padding-left:20px;color:var(--grey-3)}
    .gx-toc li{margin-bottom:8px;line-height:1.6}
    .gx-toc a{color:var(--grey-4);text-decoration:none;transition:color .25s ease}
    .gx-toc a:hover{color:var(--accent)}
    .gx-faq{border-top:1px solid var(--border);padding:24px 0}
    .gx-faq:last-of-type{border-bottom:1px solid var(--border)}
    .gx-faq h3{font-size:1.03rem;font-weight:600;margin:0 0 10px;color:var(--white)}
    .gx-faq p{margin:0;line-height:1.78}
    @media(max-width:640px){.gx-h2{font-size:1.35rem;margin-top:44px}.gx-lead{font-size:1.08rem}}
  </style>`;

const nav = `  <nav>
    <a href="/" class="logo-mark">
      <img class="logo-img" src="/assets/kanaky-tech-logo.jpg" alt="Kanaky Tech logo" />
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
        <a href="/" class="logo-mark"><img class="logo-img" src="/assets/kanaky-tech-logo.jpg" alt="Kanaky Tech logo" /><span class="logo-text">Kanaky Tech</span></a>
        <p>The Pacific's AI automation &amp; agent development studio. We build AI agents and automate business processes for SMEs, agencies and institutions across Kanaky (New Caledonia), New Zealand and the Pacific.</p>
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
        <a href="/automatisation-ia-nouvelle-caledonie/">Kanaky (Nouvelle-Calédonie)</a>
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
        <h4>Écosystème</h4>
        <a href="https://dictionnaire.kanaky.xyz" target="_blank" rel="noopener">Dictionnaire langues kanak</a>
        <a href="https://studio.keou.systems" target="_blank" rel="noopener">Keou Studio</a>
        <a href="/marketplace/">Marketplace</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="/#about">About</a>
        <a href="/case-studies/">Case Studies</a>
        <a href="/blog/">Blog</a>
        <a href="/engagement-local/">Les 10 % reversés</a>
        <a href="/legal/">Legal &amp; company info</a>
        <a href="/contact/">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Kanaky Tech · Nouméa · Auckland · kanaky.xyz</span>
      <nav class="footer-legal" aria-label="Legal">
        <a href="/legal/">Legal &amp; company information</a>
        <a href="/legal/#privacy">Privacy</a>
        <a href="/legal/#terms">Terms</a>
        <a href="/contact/">Contact</a>
        <span class="footer-ids">NZBN 9429053554017 · RIDET 1 445 709.002</span>
      </nav>
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
    p: 'The Cold Outreach Machine finds the companies you sell to, writes a different email for each one, and sends them on its own — paced, inside working hours. US$299.99 as a launch price until 11 August, then US$499 — paid once, live setup call included.',
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

function renderBody(p) {
  const out = [];
  let tocDone = false;
  p.body.forEach((b, i) => {
    out.push('      ' + block(b, p.lang, i));
    // le sommaire se place juste après l'accroche, là où le lecteur décide de rester
    if (!tocDone && b && b.lead) { const t = toc(p.body, p.lang); if (t) out.push('      ' + t); tocDone = true; }
  });
  return out.join('\n');
}

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
      dateModified: p.modified || p.published || BUILD_DATE,
      inLanguage: p.lang === 'fr' ? 'fr' : 'en',
      author: { '@type': 'Person', name: 'Kevyn Wahuzue', url: 'https://www.linkedin.com/in/kevyn-wahuzue/' },
      publisher: { '@type': 'Organization', name: 'Kanaky Tech', url: 'https://kanaky.xyz/' },
      mainEntityOfPage: url,
      image: [ogFor(p)],
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
  <meta property="og:image" content="${ogFor(p)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${ogFor(p)}" />
  <link rel="icon" type="image/jpeg" href="/assets/kanaky-tech-logo.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/kanaky.css">
  ${GX_CSS}

  <script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}
  </script>
</head>
<body>
  <div class="cursor-ring" id="cursor-ring"></div>
${nav}

  <section class="section gx-hero" style="padding-top:140px;max-width:820px;margin:0 auto;">
    <div class="gx-eyebrow gx-in">${esc(p.eyebrow || 'Guide')}</div>
    <h1 class="gx-in d1 gx-title" style="font-size:clamp(1.9rem,4.4vw,3rem);font-weight:700;margin:0 0 26px;">${p.h1}</h1>

    <div class="reveal delay-1" style="color:var(--grey-4);font-size:1.06rem;line-height:1.85;">
${renderBody(p)}
${faq.length ? `
      <h2 style="color:var(--white);font-size:1.55rem;font-weight:600;letter-spacing:-0.025em;margin:56px 0 8px;">${ui.faq}</h2>
${faq.map((f, i) => `      <div class="gx-faq reveal${i % 3 ? ` delay-${i % 3}` : ''}">
        <h3>${esc(f.q)}</h3>
        <p>${inline(f.a)}</p>
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
<script src="/assets/ecosystem.js" defer></script>
</body>
</html>
`;
}

/* ── build ── */
const modules = ['outreach', 'legal', 'alternatives', 'local-ai', 'industries', 'automation', 'locations', 'fr', 'pacifique', 'gang-pacifique', 'melanesie', 'engagement', 'produit-fr', 'secteurs-nc', 'secteurs-pf', 'journal', 'produit-assistant'];
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
