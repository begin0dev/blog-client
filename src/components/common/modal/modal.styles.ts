import { styled } from '@stitches/react';
import { includeMedia, styleConfig } from 'styles';

const { zIndices } = styleConfig.theme;

export const ModalWrapper = styled('div', {
  zIndex: zIndices.MODAL,
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(2px)',

  '.modal': {
    position: 'relative',
    borderRadius: 10,
    boxShadow: '0 2px 8px 3px rgba(255, 255, 255, 0.03)',

    [includeMedia('<=SM')]: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
  },

  '&.modal-enter-active, &.modal-exit-active': {
    '.modal': {
      transition: 'all 200ms ease-out',
      transformOrigin: 'center',
    },
  },

  '&.modal-enter': {
    '.modal': {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  },

  '&.modal-enter-active, &.modal-exit': {
    '.modal': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },

  '&.modal-exit-active': {
    '.modal': {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  },
});
