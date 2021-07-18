import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { checkUserApi, logoutUserApi, verifyUserApi } from 'lib/services/user';
import { IUser } from '../types';

const verifyUser = createAsyncThunk('users/verify', async (verifyCode: string) => {
  const {
    data: {
      data: { payload },
    },
  } = await verifyUserApi(verifyCode);
  return payload;
});
const checkUser = createAsyncThunk('users/check', async () => {
  const {
    data: {
      data: { payload },
    },
  } = await checkUserApi();
  if (!payload) throw new Error();
  return payload;
});
const logoutUser = createAsyncThunk('users/logout', async () => {
  await logoutUserApi();
  return null;
});

interface IUserState {
  isLogIn: boolean;
  isLoading: boolean;
  user: null | IUser;
}
const initialState: IUserState = {
  isLogIn: false,
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [verifyUser.pending.type]: (state) => {
      state.isLoading = true;
      state.isLogIn = false;
    },
    [verifyUser.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogIn = true;
      state.user = payload;
    },
    [verifyUser.rejected.type]: (state) => {
      state.isLoading = false;
      state.isLogIn = false;
    },
    [checkUser.pending.type]: (state) => {
      state.isLoading = true;
      state.isLogIn = false;
    },
    [checkUser.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.isLogIn = true;
      state.user = payload;
    },
    [checkUser.rejected.type]: (state) => {
      state.isLoading = false;
      state.isLogIn = false;
    },
    [logoutUser.fulfilled.type]: (state) => {
      state.isLogIn = false;
      state.user = null;
    },
  },
});

export const actions = { ...userSlice.actions, checkUser, verifyUser, logoutUser };
export default userSlice.reducer;
