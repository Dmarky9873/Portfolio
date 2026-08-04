import type { ImageMetadata } from 'astro';

import fakeNewsPaper from '../assets/files/papers/a-minimal-approach-to-fake-news-detection.pdf';
import phl235Paper from '../assets/files/writing/phl235-paper.pdf';
import rlg211Paper1 from '../assets/files/writing/rlg211-paper-1.pdf';
import rlg211Paper2 from '../assets/files/writing/rlg211-paper-2.pdf';
import rlg211Paper3 from '../assets/files/writing/rlg211-paper-3.pdf';
import fakeNewsPreview from '../assets/images/writing/a-minimal-approach-to-fake-news-detection.png';
import phl235Preview from '../assets/images/writing/phl235-paper.png';
import rlg211Paper1Preview from '../assets/images/writing/rlg211-paper-1.png';
import rlg211Paper2Preview from '../assets/images/writing/rlg211-paper-2.png';
import rlg211Paper3Preview from '../assets/images/writing/rlg211-paper-3.png';

export type WritingTheme =
  | 'epistemology'
  | 'fake news'
  | 'machine learning'
  | 'methodology'
  | 'philosophy of religion'
  | 'psychology of religion'
  | 'religious studies';

export interface WritingEntry {
  slug: string;
  title: string;
  meta: string;
  summary: string;
  takeaway: string;
  pdf: {
    src: string;
    fileName: string;
  };
  preview: {
    src: ImageMetadata;
    alt: string;
  };
  themes: readonly WritingTheme[];
}

export const writings = [
  {
    slug: 'hume-on-violations-of-the-laws-of-nature',
    title: 'Hume on Violations of the Laws of Nature',
    meta: 'PHL235 · Philosophy of Religion',
    summary:
      "An examination of Hume's account of miracles, testimony, and violations of the laws of nature.",
    takeaway:
      "I argue that Hume's definition rules miracles out before the discussion begins, and that a subjective definition is more useful.",
    pdf: {
      src: phl235Paper,
      fileName: 'phl235-paper.pdf',
    },
    preview: {
      src: phl235Preview,
      alt: 'First page of Hume on Violations of the Laws of Nature.',
    },
    themes: ['philosophy of religion', 'epistemology'],
  },
  {
    slug: 'a-minimal-approach-to-fake-news-detection',
    title: 'A Minimal Approach to Fake News Detection',
    meta: '2024 · Research Paper',
    summary:
      'A published research paper on a lightweight machine-learning approach to distinguishing fake and real news articles.',
    takeaway:
      'The five-feature XGBoost model reached 71% test accuracy. Article length, author count, and readability were among its strongest signals.',
    pdf: {
      src: fakeNewsPaper,
      fileName: 'a-minimal-approach-to-fake-news-detection.pdf',
    },
    preview: {
      src: fakeNewsPreview,
      alt: 'First page of A Minimal Approach to Fake News Detection.',
    },
    themes: ['fake news', 'machine learning'],
  },
  {
    slug: 'rlg211-paper-1',
    title: 'On Methodology',
    meta: 'RLG211 · Paper 1',
    summary:
      'A comparison of Bruce Lincoln and Melford Spiro on methodology in the study of religion.',
    takeaway:
      'Lincoln and Spiro both argue that scholars should define religion carefully, examine their own bias, and avoid treating a dominant group as an entire culture.',
    pdf: {
      src: rlg211Paper1,
      fileName: 'rlg211-paper-1.pdf',
    },
    preview: {
      src: rlg211Paper1Preview,
      alt: 'First page of On Methodology.',
    },
    themes: ['religious studies', 'methodology'],
  },
  {
    slug: 'rlg211-paper-2',
    title: 'Application of the Theses on Method',
    meta: 'RLG211 · Paper 2',
    summary:
      "A reading of William James and Sigmund Freud through Bruce Lincoln's Theses on Method.",
    takeaway:
      "I found Lincoln closer to Freud than James, mainly because James relies heavily on selected first-person testimony.",
    pdf: {
      src: rlg211Paper2,
      fileName: 'rlg211-paper-2.pdf',
    },
    preview: {
      src: rlg211Paper2Preview,
      alt: 'First page of Application of the Theses on Method.',
    },
    themes: ['religious studies', 'methodology', 'psychology of religion'],
  },
  {
    slug: 'rlg211-paper-3',
    title: 'Interpreting Religious Experience',
    meta: 'RLG211 · Paper 3',
    summary:
      "An interpretation of Christoph Haizmann's visions using Sigmund Freud and Donald Winnicott.",
    takeaway:
      "Freud explains why the Devil appeared; Winnicott explains what it did for Haizmann by making his loss more bearable.",
    pdf: {
      src: rlg211Paper3,
      fileName: 'rlg211-paper-3.pdf',
    },
    preview: {
      src: rlg211Paper3Preview,
      alt: 'First page of Interpreting Religious Experience.',
    },
    themes: ['religious studies', 'psychology of religion'],
  },
] as const satisfies readonly WritingEntry[];

export const getWritingBySlug = (slug: string) =>
  writings.find((writing) => writing.slug === slug);
