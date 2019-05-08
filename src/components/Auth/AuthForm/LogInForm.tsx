import * as React from 'react';
import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';

import { IAuthState } from 'store/modules/auth';
import { TextInput } from 'components/index';
import { Kakao } from 'assets/svgs';

interface IProps {
  authState: IAuthState;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FunctionComponent<IProps> = ({ authState, setAuthFormValue }) => <div>temp</div>;

export default SignUpForm;
