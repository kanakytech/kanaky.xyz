// Product page interactions — reveal on scroll + hero visual parallax.
(function () {
  // Reveal
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.pr').forEach(function (el) { obs.observe(el); });

  // Hero visual: starts slightly scaled down + tilted back, settles as you scroll.
  var stage = document.querySelector('.p-stage .p-shot');
  if (stage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var ticking = false;
    var update = function () {
      var r = stage.getBoundingClientRect();
      var vh = window.innerHeight;
      // progress: 0 when the shot enters from below, 1 once its top reaches 30% vh
      var p = Math.min(1, Math.max(0, 1 - (r.top - vh * 0.30) / (vh * 0.55)));
      var scale = 0.94 + p * 0.06;
      var ty = (1 - p) * 40;
      stage.style.transform = 'perspective(1200px) rotateX(' + ((1 - p) * 6) + 'deg) scale(' + scale + ') translateY(' + ty + 'px)';
      ticking = false;
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }
})();
