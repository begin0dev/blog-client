import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { zIndexes, sizes, themes, includeMedia } from 'styles/utils';
import { palette } from 'styles/palette';

export const NavBlock = styled.nav<{ active: boolean }>`
  z-index: ${zIndexes.sidebar};
  position: relative;
  padding: 0;

  ${includeMedia('<=md')} {
    position: fixed;
    top: 0;
    right: 0;
    width: 270px;
    height: 100%;
    padding: ${sizes.header}px 0;
    background-color: ${themes.sidebar};
    backface-visibility: hidden;
    transform: ${({ active }) => (active ? 'translate(0%)' : 'translate(100%)')};
    transition: all 0.1s;
  }
`;

export const List = styled.div`
  display: flex;

  ${includeMedia('<=md')} {
    flex-flow: column wrap;
  }
`;

export const LinkWrapper = styled.div`
  &:before {
    content: '';
    position: absolute;
    top: 20%;
    left: 0;
    width: 1px;
    height: 60%;
    background: ${palette.gray8};
  }
  &:hover {
    border-radius: 8px 8px 0 0;
    background-color: ${themes.sidebar};
    &:before {
      content: unset;
    }
    &:after {
      content: '';
      position: absolute;
      right: -16px;
      bottom: 0;
      width: 16px;
      height: 16px;
      border-bottom-left-radius: 8px;
      box-shadow: -6px 6px 0 ${themes.sidebar};
      background: 0 0;
    }
  }

  ${includeMedia('<=md')} {
    &:before,
    &:after {
      content: unset;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  left: 0;
  display: none;
  width: 250px;
  background-color: ${themes.sidebar};
  border-radius: 0 8px 8px 8px;
  padding: 16px 0 20px;
  ${LinkWrapper}:hover & {
    display: block;
  }

  ${includeMedia('<=md')} {
    position: relative;
    display: block;
    padding: 0;
  }
`;

const defaultTypeCss = css`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  padding: 18px 25px;
  user-select: none;
  color: ${palette.gray4};

  ${includeMedia('<=md')} {
    padding: 20px 40px;
  }
  .expand-icon {
    font-size: 15px;
    margin-left: 5px;
  }
`;

export const LinkType = styled(NavLink)`
  ${defaultTypeCss};
  &:hover {
    color: ${palette.gray2};
  }
  &.current {
    color: ${palette.gray2};
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 25%;
      height: 50%;
      width: 3px;
      background-color: ${palette.red7};
      border-radius: 10px;
    }
  }

  ${includeMedia('>md')} {
    & + ${LinkWrapper} {
      margin-left: 10px;
    }
  }
`;

export const DivType = styled.div`
  ${defaultTypeCss};
  display: flex;
  justify-content: space-between;
`;

export const ChildLinkType = styled(LinkType)<{ color?: string }>`
  padding: 20px 25px;
  color: ${props => (props.color ? props.color : palette.gray6)};
  transition: color 0.3s ease;
  ${includeMedia('<=md')} {
    padding: 18px 40px;
  }
`;

export const TagSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.6;
  margin-right: 2px;
  transform: translateY(-1px);
`;
