import { isFinite } from 'lodash';

import { palette } from './palette';
import { ValueOf } from '../lib/utils/typescript-utils';

export const breakPoints: Record<string, number> = {
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
  BACKGROUND_L0: palette.GRAY2,
  BACKGROUND_L1: palette.GRAY3,
  PRIMARY: palette.PRIMARY,
  SECONDARY: palette.SECONDARY,
  TEXT_L1: palette.GRAY0,
  TEXT_L2: palette.GRAY1,
} as const;

export const inputSizes = {
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large',
} as const;

export type InputSizeType = ValueOf<typeof inputSizes>;

export const sizes = {
  HEADER: 70,
  SMALL: 28,
  MIDDLE: 32,
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
