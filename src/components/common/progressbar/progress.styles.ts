import { theme, styled } from 'styles';

const { zIndices, colors } = theme;

export const ProgressbarWrapper = styled('div', {
  $$PROGRESS_COLOR: colors.PRIMARY,

  zIndex: zIndices.PROGRESS,
  position: 'fixed',
  top: 0,
  transition: 'width 300ms ease-in',
  backgroundColor: '$$PROGRESS_COLOR',

  variants: {
    visible: {
      false: {
        height: 0,
        opacity: 0,
      },
      true: {
        height: 4,
        opacity: 1,
      },
    },
  },
});
