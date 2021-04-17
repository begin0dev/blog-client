import { Palette } from './palette';

export const breakPoints = {
  sm: 530,
  md: 768,
  lg: 1024,
  hg: 1200,
} as const;

type TBreakPoints = typeof breakPoints;

export const zIndexes = {
  HEADER: 200,
  OVERLAY: 500,
  MODAL: 700,
  HAMBURGER: 900,
  PROGRESS: 1500,
  MESSAGE: 2000,
} as const;

export const themes = {
  HEADER: Palette.white,
} as const;

const changeToCondition = (condition: string): string => {
  const breakPoint = condition.slice(condition.length - 2, condition.length) as keyof TBreakPoints;
  const width: number = breakPoints[breakPoint];

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
