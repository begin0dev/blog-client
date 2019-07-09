import React from 'react';
import { IoMdLogOut, IoMdNotificationsOutline } from 'react-icons/io';

import { IUserState } from 'store/modules/user';
import { Right, NotiButton, LogOutButton } from '../Header.styles';

interface IProps {
  userState: IUserState;
}

const AfterLogin: React.FunctionComponent<IProps> = React.memo(({ userState }) => (
  <Right>
    <div>{userState.commonProfile.displayName}</div>
    <NotiButton>
      <IoMdNotificationsOutline />
    </NotiButton>
    <LogOutButton>
      <IoMdLogOut />
    </LogOutButton>
  </Right>
));

export default AfterLogin;
