/* Carte du fer de lance — conteneur.
 *
 * Le moteur vit dans /assets/spearhead.js : particules assemblant la
 * silhouette réelle des archipels (masses posées sur les vraies
 * coordonnées), lance qui se trace, panneau de détail par territoire.
 * Un nuage de particules assume d'être une évocation — il ne prétend
 * pas à la précision d'un contour cartographique.
 *
 * Ce module n'émet que le conteneur localisé + le style. */

const T = {
  fr: {
    label: 'Le fer de lance mélanésien',
    msg: 'Membres du Groupe fer de lance mélanésien',
    other: 'Autres marchés desservis',
    hint: 'Survolez ou touchez un territoire pour le détail',
    note: 'Côtes réelles (Natural Earth), simplifiées pour l’écran. La Réunion, dans l’océan Indien, sort du cadre.',
  },
  en: {
    label: 'The Melanesian Spearhead',
    msg: 'Melanesian Spearhead Group members',
    other: 'Other markets served',
    hint: 'Hover or tap a territory for detail',
    note: 'Real coastlines (Natural Earth), simplified for screen. Réunion, in the Indian Ocean, falls outside this frame.',
  },
};

const CSS = `<style>
    .km2-wrap{border:1px solid var(--border);border-radius:18px;background:radial-gradient(120% 90% at 30% 0%,rgba(200,240,96,.06),transparent 62%),#050505;overflow:hidden;margin:44px 0}
    .km2-head{display:flex;flex-wrap:wrap;gap:14px;align-items:baseline;justify-content:space-between;padding:24px 26px 10px}
    .km2-head h3{font-size:1.15rem;font-weight:600;letter-spacing:-.02em;margin:0;color:var(--white)}
    .km2-legend{display:flex;gap:18px;flex-wrap:wrap;font-size:.78rem;color:var(--grey-3)}
    .km2-legend i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:middle}
    .km2-stage{position:relative;width:100%}
    .km2-stage canvas{display:block;width:100%}
    .km2-lbl{position:absolute;transform:translate(-50%,-170%);background:none;border:none;cursor:pointer;font-family:inherit;font-size:11.5px;color:var(--grey-3);padding:4px 8px;border-radius:8px;transition:color .3s ease,background .3s ease;white-space:nowrap}
    .km2-lbl.is-msg{color:var(--grey-4)}
    .km2-lbl.is-home{color:var(--white);font-weight:600}
    .km2-lbl:hover,.km2-lbl:focus-visible{color:var(--accent);background:rgba(200,240,96,.07);outline:none}
    .km2-info{border-top:1px solid var(--border);padding:22px 26px;min-height:104px}
    .km2-info .km2-empty{color:var(--grey-3);font-size:.9rem;margin:0}
    .km2-info h4{margin:0 0 3px;font-size:1.05rem;font-weight:600;color:var(--white)}
    .km2-info .km2-city{color:var(--grey-3);font-size:.83rem;margin:0 0 14px}
    .km2-stats{display:flex;flex-wrap:wrap;gap:26px;margin-bottom:14px}
    .km2-stats div span{display:block;font-size:.7rem;letter-spacing:.09em;text-transform:uppercase;color:var(--grey-3);margin-bottom:3px}
    .km2-stats div b{font-weight:500;color:var(--grey-4);font-size:.94rem}
    .km2-foot{padding:0 26px 20px;color:var(--grey-3);font-size:.78rem;line-height:1.6;margin:0}
    @media(max-width:640px){.km2-lbl{font-size:13px}.km2-head,.km2-info{padding-left:18px;padding-right:18px}.km2-foot{padding-left:18px;padding-right:18px}}
  </style>`;

export function melanesiaMap(lang = 'en') {
  const t = T[lang === 'fr' ? 'fr' : 'en'];
  return `
${CSS}
<div class="km2-wrap reveal" data-lang="${lang === 'fr' ? 'fr' : 'en'}">
  <div class="km2-head">
    <h3>${t.label}</h3>
    <div class="km2-legend">
      <span><i style="background:var(--accent)"></i>${t.msg}</span>
      <span><i style="background:#8c8c86"></i>${t.other}</span>
    </div>
  </div>
  <div class="km2-stage" role="img" aria-label="${t.label}">
    <canvas></canvas>
  </div>
  <div class="km2-info"><p class="km2-empty">${t.hint}</p></div>
  <p class="km2-foot">${t.note}</p>
</div>
<script src="/assets/spearhead-data.js"></script>
<script src="/assets/spearhead.js" defer></script>`;
}
