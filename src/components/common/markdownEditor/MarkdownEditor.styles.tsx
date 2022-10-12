import 'codemirror/lib/codemirror.css';
import { styled } from '@stitches/react';

import { styleConfig } from 'styles';

const { colors } = styleConfig.theme;

export const EditorWrapper = styled('div', {
  fontFamily: 'Fira Mono, "Spoqa Han Sans Neo", sans-serif',
  fontSize: 13,
  flex: 1,

  '.CodeMirror': {
    height: '100%',
    color: colors.TEXT_L1,
    backgroundColor: 'inherit',
  },

  '.CodeMirror-placeholder': {
    color: 'inherit',
    opacity: 0.4,
  },

  '.CodeMirror-cursor': {
    borderColor: colors.TEXT_L1,
  },

  '.cm-header': {
    color: colors.TEXT_L0,
    lineHeight: 2,
  },

  '.cm-header-1': {
    fontSize: 28,
  },

  '.cm-header-2': {
    fontSize: 24,
  },

  '.cm-header-3': {
    fontSize: 20,
  },

  '.cm-header-4, .cm-header-5, .cm-header-6': {
    fontSize: 18,
  },

  '.cm-strong, .cm-em': {
    color: colors.TEXT_L0,
  },

  '.titleInputWrapper': {
    position: 'relative',
    padding: '10px 0',
    marginBottom: 8,

    '.input': {
      fontSize: 30,
      fontWeight: 600,
      width: '100%',
      backgroundColor: 'inherit',
      borderStyle: 'none',
      outline: 'none',
      color: colors.TEXT_L0,

      '&::placeholder': {
        color: 'inherit',
        fontSize: 'inherit',
        opacity: 0.4,
      },
    },
  },
});
