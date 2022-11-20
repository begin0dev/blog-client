import { theme, styled, pulseKeyframes } from 'styles';

const { colors } = theme;

export const SearchInputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '4px 2px 4px 12px',
  borderRadius: 16,
  backgroundColor: colors.GRAY_2,
  color: colors.TEXT_L1,

  '> input': {
    flex: 1,
    fontSize: 'inherit',
    color: colors.WHITE,
    padding: 8,
    border: 0,
    backgroundColor: 'transparent',

    '&::placeholder': {
      fontSize: 'inherit',
    },
  },

  '> button': {
    backgroundColor: colors.PRIMARY,
    height: 28,
    width: 28,
    borderRadius: 14,
    lineHeight: 0,

    '&:active': {
      animation: `${pulseKeyframes} 300ms`,
    },
  },
});
