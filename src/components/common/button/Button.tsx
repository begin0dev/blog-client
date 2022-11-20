import { ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import { inputSizes, InputSizeType } from 'styles';
import { valueOf } from 'lib/utils/typescript-utils';
import { ButtonWrapper, shapes } from './button.styles';

type ShapeType = valueOf<typeof shapes>;

export interface Props extends ButtonHTMLAttributes<unknown> {
  size?: InputSizeType;
  shape?: ShapeType;
  round?: boolean;
  children: string | ReactNode;
}

function Button({
  type = 'button',
  size = inputSizes.MIDDLE,
  shape = shapes.PRIMARY,
  round,
  children,
  className,
  ...buttonProps
}: Props) {
  return (
    <ButtonWrapper
      type={type}
      size={size}
      shape={shape}
      className={cx(className, { round: !!round })}
      {...buttonProps}
    >
      {shape === shapes.LINK ? <span>{children}</span> : children}
    </ButtonWrapper>
  );
}

export default Button;
