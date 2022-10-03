import { createStitches } from '@stitches/react';

export const styleConfig = createStitches({
  theme: {
    colors: {
      GRAY0: '#F8F9FA',
      GRAY1: '#CED4DA',
      GRAY2: '#141312',
      GRAY3: '#0E0D0D',

      PRIMARY: '#19C9DC',
      SECONDARY: '#5D5C5C',

      BACKGROUND_L0: '$GRAY2',
      BACKGROUND_L1: '$GRAY3',

      TEXT_L0: '$GRAY0',
      TEXT_L1: '$GRAY1',
    },
    zIndices: {
      HEADER: 200,
      OVERLAY: 500,
      MODAL: 1000,
      SIDEBAR: 1500,
      HAMBURGER: 2000,
      MESSAGE: 3000,
      PROGRESS: 5000,
    },
  },
});
