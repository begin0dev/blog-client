import { styled } from '@stitches/react';
import { styleConfig } from 'styles';
import { TransitionGroup } from 'react-transition-group';

const { colors } = styleConfig.theme;

export const ToastGroupWrapper = styled(TransitionGroup, {
  $$SPACE: '12px',

  zIndex: 9999,
  position: 'fixed',
  maxHeight: '100%',

  '&[class*="top-"]': {
    top: '$$SPACE',

    '.toast': {
      marginBottom: 8,
    },
  },

  '&[class*="bottom-"]': {
    bottom: '$$SPACE',

    '.toast': {
      marginTop: 8,
    },
  },

  '&[class*="-left"]': {
    left: '$$SPACE',
  },

  '&[class*="-right"]': {
    right: '$$SPACE',
  },

  '&[class*="-center"]': {
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '.toast-enter-active, .toast-exit-active': {
    transition: 'all 300ms',
  },

  '.toast-enter': {
    opacity: 0,
  },

  '.toast-enter-active, .toast-exit': {
    opacity: 1,
  },

  '.toast-exit-active': {
    opacity: 0,
  },

  '&[class~="top-center"], &[class~="bottom-center"]': {
    '.toast-enter': {
      maxHeight: 0,
    },

    '.toast-enter-active, .toast-exit': {
      maxHeight: 60,
    },

    '.toast-exit-active': {
      maxHeight: 0,
    },
  },

  '&[class~="top-left"], &[class~="bottom-left"]': {
    '.toast-enter': {
      transform: 'translateX(-100%)',
    },

    '.toast-enter-active, .toast-exit': {
      transform: 'translateX(0)',
    },

    '.toast-exit-active': {
      transform: 'translateX(-100%)',
    },
  },

  '&[class~="top-right"], &[class~="bottom-right"]': {
    '.toast-enter': {
      transform: 'translateX(200%)',
    },

    '.toast-enter-active, .toast-exit': {
      transform: 'translateX(0)',
    },

    '.toast-exit-active': {
      transform: 'translateX(200%)',
    },
  },
});

export const ToastItemWrapper = styled('div', {
  overflow: 'hidden',

  '.item': {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: 320,
    maxWidth: 360,
    fontSize: 14,
    color: colors.GRAY3,
    backgroundColor: colors.WHITE,
    boxShadow: '0 2px 8px 3px rgba(255, 255, 255, 0.03)',
    borderRadius: 4,
    padding: 12,

    '.icon': {
      display: 'flex',
      fontSize: 18,
      marginRight: 8,

      '&.success': {
        color: colors.SUCCESS,
      },

      '&.warning': {
        color: colors.WARNING,
      },

      '&.error': {
        color: colors.ERROR,
      },
    },
  },
});
