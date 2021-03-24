import { Palette } from './palette';

interface IBreakPoints {
  sm: number;
  md: number;
  lg: number;
  hg: number;
}
export const breakPoints: IBreakPoints = {
  sm: 530,
  md: 768,
  lg: 1024,
  hg: 1200,
};

const changeToCondition = (condition: string): string => {
  const breakPoint: string = condition.slice(condition.length - 2, condition.length);
  const width: number = breakPoints[breakPoint as keyof IBreakPoints];

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
      throw new Error('올바르지 않은 미디어 쿼리 형식입니다.')
  }
};

export const includeMedia = (...conditions: string[]): string =>
  `@media ${conditions.map((condition) => changeToCondition(condition)).join(' and ')}`;

export enum zIndexes {
  header = 100,
  overlay = 300,
  modal = 500,
  loginMenu = 700,
  hamburger = 700,
  progress = 1000,
  message = 2000,
}

interface IThemes {
  header: string;
}
export const themes: IThemes = {
  header: Palette.white,
};
