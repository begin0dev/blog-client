import * as React from 'react';
import { IoMdLogOut, IoMdNotificationsOutline } from 'react-icons/io';

import { IUserState } from 'store/modules/user';
import { Right, NotiButton, LogOutButton } from '../Header.styles';

interface IProps {
  userState: IUserState;
  logOut: () => void;
}

const AfterLogin: React.FunctionComponent<IProps> = React.memo(({ userState, logOut }) => (
  <Right>
    <div>{userState.commonProfile.displayName}</div>
    <NotiButton>
      <IoMdNotificationsOutline />
    </NotiButton>
    <LogOutButton onClick={logOut}>
      <IoMdLogOut />
    </LogOutButton>
  </Right>
));

export default AfterLogin;
