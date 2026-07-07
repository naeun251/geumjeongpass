document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const toggleHeroScrollEffect = () => {
  const scrollY = window.scrollY;
  const progress = Math.min(scrollY / 220, 1);
  document.body.classList.toggle('scrolled', progress > 0.05);
  document.documentElement.style.setProperty('--hero-progress', progress.toFixed(3));
};

window.addEventListener('scroll', toggleHeroScrollEffect, { passive: true });
toggleHeroScrollEffect();
