import { createStitches } from '@stitches/react';

const FLEX_MAPPER: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
};

export const { theme, styled } = createStitches({
  theme: {
    colors: {
      GRAY0: '#F8F9FA',
      GRAY1: '#CED4DA',
      GRAY2: '#141312',
      GRAY3: '#0E0D0D',

      PRIMARY: '#19C9DC',
      SECONDARY: '#5D5C5C',
      SUCCESS: '#51CF66',
      WARNING: '#ff922b',
      ERROR: '#ff6b6b',
      WHITE: '#f8f9fa',

      BACKGROUND_L0: '$GRAY2',
      BACKGROUND_L1: '$GRAY3',

      BORDER_COLOR: '$TEXT_L0',

      TEXT_L0: '$GRAY0',
      TEXT_L1: '$GRAY1',
    },
    zIndices: {
      HEADER: 200,
      OVERLAY: 500,
      MODAL: 1000,
      SIDEBAR: 1500,
      HAMBURGER: 2000,
      TOAST: 3000,
      PROGRESS: 5000,
    },
  },
  utils: {
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: number) => ({
      width: value,
      height: value,
    }),

    flexbox: (value: string) => {
      const [justify, align] = value.split(' ');
      console.log(justify, align);
      return {
        display: 'flex',
        justifyContent: FLEX_MAPPER[justify || 'center'],
        alignItems: FLEX_MAPPER[align || 'center'],
      };
    },

    posCenterY: (position: 'absolute' | 'fixed') => ({
      position,
      top: '50%',
      transform: 'translateY(-50%)',
    }),
  },
});
