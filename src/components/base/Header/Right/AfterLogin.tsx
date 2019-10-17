import * as React from 'react';

import { User } from 'store/modules/auth';
import { Right } from '../Header.styles';

interface IProps {
  user: User | null;
  logOut: () => void;
}

const AfterLogin: React.FunctionComponent<IProps> = React.memo(({ user, logOut }) => (
  <Right>
    <button type="button" onClick={logOut}>
      로그아웃
    </button>
  </Right>
));

export default AfterLogin;
