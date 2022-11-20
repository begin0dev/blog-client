import { styled, theme } from 'styles';

const { colors } = theme;

export const EditorWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  padding: '10px 30px',

  '> div + div': {
    borderLeft: `1px solid ${colors.BORDER_COLOR}`,
  },
});
