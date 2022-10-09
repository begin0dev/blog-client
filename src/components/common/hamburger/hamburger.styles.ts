import { styled } from '@stitches/react';
import { styleConfig } from 'styles';

const { colors } = styleConfig.theme;

export const CommonHamburger = styled('button', {
  $$HAMBURGER_WIDTH: '18px',
  $$HAMBURGER_HEIGHT: '2px',
  $$HAMBURGER_SPACE: '4px',
  $$HAMBURGER_COLOR: colors.PRIMARY,

  color: 'inherit',
  textTransform: 'none',
  backgroundColor: 'transparent',
  border: 0,
  margin: 0,
  overflow: 'visible',
  cursor: 'pointer',
  transitionProperty: 'opacity, filter',
  transitionDuration: '200ms',
  transitionTimingFunction: 'linear',

  '> .box': {
    position: 'relative',
    display: 'block',
    width: '$$HAMBURGER_WIDTH',
    height: 'calc($$HAMBURGER_HEIGHT * 3 + $$HAMBURGER_SPACE * 2)',
  },

  '> .box > .line': {
    display: 'block',
    top: 'calc($$HAMBURGER_HEIGHT / 2)',
    marginTop: 'calc($$HAMBURGER_HEIGHT / -2)',

    '&, &:before, &:after': {
      position: 'absolute',
      width: '$$HAMBURGER_WIDTH',
      height: '$$HAMBURGER_HEIGHT',
      borderRadius: 'calc($$HAMBURGER_HEIGHT / 2)',
      backgroundColor: '$$HAMBURGER_COLOR',
      transitionProperty: 'transform, opacity',
      transitionDuration: '0.15s',
      transitionTimingFunction: 'ease',
    },

    '&:before, &:after': {
      content: '',
      display: 'block',
    },

    '&:before': {
      top: 'calc($$HAMBURGER_HEIGHT + $$HAMBURGER_SPACE)',
    },

    '&:after': {
      top: 'calc($$HAMBURGER_HEIGHT * 2 + $$HAMBURGER_SPACE * 2)',
    },
  },
  variants: {
    active: {
      true: {
        '& > .box > .line': {
          transform:
            'translate3d(0, calc($$HAMBURGER_HEIGHT + $$HAMBURGER_SPACE), 0) rotate(-45deg)',

          '&:before': {
            transform:
              'rotate(45deg) translate3d(calc($$HAMBURGER_WIDTH / 7), calc($$HAMBURGER_SPACE * -1), 0)',
            opacity: 0,
          },

          '&:after': {
            transform:
              'translate3d(0, calc(($$HAMBURGER_HEIGHT + $$HAMBURGER_SPACE) * -2), 0) rotate(90deg)',
          },
        },
      },
    },
  },
});
