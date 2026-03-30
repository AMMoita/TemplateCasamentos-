document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.scroll-progress');
  const leaf = document.querySelector('.leaf-ornament');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach(item => revealObserver.observe(item));

  const updateScrollUi = () => {
    const y = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress + '%';
    }

    if (leaf) {
      const offset = Math.min(y * 0.08, 36);
      leaf.style.setProperty('--leaf-parallax', `${offset}px`);
    }
  };

  updateScrollUi();
  window.addEventListener('scroll', updateScrollUi, { passive: true });
});