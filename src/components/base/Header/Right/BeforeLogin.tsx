import React from 'react';

import { FormNameTypes } from 'store/modules/auth';
import { Button, Right } from '../Header.styles';

interface IProps {
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const BeforeLogin: React.FunctionComponent<IProps> = React.memo(({ toggleAuthForm }) => (
  <Right>
    <Button type="button" onClick={toggleAuthForm('logIn')}>
      Log In
    </Button>
    <Button type="button" className="sign-up" onClick={toggleAuthForm('signUp')}>
      Sign Up
    </Button>
  </Right>
));

export default BeforeLogin;
