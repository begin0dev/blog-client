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
    onChangIsShowSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isShowSidebar = payload;
    },
    toggleAuthModal(state) {
      state.isShowAuthModal = !state.isShowAuthModal;
    },
  },
});

export const baseActions = baseSlice.actions;
export default baseSlice.reducer;
