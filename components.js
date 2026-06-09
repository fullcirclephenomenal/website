/* ============================================================
   FULL CIRCLE PHENOMENAL — Shared Components
   Inject nav + footer into every page
   ============================================================ */

const NAV_HTML = `
<nav class="nav" id="main-nav">
  <div class="container">
    <div class="nav__inner">
      <a href="../index.html" class="nav__logo">Full Circle <span>Phenomenal</span></a>
      <ul class="nav__links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="mission.html">Mission</a></li>
        <li><a href="fire-arts.html">Fire Arts</a></li>
        <li><a href="yoga-mentorship.html">Yoga &amp; Mentorship</a></li>
        <li class="nav__dropdown">
          <a href="#">Blog ▾</a>
          <div class="nav__dropdown-menu">
            <a href="blog-travel.html">Travel</a>
            <a href="blog-wellness.html">Yoga &amp; Wellness</a>
          </div>
        </li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="support.html">Support</a></li>
      </ul>
      <button class="nav__toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="nav__mobile">
  <a href="../index.html">Home</a>
  <a href="about.html">About</a>
  <a href="mission.html">Mission</a>
  <a href="fire-arts.html">Fire Arts</a>
  <a href="yoga-mentorship.html">Yoga &amp; Mentorship</a>
  <a href="blog-travel.html">Travel Blog</a>
  <a href="blog-wellness.html">Wellness Blog</a>
  <a href="shop.html">Shop</a>
  <a href="support.html">Support</a>
</div>`;

const NAV_HOME_HTML = NAV_HTML
  .replaceAll('../index.html', 'index.html')
  .replaceAll('href="about.html"', 'href="pages/about.html"')
  .replaceAll('href="mission.html"', 'href="pages/mission.html"')
  .replaceAll('href="fire-arts.html"', 'href="pages/fire-arts.html"')
  .replaceAll('href="yoga-mentorship.html"', 'href="pages/yoga-mentorship.html"')
  .replaceAll('href="blog-travel.html"', 'href="pages/blog-travel.html"')
  .replaceAll('href="blog-wellness.html"', 'href="pages/blog-wellness.html"')
  .replaceAll('href="shop.html"', 'href="pages/shop.html"')
  .replaceAll('href="support.html"', 'href="pages/support.html"');

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="../index.html" class="footer__logo">Full Circle <span>Phenomenal</span></a>
        <p class="footer__tagline">Live Limitless — The world's first whole-world touring team of yoga teachers and fire performers.</p>
        <div class="footer__social">
          <a href="https://instagram.com/fullcirclephenomenal" target="_blank" rel="noopener" title="Instagram">IG</a>
          <a href="https://youtube.com/fullcirclephenomenaljessehart" target="_blank" rel="noopener" title="YouTube">YT</a>
          <a href="https://www.patreon.com/c/unitetheworldfirsthand" target="_blank" rel="noopener" title="Patreon">PT</a>
          <a href="https://facebook.com/jesse.hart2" target="_blank" rel="noopener" title="Facebook">FB</a>
        </div>
      </div>
      <div class="footer__col">
        <h5>Explore</h5>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="mission.html">Our Mission</a></li>
          <li><a href="support.html">Support the Tour</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Services</h5>
        <ul>
          <li><a href="fire-arts.html">Fire Arts &amp; Shows</a></li>
          <li><a href="yoga-mentorship.html">Yoga &amp; Mentorship</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="https://calendly.com/full-circle-phenomenal/30min" target="_blank" rel="noopener">Book a Call</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Blog</h5>
        <ul>
          <li><a href="blog-travel.html">Travel Stories</a></li>
          <li><a href="blog-wellness.html">Yoga &amp; Wellness</a></li>
          <li><a href="early-access.html">Early Access</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Full Circle Phenomenal — Jesse &amp; Catherine Hart</span>
      <span style="color:var(--gold);font-family:var(--font-display);font-style:italic;">Live Limitless</span>
    </div>
  </div>
</footer>`;

// Auto-inject into page
document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('nav-inject');
  const footerTarget = document.getElementById('footer-inject');
  const isHome = document.documentElement.dataset.page === 'home';

  if (navTarget) {
    navTarget.innerHTML = isHome ? NAV_HOME_HTML : NAV_HTML;
    // Re-run nav scroll handler
    const nav = document.querySelector('.nav');
    if (nav) {
      const handleScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    // Re-run mobile toggle
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
  }

  if (footerTarget) {
    footerTarget.innerHTML = isHome
      ? FOOTER_HTML.replaceAll('../index.html', 'index.html').replaceAll('href="about.html"', 'href="pages/about.html"').replaceAll('href="mission.html"', 'href="pages/mission.html"').replaceAll('href="fire-arts.html"', 'href="pages/fire-arts.html"').replaceAll('href="yoga-mentorship.html"', 'href="pages/yoga-mentorship.html"').replaceAll('href="blog-travel.html"', 'href="pages/blog-travel.html"').replaceAll('href="blog-wellness.html"', 'href="pages/blog-wellness.html"').replaceAll('href="shop.html"', 'href="pages/shop.html"').replaceAll('href="support.html"', 'href="pages/support.html"').replaceAll('href="early-access.html"', 'href="pages/early-access.html"')
      : FOOTER_HTML;
  }

  // Scroll reveal — must run after inject
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = String((i % 5) * 80);
    revealObserver.observe(el);
  });

  // Ember particles
  document.querySelectorAll('.ember-zone').forEach(container => {
    for (let i = 0; i < 15; i++) {
      const e = document.createElement('div');
      e.className = 'ember-particle';
      e.style.cssText = `position:absolute;width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;background:${['#e8b55a','#d4622a','#e8491d','#c9933a'][Math.floor(Math.random()*4)]};border-radius:50%;left:${Math.random()*100}%;bottom:${Math.random()*30}%;animation:ember ${2+Math.random()*3}s ${Math.random()*4}s ease-out infinite;pointer-events:none;`;
      container.appendChild(e);
    }
  });

  // YT placeholder
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
