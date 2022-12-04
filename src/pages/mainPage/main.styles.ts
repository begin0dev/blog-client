import { styled, theme } from 'styles';

const { colors, fontWeights } = theme;

export const MainWrapper = styled('div', {
  flexbox: 'start',
  flexFlow: 'column',

  '@maxTablet': {
    py: 74,
  },

  '@minDesktop': {
    py: 80,
  },
});

export const ProfileWrapper = styled('div', {
  width: '100%',
  gap: 12,
  px: 24,

  '@maxTablet': {
    flexbox: 'center start',
    flexFlow: 'column',
  },

  '@minDesktop': {
    flexbox: 'between',
    maxWidth: 1200,
  },

  '.desc': {
    fontSize: 40,
    fontWeight: fontWeights.semiBold,
    lineHeight: 1.3,
    color: colors.TEXT_L1,
    maxWidth: 340,

    '.name': {
      color: colors.PRIMARY,
    },
  },

  '.image': {
    lineHeight: 0,

    '@maxTablet': {
      width: '100%',
    },

    '@minDesktop': {
      maxWidth: 480,
    },

    '> img': {
      width: '100%',
    },
  },
});
