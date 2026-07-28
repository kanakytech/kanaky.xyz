/* term-replay.js — rejoue l'installation du wizard dans les captures
 * terminal du site, comme un enregistrement d'écran, sans en être un.
 *
 * Zéro dépendance. Le HTML statique (transcript complet) reste servi
 * tel quel : sans JS ou avec prefers-reduced-motion, rien ne bouge et
 * les crawlers lisent le texte intégral. Avec JS, le contenu est
 * remplacé par un rejouage bouclé — frappe, menu à flèches, spinners.
 *
 * Cible : tout élément [data-term-replay] (le <code> d'un <pre>, ou
 * un .shot-body). L'animation ne tourne que quand l'élément est
 * visible (IntersectionObserver). */
(() => {
  if (window.__TR) return; window.__TR = 1;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('[data-term-replay]');
  if (!els.length) return;

  const css = document.createElement('style');
  css.textContent = [
    '.tr-line{white-space:pre;min-height:1.9em}',
    '.tr-g{color:#C8F060}.tr-m{color:#8c8c86}.tr-b{font-weight:600}',
    '.tr-inv{background:#C8F060;color:#0a0a0a;padding:0 4px}',
    '.tr-cur{display:inline-block;width:.55em;height:1.15em;background:#C8F060;vertical-align:text-bottom;animation:trBlink 1s steps(1) infinite}',
    '@keyframes trBlink{50%{opacity:0}}',
  ].join('');
  document.head.appendChild(css);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const SPIN = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  /* Le scénario reproduit la vraie première exécution de setup.js. */
  const MENU = [
    { l: 'Set everything up', n: 'about 5 minutes' },
    { l: 'Test my existing configuration' },
    { l: 'Quit' },
  ];
  const SC = [
    { type: '$ node setup.js', speed: 52 },
    { p: 420 },
    { l: '┌──────────────────────────────────────────────┐', c: 'tr-g' },
    { l: '│ Cold Outreach Machine — Setup                │', c: 'tr-g' },
    { l: '└──────────────────────────────────────────────┘', c: 'tr-g' },
    { p: 550 },
    { l: '' },
    { l: '  What would you like to do?', c: 'tr-b' },
    { menu: { opts: MENU, moves: [[0, 750], [1, 620], [2, 480], [0, 780]] } },
    { p: 420 },
    { l: '' },
    { l: '  1 / 6 — Installing dependencies', c: 'tr-m' },
    { spin: { run: 'npm install — fetching packages', ms: 1500, done: '✓ Dependencies installed' } },
    { l: '  2 / 6 — Who is sending', c: 'tr-m' },
    { pre: '  Your name › ', type: 'Kevyn', speed: 90 },
    { l: '  3 / 6 — The writing engine', c: 'tr-m' },
    { pre: '  API key › ', type: '••••••••••••••••', speed: 34 },
    { spin: { run: 'testing the key against the API', ms: 1600, done: '✓ Writing engine connected — test draft written' } },
    { l: '  4 / 6 — Sending', c: 'tr-m' },
    { spin: { run: 'reaching your SMTP server', ms: 1250, done: '✓ SMTP server reachable' } },
    { p: 350 },
    { l: '' },
    { l: '✓ Configuration saved · your machine is ready', c: 'tr-g tr-b' },
    { p: 4200 },
  ];

  function run(el) {
    const host = el.matches('pre') ? (el.querySelector('code') || el) : el;
    /* fige la hauteur du transcript statique : zéro saut de page */
    host.style.minHeight = host.offsetHeight + 'px';
    host.style.display = 'block';
    host.setAttribute('aria-hidden', 'true');
    const shell = el.closest('.shot, pre') || el;
    shell.setAttribute('role', 'img');
    shell.setAttribute('aria-label', el.dataset.termLabel ||
      'Terminal recording: one command runs the guided setup — menus, live connection tests, done.');

    /* visibilité par mesure directe plutôt qu'IntersectionObserver :
     * même résultat, mais fiable aussi dans les webviews qui ne
     * déclenchent pas l'IO au défilement */
    const st = { vis: false, on: false };
    const check = () => {
      const r = el.getBoundingClientRect();
      st.vis = r.bottom > 40 && r.top < innerHeight - 40 && r.height > 0;
      if (st.vis && !st.on) { st.on = true; loop(); }
    };
    check();
    addEventListener('scroll', check, { passive: true });
    setInterval(check, 600);

    const gate = async () => { while (!st.vis) await sleep(350); };
    const line = (txt, cls) => {
      const d = document.createElement('div');
      d.className = 'tr-line' + (cls ? ' ' + cls : '');
      d.innerHTML = txt === '' ? ' ' : esc(txt);
      host.appendChild(d); return d;
    };

    /* frappe indexée sur l'horloge, pas sur les ticks : si le
     * navigateur clampe les timers (onglet en retrait), plusieurs
     * caractères tombent par tick et la durée voulue est tenue */
    async function typeInto(d, txt, speed) {
      const cur = '<span class="tr-cur"></span>';
      const pre = d.dataset.pre || '';
      const t0 = Date.now();
      let shown = 0;
      while (shown < txt.length) {
        await gate();
        shown = Math.min(txt.length, Math.floor((Date.now() - t0) / speed) + 1);
        d.innerHTML = esc(pre + txt.slice(0, shown)) + cur;
        await sleep(Math.min(speed, 48));
      }
      d.innerHTML = esc(pre + txt);
    }

    function drawMenu(divs, opts, sel, committed) {
      opts.forEach((o, i) => {
        const cur = i === sel;
        const bullet = cur ? '<span class="tr-g">❯</span>' : ' ';
        const label = cur ? `<span class="tr-inv">${esc(o.l)}</span>` : `<span${committed ? ' class="tr-m"' : ''}> ${esc(o.l)} </span>`;
        divs[i].innerHTML = `   ${bullet} ${label}${o.n ? `  <span class="tr-m">${esc(o.n)}</span>` : ''}`;
      });
    }

    async function loop() {
      for (;;) {
        host.innerHTML = '';
        for (const op of SC) {
          await gate();
          if (op.p) { await sleep(op.p); continue; }
          if (op.l !== undefined) { line(op.l, op.c); await sleep(140); continue; }
          if (op.type) {
            const d = line('', op.c); d.dataset.pre = op.pre || '';
            if (op.pre) d.innerHTML = esc(op.pre);
            await sleep(220);
            await typeInto(d, op.type, op.speed || 40);
            await sleep(260); continue;
          }
          if (op.menu) {
            const divs = op.menu.opts.map(() => line(''));
            for (const [sel, ms] of op.menu.moves) {
              drawMenu(divs, op.menu.opts, sel, false);
              await gate(); await sleep(ms);
            }
            drawMenu(divs, op.menu.opts, op.menu.moves[op.menu.moves.length - 1][0], true);
            continue;
          }
          if (op.spin) {
            const d = line('');
            const t0 = Date.now(); let i = 0;
            while (Date.now() - t0 < op.spin.ms) {
              await gate();
              d.innerHTML = `  <span class="tr-g">${SPIN[i = (i + 1) % SPIN.length]}</span> <span class="tr-m">${esc(op.spin.run)}</span>`;
              await sleep(80);
            }
            d.innerHTML = `  <span class="tr-g">✓</span> ${esc(op.spin.done.replace(/^✓ /, ''))}`;
            await sleep(300); continue;
          }
        }
        /* fondu avant de reboucler */
        host.style.transition = 'opacity .45s ease';
        host.style.opacity = '0';
        await sleep(480);
        host.style.opacity = '1';
      }
    }
  }

  els.forEach(run);
})();
