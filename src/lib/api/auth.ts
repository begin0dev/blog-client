import axios from 'axios';

const LOCAL_REGISTER_URL = '/api/v1.0/auth/local/register';
const LOCAL_LOGIN_URL = '/api/v1.0/auth/local/login';

export const localRegisterApi = (params: {
  email: string;
  password: string;
  displayName: string;
}) => axios.post(LOCAL_REGISTER_URL, params);

export const localLoginApi = (params: { email: string; password: string }) =>
  axios.post(LOCAL_LOGIN_URL, params);
