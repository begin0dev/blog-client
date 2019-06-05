import * as React from 'react';
// import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';
// import { Kakao } from 'assets/svgs';

import { IAuthForm } from 'containers/AuthContainer';
// import { TextInput } from 'components';
import { FormWrap } from '../Auth.styles';

interface IProps {
  authForm: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FunctionComponent<IProps> = ({ authForm, setAuthFormValue }) => <FormWrap>temp</FormWrap>;

export default SignUpForm;
