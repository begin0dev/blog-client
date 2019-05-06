import {palette} from './palette';

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

export const includeMaxMedia = (breakPoint: 'sm'|'md'|'lg'|'hg') => `@media (max-width: ${breakPoints[breakPoint]}px)`;
export const includeMinMedia = (breakPoint: 'sm'|'md'|'lg'|'hg') => `@media (min-width: ${breakPoints[breakPoint]}px)`;

interface IZIndexes {
  overlay: number;
  sidebar: number;
  modal: number;
  header: number;
  hamburger: number;
}
export const zIndexes: IZIndexes = {
  overlay: 200,
  sidebar: 400,
  modal: 300,
  header: 100,
  hamburger: 500,
};

interface ISizes {
  header: number;
}
export const sizes: ISizes = {
  header: 73,
};

interface IThemes {
  primary: string;
  secondary: string;
  fontColor: string;
  header: string;
  sidebar: string;
  modal: string;
  backgroundColor: string;
}
export const themes: IThemes = {
  primary: '',
  secondary: '#424242',
  fontColor: palette.gray2,
  header: palette.black,
  sidebar: '#1b1b1b',
  modal: palette.black,
  backgroundColor: palette.gray7,
};
