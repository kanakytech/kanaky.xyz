/* ============================================================
   Le fer de lance mélanésien — carte à particules.

   Chaque territoire est un nuage de particules qui s'assemble en
   la silhouette de ses îles réelles : masses posées sur les vraies
   coordonnées (Grande Terre allongée NO-SE, chaîne des Loyauté,
   arc des Salomon, chapelet du Vanuatu…). Un nuage de particules
   assume d'être une évocation — contrairement à un contour dessiné,
   il ne prétend pas à la précision cartographique.

   Canvas natif, zéro dépendance. prefers-reduced-motion : rendu
   statique. La boucle s'arrête hors écran et onglet caché.
   ============================================================ */
(function () {
  if (window.__spearInit) return; window.__spearInit = true;

  var VB = { w: 1000, h: 640, pad: 56 };
  var LON = [138, 216], LAT = [-1, -48];
  function px(lon) { return VB.pad + (lon - LON[0]) / (LON[1] - LON[0]) * (VB.w - VB.pad * 2); }
  function py(lat) { return VB.pad + (lat - LAT[0]) / (LAT[1] - LAT[0]) * (VB.h - VB.pad * 2); }

  /* masses : [lon, lat, demi-axe X px, demi-axe Y px, rotation °] */
  var PLACES = [
    { id: 'png', msg: 1, n: 'Papua New Guinea', f: 'Papouasie-Nouvelle-Guinée', city: 'Port Moresby',
      pop: '10,8 M', gdp: '~2 630 USD',
      pr: { f: 'Deux bandes — PME/ONG et corporate', n: 'Two bands — SME/NGO and corporate' },
      url: { f: '/ai-automation-papua-new-guinea/', n: '/ai-automation-papua-new-guinea/' },
      anchor: [146.5, -7.5], parts: 520,
      m: [[143.6, -5.9, 34, 20, -12], [141.8, -7.6, 26, 16, -8], [145.6, -7.3, 28, 15, -22],
          [148.6, -9.2, 24, 9, -34], [150.4, -5.6, 17, 6, -28], [152.2, -3.9, 12, 4.5, -48], [155.2, -6.2, 9, 5, -40]] },
    { id: 'sol', msg: 1, n: 'Solomon Islands', f: 'Îles Salomon', city: 'Honiara',
      pop: '~800 000', gdp: '~2 200 USD',
      pr: { f: 'Notre tarif régional le plus bas', n: 'Our lowest regional rate' },
      url: { f: '/ai-automation-solomon-islands/', n: '/ai-automation-solomon-islands/' },
      anchor: [159.6, -8.6], parts: 240,
      m: [[156.9, -7.1, 9, 3.5, -38], [158.1, -7.8, 8, 3, -36], [159.4, -8.3, 8.5, 3.2, -34],
          [160.2, -9.6, 9, 3.4, -18], [161.1, -9.1, 8, 3, -38], [161.9, -10.5, 7, 3, -30]] },
    { id: 'vut', msg: 1, n: 'Vanuatu', f: 'Vanuatu', city: 'Port-Vila',
      pop: '~320 000', gdp: '~3 300 USD',
      pr: { f: 'Grille dédiée, dès 35 000 VUV', n: 'Dedicated list, from VUV 35,000' },
      url: { f: '/automatisation-ia-vanuatu/', n: '/ai-automation-vanuatu/' },
      anchor: [167.6, -16.6], parts: 200,
      m: [[166.9, -15.2, 6.5, 5, -20], [167.3, -16.2, 5, 4, -12], [168.3, -17.7, 4.5, 3, 0],
          [169.0, -18.8, 3.6, 2.6, -18], [169.4, -19.5, 3.2, 2.4, 0], [167.8, -16.9, 3, 2.2, -25]] },
    { id: 'ncl', msg: 1, home: 1, n: 'Kanaky (New Caledonia)', f: 'Kanaky (Nouvelle-Calédonie)', city: 'Nouméa',
      pop: '~270 000', gdp: '~34 000 USD',
      pr: { f: 'Tarif reprise, en XPF', n: 'Recovery rate, in XPF' },
      url: { f: '/automatisation-ia-nouvelle-caledonie/', n: '/ai-automation-new-caledonia/' },
      anchor: [165.6, -21.4], parts: 260,
      m: [[165.35, -21.35, 24, 5.5, -43], [166.55, -20.55, 3.4, 2.2, -30], [167.2, -20.9, 3.8, 2.4, -35],
          [167.9, -21.5, 3.6, 2.4, -30], [167.45, -22.6, 2.6, 2, -20]] },
    { id: 'fji', msg: 1, n: 'Fiji', f: 'Fidji', city: 'Suva',
      pop: '~933 000', gdp: '~6 800 USD',
      pr: { f: 'Adaptée', n: 'Adapted' },
      url: { f: '/ai-automation-fiji/', n: '/ai-automation-fiji/' },
      anchor: [178.5, -17.3], parts: 200,
      m: [[177.95, -17.85, 10, 7, -8], [179.3, -16.55, 8.5, 4.5, -28], [179.95, -16.9, 2.6, 2, -50], [178.6, -18.9, 3, 2, 0]] },
    /* autres marchés — présence discrète */
    { id: 'nzl', n: 'New Zealand', f: 'Nouvelle-Zélande', city: 'Auckland', pop: '~5,2 M', gdp: '~48 000 USD',
      pr: { f: 'Tarifs standard', n: 'Standard rates' }, url: { f: '/ai-automation-new-zealand/', n: '/ai-automation-new-zealand/' },
      anchor: [174.2, -38.2], parts: 120,
      m: [[173.3, -36.2, 7, 10, 18], [175.4, -39.4, 6, 9, 14]] },
    { id: 'aus', n: 'Australia', f: 'Australie', city: 'Sydney', pop: '~26 M', gdp: '~65 000 USD',
      pr: { f: 'Tarifs standard', n: 'Standard rates' }, url: { f: '/ai-automation-australia/', n: '/ai-automation-australia/' },
      anchor: [147.5, -28.5], parts: 150,
      m: [[145.5, -26.5, 30, 22, 0], [150.2, -32.5, 12, 14, 12]] },
    { id: 'wlf', n: 'Wallis & Futuna', f: 'Wallis-et-Futuna', city: 'Mata-Utu', pop: '~11 500', gdp: '—',
      pr: { f: 'Tarifs NC', n: 'NC rates' }, url: { f: '/automatisation-ia-wallis-et-futuna/', n: '/automatisation-ia-wallis-et-futuna/' },
      anchor: [183.8, -13.3], parts: 36, m: [[183.6, -13.3, 2.4, 2, 0], [184.6, -14.3, 2, 1.8, 0]] },
    { id: 'pyf', n: 'French Polynesia', f: 'Polynésie française', city: 'Papeete', pop: '~280 000', gdp: '~22 000 USD',
      pr: { f: 'Tarifs en XPF', n: 'Rates in XPF' }, url: { f: '/automatisation-ia-tahiti/', n: '/automatisation-ia-tahiti/' },
      anchor: [210.5, -17.6], parts: 60,
      m: [[210.4, -17.6, 4, 3, -20], [211.6, -16.7, 2.4, 2, -30], [209.4, -16.4, 2, 1.8, 0]] },
  ];
  var SPEAR = ['png', 'sol', 'vut', 'ncl'], BRANCH = ['vut', 'fji'];
  var L = {
    fr: { pop: 'Population', gdp: 'PIB / hab', price: 'Tarification', visit: 'Voir la page' },
    en: { pop: 'Population', gdp: 'GDP / capita', price: 'Pricing', visit: 'Open the page' },
  };

  var LIME = [200, 240, 96], GREY = [140, 140, 134], WHITE = [244, 244, 242];
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function mulberry(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function buildParticles() {
    var rnd = mulberry(20260728), pts = [], SH = window.__SPEAR_SHAPES || {};
    PLACES.forEach(function (p) {
      var sh = SH[p.id];
      if (sh && sh.p && sh.p.length) {
        sh.p.forEach(function (q) {
          pts.push({ ter: p.id, msg: !!p.msg,
            hx: q[0] + (rnd()-0.5)*1.4, hy: q[1] + (rnd()-0.5)*1.4,
            sx: VB.w/2 + (rnd()-0.5)*VB.w*1.3, sy: VB.h/2 + (rnd()-0.5)*VB.h*1.3,
            s: (p.msg ? 1.0 : 0.75) + rnd()*0.75,
            ph: rnd()*Math.PI*2, sp: 0.4 + rnd()*0.8, d: rnd()*0.45 });
        });
        return;
      }
      var per = Math.max(6, Math.round(p.parts / p.m.length));
      p.m.forEach(function (m) {
        var cx = px(m[0]), cy = py(m[1]), rx = m[2], ry = m[3], rot = m[4] * Math.PI / 180;
        var cos = Math.cos(rot), sin = Math.sin(rot);
        for (var i = 0; i < per; i++) {
          /* gaussien approx : moyenne de 2 tirages, borné à l'ellipse */
          var a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * (0.55 + 0.45 * rnd());
          var ex = Math.cos(a) * rx * r, ey = Math.sin(a) * ry * r;
          pts.push({
            ter: p.id, msg: !!p.msg,
            hx: cx + ex * cos - ey * sin, hy: cy + ex * sin + ey * cos,
            sx: VB.w / 2 + (rnd() - 0.5) * VB.w * 1.3, sy: VB.h / 2 + (rnd() - 0.5) * VB.h * 1.3,
            s: (p.msg ? 1.15 : 0.85) + rnd() * 0.9,
            ph: rnd() * Math.PI * 2, sp: 0.4 + rnd() * 0.8,
            d: rnd() * 0.45,
          });
        }
      });
    });
    return pts;
  }

  function init(wrap) {
    var lang = wrap.getAttribute('data-lang') === 'fr' ? 'fr' : 'en';
    var nm = function (p) { return lang === 'fr' ? p.f : p.n; };
    var stage = wrap.querySelector('.km2-stage'), canvas = wrap.querySelector('canvas'), info = wrap.querySelector('.km2-info');
    var ctx = canvas.getContext('2d');
    var pts = buildParticles();
    var hover = null, t0 = performance.now(), scale = 1, dpr = Math.min(devicePixelRatio || 1, 2);
    var running = false, visible = false, raf = 0;

    /* étiquettes HTML — focusables, elles portent l'accessibilité */
    PLACES.forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'km2-lbl' + (p.msg ? ' is-msg' : '') + (p.home ? ' is-home' : '');
      b.type = 'button'; b.textContent = nm(p);
      b.style.left = (px(p.anchor[0]) / VB.w * 100) + '%';
      b.style.top = (py(p.anchor[1]) / VB.h * 100) + '%';
      b.setAttribute('aria-label', nm(p));
      function show() { hover = p.id; panel(p); if (!reduced) start(); else draw(performance.now()); }
      b.addEventListener('mouseenter', show);
      b.addEventListener('focus', show);
      b.addEventListener('mouseleave', function () { hover = null; });
      b.addEventListener('click', function () { location.href = p.url[lang === 'fr' ? 'f' : 'n']; });
      stage.appendChild(b);
    });

    function panel(p) {
      var l = L[lang];
      info.innerHTML = '<h4>' + nm(p) + '</h4><p class="km2-city">' + p.city + '</p>' +
        '<div class="km2-stats">' +
        '<div><span>' + l.pop + '</span><b>' + p.pop + '</b></div>' +
        '<div><span>' + l.gdp + '</span><b>' + p.gdp + '</b></div>' +
        '<div><span>' + l.price + '</span><b>' + p.pr[lang === 'fr' ? 'f' : 'n'] + '</b></div></div>' +
        '<a class="project-link" href="' + p.url[lang === 'fr' ? 'f' : 'n'] + '">' + l.visit +
        ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>';
    }

    function resize() {
      var w = stage.clientWidth; scale = w / VB.w;
      canvas.width = w * dpr; canvas.height = w * (VB.h / VB.w) * dpr;
      canvas.style.height = (w * VB.h / VB.w) + 'px';
      draw(performance.now());
    }

    function spearPath(ids, prog) {
      ctx.beginPath();
      var total = ids.length - 1;
      for (var i = 0; i < ids.length; i++) {
        var p = PLACES.filter(function (q) { return q.id === ids[i]; })[0];
        var x = px(p.anchor[0]) * scale * dpr, y = py(p.anchor[1]) * scale * dpr;
        if (!i) ctx.moveTo(x, y);
        else if ((i - 1) / total <= prog) ctx.lineTo(x, y);
        else {
          var prev = PLACES.filter(function (q) { return q.id === ids[i - 1]; })[0];
          var f = prog * total - (i - 1);
          if (f > 0) ctx.lineTo(
            (px(prev.anchor[0]) + (px(p.anchor[0]) - px(prev.anchor[0])) * f) * scale * dpr,
            (py(prev.anchor[1]) + (py(p.anchor[1]) - py(prev.anchor[1])) * f) * scale * dpr);
          break;
        }
      }
      ctx.stroke();
    }

    function draw(now) {
      var t = (now - t0) / 1000;
      var W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* grille discrète */
      ctx.strokeStyle = 'rgba(255,255,255,0.035)'; ctx.lineWidth = 1;
      [-10, -20, -30].forEach(function (la) { var y = py(la) * scale * dpr; ctx.beginPath(); ctx.moveTo(VB.pad * scale * dpr, y); ctx.lineTo((VB.w - VB.pad) * scale * dpr, y); ctx.stroke(); });
      [150, 165, 180, 195, 210].forEach(function (lo) { var x = px(lo) * scale * dpr; ctx.beginPath(); ctx.moveTo(x, VB.pad * scale * dpr); ctx.lineTo(x, (VB.h - VB.pad) * scale * dpr); ctx.stroke(); });

      /* côtes réelles, très discrètes */
      var SH = window.__SPEAR_SHAPES || {};
      ctx.lineWidth = 1 * dpr;
      PLACES.forEach(function (p) {
        var sh = SH[p.id]; if (!sh || !sh.o) return;
        var hot = hover === p.id;
        ctx.strokeStyle = hot ? 'rgba(200,240,96,0.55)' : (p.msg ? 'rgba(200,240,96,0.16)' : 'rgba(160,160,155,0.10)');
        sh.o.forEach(function (ring) {
          ctx.beginPath();
          ring.forEach(function (q, i) { var x=q[0]*scale*dpr, y=q[1]*scale*dpr; i ? ctx.lineTo(x,y) : ctx.moveTo(x,y); });
          ctx.stroke();
        });
      });

      /* la lance se trace après l'assemblage */
      var lineP = reduced ? 1 : Math.max(0, Math.min(1, (t - 1.5) / 1.4));
      ctx.strokeStyle = 'rgba(200,240,96,0.4)'; ctx.lineWidth = 1.3 * dpr;
      if (lineP > 0) { spearPath(SPEAR, lineP); if (lineP >= 1) spearPath(BRANCH, Math.min(1, (t - 2.9) / 0.8)); }

      /* particules */
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var e = reduced ? 1 : Math.max(0, Math.min(1, (t - p.d) / 1.5));
        e = 1 - Math.pow(1 - e, 3);
        var x = (p.sx + (p.hx - p.sx) * e), y = (p.sy + (p.hy - p.sy) * e);
        if (e >= 1 && !reduced) { x += Math.sin(t * p.sp + p.ph) * 0.9; y += Math.cos(t * p.sp * 0.8 + p.ph) * 0.9; }
        var c = p.msg ? LIME : GREY;
        var alpha = p.msg ? 0.8 : 0.4;
        var size = p.s;
        if (hover) {
          if (p.ter === hover) { alpha = 1; size *= 1.55; c = p.msg ? WHITE : LIME; }
          else alpha *= 0.22;
        }
        if (!reduced) alpha *= 0.75 + 0.25 * Math.sin(t * 1.7 + p.ph);
        ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x * scale * dpr, y * scale * dpr, size * scale * dpr, 0, 6.2832); ctx.fill();
      }
    }

    function loop(now) { draw(now); if (running) raf = requestAnimationFrame(loop); }
    function start() { if (!running && !reduced) { running = true; raf = requestAnimationFrame(loop); } }
    function stop() { running = false; cancelAnimationFrame(raf); }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { visible = e.isIntersecting; if (visible) { t0 = performance.now(); start(); } else stop(); });
      }, { threshold: 0.12 }).observe(wrap);
    } else start();
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else if (visible) start(); });

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage);
    resize();
    if (reduced) draw(performance.now());
  }

  function boot() { document.querySelectorAll('.km2-wrap').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
