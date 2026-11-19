const bar = document.querySelector('.ticker'), span = bar.querySelector('span'), track = document.createElement('div');
track.style.cssText = 'display:inline-flex;white-space:nowrap';
bar.style.overflow = 'hidden';
bar.replaceChildren(track);

function build(speed = 60) {
  track.replaceChildren(span, span.cloneNode(true));
  const period = track.children[1].offsetLeft - span.offsetLeft;
  if (period <= 0) return;
  while (track.offsetWidth < bar.clientWidth + period * 2) track.append(span.cloneNode(true));
  track.getAnimations().forEach(a => a.cancel());
  track.animate({ transform: ['translateX(0)', `translateX(${-period}px)`] }, { duration: period / speed * 1000, iterations: Infinity });
}
build(); document.fonts?.ready.then(() => build()); addEventListener('resize', () => build());