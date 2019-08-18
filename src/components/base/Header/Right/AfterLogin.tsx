import * as React from 'react';

import { IUserState } from 'store/modules/user';
import { Right } from '../Header.styles';

interface IProps {
  userState: IUserState;
  logOut: () => void;
}

const AfterLogin: React.FunctionComponent<IProps> = React.memo(({ userState, logOut }) => (
  <Right>
    <button type="button" onClick={logOut}>
      로그아웃
    </button>
  </Right>
));

export default AfterLogin;
