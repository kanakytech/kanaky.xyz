/* ============================================================
   KANAKY TECH — SHARED INTERACTIONS
   Cursor ring · scroll reveal · counters · mobile menu · FAQ accordion
   Lightweight, no dependencies. Safe to load on every page.
   ============================================================ */
(function () {
  var isMobile = window.innerWidth <= 768;

  /* ─── CURSEUR ─── remplacé par la torche (assets/torch.js).
     Le div .cursor-ring des pages est neutralisé en CSS ; la torche
     décide elle-même de ses conditions (souris fine, pas de
     reduced-motion, viewport desktop). */
  if (!isMobile) {
    var tj = document.createElement('script');
    tj.src = '/assets/torch.js'; tj.defer = true;
    document.head.appendChild(tj);
  }
  {
    var hw = document.createElement('script');
    hw.src = '/assets/homeward.js'; hw.defer = true;
    document.head.appendChild(hw);
  }

  /* ─── SCROLL REVEAL + COUNTERS ─── */
  function animateCounter(el, target) {
    var duration = 1200, start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealEls = document.querySelectorAll('.reveal, .reveal-left');
  function revealAll() { revealEls.forEach(function (el) {
    el.classList.add('visible');
    var c = el.querySelector('[data-count]'); if (c && !c.dataset.done) { c.dataset.done = '1'; animateCounter(c, parseInt(c.dataset.count, 10)); }
  }); }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          var counter = entry.target.querySelector('[data-count]');
          if (counter && !counter.dataset.done) { counter.dataset.done = '1'; animateCounter(counter, parseInt(counter.dataset.count, 10)); }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
    // Safety net: if anything stalls, guarantee content is visible.
    window.addEventListener('load', function () { setTimeout(revealAll, 2500); });
  } else {
    revealAll();
  }

  /* ─── MOBILE MENU ─── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── FAQ ACCORDION ─── */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();
