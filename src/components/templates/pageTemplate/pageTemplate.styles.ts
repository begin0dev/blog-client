import { styled } from 'styles';

export const PageTemplateWrapper = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  minHeight: '100vh',

  '> main': {
    flex: 1,
  },
});
