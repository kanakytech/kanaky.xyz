#!/usr/bin/env node
/* Ajoute le bandeau « mentions légales » (page /legal/ + NZBN + RIDET) dans le
 * footer de toutes les pages déjà générées. Idempotent : une page qui contient
 * déjà footer-legal est laissée telle quelle.
 *
 * Les générateurs (build-pages.mjs, build-hub.mjs) portent le même bloc, donc
 * un rebuild ne le perd pas. Ce script sert aux pages écrites à la main. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const BLOCK = `
      <nav class="footer-legal" aria-label="Legal">
        <a href="/legal/">Legal &amp; company information</a>
        <a href="/legal/#privacy">Privacy</a>
        <a href="/legal/#terms">Terms</a>
        <a href="/contact/">Contact</a>
        <span class="footer-ids">NZBN 9429053554017 · RIDET 1 445 709.002</span>
      </nav>`;

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  if (e.name.startsWith('.') || e.name === 'node_modules') return [];
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : (e.name.endsWith('.html') ? [p] : []);
});

let done = 0, skipped = 0, missed = [];
for (const file of walk(ROOT)) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('footer-bottom')) { skipped++; continue; }
  if (html.includes('footer-legal')) { skipped++; continue; }

  const m = html.match(/<span class="footer-copy">[\s\S]*?<\/span>/);
  if (!m) { missed.push(path.relative(ROOT, file)); continue; }

  fs.writeFileSync(file, html.replace(m[0], m[0] + BLOCK));
  done++;
}

console.log(`footer légal : ${done} pages mises à jour, ${skipped} inchangées`);
if (missed.length) console.log(`  sans .footer-copy (à faire à la main) : ${missed.join(', ')}`);
