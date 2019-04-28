interface IUtilsType {
  [key: string]: number | string;
}

export const breakPoints: IUtilsType = {
  sm: 450,
  md: 768,
  lg: 1024,
  hg: 1200,
};

export const includeMedia = (breakPoint: string) => `@media (max-width: ${breakPoints[breakPoint]}px)`;

export const zIndexes: IUtilsType = {
  header: 100,
  overlay: 200,
  modal: 300,
  sidebar: 400,
  hamburger: 500,
};

export const sizes: IUtilsType = {
  header: 73,
};

export const themes: IUtilsType = {
  primary: '',
  secondary: '#424242',
  fontColor: '#adb7be',
  sidebar: '#1b1b1b',
  backgroundColor: '#212529',
};
