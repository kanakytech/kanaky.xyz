/* ecosystem.js — le commutateur d'écosystème Kanaky Tech.
 *
 * Un bouton dans la nav de chaque page ouvre un panneau listant les
 * plateformes (studio, dictionnaire, Keou, marketplace) : on circule
 * dans tout l'écosystème sans toucher la barre d'adresse.
 *
 * Autonome : styles injectés, zéro dépendance, aucune exigence de
 * markup — le déclencheur se greffe sur ul.nav-links, à défaut sur
 * .nav-in (page produit), à défaut en flottant. Clavier complet
 * (Esc, Tab piégé), ARIA dialog, bottom-sheet sous 640px,
 * prefers-reduced-motion respecté. Thème sombre par défaut,
 * `data-theme="light"` sur la balise script pour le dico. */
(() => {
  if (window.__ECO) return; window.__ECO = 1;
  const FR = (document.documentElement.lang || 'en').toLowerCase().startsWith('fr');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const theme = (document.currentScript && document.currentScript.dataset.theme) === 'light' ? 'light' : 'dark';

  const T = FR ? {
    label: 'Écosystème', title: 'Écosystème Kanaky Tech', here: 'Vous êtes ici',
    tail: 'Un studio, quatre plateformes — construites dans le Pacifique.',
  } : {
    label: 'Ecosystem', title: 'Kanaky Tech ecosystem', here: 'You are here',
    tail: 'One studio, four platforms — built in the Pacific.',
  };

  const I = {
    studio: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3.5 14H10l-1 8L18.5 10H12l1-8z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    dico: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 7h7M9 11h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    keou: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="9" r="1.8" stroke="currentColor" stroke-width="1.6"/><path d="m3.5 17 5-5 4 4 3.5-3.5 4.5 4.5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    market: '<svg viewBox="0 0 24 24" fill="none"><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="7.5" cy="7.5" r="1.4" fill="currentColor"/></svg>',
  };

  const P = [
    { id: 'studio', icon: I.studio, url: 'https://kanaky.xyz/', dom: 'kanaky.xyz',
      n: 'Kanaky Tech', d: FR ? 'Automatisation IA — Mélanésie, NZ, Pacifique' : 'AI automation — Melanesia, NZ, Pacific' },
    { id: 'dico', icon: I.dico, url: 'https://dictionnaire.kanaky.xyz/', dom: 'dictionnaire.kanaky.xyz',
      n: FR ? 'Dictionnaire des langues kanak' : 'Kanak Languages Dictionary', d: FR ? '9 langues · 19 672 mots · gratuit' : '9 languages · 19,672 words · free' },
    { id: 'keou', icon: I.keou, url: 'https://studio.kanaky.xyz/', dom: 'studio.kanaky.xyz',
      n: 'Keou Studio', d: FR ? 'Production visuelle par IA — gratuit' : 'AI visual production — free' },
    { id: 'market', icon: I.market, url: 'https://kanaky.xyz/marketplace/', dom: 'kanaky.xyz/marketplace',
      n: 'Marketplace', d: FR ? 'Systèmes complets, achetés une fois' : 'Complete systems, bought once' },
  ];
  const host = location.hostname;
  const cur = host.includes('dictionnaire') ? 'dico'
    : (host.startsWith('studio.') || host.includes('keou')) ? 'keou'
    : location.pathname.startsWith('/marketplace') ? 'market' : 'studio';

  const C = theme === 'light'
    ? { bg: '#ffffff', bg2: '#f7f9fb', tx: '#0b1020', tx2: '#5a6472', line: '#e2e7ee', lime: '#0077B6', limeSoft: 'rgba(0,119,182,.09)', shadow: '0 24px 80px rgba(11,16,32,.18)' }
    : { bg: '#0a0a0b', bg2: '#101012', tx: '#f0f0ec', tx2: '#8f8f88', line: '#232324', lime: '#C8F060', limeSoft: 'rgba(200,240,96,.08)', shadow: '0 24px 80px rgba(0,0,0,.55)' };

  const css = document.createElement('style');
  css.textContent = `
  .eco-btn{display:inline-flex;align-items:center;gap:7px;background:none;border:1px solid transparent;border-radius:10px;padding:7px 11px;font-family:inherit;font-size:.86rem;font-weight:500;color:inherit;cursor:pointer;letter-spacing:.01em;transition:color .25s,border-color .25s,background .25s}
  .eco-btn svg{width:15px;height:15px;display:block}
  .eco-btn .eco-dot{transition:fill .25s}
  .eco-btn:hover,.eco-btn[aria-expanded="true"]{color:${C.lime};border-color:${C.line};background:${C.limeSoft}}
  li.eco-li{display:flex;align-items:center}
  .eco-float{position:fixed;right:18px;bottom:18px;z-index:9994;background:${C.bg};border:1px solid ${C.line};box-shadow:${C.shadow};color:${C.tx}}
  .eco-veil{position:fixed;inset:0;z-index:9995;background:rgba(0,0,0,.5);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);opacity:0;visibility:hidden;transition:opacity .28s ease,visibility 0s .28s}
  .eco-veil.on{opacity:1;visibility:visible;transition:opacity .28s ease}
  .eco-panel{position:fixed;z-index:9996;width:min(408px,calc(100vw - 32px));background:radial-gradient(130% 100% at 85% 0%,${C.limeSoft},transparent 58%),${C.bg};border:1px solid ${C.line};border-radius:20px;box-shadow:${C.shadow};visibility:hidden;opacity:0;transform:translateY(-8px) scale(.97);transform-origin:top right;transition:opacity .3s cubic-bezier(.22,1,.36,1),transform .3s cubic-bezier(.22,1,.36,1),visibility 0s .3s}
  .eco-panel.on{visibility:visible;opacity:1;transform:none;transition:opacity .3s cubic-bezier(.22,1,.36,1),transform .3s cubic-bezier(.22,1,.36,1)}
  .eco-head{display:flex;align-items:center;justify-content:space-between;padding:20px 22px 12px}
  .eco-head h2{font-size:.78rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:${C.tx2};margin:0}
  .eco-x{background:none;border:none;color:${C.tx2};cursor:pointer;padding:6px;border-radius:8px;display:flex;transition:color .2s,background .2s}
  .eco-x:hover{color:${C.tx};background:${C.limeSoft}}
  .eco-list{list-style:none;margin:0;padding:6px 12px 10px}
  .eco-it{opacity:1;transform:none}
  .eco-panel.anim .eco-it{opacity:0;transform:translateY(12px)}
  .eco-panel.anim.on .eco-it{opacity:1;transform:none;transition:opacity .38s cubic-bezier(.22,1,.36,1),transform .38s cubic-bezier(.22,1,.36,1)}
  .eco-a{display:grid;grid-template-columns:44px 1fr 14px;gap:14px;align-items:center;padding:12px 10px;border-radius:14px;text-decoration:none;border:1px solid transparent;transition:background .22s,border-color .22s}
  .eco-a:hover,.eco-a:focus-visible{background:${C.bg2};border-color:${C.line};outline:none}
  .eco-ic{width:44px;height:44px;border-radius:12px;border:1px solid ${C.line};display:flex;align-items:center;justify-content:center;color:${C.tx2};transition:color .22s,border-color .22s,background .22s}
  .eco-ic svg{width:21px;height:21px}
  .eco-a:hover .eco-ic,.eco-a:focus-visible .eco-ic{color:${C.lime};border-color:transparent;background:${C.limeSoft}}
  .eco-tx b{display:block;font-size:.95rem;font-weight:600;color:${C.tx};letter-spacing:-.01em;line-height:1.3}
  .eco-tx span{display:block;font-size:.8rem;color:${C.tx2};line-height:1.45;margin-top:2px}
  .eco-tx i{display:inline-flex;align-items:center;gap:5px;font-style:normal;font-size:.68rem;color:${C.lime};margin-top:5px;letter-spacing:.06em;text-transform:uppercase;font-weight:600}
  .eco-tx i::before{content:'';width:5px;height:5px;border-radius:99px;background:${C.lime};animation:ecoPulse 2.2s ease infinite}
  .eco-arr{color:${C.tx2};transition:transform .22s,color .22s}
  .eco-a:hover .eco-arr{transform:translateX(3px);color:${C.lime}}
  .eco-tail{margin:0;padding:14px 22px 18px;border-top:1px solid ${C.line};font-size:.76rem;color:${C.tx2};line-height:1.6}
  @keyframes ecoPulse{50%{opacity:.35}}
  .eco-mob{display:none;padding:7px}
  .eco-mob svg{width:17px;height:17px}
  .eco-mob .eco-lbl{display:none}
  @media(max-width:768px){.eco-mob{display:inline-flex;margin-left:auto;margin-right:8px}}
  @media(max-width:640px){
    .eco-btn .eco-lbl{display:none}
    .eco-panel{left:0;right:0;bottom:0;top:auto!important;width:100%;border-radius:22px 22px 0 0;transform:translateY(24px);transform-origin:bottom center}
    .eco-panel::before{content:'';display:block;width:40px;height:4px;border-radius:99px;background:${C.line};margin:12px auto 0}
  }
  @media(prefers-reduced-motion:reduce){.eco-panel,.eco-veil,.eco-panel.anim .eco-it,.eco-a,.eco-arr{transition:none!important}.eco-tx i::before{animation:none}}
  `;
  document.head.appendChild(css);

  /* déclencheur — mini-constellation du fer de lance */
  const mkTrigger = () => {
    const b = document.createElement('button');
    b.className = 'eco-btn'; b.type = 'button';
    b.setAttribute('aria-haspopup', 'dialog'); b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-label', T.title);
    b.innerHTML = `<svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3.5 3.5 8 7.5l4 3 3 4" stroke="currentColor" stroke-width="1" opacity=".45"/>
    <circle class="eco-dot" cx="3.5" cy="3.5" r="1.7" fill="currentColor"/>
    <circle class="eco-dot" cx="8" cy="7.5" r="1.5" fill="currentColor"/>
    <circle class="eco-dot" cx="12" cy="10.5" r="1.5" fill="currentColor"/>
    <circle class="eco-dot" cx="15" cy="14.5" r="1.9" fill="currentColor"/>
  </svg><span class="eco-lbl">${T.label}</span>`;
    return b;
  };
  const btn = mkTrigger();

  const links = document.querySelector('ul.nav-links');
  const navIn = document.querySelector('.nav-in');
  if (links) { const li = document.createElement('li'); li.className = 'eco-li'; li.appendChild(btn); links.appendChild(li); }
  else if (navIn) { navIn.insertBefore(btn, navIn.querySelector('.nav-cta')); }
  else { btn.classList.add('eco-float'); document.body.appendChild(btn); }

  /* sur mobile, ul.nav-links est masquée derrière le hamburger : un
   * second déclencheur (icône seule) vit à côté du hamburger */
  let mobBtn = null;
  const ham = links && document.querySelector('nav .hamburger');
  if (ham) { mobBtn = mkTrigger(); mobBtn.classList.add('eco-mob'); ham.parentNode.insertBefore(mobBtn, ham); }

  /* panneau */
  const veil = document.createElement('div'); veil.className = 'eco-veil';
  const panel = document.createElement('div');
  panel.className = 'eco-panel' + (reduced ? '' : ' anim');
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', T.title);
  panel.innerHTML = `
  <div class="eco-head"><h2>${T.title}</h2>
    <button class="eco-x" type="button" aria-label="${FR ? 'Fermer' : 'Close'}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
  </div>
  <ul class="eco-list">${P.map((p, i) => `
    <li class="eco-it" style="transition-delay:${reduced ? 0 : 70 + i * 55}ms">
      <a class="eco-a" href="${p.url}"${p.id === cur ? ' aria-current="page"' : new URL(p.url).hostname === host ? '' : ' target="_blank" rel="noopener"'}>
        <span class="eco-ic">${p.icon}</span>
        <span class="eco-tx"><b>${p.n}</b><span>${p.d}</span>${p.id === cur ? `<i>${T.here}</i>` : ''}</span>
        <svg class="eco-arr" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-7 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </li>`).join('')}
  </ul>
  <p class="eco-tail">${T.tail}</p>`;
  document.body.appendChild(veil); document.body.appendChild(panel);

  let open = false, lastT = btn;
  const triggers = mobBtn ? [btn, mobBtn] : [btn];
  const place = () => {
    if (innerWidth <= 640) { panel.style.top = ''; panel.style.right = ''; return; }
    const src = lastT.offsetParent ? lastT : (triggers.find((t) => t.offsetParent) || lastT);
    const r = src.getBoundingClientRect();
    panel.style.top = Math.min(r.bottom + 12, innerHeight - 100) + 'px';
    panel.style.right = Math.max(16, innerWidth - r.right - 8) + 'px';
  };
  const show = () => {
    place(); open = true;
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'true'));
    veil.classList.add('on');
    /* double rAF pour laisser peindre l'état initial ; setTimeout en
     * filet — certains webviews throttlent rAF hors focus */
    requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('on')));
    setTimeout(() => panel.classList.add('on'), 90);
    setTimeout(() => { const a = panel.querySelector('.eco-a'); a && a.focus(); }, reduced ? 0 : 120);
  };
  const hide = (refocus = true) => {
    open = false;
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    veil.classList.remove('on'); panel.classList.remove('on');
    if (refocus) lastT.focus();
  };
  triggers.forEach((t) => t.addEventListener('click', () => { lastT = t; open ? hide() : show(); }));
  veil.addEventListener('click', () => hide());
  panel.querySelector('.eco-x').addEventListener('click', () => hide());
  addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); hide(); }
    if (e.key === 'Tab') {
      const f = [...panel.querySelectorAll('a,button')];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  addEventListener('resize', () => { if (open) place(); }, { passive: true });
})();
