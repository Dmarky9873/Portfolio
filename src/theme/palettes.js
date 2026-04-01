const requiredColorKeys = [
  '--page-background',
  '--page-background-secondary',
  '--page-background-glow',
  '--page-background-glow-soft',
  '--panel-background',
  '--surface-color',
  '--accent-color',
  '--contrast-color',
  '--text-color',
  '--muted-text-color',
  '--input-background',
  '--card-shadow',
  '--logo-accent',
  '--logo-subtitle',
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const normalizeHue = (value) => {
  const normalized = value % 360;

  return normalized < 0 ? normalized + 360 : normalized;
};

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const hslToHex = (hue, saturation, lightness) => {
  const h = normalizeHue(hue);
  const s = clamp(saturation, 0, 100) / 100;
  const l = clamp(lightness, 0, 100) / 100;

  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const segment = h / 60;
  const secondComponent = chroma * (1 - Math.abs((segment % 2) - 1));
  const matchLightness = l - chroma / 2;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (segment >= 0 && segment < 1) {
    red = chroma;
    green = secondComponent;
  } else if (segment >= 1 && segment < 2) {
    red = secondComponent;
    green = chroma;
  } else if (segment >= 2 && segment < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (segment >= 3 && segment < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (segment >= 4 && segment < 5) {
    red = secondComponent;
    blue = chroma;
  } else {
    red = chroma;
    blue = secondComponent;
  }

  const toHex = (value) =>
    Math.round((value + matchLightness) * 255)
      .toString(16)
      .padStart(2, '0');

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
};

const hsla = (hue, saturation, lightness, alpha) =>
  `hsla(${Math.round(normalizeHue(hue))}, ${Math.round(
    clamp(saturation, 0, 100)
  )}%, ${Math.round(clamp(lightness, 0, 100))}%, ${alpha})`;

const createTheme = ({
  id,
  label,
  baseHue,
  accentHue,
  backgroundLightness,
  accentLightness,
}) => {
  const pageBackground = hslToHex(baseHue, 56, backgroundLightness);
  const pageBackgroundSecondary = hslToHex(
    baseHue + 20,
    48,
    backgroundLightness + 6
  );
  const panelBackground = hslToHex(baseHue + 8, 24, 10);
  const accentColor = hslToHex(accentHue, 92, accentLightness);
  const contrastColor = hslToHex(baseHue + 10, 10, 37);
  const textColor = hslToHex(baseHue + 4, 18, 96);
  const mutedTextColor = hslToHex(baseHue + 6, 16, 82);
  const inputBackground = hslToHex(baseHue + 12, 54, 28);

  return {
    id,
    label,
    colors: {
      '--page-background': pageBackground,
      '--page-background-secondary': pageBackgroundSecondary,
      '--page-background-glow': hsla(accentHue, 92, accentLightness, 0.18),
      '--page-background-glow-soft': hsla(baseHue + 30, 72, 54, 0.2),
      '--panel-background': panelBackground,
      '--surface-color': hsla(baseHue + 8, 18, 12, 0.9),
      '--accent-color': accentColor,
      '--contrast-color': contrastColor,
      '--text-color': textColor,
      '--muted-text-color': mutedTextColor,
      '--input-background': inputBackground,
      '--card-shadow': hsla(baseHue, 24, 3, 0.35),
      '--logo-accent': accentColor,
      '--logo-subtitle': textColor,
    },
  };
};

export const defaultTheme = {
  id: 'default',
  label: 'Default',
  colors: {
    '--page-background': '#022c43',
    '--page-background-secondary': '#0a405f',
    '--page-background-glow': 'rgba(255, 215, 0, 0.16)',
    '--page-background-glow-soft': 'rgba(17, 81, 115, 0.24)',
    '--panel-background': '#181818',
    '--surface-color': 'rgba(24, 24, 24, 0.9)',
    '--accent-color': '#ffd700',
    '--contrast-color': '#4d4d4e',
    '--text-color': '#ffffff',
    '--muted-text-color': '#dcdcdc',
    '--input-background': '#115173',
    '--card-shadow': 'rgba(0, 0, 0, 0.35)',
    '--logo-accent': '#ffd700',
    '--logo-subtitle': '#ffffff',
  },
};

export const createRandomTheme = () => {
  const baseHue = randomInt(0, 359);
  const accentHue = normalizeHue(baseHue + randomInt(95, 210));

  return createTheme({
    id: `random-${Date.now()}`,
    label: 'Random',
    baseHue,
    accentHue,
    backgroundLightness: randomInt(8, 16),
    accentLightness: randomInt(58, 74),
  });
};

export const isValidTheme = (theme) => {
  if (!theme || typeof theme !== 'object' || !theme.colors) {
    return false;
  }

  return requiredColorKeys.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(theme.colors, key) &&
      typeof theme.colors[key] === 'string'
  );
};

export const getThemePreview = (theme) => [
  theme.colors['--page-background'],
  theme.colors['--page-background-secondary'],
  theme.colors['--accent-color'],
];
