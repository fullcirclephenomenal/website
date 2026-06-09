/* ============================================================
   FULL CIRCLE PHENOMENAL — Global JavaScript
   ============================================================ */

// ---- Nav scroll behavior ----
const nav = document.querySelector('.nav');
if (nav) {
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ---- Mobile nav toggle ----
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

// ---- Active nav link ----
(function setActiveLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/index';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    const href = a.getAttribute('href')?.replace(/\/$/, '') || '';
    if (href && path.endsWith(href.replace(/^\.\.\/|^\.\//,''))) {
      a.classList.add('active');
    }
  });
})();

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  if (!el.dataset.delay) el.dataset.delay = (i % 4) * 80;
  revealObserver.observe(el);
});

// ---- Stagger children ----
document.querySelectorAll('[data-stagger]').forEach(parent => {
  Array.from(parent.children).forEach((child, i) => {
    child.classList.add('reveal');
    child.dataset.delay = i * 100;
    revealObserver.observe(child);
  });
});

// ---- Ember particle effect (for fire pages) ----
function createEmbers(container, count = 12) {
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const ember = document.createElement('div');
    ember.className = 'ember-particle';
    ember.style.cssText = `
      position: absolute;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      background: ${['#e8b55a','#d4622a','#e8491d','#c9933a'][Math.floor(Math.random()*4)]};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      bottom: ${Math.random() * 30}%;
      animation: ember ${2 + Math.random() * 3}s ${Math.random() * 4}s ease-out infinite;
      pointer-events: none;
    `;
    container.appendChild(ember);
  }
}
const emberContainers = document.querySelectorAll('.ember-zone');
emberContainers.forEach(c => createEmbers(c));

// ---- Smooth external CTA tracking placeholder ----
document.querySelectorAll('[data-cta]').forEach(btn => {
  btn.addEventListener('click', () => {
    // placeholder: console.log('CTA click:', btn.dataset.cta);
  });
});

// ---- YouTube placeholder click to embed ----
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
    el.appendChild(iframe);
    el.style.paddingBottom = '0';
    el.style.height = '100%';
  });
});
