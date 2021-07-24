import { palette } from './palette';

export const breakPoints = {
  sm: 530,
  md: 840,
  lg: 1024,
  hg: 1200,
} as const;

type TBreakPoints = typeof breakPoints;

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
  HEADER: palette.white,
} as const;

export const sizes = {
  HEADER: 70,
} as const;

const changeToCondition = (condition: string): string => {
  const breakPoint = condition.slice(condition.length - 2, condition.length) as keyof TBreakPoints;
  const width: number | undefined = breakPoints[breakPoint];
  if (!width) throw new Error('올바르지 않은 미디어 쿼리 형식입니다.');
  switch (true) {
    case /^>=/.test(condition):
      return `(min-width: ${width}px)`;
    case /^>/.test(condition):
      return `(min-width: ${width + 1}px)`;
    case /^<=/.test(condition):
      return `(max-width: ${width}px)`;
    case /^</.test(condition):
      return `(max-width: ${width - 1}px)`;
    default:
      throw new Error('올바르지 않은 미디어 쿼리 형식입니다.');
  }
};

export const includeMedia = (...conditions: string[]): string =>
  `@media ${conditions.map((condition) => changeToCondition(condition)).join(' and ')}`;
