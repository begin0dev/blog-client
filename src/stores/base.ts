import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BaseState {
  isLoading: boolean;
  isShowSidebar: boolean;
  isShowAuthModal: boolean;
}
const initialState: BaseState = {
  isLoading: false,
  isShowSidebar: false,
  isShowAuthModal: false,
};

const baseSlice = createSlice({
  name: 'bases',
  initialState,
  reducers: {
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    showSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isShowSidebar = payload;
    },
    showAuthModal(state) {
      state.isShowAuthModal = true;
    },
    hideAuthModal(state) {
      state.isShowAuthModal = false;
    },
  },
});

export const baseActions = baseSlice.actions;
export default baseSlice.reducer;
