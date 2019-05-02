import styled from 'styled-components';
import { zIndexes, themes } from 'styles/utils';

export const SearchInputBlock = styled.div`
  position: relative;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
`;

export const Input = styled.input`
  color: transparent;
  opacity: 0.3;
  flex: 1 0 auto;
  margin: 0;
  padding: 0.3rem 1rem;
  outline: 0;
  line-height: 1.3rem;
  background-color: #ffffff;
  -webkit-tap-highlight-color: #ffffff;
  transition: border-color 0.1s ease;
  border: 1px solid theme('primary');
  border-radius: 3rem;
`;
