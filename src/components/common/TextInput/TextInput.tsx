import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './TextInput.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  type: string;
  name: string;
  value?: string;
  label?: string;
  color?: string;
  placeholder?: string;
  setValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const TextInput: React.FunctionComponent<IProps> = ({ type, name, label, placeholder, value, color, setValue }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focus, setFocus] = React.useState<boolean>(false);

  const labelClick = (): void => {
    if (inputRef.current && !focus) inputRef.current.focus();
  };

  const toggleInputFocus = (focusing: boolean) => (): void => {
    setFocus(focusing);
  };
  const labelPosition = (): object => {
    let position = {};
    if (focus || placeholder || (inputRef && inputRef.current && inputRef.current.value.length > 0)) {
      position = {
        transform: 'translateY(-1.2rem) scale(0.88)',
        fontWeight: '400',
      };
    }
    return position;
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('input-slot', { 'input-focus': focus })} style={{ color }}>
        {label && (
          <label className={cx('label')} aria-hidden="true" style={{ ...labelPosition() }} onClick={labelClick}>
            {label}
          </label>
        )}
        <input
          className={cx('input')}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onFocus={toggleInputFocus(true)}
          onBlur={toggleInputFocus(false)}
          onChange={setValue}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default TextInput;
