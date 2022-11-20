import { createStitches } from '@stitches/react';

import { breakPoints, flexAlignMapper } from './utils';

export const { theme, styled, css } = createStitches({
  theme: {
    colors: {
      WHITE: '#ffffff',
      GRAY_F: '#F8F9FA',
      GRAY_C: '#CED4DA',
      GRAY_2: '#2A2F38',
      GRAY_1: '#1B1E24',
      BLACK: '#121418',

      PRIMARY: '#00C39A',
      SECONDARY: '#5D5C5C',
      SUCCESS: '#51CF66',
      WARNING: '#ff922b',
      ERROR: '#ff6b6b',

      BACKGROUND_L0: '$GRAY_1',
      BACKGROUND_L1: '$BLACK',
      BORDER_COLOR: '$GRAY_F',
      TEXT_L0: '$WHITE',
      TEXT_L1: '$GRAY_F',
      TEXT_L2: '$GRAY_C',
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
    sizes: {
      MOBILE_HEADER: '60px',
      DESKTOP_HEADER: '68px',
    },
    fontSizes: {
      h1: '24px',
      h2: '22px',
      h3: '20px',
      h4: '18px',
      large: '16px',
      body1: '14px',
      body2: '12px',
      caption: '11px',
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
      normal: 400,
    },
  },
  media: {
    maxMobile: `(max-width: ${breakPoints.SM}px)`,
    minTablet: `(min-width: ${breakPoints.SM + 1}px)`,
    maxTablet: `(max-width: ${breakPoints.MD}px)`,
    minDesktop: `(min-width: ${breakPoints.MD + 1}px)`,
  },
  utils: {
    size: (value: number) => ({
      width: value,
      height: value,
    }),

    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    flexbox: (value: string) => {
      const [justify, align] = value.split(' ');
      return {
        display: 'flex',
        justifyContent: flexAlignMapper[justify || 'center'],
        alignItems: flexAlignMapper[align || 'center'],
      };
    },

    posCenterY: (position: 'absolute' | 'fixed') => ({
      position,
      top: '50%',
      transform: 'translateY(-50%)',
    }),
    posCenterX: (position: 'absolute' | 'fixed') => ({
      position,
      left: '50%',
      transform: 'translateX(-50%)',
    }),
  },
});
