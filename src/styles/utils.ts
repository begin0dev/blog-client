import { isFinite } from 'lodash';

import { palette } from './palette';

type BreakPointType = 'sm' | 'md' | 'lg' | 'hg';

export const breakPoints: Record<BreakPointType | string, number> = {
  sm: 530,
  md: 840,
  lg: 1024,
  hg: 1200,
};

export const zIndexes = {
  HEADER: 200,
  OVERLAY: 500,
  MODAL: 1000,
  SIDEBAR: 1500,
  HAMBURGER: 2000,
  MESSAGE: 3000,
  PROGRESS: 5000,
} as const;

export const themes = {
  BACKGROUND_COLOR: palette.gray0,
  HEADER: palette.white,
  PRIMARY: palette.green9,
  TEXT: palette.gray9,
  TEXT_LEVEL1: palette.gray7,
  TEXT_LEVEL2: palette.gray6,
  TEXT_IN_PRIMARY: palette.white,
} as const;

export const sizes = {
  HEADER: 70,
  SMALL: 24,
  MIDDLE: 30,
  LARGE: 36,
} as const;

const changeToCondition = (condition: string): string => {
  const errMessage = '올바르지 않은 미디어 쿼리 형식입니다.';
  const breakPoint = condition.replace(/[<=>]/g, '');
  const width: number = breakPoints[breakPoint] ?? Number(breakPoint);
  if (!isFinite(width)) throw new Error(errMessage);

  if (condition.startsWith('>=')) return `(min-width: ${width}px)`;
  if (condition.startsWith('>')) return `(min-width: ${width + 1}px)`;
  if (condition.startsWith('<=')) return `(max-width: ${width}px)`;
  if (condition.startsWith('<')) return `(max-width: ${width - 1}px)`;
  throw new Error(errMessage);
};

export const includeMedia = (...conditions: string[]): string =>
  `@media ${conditions.map((condition) => changeToCondition(condition)).join(' and ')}`;
