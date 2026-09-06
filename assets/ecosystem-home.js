(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const localeButtons = [...document.querySelectorAll('[data-locale]')];

  function setLocale(locale) {
    const lang = locale === 'en' ? 'en' : 'fr';
    document.documentElement.lang = lang;
    document.title = lang === 'fr' ? 'Kanaky Tech — Écosystème' : 'Kanaky Tech — Ecosystem';
    document.querySelectorAll('[data-fr][data-en]').forEach((el) => {
      const value = el.dataset[lang];
      if (value.includes('<br>')) el.innerHTML = value;
      else el.textContent = value;
    });
    localeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.locale === lang)));
    try { localStorage.setItem('kanaky-home-locale', lang); } catch (_) {}
  }

  localeButtons.forEach((button) => button.addEventListener('click', () => setLocale(button.dataset.locale)));
  let initial = 'fr';
  try {
    const saved = localStorage.getItem('kanaky-home-locale');
    initial = saved || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr');
  } catch (_) {}
  setLocale(initial);

  const reveals = [...document.querySelectorAll('.reveal')];
  if (reduced || !('IntersectionObserver' in window)) reveals.forEach((el) => el.classList.add('on'));
  else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((el, index) => { el.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`; observer.observe(el); });
    /* Safety net for embedded browsers that throttle IntersectionObserver. */
    setTimeout(() => reveals.forEach((el) => el.classList.add('on')), 1800);
  }

  const canvas = document.getElementById('constellation');
  if (!canvas || reduced) return;
  const context = canvas.getContext('2d');
  const points = [];
  let width = 0, height = 0, frame = 0;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth; height = innerHeight;
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    points.length = 0;
    const count = Math.min(72, Math.max(30, Math.round(width / 22)));
    for (let i = 0; i < count; i++) points.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .055, vy: (Math.random() - .5) * .055, r: .45 + Math.random() * 1.1 });
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    for (const point of points) {
      point.x += point.vx; point.y += point.vy;
      if (point.x < -10) point.x = width + 10; if (point.x > width + 10) point.x = -10;
      if (point.y < -10) point.y = height + 10; if (point.y > height + 10) point.y = -10;
      context.fillStyle = 'rgba(200,240,96,.28)';
      context.beginPath(); context.arc(point.x, point.y, point.r, 0, Math.PI * 2); context.fill();
    }
    for (let i = 0; i < points.length; i++) for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x, dy = points[i].y - points[j].y, distance = Math.hypot(dx, dy);
      if (distance > 125) continue;
      context.strokeStyle = `rgba(200,240,96,${(.055 * (1 - distance / 125)).toFixed(3)})`;
      context.lineWidth = .6; context.beginPath(); context.moveTo(points[i].x, points[i].y); context.lineTo(points[j].x, points[j].y); context.stroke();
    }
    frame = requestAnimationFrame(draw);
  }
  addEventListener('resize', resize, { passive: true });
  addEventListener('pagehide', () => cancelAnimationFrame(frame));
  resize(); draw();
})();
