const requiredColorKeys = [
  '--page-background',
  '--page-background-secondary',
  '--page-background-glow',
  '--page-background-glow-soft',
  '--border-color',
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
  const pageBackground = hslToHex(baseHue, 64, backgroundLightness);
  const pageBackgroundSecondary = hslToHex(
    baseHue + 20,
    56,
    backgroundLightness + 10
  );
  const panelBackground = hslToHex(baseHue + 8, 42, backgroundLightness + 6);
  const accentColor = hslToHex(accentHue, 92, accentLightness);
  const contrastColor = hslToHex(baseHue + 10, 18, 52);
  const textColor = hslToHex(baseHue + 4, 24, 96);
  const mutedTextColor = hslToHex(baseHue + 6, 18, 84);
  const inputBackground = hslToHex(baseHue + 12, 58, 32);

  return {
    id,
    label,
    colors: {
      '--page-background': pageBackground,
      '--page-background-secondary': pageBackgroundSecondary,
      '--page-background-glow': hsla(accentHue, 92, accentLightness, 0.28),
      '--page-background-glow-soft': hsla(baseHue + 30, 78, 58, 0.24),
      '--border-color': hsla(baseHue + 8, 18, 72, 0.28),
      '--panel-background': panelBackground,
      '--surface-color': hsla(baseHue + 8, 28, backgroundLightness + 8, 0.88),
      '--accent-color': accentColor,
      '--contrast-color': contrastColor,
      '--text-color': textColor,
      '--muted-text-color': mutedTextColor,
      '--input-background': inputBackground,
      '--card-shadow': hsla(baseHue, 28, 4, 0.4),
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
    '--border-color': 'rgba(255, 255, 255, 0.1)',
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
    backgroundLightness: randomInt(8, 18),
    accentLightness: randomInt(58, 76),
  });
};

export const darkTheme = {
  id: 'dark-mode',
  label: 'Dark mode',
  colors: {
    '--page-background': '#111315',
    '--page-background-secondary': '#1c2024',
    '--page-background-glow': 'rgba(242, 201, 76, 0.18)',
    '--page-background-glow-soft': 'rgba(17, 19, 21, 0.2)',
    '--border-color': 'rgba(255, 255, 255, 0.12)',
    '--panel-background': '#171a1d',
    '--surface-color': 'rgba(28, 32, 36, 0.9)',
    '--accent-color': '#f2c94c',
    '--contrast-color': '#6c7480',
    '--text-color': '#f5f7fa',
    '--muted-text-color': '#bcc4cf',
    '--input-background': '#242a31',
    '--card-shadow': 'rgba(0, 0, 0, 0.32)',
    '--logo-accent': '#f2c94c',
    '--logo-subtitle': '#f5f7fa',
  },
};

export const lightTheme = {
  id: 'light-mode',
  label: 'Light mode',
  colors: {
    '--page-background': '#f3efe6',
    '--page-background-secondary': '#e6dfd3',
    '--page-background-glow': 'rgba(138, 103, 0, 0.1)',
    '--page-background-glow-soft': 'rgba(25, 21, 16, 0.04)',
    '--border-color': 'rgba(25, 21, 16, 0.12)',
    '--panel-background': '#e1d9cb',
    '--surface-color': 'rgba(255, 255, 255, 0.76)',
    '--accent-color': '#8a6700',
    '--contrast-color': '#6f6659',
    '--text-color': '#191510',
    '--muted-text-color': '#5d554a',
    '--input-background': '#e7decf',
    '--card-shadow': 'rgba(60, 44, 24, 0.12)',
    '--logo-accent': '#8a6700',
    '--logo-subtitle': '#191510',
  },
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
  theme.colors['--panel-background'],
  theme.colors['--accent-color'],
];

export const getThemeBackgroundStyles = (theme) => {
  const colors = theme.colors;

  return {
    backgroundColor: colors['--page-background'],
    backgroundImage: 'none',
  };
};
