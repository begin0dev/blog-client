import { keyframes } from '@stitches/react';

import { styled } from 'styles';

const circleFadeDelayKeyframes = keyframes({
  '0%': { opacity: 1 },
  '50%, 100%': { opacity: 0 },
});

export const SpinnerWrapper = styled('div', {
  position: 'relative',
});

export const CircleWrapper = styled('span', {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',

  '&::before': {
    content: '',
    display: 'block',
    margin: '0 auto',
    width: '15%',
    height: '15%',
    borderRadius: '100%',
    animation: `${circleFadeDelayKeyframes} 1.2s infinite ease-in-out both`,
  },
});
