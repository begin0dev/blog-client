import * as React from 'react';

import { Button, Right } from '../Header.styles';

interface IProps {
  dispatchToggleAuthModal: (bool: boolean) => () => void;
}

const BeforeLogin: React.FunctionComponent<IProps> = React.memo(({ dispatchToggleAuthModal }) => (
  <Right>
    <Button type="button" onClick={dispatchToggleAuthModal(true)}>
      로그인
    </Button>
  </Right>
));

export default BeforeLogin;
