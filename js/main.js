/* ============ Little Porky's Place — main.js ============ */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Nav scroll state + mobile toggle ---- */
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });

  /* ---- Smoke particle field ---- */
  const smokeField = document.getElementById('smokeField');
  const truckWrap  = document.getElementById('truckWrap');

  const mobile = window.matchMedia('(max-width: 720px)').matches;
  const PARTICLE_COUNT = prefersReduced ? 0 : (mobile ? 5 : 10);

  const rand = (min, max) => Math.random() * (max - min) + min;

  const buildSmoke = () => {
    if (!smokeField) return;
    smokeField.innerHTML = '';
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'smoke-particle';
      const size  = rand(110, 200);
      const left  = rand(15, 65);       // behind/under the truck
      const dur   = rand(5, 9);
      const delay = rand(0, 8) * -1;    // negative so they're mid-flight on load
      const drift = rand(-60, 60);
      p.style.width  = size + 'px';
      p.style.height = size + 'px';
      p.style.left   = left + '%';
      p.style.setProperty('--dur',   dur + 's');
      p.style.setProperty('--delay', delay + 's');
      p.style.setProperty('--drift', drift + 'px');
      smokeField.appendChild(p);
    }
  };
  buildSmoke();

  /* ---- Pause smoke when hero is off-screen ---- */
  if (!prefersReduced && smokeField) {
    const smokeIO = new IntersectionObserver(([entry]) => {
      smokeField.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      smokeField.querySelectorAll('.smoke-particle').forEach(p => {
        p.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    }, { threshold: 0 });
    smokeIO.observe(truckWrap);
  }

  /* ---- Sizzle burst on hover/tap ---- */
  const burst = () => {
    if (prefersReduced || !smokeField) return;
    const count = rand(6, 10) | 0;
    for (let i = 0; i < count; i++) {
      const b = document.createElement('div');
      b.className = 'smoke-burst';
      const offsetX = rand(-60, 60);
      const size = rand(150, 280);
      b.style.left = `calc(40% + ${offsetX}px)`;
      b.style.width = size + 'px';
      b.style.height = size + 'px';
      b.style.animationDelay = (i * 0.08) + 's';
      b.style.animationDuration = rand(0.7, 1.3) + 's';
      smokeField.appendChild(b);
      setTimeout(() => b.remove(), 1500);
    }
  };
  if (truckWrap) {
    truckWrap.addEventListener('mouseenter', burst);
    truckWrap.addEventListener('click', burst);
  }

  /* ---- Menu tabs ---- */
  const tabs = document.querySelectorAll('.menu__tab');
  const panels = document.querySelectorAll('.menu__panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === id));
    });
  });

  /* ---- Reveal on scroll ---- */
  const revealTargets = document.querySelectorAll(
    '.section-head, .special-card, .pkg, .addon-group, .schedule-card, .book-card, .contact-card, .about__text, .about__media, .stats'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealTargets.forEach(el => io.observe(el));

  /* ---- Animated stat counters ---- */
  const counters = document.querySelectorAll('.stat strong[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1800;
      const start = performance.now();
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const val = Math.floor(easeOut(p) * target);
        el.textContent = val.toLocaleString() + (target >= 1000 ? '+' : (target > 1 ? '+' : ''));
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + (target >= 1000 ? '+' : (target > 1 ? '+' : ''));
      };
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countIO.observe(el));

  /* ---- Pause gallery animation off-screen ---- */
  const galleryTrack = document.querySelector('.gallery__track');
  if (galleryTrack) {
    const galleryIO = new IntersectionObserver(([entry]) => {
      galleryTrack.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    }, { threshold: 0 });
    galleryIO.observe(galleryTrack.parentElement);
  }

  /* ---- Serving window toggles on click ---- */
  const servingWindow = document.getElementById('servingWindow');
  if (servingWindow) {
    servingWindow.addEventListener('click', () => {
      servingWindow.classList.toggle('is-open');
    });
  }

  /* ---- Floating ember particles (site-wide) ---- */
  if (!prefersReduced) {
    const emberCanvas = document.getElementById('emberCanvas');
    const EMBER_COUNT = mobile ? 10 : 20;
    for (let i = 0; i < EMBER_COUNT; i++) {
      const e = document.createElement('div');
      e.className = 'ember';
      const size = rand(2.5, 8);
      const left = rand(0, 100);
      const dur  = rand(6, 15);
      const delay = rand(0, 12) * -1;
      const rise = rand(-500, -1000);
      const peak = rand(.45, .85);
      const hue  = rand(0, 45);
      e.style.cssText = `
        width:${size}px; height:${size}px;
        left:${left}%;
        bottom: -20px;
        --dur:${dur}s;
        --delay:${delay}s;
        --rise:${rise}px;
        --peak:${peak};
        --ember-core: hsla(${hue},100%,72%,1);
        --ember-mid: hsla(${hue},95%,55%,.85);
        --ember-rim: hsla(${hue},80%,42%,.5);
      `;
      emberCanvas.appendChild(e);
    }
  }


})();
