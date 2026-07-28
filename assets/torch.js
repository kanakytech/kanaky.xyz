/* torch.js — le curseur-torche de kanaky.xyz.
 *
 * Une torche en bois, flamme en particules, qui éclaire la zone sous
 * le curseur. La lumière est ADDITIVE (canvas en mix-blend-mode:screen) :
 * le site garde sa luminosité normale partout, seul le halo du feu
 * s'ajoute — pas d'assombrissement du reste.
 *
 * Deux canvas plein écran, pointer-events:none :
 *   #torch-glow (screen)  → halos de lumière chaude, vacillants
 *   #torch-fx   (normal)  → manche en bois, flammes, étincelles
 *
 * Ne s'active que : pointeur fin (souris), pas de reduced-motion,
 * viewport > 768px. Le curseur natif revient sur les champs texte. */
(() => {
  if (window.__TORCH) return; window.__TORCH = 1;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!matchMedia('(pointer: fine)').matches) return;
  if (innerWidth <= 768) return;

  const css = document.createElement('style');
  css.textContent = [
    'html.torch-on, html.torch-on *{cursor:none!important}',
    'html.torch-on input, html.torch-on textarea, html.torch-on select, html.torch-on [contenteditable]{cursor:auto!important}',
    '#torch-glow,#torch-fx{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9998}',
    '#torch-glow{mix-blend-mode:screen}',
  ].join('');
  document.head.appendChild(css);

  const mk = (id) => { const c = document.createElement('canvas'); c.id = id; c.setAttribute('aria-hidden', 'true'); document.body.appendChild(c); return c; };
  const glow = mk('torch-glow'), fx = mk('torch-fx');
  const g = glow.getContext('2d'), f = fx.getContext('2d');
  let dpr = Math.min(devicePixelRatio || 1, 1.75);

  function size() {
    dpr = Math.min(devicePixelRatio || 1, 1.75);
    [glow, fx].forEach((c) => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; });
    g.setTransform(dpr, 0, 0, dpr, 0, 0); f.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size(); addEventListener('resize', size, { passive: true });

  /* état du pointeur — la position de la torche est lissée, la flamme
   * garde donc une inertie naturelle quand la main bouge */
  let mx = -100, my = -100, x = -100, y = -100, vx = 0, vy = 0;
  let shown = false, calm = false, last = performance.now(), spark = 0;

  const P = [];  /* particules de flamme */
  const S = [];  /* étincelles */

  function ignite(e) {
    mx = e.clientX; my = e.clientY;
    if (!shown) { shown = true; x = mx; y = my; document.documentElement.classList.add('torch-on'); }
    const t = e.target;
    calm = !!(t && t.closest && t.closest('input, textarea, select, [contenteditable]'));
  }
  addEventListener('pointermove', ignite, { passive: true });
  addEventListener('pointerdown', (e) => {
    /* bouffée d'étincelles au clic */
    for (let i = 0; i < 12; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
      const v = 90 + Math.random() * 160;
      S.push({ x: e.clientX, y: e.clientY, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0.5 + Math.random() * 0.45, max: 1 });
    }
  }, { passive: true });
  document.addEventListener('mouseleave', () => { shown = false; document.documentElement.classList.remove('torch-on'); });
  document.addEventListener('mouseenter', () => { if (mx > -50) { shown = true; document.documentElement.classList.add('torch-on'); } });

  function step(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    const t = now / 1000;

    /* lissage + vitesse (pour l'inclinaison et le vent) */
    const k = 1 - Math.exp(-dt * 16);
    const px = x, py = y;
    x += (mx - x) * k; y += (my - y) * k;
    vx = vx * 0.85 + ((x - px) / Math.max(dt, 0.001)) * 0.15;
    vy = vy * 0.85 + ((y - py) / Math.max(dt, 0.001)) * 0.15;

    const dim = calm ? 0.25 : 1;

    /* naissance des flammes — au cœur, sous l'effet du vent du geste */
    if (shown) {
      let n = dt * 95 * dim;
      while (n > 0) { if (n < 1 && Math.random() > n) break; n -= 1;
        P.push({
          x: x + (Math.random() - 0.5) * 5, y: y + 2 + (Math.random() - 0.5) * 3,
          vx: -vx * 0.12 + (Math.random() - 0.5) * 22,
          vy: -(52 + Math.random() * 74),
          life: 0.4 + Math.random() * 0.38, max: 0, sz: 2.6 + Math.random() * 3.1,
        });
        P[P.length - 1].max = P[P.length - 1].life;
      }
      spark -= dt;
      if (spark <= 0) { spark = 0.2 + Math.random() * 0.35;
        S.push({ x: x + (Math.random() - 0.5) * 6, y: y, vx: (Math.random() - 0.5) * 55 - vx * 0.1, vy: -(90 + Math.random() * 120), life: 0.55 + Math.random() * 0.5, max: 1 });
      }
    }

    for (let i = P.length - 1; i >= 0; i--) { const p = P[i];
      p.life -= dt; if (p.life <= 0) { P.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy -= 26 * dt; p.vx *= 1 - dt * 2.2;
    }
    for (let i = S.length - 1; i >= 0; i--) { const s = S[i];
      s.life -= dt; if (s.life <= 0) { S.splice(i, 1); continue; }
      s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 150 * dt;
    }

    g.clearRect(0, 0, innerWidth, innerHeight);
    f.clearRect(0, 0, innerWidth, innerHeight);

    if (shown) {
      /* ── lumière : trois halos vacillants, additifs ── */
      const fl = (0.86 + 0.09 * Math.sin(t * 11.3) + 0.05 * Math.sin(t * 23.7 + 1.4)) * dim;
      const halo = (r, stops) => {
        const gr = g.createRadialGradient(x, y - 8, 0, x, y - 8, r);
        stops.forEach((s) => gr.addColorStop(s[0], s[1]));
        g.fillStyle = gr; g.beginPath(); g.arc(x, y - 8, r, 0, 6.2832); g.fill();
      };
      halo(250 * fl, [[0, 'rgba(255,130,40,0.10)'], [1, 'rgba(255,130,40,0)']]);
      halo(105 * fl, [[0, 'rgba(255,175,70,0.26)'], [1, 'rgba(255,160,60,0)']]);
      halo(34 * fl,  [[0, 'rgba(255,225,150,0.38)'], [1, 'rgba(255,200,110,0)']]);

      /* ── le manche : bois incliné avec le mouvement ── */
      const tilt = Math.max(-0.45, Math.min(0.45, vx * 0.0011)) + 0.32;
      f.save(); f.translate(x, y); f.rotate(tilt);
      const wood = f.createLinearGradient(0, 6, 0, 40);
      wood.addColorStop(0, '#7a5230'); wood.addColorStop(0.25, '#5c3d22'); wood.addColorStop(1, '#33210f');
      f.fillStyle = wood;
      if (f.roundRect) { f.beginPath(); f.roundRect(-2.8, 6, 5.6, 34, 2.8); f.fill(); }
      else f.fillRect(-2.8, 6, 5.6, 34);
      /* ligature sombre sous la flamme */
      f.fillStyle = 'rgba(20,12,6,0.85)'; f.fillRect(-3.3, 8.5, 6.6, 3.4);
      f.fillStyle = 'rgba(255,190,90,0.25)'; f.fillRect(-3.3, 8.5, 6.6, 1);
      f.restore();

      /* ── flammes : additives, du rouge sombre au cœur clair ── */
      f.globalCompositeOperation = 'lighter';
      for (let i = 0; i < P.length; i++) { const p = P[i];
        const lf = p.life / p.max;
        const sz = p.sz * (0.35 + lf * 0.85);
        let col;
        if (lf > 0.66) col = 'rgba(255,235,170,' + (0.5 * lf * dim).toFixed(3) + ')';
        else if (lf > 0.33) col = 'rgba(255,145,45,' + (0.42 * lf * dim).toFixed(3) + ')';
        else col = 'rgba(215,60,20,' + (0.34 * lf * dim).toFixed(3) + ')';
        f.fillStyle = col;
        f.beginPath(); f.arc(p.x, p.y, sz, 0, 6.2832); f.fill();
      }
      for (let i = 0; i < S.length; i++) { const s = S[i];
        f.fillStyle = 'rgba(255,215,130,' + (0.85 * (s.life / s.max)).toFixed(3) + ')';
        f.beginPath(); f.arc(s.x, s.y, 1.4, 0, 6.2832); f.fill();
      }
      f.globalCompositeOperation = 'source-over';
    }

    raf = requestAnimationFrame(step);
  }
  let raf = requestAnimationFrame(step);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else { last = performance.now(); raf = requestAnimationFrame(step); }
  });
})();
