/* =========================================================
   BLACK TULIP METAL — interactions
   ========================================================= */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- YEAR ---------- */
  var yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- LOADER ---------- */
  var loader = $('#loader');
  function hideLoader() {
    if (!loader) return;
    setTimeout(function () { loader.classList.add('is-done'); }, reduced ? 0 : 900);
  }
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 3500); // safety net

  /* ---------- CUSTOM CURSOR ---------- */
  var cursor = $('.cursor');
  if (cursor && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced) {
    document.body.classList.add('has-cursor');
    var cx = 0, cy = 0, rx = 0, ry = 0, raf;
    document.addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      cursor.querySelector('.cursor__dot').style.transform =
        'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      cursor.querySelector('.cursor__ring').style.transform =
        'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      raf = (Math.abs(cx - rx) > 0.4 || Math.abs(cy - ry) > 0.4) ? requestAnimationFrame(loop) : null;
    }
    document.addEventListener('mouseover', function (e) {
      var hot = e.target.closest('a,button,.prj__card,.svc__item,.cli__track img');
      cursor.classList.toggle('is-hot', !!hot);
    });
  }

  /* ---------- HEADER ---------- */
  var hdr = $('#hdr');
  var lastY = window.scrollY;
  var lightSections = $$('.caps, .cli');

  function headerState() {
    var y = window.scrollY;
    hdr.classList.toggle('is-stuck', y > 40);

    // hide on scroll-down, reveal on scroll-up (but never while menu open)
    if (!document.body.classList.contains('nav-open')) {
      hdr.classList.toggle('is-hidden', y > 420 && y > lastY);
    }
    lastY = y;

    // swap logo/nav colour when the bar sits over a light section
    var probe = hdr.offsetHeight * 0.55;
    var onLight = lightSections.some(function (s) {
      var r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    hdr.classList.toggle('on-light', onLight);
  }
  headerState();
  window.addEventListener('scroll', headerState, { passive: true });

  /* ---------- MOBILE DRAWER ---------- */
  var burger = $('#burger');
  var drawer = $('#drawer');
  function closeNav() {
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
      if (open) hdr.classList.remove('is-hidden');
    });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', closeNav); });
  }

  /* ---------- HERO SLIDESHOW ---------- */
  var slides = $$('.hero__slide');
  var dots = $$('.hero__dot');
  var heroWord = $('#heroWord');
  var idx = 0, timer;

  function goTo(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
    dots.forEach(function (d, i) { d.classList.toggle('is-on', i === idx); });
    if (heroWord) {
      var w = slides[idx].getAttribute('data-word') || '';
      heroWord.style.animation = 'none';
      heroWord.textContent = w;
      void heroWord.offsetWidth;
      heroWord.style.animation = '';
    }
  }
  function play() { if (!reduced) timer = setInterval(function () { goTo(idx + 1); }, 6200); }
  function restart() { clearInterval(timer); play(); }

  dots.forEach(function (d) {
    d.addEventListener('click', function () { goTo(+d.getAttribute('data-i')); restart(); });
  });
  if (slides.length) play();
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) clearInterval(timer); else restart();
  });

  /* ---------- SEAMLESS MARQUEES ---------- */
  $$('.ticker__row, .cli__track').forEach(function (track) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealTargets = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        // stagger siblings inside a grid
        var group = el.parentElement;
        var sibs = group ? $$('[data-reveal]', group) : [];
        var i = sibs.indexOf(el);
        el.style.transitionDelay = (i > 0 ? Math.min(i, 6) * 70 : 0) + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- COUNTERS ---------- */
  var counters = $$('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var end = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        if (reduced) { el.textContent = end + suffix; cio.unobserve(el); return; }
        var dur = 1500, t0 = performance.now();
        (function step(now) {
          var p = Math.min((now - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- CAPABILITIES HOVER PEEK ---------- */
  var capsList = $('#capsList');
  var peek = $('#capsPeek');
  if (capsList && peek && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var peekImg = peek.querySelector('img');
    var px = 0, py = 0, tx = 0, ty = 0, pRaf = null;

    capsList.addEventListener('mousemove', function (e) {
      var r = capsList.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!pRaf) pRaf = requestAnimationFrame(peekLoop);
    });
    function peekLoop() {
      px += (tx - px) * 0.14;
      py += (ty - py) * 0.14;
      peek.style.left = px + 'px';
      peek.style.top = py + 'px';
      pRaf = (Math.abs(tx - px) > 0.5 || Math.abs(ty - py) > 0.5) ? requestAnimationFrame(peekLoop) : null;
    }

    $$('.caps__row', capsList).forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        var src = row.getAttribute('data-img');
        if (src && peekImg.getAttribute('src') !== src) peekImg.setAttribute('src', src);
        peekImg.setAttribute('alt', '');
        peek.classList.add('is-on');
      });
    });
    capsList.addEventListener('mouseleave', function () { peek.classList.remove('is-on'); });
  }

  /* ---------- SERVICE FILTER ---------- */
  var tabs = $$('.svc__tab');
  var items = $$('.svc__item');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var f = tab.getAttribute('data-filter');
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', String(on));
      });
      items.forEach(function (it) {
        var show = f === 'all' || it.getAttribute('data-cat') === f;
        it.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- PROJECT LIGHTBOX ---------- */
  var cards = $$('.prj__card');
  var lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
  var current = 0;

  function openLb(i) {
    current = (i + cards.length) % cards.length;
    var card = cards[current];
    lbImg.setAttribute('src', card.getAttribute('data-img'));
    var cap = card.getAttribute('data-cap') || '';
    lbImg.setAttribute('alt', cap);
    lbCap.textContent = cap;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach(function (card, i) {
    card.addEventListener('click', function () { openLb(i); });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); }
    });
  });

  if (lb) {
    $('#lbClose').addEventListener('click', closeLb);
    $('#lbPrev').addEventListener('click', function () { openLb(current - 1); });
    $('#lbNext').addEventListener('click', function () { openLb(current + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') openLb(current - 1);
      if (e.key === 'ArrowRight') openLb(current + 1);
    });
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  var navLinks = $$('.hdr__nav a');
  var sections = navLinks
    .map(function (a) { return $(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { nio.observe(s); });
  }

  /* ---------- ESC CLOSES DRAWER ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) closeNav();
  });
})();
