import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { UserSchema } from '../types';
import { checkUserApi, logoutUserApi, verifyUserApi } from 'lib/services/user';

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
  isLoading: boolean;
  isLoggedIn: boolean;
  user: null | UserSchema;
}
const initialState: UserState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(verifyUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(verifyUser.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(checkUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(checkUser.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export const userActions = { ...userSlice.actions, checkUser, verifyUser, logoutUser };
export default userSlice.reducer;
