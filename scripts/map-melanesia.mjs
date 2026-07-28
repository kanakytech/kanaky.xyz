/* Carte interactive de la Mélanésie.
 *
 * Projection équirectangulaire simple sur le Pacifique sud-ouest.
 * Pas de silhouettes d'îles : sans données GeoJSON précises, dessiner
 * des contours approximatifs reviendrait à déformer des territoires
 * réels. Des points reliés sont honnêtes, cohérents avec le canvas du
 * hero — et le « fer de lance » en dessine littéralement une, ce qui
 * est le point du nom.
 *
 * SVG + JS natif, zéro dépendance. prefers-reduced-motion respecté.
 */

const T = {
  fr: {
    label: 'Le fer de lance mélanésien',
    msg: 'Membres du Groupe fer de lance mélanésien',
    other: 'Autres marchés desservis',
    pop: 'Population', gdp: 'PIB / hab', price: 'Tarification',
    hint: 'Touchez un territoire pour le détail',
    visit: 'Voir la page',
    note: 'Positions indicatives. La Réunion, dans l’océan Indien, sort du cadre de cette carte.',
  },
  en: {
    label: 'The Melanesian Spearhead',
    msg: 'Melanesian Spearhead Group members',
    other: 'Other markets served',
    pop: 'Population', gdp: 'GDP / capita', price: 'Pricing',
    hint: 'Tap a territory for detail',
    visit: 'Open the page',
    note: 'Indicative positions. Réunion, in the Indian Ocean, falls outside this frame.',
  },
};

/* lon normalisée sur 0-360 pour franchir l'antiméridien sans coupure */
const PLACES = (lang) => {
  const fr = lang === 'fr';
  return [
    { id: 'png', name: 'Papua New Guinea', nameFr: 'Papouasie-Nouvelle-Guinée', city: 'Port Moresby',
      lon: 147.18, lat: -9.44, msg: true, pop: '10,8 M', gdp: '~2 630 USD',
      price: fr ? 'Deux bandes — PME/ONG et corporate' : 'Two bands — SME/NGO and corporate',
      url: '/ai-automation-papua-new-guinea/' },
    { id: 'sol', name: 'Solomon Islands', nameFr: 'Îles Salomon', city: 'Honiara',
      lon: 159.95, lat: -9.43, msg: true, pop: '~800 000', gdp: '~2 200 USD',
      price: fr ? 'Notre tarif régional le plus bas' : 'Our lowest regional rate',
      url: '/ai-automation-solomon-islands/' },
    { id: 'vut', name: 'Vanuatu', nameFr: 'Vanuatu', city: 'Port-Vila',
      lon: 168.32, lat: -17.73, msg: true, pop: '~320 000', gdp: '~3 300 USD',
      price: fr ? 'Grille dédiée, dès 35 000 VUV' : 'Dedicated list, from VUV 35,000',
      url: fr ? '/automatisation-ia-vanuatu/' : '/ai-automation-vanuatu/' },
    { id: 'ncl', name: 'New Caledonia', nameFr: 'Nouvelle-Calédonie', city: 'Nouméa',
      lon: 166.45, lat: -22.27, msg: true, pop: '~270 000', gdp: '~34 000 USD',
      price: fr ? 'Tarif reprise, en XPF' : 'Recovery rate, in XPF', home: true,
      url: fr ? '/automatisation-ia-nouvelle-caledonie/' : '/ai-automation-new-caledonia/' },
    { id: 'fji', name: 'Fiji', nameFr: 'Fidji', city: 'Suva',
      lon: 178.44, lat: -18.14, msg: true, pop: '~933 000', gdp: '~6 800 USD',
      price: fr ? 'Adaptée' : 'Adapted', url: '/ai-automation-fiji/' },

    { id: 'nzl', name: 'New Zealand', nameFr: 'Nouvelle-Zélande', city: 'Auckland',
      lon: 174.76, lat: -36.85, pop: '~5,2 M', gdp: '~48 000 USD',
      price: fr ? 'Tarifs pleins' : 'Full rates', base: true,
      url: '/ai-automation-new-zealand/' },
    { id: 'aus', name: 'Australia', nameFr: 'Australie', city: 'Sydney',
      lon: 151.21, lat: -33.87, pop: '~26 M', gdp: '~65 000 USD',
      price: fr ? 'Tarifs pleins' : 'Full rates', url: '/ai-automation-australia/' },
    { id: 'wlf', name: 'Wallis & Futuna', nameFr: 'Wallis-et-Futuna', city: 'Mata-Utu',
      lon: 183.83, lat: -13.28, pop: '~11 500', gdp: '—',
      price: fr ? 'Tarifs NC' : 'NC rates', url: '/automatisation-ia-wallis-et-futuna/' },
    { id: 'pyf', name: 'French Polynesia', nameFr: 'Polynésie française', city: 'Papeete',
      lon: 210.58, lat: -17.65, pop: '~280 000', gdp: '~22 000 USD',
      price: fr ? 'Tarifs en XPF' : 'Rates in XPF', url: '/automatisation-ia-tahiti/' },
  ];
};

