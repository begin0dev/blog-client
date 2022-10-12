import { styled } from '@stitches/react';
import { styleConfig } from 'styles';

const { colors } = styleConfig.theme;

export const SearchInputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  border: `1px solid ${colors.BORDER_COLOR}`,
  borderRadius: '2em',
  color: 'inherit',
  transition: 'opacity 0.2s ease-in-out',
  opacity: 0.8,

  '&:focus-within, &:hover': {
    opacity: 1,
  },

  '> svg': {
    fontSize: '1.4em',
    color: colors.PRIMARY,
  },

  '> input': {
    fontSize: 'inherit',
    width: '100%',
    color: 'inherit',
    padding: 8,
    border: 0,
    backgroundColor: 'transparent',

    '&::placeholder': {
      fontSize: 'inherit',
      opacity: 0.6,
    },
  },
});
