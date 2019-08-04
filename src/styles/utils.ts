import { palette } from './palette';

interface IBreakPoints {
  sm: number;
  md: number;
  lg: number;
  hg: number;
}
export const breakPoints: IBreakPoints = {
  sm: 450,
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
      return '';
  }
};

export const includeMedia = (...conditions: string[]): string =>
  `@media ${conditions.map(condition => changeToCondition(condition)).join(' and ')}`;

interface IZIndexes {
  overlay: number;
  sidebar: number;
  modal: number;
  header: number;
  hamburger: number;
  progress: number;
}
export const zIndexes: IZIndexes = {
  overlay: 200,
  sidebar: 400,
  modal: 300,
  header: 100,
  hamburger: 500,
  progress: 1000,
};

interface ISizes {
  header: number;
}
export const sizes: ISizes = {
  header: 65,
};

interface IThemes {
  header: string;
  sidebar: string;
  backgroundColor: string;
}
export const themes: IThemes = {
  header: palette.black,
  sidebar: '#13141C',
  backgroundColor: palette.gray1,
};
