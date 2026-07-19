// Product page interactions — scroll progress, reveals, parallax,
// animated counters and a mouse-tilt hero visual.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ─────────────────────────────── */
  if (!reduce) {
    var bar = document.createElement('div');
    bar.className = 'p-progress';
    document.body.appendChild(bar);
    var aura = document.createElement('div');
    aura.className = 'p-aura';
    document.body.appendChild(aura);
    var setProgress = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
    };
    window.addEventListener('scroll', setProgress, { passive: true });
    setProgress();
  }

  /* ── Reveal on scroll ────────────────────────────────── */
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.pr, .p-ftext, .p-stat').forEach(function (el) { revealObs.observe(el); });

  /* ── Animated counters ───────────────────────────────── */
  // Turns "14 000" / "~1 min" / "100%" into a count-up, preserving prefix/suffix.
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      countObs.unobserve(e.target);
      var el = e.target;
      var raw = el.textContent;
      var m = raw.match(/^(\D*?)([\d ,. ]*\d)(.*)$/);
      if (!m) return;
      var pre = m[1], numStr = m[2], post = m[3];
      var target = parseFloat(numStr.replace(/[^\d.]/g, ''));
      if (!isFinite(target) || target === 0) return;
      var decimals = (numStr.split('.')[1] || '').length;
      var grouped = /[ , ]/.test(numStr);
      var t0 = null, dur = 1250;
      var step = function (t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        var v = target * eased;
        var out = decimals ? v.toFixed(decimals) : String(Math.round(v));
        if (grouped) out = out.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        el.textContent = pre + out + post;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  if (!reduce) document.querySelectorAll('.p-stat b').forEach(function (el) { countObs.observe(el); });

  if (reduce) return;

  /* ── Hero visual: settles as you scroll + reacts to the mouse ── */
  var hero = document.querySelector('.p-stage .p-shot');
  var heroTilt = { x: 0, y: 0 };
  var heroProgress = 0;

  var paintHero = function () {
    if (!hero) return;
    var p = heroProgress;
    var scale = 0.94 + p * 0.06;
    var ty = (1 - p) * 40;
    var rx = (1 - p) * 6 + heroTilt.y;
    var ry = heroTilt.x;
    hero.style.transform =
      'perspective(1200px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(' + scale + ') translateY(' + ty + 'px)';
  };

  if (hero) {
    var measure = function () {
      var r = hero.getBoundingClientRect();
      var vh = window.innerHeight;
      heroProgress = Math.min(1, Math.max(0, 1 - (r.top - vh * 0.30) / (vh * 0.55)));
      paintHero();
    };
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(function () { measure(); ticking = false; }); }
    }, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    measure();

    // Subtle tilt toward the cursor (desktop pointers only)
    if (window.matchMedia('(pointer: fine)').matches) {
      var stage = hero.closest('.p-stage') || hero;
      stage.addEventListener('mousemove', function (ev) {
        var r = hero.getBoundingClientRect();
        heroTilt.x = ((ev.clientX - (r.left + r.width / 2)) / r.width) * 5;
        heroTilt.y = -((ev.clientY - (r.top + r.height / 2)) / r.height) * 3.5;
        paintHero();
      });
      stage.addEventListener('mouseleave', function () {
        heroTilt.x = 0; heroTilt.y = 0; paintHero();
      });
    }
  }

  /* ── Feature visuals: gentle parallax drift ──────────── */
  var drifters = Array.prototype.slice.call(document.querySelectorAll('.p-features .p-shot'));
  if (drifters.length) {
    var driftTicking = false;
    var drift = function () {
      var vh = window.innerHeight;
      drifters.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var centre = r.top + r.height / 2;
        var offset = (centre - vh / 2) / vh;   // -1 .. 1
        el.style.setProperty('--py', (offset * -26).toFixed(1) + 'px');
      });
      driftTicking = false;
    };
    window.addEventListener('scroll', function () {
      if (!driftTicking) { driftTicking = true; requestAnimationFrame(drift); }
    }, { passive: true });
    drift();
  }
})();
