import { keyframes } from '@stitches/react';

import { theme } from 'styles/styleConfig';

const { colors } = theme;

export const pulseKeyframes = keyframes({
  '0%': { boxShadow: `0 0 3px 0 ${colors.PRIMARY}` },
  '50%': { boxShadow: `0 0 6px 3px ${colors.PRIMARY}` },
  '100%': { boxShadow: `0 0 3px 0 ${colors.PRIMARY}` },
});
