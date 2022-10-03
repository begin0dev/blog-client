import { styled } from '@stitches/react';
import { styleConfig } from 'styles/styleConfig';

const { zIndices } = styleConfig.theme;

export const CommonDrawer = styled('div', {
  zIndex: zIndices.MODAL,
  position: 'fixed',

  '.drawer': {
    width: '100%',
    height: '100%',
  },

  '&.drawer-enter .drawer, &.drawer-exit .drawer': {
    transition: 'transform 300ms cubic-bezier(0.7, 0.3, 0.1, 1)',
  },

  variants: {
    position: {
      top: {
        top: 0,
        left: 0,
        right: 0,

        '&.drawer-enter .drawer': {
          transform: 'translateY(-100%)',
        },

        '&.drawer-enter-active .drawer, &.drawer-exit .drawer': {
          transform: 'translateY(0)',
        },

        '&.drawer-exit-active .drawer': {
          transform: 'translateY(-100%)',
        },
      },
      bottom: {
        left: 0,
        bottom: 0,
        right: 0,

        '&.drawer-enter .drawer': {
          transform: 'translateY(200%)',
        },

        '&.drawer-enter-active .drawer, &.drawer-exit .drawer': {
          transform: 'translateY(0)',
        },

        '&.drawer-exit-active .drawer': {
          transform: 'translateY(200%)',
        },
      },
      left: {
        top: 0,
        left: 0,
        bottom: 0,

        '&.drawer-enter .drawer': {
          transform: 'translateX(-100%)',
        },

        '&.drawer-enter-active .drawer, &.drawer-exit .drawer': {
          transform: 'translateX(0)',
        },

        '&.drawer-exit-active .drawer': {
          transform: 'translateX(-100%)',
        },
      },
      right: {
        top: 0,
        bottom: 0,
        right: 0,

        '&.drawer-enter .drawer': {
          transform: 'translateX(200%)',
        },

        '&.drawer-enter-active .drawer, &.drawer-exit .drawer': {
          transform: 'translateX(0)',
        },

        '&.drawer-exit-active .drawer': {
          transform: 'translateX(200%)',
        },
      },
    },
  },
});
