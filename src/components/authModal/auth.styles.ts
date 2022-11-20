import { pulseKeyframes, styled, theme } from 'styles';

const { colors, fontSizes } = theme;

export const AuthWrapper = styled('div', {
  position: 'relative',
  height: '100%',
  flexbox: 'between start',
  flexFlow: 'column wrap',
  flex: 1,
  padding: '68px 40px',
  backgroundColor: colors.BACKGROUND_L1,

  '.backButton': {
    fontSize: 20,
    marginLeft: '-8px',
  },
});

export const WelcomeWrapper = styled('div', {
  flexbox: 'center start',
  flexFlow: 'column wrap',
  flex: 1,
  gap: 8,
  fontSize: fontSizes.h2,
  color: colors.TEXT_L0,
  letterSpacing: '-0.02em',

  '.name': {
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
});

export const ActionWrapper = styled('div', {
  flexbox: 'end start',
  flexFlow: 'column wrap',
  flex: 1,

  '> h2': {
    fontSize: fontSizes.h2,
    color: colors.PRIMARY,
    marginBottom: 8,
  },

  '> p': {
    fontSize: fontSizes.body2,
    color: colors.TEXT_L2,
    marginBottom: 12,
  },

  '.socialButtons': {
    display: 'flex',
    gap: 20,
  },
});

export const SocialButton = styled('button', {
  flexbox: '',
  width: 40,
  height: 40,
  borderRadius: 20,
  overflow: 'hidden',

  '&:hover, &:focus, &:active': {
    opacity: 0.9,
  },

  '&:active': {
    animation: `${pulseKeyframes} 300ms`,
  },

  svg: {
    fontSize: 24,
  },

  variants: {
    provider: {
      facebook: {
        backgroundColor: '#4267b2',
        color: '#ffffff',
      },
      google: {
        backgroundColor: '#ea4334',
        color: '#ffffff',
      },
      kakao: {
        backgroundColor: '#f7e600',
        color: '#3c1e1e',

        svg: {
          fontSize: 28,
        },
      },
      github: {
        backgroundColor: '#ffffff',
        color: '#161b22',

        svg: {
          fontSize: 28,
        },
      },
    },
  },
});
