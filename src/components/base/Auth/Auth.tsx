import * as React from 'react';
// import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';

// import { Kakao } from 'assets/svgs';
import { IAuthState } from 'store/modules/auth';

interface IProps {
  authState: IAuthState;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = ({ authState, setAuthFormValue }) => <div>temp</div>;

export default Auth;
