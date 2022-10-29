import { styled, theme } from 'styles';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../common';

const { zIndices, colors, sizes, fontSizes, fontWeights } = theme;

export const HeaderWrapper = styled('nav', {
  flexbox: 'start',
  zIndex: zIndices.HEADER,
  position: 'sticky',
  top: 0,
  right: 0,
  left: 0,
  padding: '0 34px',
  backgroundColor: colors.BACKGROUND_L1,

  '@maxTablet': {
    height: sizes.MOBILE_HEADER,
  },

  '@minDesktop': {
    height: sizes.DESKTOP_HEADER,
  },
});

export const LogoWrapper = styled(Link, {
  lineHeight: 0,

  '> svg': {
    height: 36,
    marginTop: -8,
  },
});

export const RightWrapper = styled('div', {
  flexbox: 'end',
  marginLeft: 'auto',

  '.searchIcon': {
    fontSize: 18,
  },

  '.hamburgerIcon': {
    zIndex: zIndices.HAMBURGER,
    size: 30,
    flexbox: '',
    backgroundColor: 'transparent',
    marginLeft: 8,

    '&:active, &:focus, &:hover': {
      opacity: 1,
    },
  },
});

export const CustomAuthButton = styled(Button, {
  width: 90,

  '@maxTablet': {
    marginTop: 24,
  },

  '@minDesktop': {
    marginLeft: 12,
  },
});

export const DesktopNavWrapper = styled('ul', {
  flexbox: '',
  flex: 1,
  mx: 12,
  gap: 40,
});

export const DesktopCustomLink = styled(NavLink, {
  flexbox: '',
  position: 'relative',
  fontSize: fontSizes.body1,
  fontWeight: fontWeights.semiBold,
  color: colors.TEXT_L1,
  py: 6,
  userSelect: 'none',
  transition: 'color 200ms',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2,
    width: '0%',
    margin: '0 auto',
    borderRadius: 2,
    backgroundColor: colors.PRIMARY,
    transition: 'width 200ms ease-in-out',
  },

  '&.active': {
    color: colors.PRIMARY,

    '&:after': {
      width: '94%',
    },
  },
});

export const MobileNavWrapper = styled('ul', {
  flexbox: '',
  flexFlow: 'column wrap',
  width: 310,
  height: '100%',
  backgroundColor: colors.BACKGROUND_L1,

  '> li': {
    width: '100%',
  },
});

export const MobileCustomLink = styled('button', {
  width: '100%',
  height: 50,
  fontSize: fontSizes.large,
  fontWeight: fontWeights.semiBold,
  color: colors.GRAY0,
  backgroundColor: 'transparent',
});
