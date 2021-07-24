import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBaseState {
  isLoading: boolean;
  isShowSidebar: boolean;
  isShowAuthModal: boolean;
}
const initialState: IBaseState = {
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

export const { actions } = baseSlice;
export default baseSlice.reducer;
