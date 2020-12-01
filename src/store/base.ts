import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BaseState = {
  isMobile: boolean;
  authModal: boolean;
  loadingPercent: number;
};

export const initialState: BaseState = {
  isMobile: window.innerWidth <= 450,
  authModal: false,
  loadingPercent: 0,
};

const baseSlice = createSlice({
  name: 'bases',
  initialState,
  reducers: {
    setIsMobile(state, { payload }: PayloadAction<boolean>) {
      state.isMobile = payload;
    },
    setLoadingPercent(state, { payload }: PayloadAction<number>) {
      state.loadingPercent = payload;
    },
    toggleAuthModal(state, { payload }: PayloadAction<boolean>) {
      state.authModal = payload;
    },
  },
});

export const { actions } = baseSlice;
export default baseSlice.reducer;
