const LOGO_FRONT_PATH =
  'M782.75,545.87c0,68.22-10.17,131.12-30.5,188.75S703.3,842.1,666.38,884.19c-36.94,42.09-81.41,74.89-133.44,98.42s-109.77,35.28-173.17,35.28H43.09V74.49h316.67c63.41,0,121.14,11.88,173.17,35.61c52.03,23.75,96.5,56.55,133.44,98.42c36.92,41.88,65.55,91.62,85.88,149.25S782.75,478.1,782.75,545.87z M589.17,545.87c0-46.61-5.23-88.69-15.67-126.25c-10.45-37.56-25.47-69.39-45.05-95.52c-19.59-26.11-43.55-46.19-71.89-60.22s-60.61-21.05-96.8-21.05H233.33v606.72h126.44c36.19,0,68.45-7.02,96.8-21.05s52.3-34.09,71.89-60.22c19.58-26.11,34.59-57.94,45.05-95.5C583.94,635.22,589.17,592.93,589.17,545.87z';

const LOGO_BACK_PATH =
  'M818.02,512.21c0,68.22-10.17,131.12-30.5,188.75s-48.95,107.48-85.88,149.58c-36.94,42.09-81.41,74.89-133.44,98.42s-109.77,35.28-173.17,35.28H78.36V40.84h316.67c63.41,0,121.14,11.88,173.17,35.61c52.03,23.75,96.5,56.55,133.44,98.42c36.92,41.88,65.55,91.62,85.88,149.25S818.02,444.45,818.02,512.21z M624.44,512.21c0-46.61-5.23-88.69-15.67-126.25c-10.45-37.56-25.47-69.39-45.05-95.52c-19.59-26.11-43.55-46.19-71.89-60.22s-60.61-21.05-96.8-21.05H268.59V815.9h126.44c36.19,0,68.45-7.02,96.8-21.05s52.3-34.09,71.89-60.22c19.58-26.11,34.59-57.94,45.05-95.5C619.2,601.57,624.44,559.27,624.44,512.21z';

const encodeSvg = (svgMarkup) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgMarkup)}`;

const createThemeFavicon = (theme) => {
  const accentColor =
    theme.colors['--logo-accent'] || theme.colors['--accent-color'] || '#ffd700';
  const shadowColor =
    theme.colors['--page-background-secondary'] ||
    theme.colors['--panel-background'] ||
    '#115173';
  const backgroundColor =
    theme.colors['--panel-background'] ||
    theme.colors['--page-background'] ||
    '#022c43';
  const borderColor =
    theme.colors['--border-color'] || 'rgba(255,255,255,0.12)';

  return encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 896">
      <rect x="48" y="48" width="800" height="800" rx="224" fill="${backgroundColor}" stroke="${borderColor}" stroke-width="18" />
      <g transform="translate(82 28) scale(0.88)">
        <path fill="${shadowColor}" d="${LOGO_BACK_PATH}" />
        <path fill="${accentColor}" d="${LOGO_FRONT_PATH}" />
      </g>
    </svg>
  `);
};

export const applyThemeFavicon = (theme) => {
  if (typeof document === 'undefined') {
    return;
  }

  const faviconHref = createThemeFavicon(theme);
  let faviconLink = document.getElementById('app-favicon');

  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.id = 'app-favicon';
    faviconLink.rel = 'icon';
    document.head.appendChild(faviconLink);
  }

  faviconLink.type = 'image/svg+xml';
  faviconLink.setAttribute('sizes', 'any');
  faviconLink.href = faviconHref;
};
