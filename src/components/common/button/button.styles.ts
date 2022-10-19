import { inputSizes, sizes, theme, styled, pulseKeyframes } from 'styles';

const { colors } = theme;

export const colorSet = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
} as const;

export const shapes = {
  DEFAULT: 'default',
  DASHED: 'dashed',
  LINK: 'link',
  ICON: 'icon',
} as const;

export const ButtonWrapper = styled('button', {
  flex: '',
  color: colors.TEXT_L0,
  borderRadius: 2,
  userSelect: 'none',
  cursor: 'pointer',

  '&:active': {
    animation: `${pulseKeyframes} 300ms`,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    opacity: 0.7,
  },

  '&.round': {
    borderRadius: '1.2em',
  },

  '&:hover': {
    opacity: 0.8,
  },

  variants: {
    size: {
      [inputSizes.SMALL]: {
        fontSize: 12,
        height: sizes.SMALL,
        padding: '4px 12px',
      },
      [inputSizes.MIDDLE]: {
        fontSize: 14,
        height: sizes.MIDDLE,
        padding: '4px 16px',
      },
      [inputSizes.LARGE]: {
        fontSize: 16,
        height: sizes.LARGE,
        padding: '4px 20px',
      },
    },
    color: {
      [colorSet.PRIMARY]: {
        border: `1px solid ${colors.PRIMARY}`,
        backgroundColor: colors.PRIMARY,
      },
      [colorSet.SECONDARY]: {
        border: `1px solid ${colors.SECONDARY}`,
        backgroundColor: colors.SECONDARY,
      },
      [colorSet.GHOST]: {
        backgroundColor: 'transparent',
        border: 'unset',
      },
    },
    shape: {
      [shapes.DEFAULT]: {},
      [shapes.DASHED]: {
        borderStyle: 'dashed',
      },
      [shapes.LINK]: {
        backgroundColor: 'transparent',
        border: 'unset',
        padding: 4,

        '> span': {
          position: 'relative',

          '&::after': {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderBottom: '1px solid currentColor',
          },
        },
      },
      [shapes.ICON]: {
        width: 'unset',
        height: 'unset',
        padding: 4,
        lineHeight: 0,
      },
    },
  },
});
