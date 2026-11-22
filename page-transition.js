(() => {
  const overlay = document.createElement('div');
  overlay.className = 'botanical-transition';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <span class="transition-flower flower-one">✿</span>
    <span class="transition-flower flower-two">✽</span>
    <span class="transition-flower flower-three">❀</span>
    <span class="transition-leaf leaf-one">❧</span>
    <span class="transition-leaf leaf-two">❧</span>
    <span class="transition-leaf leaf-three">❧</span>`;
  document.body.append(overlay);

  const customAsset = window.BOTANICAL_TRANSITION_ASSET;
  if (customAsset) {
    const media = document.createElement('img');
    media.className = 'transition-media';
    media.alt = '';
    media.setAttribute('aria-hidden', 'true');
    media.addEventListener('load', () => overlay.classList.add('has-custom-media'), { once: true });
    media.addEventListener('error', () => media.remove(), { once: true });
    media.src = customAsset;
    overlay.append(media);
  }

  const enterPage = () => {
    overlay.classList.remove('is-leaving');
    overlay.classList.add('is-entering');
    window.setTimeout(() => overlay.classList.remove('is-entering'), 950);
  };

  window.botanicalNavigate = (destination) => {
    const next = new URL(destination, window.location.href);
    if (next.origin !== window.location.origin) {
      window.location.assign(next.href);
      return;
    }
    sessionStorage.setItem('botanical-page-transition', '1');
    overlay.classList.remove('is-entering');
    overlay.classList.add('is-leaving');
    window.setTimeout(() => window.location.assign(next.href), 620);
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download')) return;
    const next = new URL(link.href, window.location.href);
    if (next.origin !== window.location.origin) return;
    if (next.pathname === window.location.pathname && next.search === window.location.search) return;
    event.preventDefault();
    window.botanicalNavigate(next.href);
  });

  window.addEventListener('pageshow', (event) => {
    const shouldEnter = sessionStorage.getItem('botanical-page-transition') === '1' || event.persisted;
    if (!shouldEnter) return;
    sessionStorage.removeItem('botanical-page-transition');
    enterPage();
  });
})();
