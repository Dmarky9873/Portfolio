import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  [
    '/src/assets/images/**/*.{jpg,jpeg,JPG,JPEG,png,webp,avif}',
    '!/src/assets/images/about/**',
    '!/src/assets/images/portfolio/advanced-robotics/**',
    '!/src/assets/images/portfolio/first-rbc-internship/**',
    '!/src/assets/images/portfolio/second-rbc-internship/**',
    '!/src/assets/images/portfolio/smear/**',
    '!/src/assets/images/portfolio/robotics-bordeaux-with-luke-hayden-koaich.jpeg',
    '!/src/assets/images/portfolio/stl-group-photo.JPG',
    '!/src/assets/images/portfolio/uoft-pano.jpeg',
  ],
  { eager: true },
);

const fileModules = import.meta.glob<{ default: string }>(
  '/src/assets/files/**/*.{pdf,PDF}',
  { eager: true },
);

export const getImage = (path: string): ImageMetadata => {
  const image = imageModules[path]?.default;

  if (!image) {
    throw new Error(`Missing portfolio image: ${path}`);
  }

  return image;
};

export const getFile = (path: string): string => {
  const file = fileModules[path]?.default;

  if (!file) {
    throw new Error(`Missing portfolio file: ${path}`);
  }

  return file;
};

export const resolveAssetHref = (href: string) =>
  href.startsWith('/src/assets/files/') ? getFile(href) : href;
