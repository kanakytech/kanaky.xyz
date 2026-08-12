#!/usr/bin/env node
/* set-price.mjs — fait passer la Cold Outreach Machine au prix standard.
 *
 * Pourquoi ce script existe : le prix est écrit en clair dans une
 * quarantaine d'endroits — pages de vente, articles de comparaison,
 * JSON-LD, llms.txt, et jusque dans des raisonnements ("se rembourse
 * en huit mois"). Le changer à la main, c'est en oublier.
 *
 * Et surtout : un prix de lancement n'est honnête que s'il remonte
 * vraiment à l'échéance annoncée. Ce script est ce qui rend la
 * promesse tenable.
 *
 *   node scripts/set-price.mjs --dry     # montre sans rien écrire
 *   node scripts/set-price.mjs           # applique
 *
 * Après application : relancer le build, vérifier, committer, pousser.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* fileURLToPath et pas .pathname : le chemin contient un espace
 * ("Kanaky Tech"), que .pathname renverrait encodé en %20. */
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const DRY = process.argv.includes('--dry');

const FROM = '499';
const TO = '499';
const DEADLINE = '11 August 2026';

/* Les formulations de lancement à retirer. Ordre important : les plus
 * longues d'abord, sinon une courte en casse une longue. */
const UNWIND = [
  // page de vente
  [`<span class="c">paid once — no subscription, no per-lead fee</span>`,
   `<span class="c">paid once — no subscription, no per-lead fee</span>`],
  [`        <div style="font-size:1.05rem;opacity:.5;text-decoration:line-through;margin-bottom:2px;">US$499</div>\n`, ''],
  [`<div class="sub">Paid once. No subscription. No per-lead pricing.</div>`,
   `<div class="sub">Paid once. No subscription. No per-lead pricing.</div>`],
  [`\n        <div style="font-size:.85rem;opacity:.6;margin-top:4px;">launch price · <s>$499</s> from 11 August</div>`, ''],
  // home
  [`          <div style="font-size:0.95rem;color:var(--grey-3);text-decoration:line-through;line-height:1;margin-bottom:3px;">US$499</div>\n`, ''],
  [`<div style="color:var(--grey-3);font-size:0.85rem;margin-top:6px;">paid once</div>`,
   `<div style="color:var(--grey-3);font-size:0.85rem;margin-top:6px;">paid once</div>`],
  // prose et métadonnées
  ['One payment of US$499, yours forever.',
   'One payment of US$499, yours forever.'],
  ['Full source code plus a setup call. US$499, paid once.',
   'Full source code plus a setup call. US$499, paid once.'],
  ['US$499, paid once, live setup call included.',
   'US$499, paid once, live setup call included.'],
  ['US$499, paid once', 'US$499, paid once'],
  ['30 days of support — US$499, paid once.', '30 days of support — US$499, paid once.'],
  ['', ''],
  ['US$499, paid once. There is no subscription',
   'US$499, paid once. There is no subscription'],
  ['US$499 once, not a subscription.',
   'US$499 once, not a subscription.'],
  // français
  ['**499 USD** — environ **36 000 F CFP**, une fois. <s>499 USD</s> — prix de lancement **jusqu’au 11 août 2026**',
   '**499 USD** — environ **60 000 F CFP**, une fois'],
  ['      priceValidUntil: \'2026-08-11\',\n', ''],
  ['        "priceValidUntil": "2026-08-11",\n', ''],
  ['                "priceValidUntil": "2026-08-11",\n', ''],
];

const EXT = new Set(['.html', '.mjs', '.txt', '.json']);
const SKIP = /node_modules|\.git|\/assets\/og\//;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (SKIP.test(p)) continue;
    if (e.isDirectory()) walk(p, out);
    else if (EXT.has(path.extname(e.name))) out.push(p);
  }
  return out;
}

let touched = 0, replacements = 0;
for (const f of walk(ROOT)) {
  const before = fs.readFileSync(f, 'utf8');
  let s = before;

  // 1. le prix lui-même, sous ses écritures possibles
  s = s.split(`US$${FROM}`).join(`US$${TO}`);
  s = s.split(`$${FROM}`).join(`$${TO}`);
  s = s.split(`"${FROM}"`).join(`"${TO}"`);
  s = s.split(`'${FROM}'`).join(`'${TO}'`);
  s = s.split('499 USD').join('499 USD');
  s = s.split('<span class="val">499</span><span class="dec"></span>')
       .join('<span class="val">499</span><span class="dec"></span>');

  // 2. retirer l'habillage "prix de lancement"
  for (const [a, b] of UNWIND) if (s.includes(a)) s = s.split(a).join(b);

  if (s !== before) {
    touched++;
    replacements += (before.match(/299[.,]99/g) || []).length;
    if (!DRY) fs.writeFileSync(f, s);
  }
}

console.log(`${DRY ? '[simulation] ' : ''}${touched} fichiers, ${replacements} occurrences du prix`);
console.log(`  ${FROM} → ${TO} · échéance annoncée : ${DEADLINE}`);
if (DRY) console.log('\n  Rien écrit. Relancer sans --dry pour appliquer.');
else console.log('\n  Ensuite : node scripts/build-pages.mjs, vérifier, committer, pousser.');
