// Animates [data-anim] elements in as they scroll into view.
// Mirrors the original Webflow interactions: 1s ease-out, triggered once.
// data-offset="0" starts the animation as soon as any part is visible (used in the hero);
// otherwise it waits until the element is 20% of the way up the screen.

const els = document.querySelectorAll<HTMLElement>('[data-anim]');

if (!('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-in'));
} else {
  const make = (margin: string) =>
    new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: margin },
    );

  const immediate = make('0px');
  const offset = make('0px 0px -20% 0px');

  els.forEach((el) => (el.dataset.offset === '0' ? immediate : offset).observe(el));
}
