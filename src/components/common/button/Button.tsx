import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

import { baseButtonCSS, inputSizes, sizes, themes, InputSizeType } from 'styles';
import { ValueOf } from 'lib/utils/typescript-utils';
import { cx } from 'lib/utils/helpers';

export const shapes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DASHED: 'dashed',
  GHOST: 'ghost',
  LINK: 'link',
} as const;

type ShapeType = ValueOf<typeof shapes>;

export interface Props extends ButtonHTMLAttributes<unknown> {
  size?: InputSizeType;
  shape?: ShapeType;
  round?: boolean;
  icon?: boolean;
  children?: string | ReactNode;
}

function Button({
  type = 'button',
  size = inputSizes.MIDDLE,
  shape = shapes.PRIMARY,
  round,
  icon,
  children,
}: Props) {
  return (
    <CustomButton
      type={type}
      size={size}
      shape={shape}
      className={cx(['round', !!round], ['icon', !!icon])}
    >
      <span>{children}</span>
    </CustomButton>
  );
}

export default Button;

const sizesCSS = {
  [inputSizes.SMALL]: css`
    font-size: 13px;
    height: ${sizes.SMALL}px;
    padding: 0 10px;
  `,
  [inputSizes.MIDDLE]: css`
    font-size: 13px;
    height: ${sizes.MIDDLE}px;
    padding: 0 12px;
  `,
  [inputSizes.LARGE]: css`
    font-size: 15px;
    height: ${sizes.LARGE}px;
    padding: 0 18px;
  `,
};
const shapeCSS = {
  [shapes.PRIMARY]: css`
    ${baseButtonCSS};
    background-color: ${themes.PRIMARY};
    color: ${themes.TEXT_L1};
  `,
  [shapes.SECONDARY]: css`
    ${baseButtonCSS};
    background-color: ${themes.SECONDARY};
    color: ${themes.TEXT_L1};
  `,
  [shapes.DASHED]: css`
    ${baseButtonCSS};
    border: 1px dashed ${themes.PRIMARY};
    background-color: transparent;
    color: ${themes.PRIMARY};
  `,
  [shapes.GHOST]: css`
    ${baseButtonCSS};
    border: unset;
    background-color: transparent;
    color: ${themes.PRIMARY};
  `,
  [shapes.LINK]: css`
    background-color: transparent;
    color: ${themes.PRIMARY};
    > span {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        border-bottom: 1px solid currentColor;
      }
    }
  `,
};

const CustomButton = styled.button<{ size: InputSizeType; shape: ShapeType; round?: boolean }>`
  ${({ size }) => sizesCSS[size]};
  ${({ shape }) => shapeCSS[shape]}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  user-select: none;
  cursor: pointer;
  &.round {
    border-radius: 1.2em;
  }
  &.icon {
    width: ${({ size }) => sizes[size.toUpperCase() as keyof typeof inputSizes]}px;
    padding: 0;
    > span {
      line-height: 0;
    }
  }
  &:hover {
    opacity: 0.9;
  }
`;
