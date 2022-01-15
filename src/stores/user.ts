import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { checkUserApi, logoutUserApi, verifyUserApi } from 'lib/services/user';
import type { UserSchema } from '../types';

const verifyUser = createAsyncThunk('users/verify', async (verifyCode: string) => {
  const {
    data: { payload },
  } = await verifyUserApi(verifyCode);
  return payload;
});
const checkUser = createAsyncThunk('users/check', async () => {
  const {
    data: { payload },
  } = await checkUserApi();
  if (!payload) throw new Error();
  return payload;
});
const logoutUser = createAsyncThunk('users/logout', async () => {
  await logoutUserApi();
  return null;
});

interface UserState {
  isLogIn: boolean;
  isLoading: boolean;
  user: null | UserSchema;
}
const initialState: UserState = {
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
    [logoutUser.pending.type]: (state) => {
      state.isLogIn = false;
      state.user = null;
    },
  },
});

export const userActions = { ...userSlice.actions, checkUser, verifyUser, logoutUser };
export default userSlice.reducer;
