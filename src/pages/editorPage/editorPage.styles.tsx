import { styled, theme } from 'styles';

const { zIndices, sizes, colors } = theme;

export const HeaderWrapper = styled('div', {
  position: 'sticky',
  top: 0,
  right: 0,
  left: 0,
  flexbox: 'between',
  zIndex: zIndices.HEADER,
  width: '100%',
  height: sizes.DESKTOP_HEADER,
  backgroundColor: colors.BACKGROUND_L1,
  px: 40,

  '.backButton': {
    svg: {
      size: 24,
    },
  },
});
