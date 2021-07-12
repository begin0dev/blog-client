import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BaseState = {
  isMobile: boolean;
  isLoading: boolean;
  authModal: boolean;
};

export const initialState: BaseState = {
  isMobile: window.innerWidth <= 450,
  isLoading: false,
  authModal: false,
};

const baseSlice = createSlice({
  name: 'bases',
  initialState,
  reducers: {
    setIsMobile(state, { payload }: PayloadAction<boolean>) {
      state.isMobile = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    toggleAuthModal(state) {
      state.authModal = !state.authModal;
    },
  },
});

export const { actions } = baseSlice;
export default baseSlice.reducer;
