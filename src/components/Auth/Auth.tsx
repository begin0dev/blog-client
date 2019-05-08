import * as React from 'react';

import { IAuthForm } from 'containers/AuthContainer'
import { IAuthState } from 'store/modules/auth';
import { AuthBlock } from './Auth.styles'

interface IProps {
  authState: IAuthState;
  authForm: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = ({ authForm, authState, setAuthFormValue }) => <AuthBlock>temp</AuthBlock>;

export default React.memo(Auth);
