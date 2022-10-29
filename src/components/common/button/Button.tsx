import { ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import { inputSizes, InputSizeType } from 'styles';
import { valueOf } from 'lib/utils/typescript-utils';
import { ButtonWrapper, colorSet, shapes } from './button.styles';

type ColorType = valueOf<typeof colorSet>;
type ShapeType = valueOf<typeof shapes>;

export interface Props extends ButtonHTMLAttributes<unknown> {
  size?: InputSizeType;
  color?: ColorType;
  shape?: ShapeType;
  round?: boolean;
  children: string | ReactNode;
}

function Button({
  type = 'button',
  size = inputSizes.MIDDLE,
  color = colorSet.PRIMARY,
  shape,
  round,
  children,
  className,
  ...buttonProps
}: Props) {
  return (
    <ButtonWrapper
      type={type}
      size={size}
      color={color}
      shape={shape}
      className={cx(className, { round: !!round })}
      {...buttonProps}
    >
      {shape === shapes.LINK ? <span>{children}</span> : children}
    </ButtonWrapper>
  );
}

export default Button;
