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
    pill.innerHTML = '<svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3.5 3.5 8 7.5l4 3 3 4" stroke="currentColor" stroke-width="1" opacity=".45"/><circle cx="3.5" cy="3.5" r="1.6" fill="currentColor"/><circle cx="8" cy="7.5" r="1.4" fill="currentColor"/><circle cx="12" cy="10.5" r="1.4" fill="currentColor"/><circle cx="15" cy="14.5" r="1.8" fill="currentColor"/></svg>' + (FR ? 'Accueil' : 'Home');
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
    /* le voile s'assombrit, des particules accourent des bords et
     * s'assemblent en fer de lance, la ligne se trace, puis départ */
    const veil = document.createElement('div');
    veil.className = 'hw-veil';
    const cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    veil.appendChild(cv);
    document.body.appendChild(veil);
    requestAnimationFrame(() => veil.classList.add('on'));
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    const c = cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    const W = innerWidth, H = innerHeight, m = Math.min(W, H);
    const A = [[.34, .34], [.45, .445], [.55, .53], [.66, .645]]
      .map(([x, y]) => [W * .5 + (x - .5) * m * .9, H * .5 + (y - .5) * m * .9]);
    const pts = [];
    for (let i = 0; i < 110; i++) {
      const edge = Math.random() * 2 * (W + H); let sx, sy;
      if (edge < W) { sx = edge; sy = -12; }
      else if (edge < W + H) { sx = W + 12; sy = edge - W; }
      else if (edge < 2 * W + H) { sx = edge - W - H; sy = H + 12; }
      else { sx = -12; sy = edge - 2 * W - H; }
      const t = A[i % 4];
      pts.push({ sx, sy, tx: t[0] + (Math.random() - .5) * 9, ty: t[1] + (Math.random() - .5) * 9,
        d: Math.random() * 140, s: .8 + Math.random() * 1.8 });
    }
    const t0 = performance.now(); const DUR = 460;
    (function frame(now) {
      const t = now - t0;
      c.clearRect(0, 0, W, H);
      for (const p of pts) {
        let e = Math.min(1, Math.max(0, (t - p.d) / DUR));
        e = 1 - Math.pow(1 - e, 3);
        const x = p.sx + (p.tx - p.sx) * e, y = p.sy + (p.ty - p.sy) * e;
        c.fillStyle = 'rgba(200,240,96,' + (.25 + .75 * e).toFixed(2) + ')';
        c.beginPath(); c.arc(x, y, p.s * (.5 + .5 * e), 0, 6.2832); c.fill();
      }
      const lp = Math.min(1, Math.max(0, (t - 300) / 260));
      if (lp > 0) {
        c.strokeStyle = 'rgba(200,240,96,.7)'; c.lineWidth = 1.2;
        c.beginPath(); c.moveTo(A[0][0], A[0][1]);
        const seg = lp * 3;
        for (let i = 1; i < 4; i++) {
          if (i <= seg) c.lineTo(A[i][0], A[i][1]);
          else { const f = seg - (i - 1); if (f > 0) c.lineTo(A[i-1][0] + (A[i][0] - A[i-1][0]) * f, A[i-1][1] + (A[i][1] - A[i-1][1]) * f); break; }
        }
        c.stroke();
        for (let i = 0; i < 4; i++) {
          const g = c.createRadialGradient(A[i][0], A[i][1], 0, A[i][0], A[i][1], 26 * lp);
          g.addColorStop(0, 'rgba(200,240,96,' + (.5 * lp).toFixed(2) + ')'); g.addColorStop(1, 'rgba(200,240,96,0)');
          c.fillStyle = g; c.beginPath(); c.arc(A[i][0], A[i][1], 26 * lp, 0, 6.2832); c.fill();
        }
      }
      if (t < 700) requestAnimationFrame(frame);
    })(t0);
    setTimeout(() => { location.href = href; }, 660);
    setTimeout(() => veil.remove(), 3000);
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
