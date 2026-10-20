// Animates [data-anim] elements in as they scroll into view.
// Mirrors the original Webflow interactions: 1s ease-out, triggered once.
// By default an element animates once its top reaches 80% of the way down the screen.
// data-offset="0" starts it as soon as any part is on screen (used in the hero).
// Anything already scrolled past (fast scroll, jump links, reloading mid-page) is
// revealed too, so nothing can get stuck invisible.

let pending = Array.from(document.querySelectorAll<HTMLElement>('[data-anim]'));
let queued = false;

function check() {
  queued = false;
  const vh = window.innerHeight;
  pending = pending.filter((el) => {
    const line = el.dataset.offset === '0' ? vh : vh * 0.8;
    if (el.getBoundingClientRect().top < line) {
      el.classList.add('is-in');
      return false;
    }
    return true;
  });
  if (!pending.length) {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  }
}

function schedule() {
  if (!queued) {
    queued = true;
    requestAnimationFrame(check);
  }
}

window.addEventListener('scroll', schedule, { passive: true });
window.addEventListener('resize', schedule);
window.addEventListener('load', schedule);
check();
