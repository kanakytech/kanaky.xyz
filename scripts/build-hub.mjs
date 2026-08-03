#!/usr/bin/env node
/* Builds /guides/ — the hub that keeps the guide pages from being
 * orphans. Generated from the same content files, so it can never
 * drift out of sync with what actually exists. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CLUSTERS = [
  { key: 'produit-fr',   title: 'Le produit, en français',  blurb: 'La machine de prospection commerciale : ce qu’elle fait, le prix en francs Pacifique, ce qu’il faut savoir avant d’acheter, et la question honnête à se poser d’abord.' },
  { key: 'engagement',   title: 'Engagement local',        blurb: 'Dix pour cent de chaque paiement reçu vont à une association du territoire où le contrat est signé, choisie par le client. Le mécanisme, ce que ça coûte réellement, et les versements publiés.' },
  { key: 'melanesie',    title: 'Mélanésie · Melanesia',    blurb: 'Notre terrain principal — Kanaky/Nouvelle-Calédonie, Papouasie-Nouvelle-Guinée, Fidji, Vanuatu, Îles Salomon. Environ 13 millions d\'habitants, une organisation régionale depuis 1986, et des prix calés sur le pouvoir d\'achat réel de chaque territoire.', merge: ['gang-pacifique'] },
  { key: 'outreach',     title: 'Cold outreach',        blurb: 'Deliverability, authentication, volume, writing and targeting — the craft of reaching people who did not ask to hear from you, without burning your domain.' },
  { key: 'legal',        title: 'Cold email law',       blurb: 'What the rules actually say in each jurisdiction. Plain-language summaries of legislation, not legal advice.' },
  { key: 'alternatives', title: 'Choosing software',    blurb: 'Honest comparisons, including the cases where a competitor or a subscription is the better choice for you.' },
  { key: 'local-ai',     title: 'Local &amp; private AI',   blurb: 'Running AI on hardware you control: what it takes, what it costs, where it falls short, and the sectors where it is close to mandatory.' },
  { key: 'industries',   title: 'AI by trade',          blurb: 'Where AI saves real hours in specific trades and sectors — starting from the working day rather than from the technology.' },
  { key: 'automation',   title: 'Automation basics',    blurb: 'Agents, workflows and the decision of what to automate first. Concepts explained without the vendor gloss.' },
  { key: 'locations',    title: 'Nos marchés · Where we work', blurb: 'Marché par marché : ce que coûte un projet, comment il se déroule, les contraintes locales (connectivité, monnaie, réglementation) et les questions à poser à tout prestataire — y compris nous. En français et en anglais selon le territoire.', merge: ['pacifique'] },
  { key: 'fr',           title: 'En français',          blurb: 'Guides écrits en français pour la Nouvelle-Calédonie, la Polynésie française et La Réunion : prix réels, exemples concrets, IA locale, premiers pas.' },
];

let all = [];
for (const c of CLUSTERS) {
  const keys = [c.key, ...(c.merge || [])];
  let pages = [];
  for (const k of keys) {
    const f = path.join(HERE, 'content', `${k}.mjs`);
    if (!fs.existsSync(f)) continue;
    const mod = await import(`file://${f}`);
    pages = pages.concat(mod.default);
  }
  if (pages.length) all.push({ ...c, pages });
}
const total = all.reduce((n, c) => n + c.pages.length, 0);

const sections = all.map((c) => `
    <div class="reveal" style="margin-bottom:56px;">
      <h2 style="color:var(--white);font-size:1.5rem;font-weight:600;letter-spacing:-0.025em;margin:0 0 8px;">${c.title}</h2>
      <p style="color:var(--grey-4);margin:0 0 26px;max-width:62ch;line-height:1.7;">${c.blurb}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:2px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;">
${c.pages.map((p) => `        <a href="/${p.slug}/" style="background:var(--black);padding:22px 24px;text-decoration:none;display:block;transition:background 0.3s ease;" onmouseover="this.style.background='var(--grey-1)'" onmouseout="this.style.background='var(--black)'">
          <div style="color:var(--white);font-weight:500;font-size:0.97rem;line-height:1.45;margin-bottom:7px;">${esc(p.short || p.title)}</div>
          <div style="color:var(--grey-3);font-size:0.85rem;line-height:1.6;">${esc(p.description.slice(0, 95))}…</div>
        </a>`).join('\n')}
      </div>
    </div>`).join('\n');

const itemList = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://kanaky.xyz/guides/#page',
      name: 'Guides — Kanaky Tech',
      description: `${total} practical guides on cold outreach, local AI and business automation.`,
      url: 'https://kanaky.xyz/guides/',
      dateModified: BUILD_DATE,
      publisher: { '@id': 'https://kanaky.xyz/#organization' },
    },
    {
      '@type': 'ItemList',
      numberOfItems: total,
      itemListElement: all.flatMap((c) => c.pages).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://kanaky.xyz/${p.slug}/`,
        name: p.short || p.title,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Kanaky Tech', item: 'https://kanaky.xyz/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://kanaky.xyz/guides/' },
      ],
    },
  ],
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Guides — Cold Outreach, Local AI and Business Automation | Kanaky Tech</title>
  <meta name="description" content="${total} practical guides: cold email deliverability and law, running AI on your own hardware, and where automation saves real hours by trade. Written from work we actually do." />
  <meta name="keywords" content="cold email guides, local AI guides, business automation guides, outreach deliverability, private AI" />
  <link rel="canonical" href="https://kanaky.xyz/guides/" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Guides — Cold Outreach, Local AI and Business Automation" />
  <meta property="og:description" content="${total} practical guides on outreach, local AI and automation." />
  <meta property="og:url" content="https://kanaky.xyz/guides/" />
  <meta property="og:site_name" content="Kanaky Tech" />
  <meta property="og:image" content="https://kanaky.xyz/assets/og/cold-outreach-machine.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://kanaky.xyz/assets/og/cold-outreach-machine.png" />
  <link rel="icon" type="image/jpeg" href="/assets/kanaky-tech-logo.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/kanaky.css">
  <script type="application/ld+json">
${JSON.stringify(itemList, null, 2)}
  </script>
</head>
<body>
  <div class="cursor-ring" id="cursor-ring"></div>
  <nav>
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
  </div>

  <section class="section" style="padding-top:140px;">
    <div class="section-label reveal-left">${total} guides</div>
    <div class="about-inner" style="margin-bottom:56px;">
      <div>
        <h1 class="about-heading reveal" style="font-size:clamp(2rem,4.6vw,3.2rem);">Guides. <span style="color:var(--grey-4);font-weight:300;">Written from work we actually do.</span></h1>
      </div>
      <div class="about-body reveal delay-2">
        <p>These are the notes we would give someone starting out — on reaching people by email without burning a domain, on running AI where your data already lives, and on deciding what is worth automating.</p>
        <p>Where a competitor is the better answer for your situation, that is what the page says. A guide that only ever points at our own product would not be worth writing.</p>
      </div>
    </div>
${sections}
  </section>

  <section class="cta-section">
    <h2 class="reveal">Find out what AI<br/>can do for you.</h2>
    <p class="reveal delay-1">Start with a free AI opportunity audit. We map how your business actually runs, rank what is worth automating, and give you a clear scope before anything is built — no obligation.</p>
    <div class="cta-actions reveal delay-2">
      <a href="/ai-audit/" class="btn-primary">Book a free AI audit
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="/marketplace/cold-outreach-machine/" class="btn-ghost">See the machine</a>
    </div>
  </section>

  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="logo-mark"><img class="logo-img" src="/assets/kanaky-tech-logo.jpg" alt="Kanaky Tech logo" /><span class="logo-text">Kanaky Tech</span></a>
        <p>The Pacific's AI automation &amp; agent development studio. We build AI agents and automate business processes for SMEs, agencies and institutions across New Caledonia, New Zealand and the Pacific.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/marketplace/cold-outreach-machine/">Cold Outreach Machine</a>
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
        <h4>Company</h4>
        <a href="/#about">About</a>
        <a href="/case-studies/">Case Studies</a>
        <a href="/blog/">Blog</a>
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
    </div>
  </footer>
  <script src="/assets/site.js"></script>
</body>
</html>
`;

fs.mkdirSync(path.join(ROOT, 'guides'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'guides', 'index.html'), html);
console.log(`  /guides/ built — ${total} pages across ${all.length} clusters`);
