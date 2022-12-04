import { inputSizes, sizes, theme, styled, pulseKeyframes } from 'styles';

const { colors, fontSizes, fontWeights } = theme;

export const shapes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  LINK: 'link',
  ICON1: 'icon1',
  ICON2: 'icon2',
  ICON3: 'icon3',
} as const;

export const iconCss = {
  flexbox: '',
  width: 'unset',
  height: 'unset',
  padding: 8,
  lineHeight: 0,
  borderRadius: '50%',

  '> svg': {
    fontSize: 'inherit',
  },
};

export const ButtonWrapper = styled('button', {
  flex: '',
  color: colors.TEXT_L0,
  borderRadius: 4,
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
        fontSize: fontSizes.body2,
        height: sizes.SMALL,
        padding: '4px 12px',
      },
      [inputSizes.MIDDLE]: {
        fontSize: fontSizes.body1,
        height: sizes.MIDDLE,
        padding: '4px 16px',
      },
      [inputSizes.LARGE]: {
        fontSize: fontSizes.large,
        height: sizes.LARGE,
        padding: '4px 20px',
      },
    },
    shape: {
      [shapes.PRIMARY]: {
        fontWeight: fontWeights.semiBold,
        color: colors.GRAY_1,
        border: `1px solid ${colors.PRIMARY}`,
        backgroundColor: colors.PRIMARY,
      },
      [shapes.SECONDARY]: {
        fontWeight: fontWeights.semiBold,
        color: colors.WHITE,
        border: `1px solid ${colors.SECONDARY}`,
        backgroundColor: colors.SECONDARY,
      },
      [shapes.GHOST]: {
        fontWeight: fontWeights.semiBold,
        backgroundColor: 'transparent',
        border: 'unset',
      },
      [shapes.LINK]: {
        fontWeight: fontWeights.semiBold,
        color: colors.PRIMARY,
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
      [shapes.ICON1]: {
        ...iconCss,
        backgroundColor: colors.PRIMARY,
        color: colors.GRAY_1,
      },
      [shapes.ICON2]: {
        ...iconCss,
        backgroundColor: colors.SECONDARY,
        color: colors.WHITE,
      },
      [shapes.ICON3]: {
        ...iconCss,
        backgroundColor: 'transparent',
      },
    },
  },
});
