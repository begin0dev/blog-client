import { theme, styled } from 'styles';

const { zIndices } = theme;

export const ModalContent = styled('div', {
  position: 'relative',
  borderRadius: 10,
  boxShadow: '0 2px 8px 3px rgba(255, 255, 255, 0.03)',

  '@maxMobile': {
    width: '100% !important',
    height: '100% !important',
    borderRadius: 0,
  },
});

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

  '&.modal-enter-active, &.modal-exit-active': {
    [ModalContent.toString()]: {
      transition: 'all 200ms ease-out',
      transformOrigin: 'center',
    },
  },

  '&.modal-enter': {
    [ModalContent.toString()]: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  },

  '&.modal-enter-active, &.modal-exit': {
    [ModalContent.toString()]: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },

  '&.modal-exit-active': {
    [ModalContent.toString()]: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  },
});
