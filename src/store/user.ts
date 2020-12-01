import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { checkUserApi, logoutUserApi } from 'lib/services/user';

const checkUser = createAsyncThunk('users/check', async () => {
  const {
    data: {
      data: { user },
    },
  } = await checkUserApi();
  return user;
});
const logoutUser = createAsyncThunk('users/logout', async () => {
  await logoutUserApi();
  return null;
});

export interface User {
  _id: string;
  email?: string;
  emailVerified: boolean;
  displayName: string;
  profileImage?: string;
  isAdmin: boolean;
}
export type UserState = {
  isLogIn: boolean;
  isLoading: boolean;
  user: null | User;
};

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
    },
    [logoutUser.fulfilled.type]: (state) => {
      state.isLogIn = false;
      state.user = null;
    },
  },
});

export const actions = { ...userSlice.actions, checkUser, logoutUser };
export default userSlice.reducer;
