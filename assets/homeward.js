/* homeward.js — le retour à l'accueil, senti.
 *
 * Deux morceaux :
 * 1. Une pastille flottante « ⌂ kanaky.xyz » qui apparaît en bas à
 *    gauche dès qu'on a scrollé sur une page intérieure — le chemin
 *    du retour est toujours visible, sans encombrer la lecture.
 * 2. Une transition de départ : tout clic vers l'accueil joue une
 *    animation de 380 ms — la page s'estompe, la constellation du
 *    fer de lance se dessine — puis navigue. L'accueil est
 *    préchargé (prefetch) : à l'arrivée, c'est instantané.
 *
 * Respecte prefers-reduced-motion (navigation directe). */
(() => {
  if (window.__HOMEWARD) return; window.__HOMEWARD = 1;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FR = (document.documentElement.lang || 'en').toLowerCase().startsWith('fr');
  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  /* précharger l'accueil depuis les pages intérieures */
  if (!isHome) {
    const l = document.createElement('link');
    l.rel = 'prefetch'; l.href = '/'; l.as = 'document';
    document.head.appendChild(l);
  }

  const css = document.createElement('style');
  css.textContent = [
    '.hw-pill{position:fixed;left:18px;bottom:18px;z-index:9992;display:inline-flex;align-items:center;gap:9px;padding:11px 16px;border-radius:99px;background:rgba(8,8,8,.82);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);color:#f0f0ec;font-family:inherit;font-size:12.5px;letter-spacing:.04em;text-decoration:none;opacity:0;transform:translateY(14px);transition:opacity .4s cubic-bezier(.22,1,.36,1),transform .4s cubic-bezier(.22,1,.36,1),border-color .3s;pointer-events:none}',
    '.hw-pill.on{opacity:1;transform:none;pointer-events:auto}',
    '.hw-pill:hover{border-color:rgba(200,240,96,.5);color:#C8F060}',
    '.hw-pill svg{width:14px;height:14px}',
    '.hw-veil{position:fixed;inset:0;z-index:99990;background:#050505;opacity:0;pointer-events:none;transition:opacity .34s cubic-bezier(.22,1,.36,1)}',
    '.hw-veil.on{opacity:1;pointer-events:auto}',
    '.hw-veil svg{position:absolute;inset:0;width:100%;height:100%}',
    '.hw-veil .hw-dot{fill:#C8F060;opacity:0;transform-origin:center;animation:hwDot .5s cubic-bezier(.22,1,.36,1) forwards}',
    '.hw-veil .hw-line{stroke:#C8F060;stroke-opacity:.5;stroke-width:1;stroke-dasharray:600;stroke-dashoffset:600;animation:hwLine .45s ease .12s forwards}',
    '@keyframes hwDot{from{opacity:0;transform:scale(.2)}to{opacity:1;transform:scale(1)}}',
    '@keyframes hwLine{to{stroke-dashoffset:0}}',
    '@media(max-width:640px){.hw-pill{left:12px;bottom:12px;padding:10px 14px}}',
  ].join('');
  document.head.appendChild(css);

  /* ── pastille de retour (pages intérieures uniquement) ── */
  if (!isHome) {
    const pill = document.createElement('a');
    pill.className = 'hw-pill'; pill.href = '/';
    pill.setAttribute('aria-label', FR ? 'Retour à l’accueil kanaky.xyz' : 'Back to kanaky.xyz home');
    pill.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="m3 10.5 9-7.5 9 7.5M5.5 9v11h13V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>kanaky.xyz';
    document.body.appendChild(pill);
    let on = false;
    const check = () => {
      const want = scrollY > 480;
      if (want !== on) { on = want; pill.classList.toggle('on', on); }
    };
    addEventListener('scroll', check, { passive: true }); check();
  }

  /* ── transition de départ vers l'accueil ── */
  function depart(href) {
    const veil = document.createElement('div');
    veil.className = 'hw-veil';
    /* la constellation du fer de lance se dessine pendant le fondu */
    const P = [[20, 18], [42, 38], [62, 55], [82, 76]];
    veil.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
      + `<polyline class="hw-line" points="${P.map((p) => p.join(',')).join(' ')}" fill="none"/>`
      + P.map((p, i) => `<circle class="hw-dot" cx="${p[0]}" cy="${p[1]}" r="${1.3 + i * 0.5}" style="animation-delay:${i * 70}ms"/>`).join('')
      + '</svg>';
    document.body.appendChild(veil);
    requestAnimationFrame(() => veil.classList.add('on'));
    setTimeout(() => { location.href = href; }, 380);
    /* filet : si la navigation échoue, on rend la main */
    setTimeout(() => veil.remove(), 2500);
  }

  document.addEventListener('click', (e) => {
    if (reduced || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank') return;
    const href = a.getAttribute('href');
    if (href !== '/' && href !== '/index.html' && !(a.origin === location.origin && a.pathname === '/' && !a.hash)) return;
    if (isHome && !a.hash) return;
    e.preventDefault();
    depart(a.hash ? '/' + a.hash : '/');
  }, true);
})();
