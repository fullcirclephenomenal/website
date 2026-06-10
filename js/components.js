/* ============================================================
   FULL CIRCLE PHENOMENAL â€” Shared Components v2
   Updated nav includes Contact link
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const isHome = document.documentElement.dataset.page === 'home';
  const pre = isHome ? 'pages/' : '';
  const root = isHome ? '' : '../';

  // ---- Inject Nav ----
  const navTarget = document.getElementById('nav-inject');
  if (navTarget) {
    navTarget.innerHTML = `
<nav class="nav" id="main-nav">
  <div class="container"><div class="nav__inner">
    <a href="${root}index.html" class="nav__logo">Full Circle <span>Phenomenal</span></a>
    <ul class="nav__links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${pre}about.html">About</a></li>
      <li><a href="${pre}mission.html">Mission</a></li>
      <li><a href="${pre}fire-arts.html">Fire Arts</a></li>
      <li><a href="${pre}yoga-mentorship.html">Yoga &amp; Mentorship</a></li>
      <li class="nav__dropdown"><a href="#">Blog â–¾</a>
        <div class="nav__dropdown-menu">
          <a href="${pre}blog-travel.html">Travel</a>
          <a href="${pre}blog-wellness.html">Yoga &amp; Wellness</a>
        </div>
      </li>
      <li><a href="${pre}shop.html">Shop</a></li>
      <li><a href="${pre}support.html">Support</a></li>
      <li><a href="${pre}contact.html">Contact</a></li>
    </ul>
    <button class="nav__toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div></div>
</nav>
<div class="nav__mobile">
  <a href="${root}index.html">Home</a>
  <a href="${pre}about.html">About</a>
  <a href="${pre}mission.html">Mission</a>
  <a href="${pre}fire-arts.html">Fire Arts</a>
  <a href="${pre}yoga-mentorship.html">Yoga &amp; Mentorship</a>
  <a href="${pre}blog-travel.html">Travel Blog</a>
  <a href="${pre}blog-wellness.html">Wellness Blog</a>
  <a href="${pre}shop.html">Shop</a>
  <a href="${pre}support.html">Support</a>
  <a href="${pre}contact.html">Contact</a>
</div>`;

    // Nav scroll
    const nav = document.querySelector('.nav');
    if (nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    // Mobile toggle
    const toggle = document.querySelector('.nav__toggle');
    const mobileNav = document.querySelector('.nav__mobile');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        const open = toggle.classList.toggle('open');
        mobileNav.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('open');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
    // Active link highlight
    const path = window.location.pathname;
    document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const hrefFile = href.split('/').pop();
      const pathFile = path.split('/').pop() || 'index.html';
      if (hrefFile && hrefFile === pathFile) a.classList.add('active');
    });
  }

  // ---- Inject Footer ----
  const footerTarget = document.getElementById('footer-inject');
  if (footerTarget) {
    footerTarget.innerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a href="${root}index.html" class="nav__logo" style="display:inline-block;margin-bottom:1rem;font-family:var(--font-display);font-size:1.3rem;font-weight:600;color:var(--white);">Full Circle <span style="color:var(--gold);">Phenomenal</span></a>
        <p style="font-size:0.82rem;color:var(--text-muted);max-width:280px;margin-bottom:1.2rem;line-height:1.6;">Live Limitless â€” The world's first whole-world touring team of yoga teachers and fire performers.</p>
        <div class="footer__social">
          <a href="https://instagram.com/fullcirclephenomenal" target="_blank" rel="noopener" title="Instagram">IG</a>
          <a href="https://youtube.com/fullcirclephenomenaljessehart" target="_blank" rel="noopener" title="YouTube">YT</a>
          <a href="https://www.patreon.com/c/unitetheworldfirsthand" target="_blank" rel="noopener" title="Patreon">PT</a>
          <a href="https://facebook.com/jesse.hart2" target="_blank" rel="noopener" title="Facebook">FB</a>
          <a href="https://wa.me/13606010826" target="_blank" rel="noopener" title="WhatsApp">WA</a>
        </div>
      </div>
      <div>
        <h5 class="footer__col-title" style="font-family:var(--font-body);font-size:0.65rem;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;">Explore</h5>
        <ul style="list-style:none;">
          <li style="margin-bottom:0.6rem;"><a href="${pre}about.html" style="font-size:0.82rem;color:var(--text-muted);">About Us</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}mission.html" style="font-size:0.82rem;color:var(--text-muted);">Our Mission</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}support.html" style="font-size:0.82rem;color:var(--text-muted);">Support the Tour</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}contact.html" style="font-size:0.82rem;color:var(--text-muted);">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5 style="font-family:var(--font-body);font-size:0.65rem;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;">Services</h5>
        <ul style="list-style:none;">
          <li style="margin-bottom:0.6rem;"><a href="${pre}fire-arts.html" style="font-size:0.82rem;color:var(--text-muted);">Fire Arts &amp; Shows</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}yoga-mentorship.html" style="font-size:0.82rem;color:var(--text-muted);">Yoga &amp; Mentorship</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}shop.html" style="font-size:0.82rem;color:var(--text-muted);">Shop</a></li>
          <li style="margin-bottom:0.6rem;"><a href="https://calendly.com/full-circle-phenomenal/30min" target="_blank" rel="noopener" style="font-size:0.82rem;color:var(--text-muted);">Book a Call</a></li>
        </ul>
      </div>
      <div>
        <h5 style="font-family:var(--font-body);font-size:0.65rem;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;">Blog</h5>
        <ul style="list-style:none;">
          <li style="margin-bottom:0.6rem;"><a href="${pre}blog-travel.html" style="font-size:0.82rem;color:var(--text-muted);">Travel Stories</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}blog-wellness.html" style="font-size:0.82rem;color:var(--text-muted);">Yoga &amp; Wellness</a></li>
          <li style="margin-bottom:0.6rem;"><a href="${pre}early-access.html" style="font-size:0.82rem;color:var(--text-muted);">Early Access</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>Â© 2026 Full Circle Phenomenal â€” Jesse &amp; Catherine Hart</span>
      <span style="color:var(--gold);font-family:var(--font-display);font-style:italic;">Live Limitless</span>
    </div>
  </div>
</footer>`;
  }

  // ---- Scroll reveal ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay) || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = String((i % 5) * 80);
    revealObserver.observe(el);
  });

  // ---- Ember particles ----
  document.querySelectorAll('.ember-zone').forEach(container => {
    for (let i = 0; i < 15; i++) {
      const e = document.createElement('div');
      e.className = 'ember-particle';
      e.style.cssText = `position:absolute;width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;background:${['#e8b55a','#d4622a','#e8491d','#c9933a'][Math.floor(Math.random()*4)]};border-radius:50%;left:${Math.random()*100}%;bottom:${Math.random()*30}%;animation:ember ${2+Math.random()*3}s ${Math.random()*4}s ease-out infinite;pointer-events:none;`;
      container.appendChild(e);
    }
  });

  // ---- YouTube click to embed ----
  document.querySelectorAll('.yt-placeholder').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.ytid;
      if (!id) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.allow = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'width:100%;height:100%;border:0;position:absolute;inset:0;';
      el.innerHTML = '';
      el.style.cursor = 'default';
      el.appendChild(iframe);
    });
  });

});
