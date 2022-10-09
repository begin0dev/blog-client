import { styled } from '@stitches/react';

import { inputSizes, sizes, styleConfig } from 'styles';

const { colors: themeColors } = styleConfig.theme;

export const colors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export const shapes = {
  DEFAULT: 'default',
  DASHED: 'dashed',
  GHOST: 'ghost',
  LINK: 'link',
  ICON: 'icon',
} as const;

export const CommonButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  userSelect: 'none',
  cursor: 'pointer',

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
        padding: '0 14px',
      },
      [inputSizes.MIDDLE]: {
        fontSize: 14,
        height: sizes.MIDDLE,
        padding: '0 18px',
      },
      [inputSizes.LARGE]: {
        fontSize: 16,
        height: sizes.LARGE,
        padding: '0 22px',
      },
    },
    color: {
      [colors.PRIMARY]: {
        border: `1px solid ${themeColors.PRIMARY}`,
        backgroundColor: themeColors.PRIMARY,
        color: themeColors.TEXT_L0,
      },
      [colors.SECONDARY]: {
        border: `1px solid ${themeColors.SECONDARY}`,
        backgroundColor: themeColors.SECONDARY,
        color: themeColors.TEXT_L0,
      },
    },
    shape: {
      [shapes.DEFAULT]: {},
      [shapes.DASHED]: {
        borderStyle: 'dashed',
      },
      [shapes.GHOST]: {
        backgroundColor: 'transparent',
        border: 'unset',
        padding: 4,
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