const W = 1000, H = 560, PAD = 62;
const LON = [140, 215], LAT = [-4, -40];
const px = (lon) => PAD + ((lon - LON[0]) / (LON[1] - LON[0])) * (W - PAD * 2);
const py = (lat) => PAD + ((lat - LAT[0]) / (LAT[1] - LAT[0])) * (H - PAD * 2);

export function melanesiaMap(lang = 'en') {
  const t = T[lang === 'fr' ? 'fr' : 'en'];
  const places = PLACES(lang);
  const nm = (p) => (lang === 'fr' ? p.nameFr : p.name);
  const spear = ['png', 'sol', 'vut', 'ncl'].map((id) => places.find((p) => p.id === id));
  const spearPath = spear.map((p, i) => `${i ? 'L' : 'M'}${px(p.lon).toFixed(1)},${py(p.lat).toFixed(1)}`).join(' ');
  const fji = places.find((p) => p.id === 'fji');

  const dot = (p, i) => {
    const x = px(p.lon).toFixed(1), y = py(p.lat).toFixed(1);
    const r = p.msg ? 7 : 4.5;
    return `      <g class="km-pt${p.msg ? ' km-msg' : ''}${p.home ? ' km-home' : ''}" data-id="${p.id}" tabindex="0" role="button"
         aria-label="${nm(p)}" style="--d:${(i * 0.09).toFixed(2)}s">
        <circle class="km-halo" cx="${x}" cy="${y}" r="${r * 2.6}"/>
        <circle class="km-core" cx="${x}" cy="${y}" r="${r}"/>
        <text class="km-lbl" x="${x}" y="${(+y - r - 11).toFixed(1)}">${nm(p)}</text>
      </g>`;
  };

  const panel = (p) => `{"n":${JSON.stringify(nm(p))},"c":${JSON.stringify(p.city)},"p":${JSON.stringify(p.pop)},"g":${JSON.stringify(p.gdp)},"pr":${JSON.stringify(p.price)},"u":${JSON.stringify(p.url)},"m":${p.msg ? 1 : 0}}`;

  return `
<div class="km-wrap reveal" style="margin:44px 0;">
  <style>
    .km-wrap{border:1px solid var(--border);border-radius:18px;background:radial-gradient(120% 90% at 30% 0%,rgba(200,240,96,.06),transparent 62%),#050505;overflow:hidden}
    .km-head{display:flex;flex-wrap:wrap;gap:14px;align-items:baseline;justify-content:space-between;padding:24px 26px 4px}
    .km-head h3{font-size:1.15rem;font-weight:600;letter-spacing:-.02em;margin:0;color:var(--white)}
    .km-legend{display:flex;gap:18px;flex-wrap:wrap;font-size:.78rem;color:var(--grey-3)}
    .km-legend i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:middle}
    .km-svg{display:block;width:100%;height:auto}
    .km-pt{cursor:pointer;opacity:0;animation:kmIn .7s cubic-bezier(.16,1,.3,1) forwards;animation-delay:var(--d)}
    @keyframes kmIn{to{opacity:1}}
    .km-core{fill:#6e6e69;transition:fill .3s ease,r .3s cubic-bezier(.16,1,.3,1)}
    .km-msg .km-core{fill:var(--accent)}
    .km-home .km-core{fill:#fff}
    .km-halo{fill:var(--accent);opacity:0;transition:opacity .4s ease}
    .km-msg .km-halo{opacity:.09;animation:kmPulse 3.4s ease-in-out infinite;animation-delay:var(--d)}
    @keyframes kmPulse{0%,100%{opacity:.07;transform:scale(1)}50%{opacity:.17;transform:scale(1.13)}}
    .km-halo{transform-box:fill-box;transform-origin:center}
    .km-lbl{fill:var(--grey-3);font-size:11.5px;font-family:inherit;text-anchor:middle;pointer-events:none;transition:fill .3s ease}
    .km-msg .km-lbl{fill:var(--grey-4)}
    .km-pt:hover .km-core,.km-pt:focus .km-core{r:10;fill:var(--accent)}
    .km-pt:hover .km-lbl,.km-pt:focus .km-lbl{fill:#fff}
    .km-pt:hover .km-halo,.km-pt:focus .km-halo{opacity:.26}
    .km-pt:focus{outline:none}
    .km-pt:focus .km-core{stroke:#fff;stroke-width:1.5}
    .km-spear{fill:none;stroke:var(--accent);stroke-width:1.4;stroke-opacity:.42;stroke-dasharray:1400;stroke-dashoffset:1400;animation:kmDraw 2.6s cubic-bezier(.16,1,.3,1) .5s forwards}
    @keyframes kmDraw{to{stroke-dashoffset:0}}
    .km-grid{stroke:rgba(255,255,255,.045);stroke-width:1}
    .km-info{border-top:1px solid var(--border);padding:22px 26px;min-height:104px}
    .km-info .km-empty{color:var(--grey-3);font-size:.9rem;margin:0}
    .km-info h4{margin:0 0 3px;font-size:1.05rem;font-weight:600;color:var(--white)}
    .km-info .km-city{color:var(--grey-3);font-size:.83rem;margin:0 0 14px}
    .km-stats{display:flex;flex-wrap:wrap;gap:26px;margin-bottom:14px}
    .km-stats div span{display:block;font-size:.7rem;letter-spacing:.09em;text-transform:uppercase;color:var(--grey-3);margin-bottom:3px}
    .km-stats div b{font-weight:500;color:var(--grey-4);font-size:.94rem}
    .km-foot{padding:0 26px 20px;color:var(--grey-3);font-size:.78rem;line-height:1.6}
    @media(max-width:640px){.km-lbl{font-size:14px}.km-head{padding:20px 18px 4px}.km-info,.km-foot{padding-left:18px;padding-right:18px}}
    @media(prefers-reduced-motion:reduce){.km-pt{opacity:1;animation:none}.km-msg .km-halo{animation:none}.km-spear{stroke-dashoffset:0;animation:none}}
  </style>

  <div class="km-head">
    <h3>${t.label}</h3>
    <div class="km-legend">
      <span><i style="background:var(--accent)"></i>${t.msg}</span>
      <span><i style="background:#6e6e69"></i>${t.other}</span>
    </div>
  </div>

  <svg class="km-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${t.label}">
    <g class="km-grid">
      ${[-10, -20, -30].map((la) => `<line x1="${PAD}" y1="${py(la).toFixed(1)}" x2="${W - PAD}" y2="${py(la).toFixed(1)}"/>`).join('')}
      ${[150, 165, 180, 195, 210].map((lo) => `<line x1="${px(lo).toFixed(1)}" y1="${PAD}" x2="${px(lo).toFixed(1)}" y2="${H - PAD}"/>`).join('')}
    </g>
    <path class="km-spear" d="${spearPath}"/>
    <path class="km-spear" d="${`M${px(spear[2].lon).toFixed(1)},${py(spear[2].lat).toFixed(1)} L${px(fji.lon).toFixed(1)},${py(fji.lat).toFixed(1)}`}" style="animation-delay:1.9s"/>
${places.map(dot).join('\n')}
  </svg>

  <div class="km-info" id="kmInfo"><p class="km-empty">${t.hint}</p></div>
  <p class="km-foot">${t.note}</p>
</div>
<script>
(function(){
  var D={${places.map((p) => `"${p.id}":${panel(p)}`).join(',')}};
  var L=${JSON.stringify({ pop: t.pop, gdp: t.gdp, price: t.price, visit: t.visit })};
  var box=document.getElementById('kmInfo');
  if(!box) return;
  function show(id){
    var d=D[id]; if(!d) return;
    box.innerHTML='<h4>'+d.n+'</h4><p class="km-city">'+d.c+'</p>'+
      '<div class="km-stats">'+
        '<div><span>'+L.pop+'</span><b>'+d.p+'</b></div>'+
        '<div><span>'+L.gdp+'</span><b>'+d.g+'</b></div>'+
        '<div><span>'+L.price+'</span><b>'+d.pr+'</b></div>'+
      '</div>'+
      '<a href="'+d.u+'" class="project-link">'+L.visit+' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>';
  }
  document.querySelectorAll('.km-pt').forEach(function(g){
    var id=g.getAttribute('data-id');
    g.addEventListener('mouseenter',function(){show(id)});
    g.addEventListener('focus',function(){show(id)});
    g.addEventListener('click',function(){show(id)});
    g.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();var d=D[id];if(d)location.href=d.u}
    });
  });
})();
</script>`;
}
