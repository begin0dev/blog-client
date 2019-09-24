import * as React from 'react';

import { FormNameTypes } from 'store/modules/auth';
import { Button, Right } from '../Header.styles';

interface IProps {
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const BeforeLogin: React.FunctionComponent<IProps> = React.memo(({ toggleAuthForm }) => (
  <Right>
    <Button type="button" onClick={toggleAuthForm('logIn')}>
      로그인
    </Button>
    <Button type="button" className="sign-up" onClick={toggleAuthForm('signUp')}>
      회원가입
    </Button>
  </Right>
));

export default BeforeLogin;
