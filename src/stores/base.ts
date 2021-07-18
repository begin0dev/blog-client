import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBaseState {
  isLoading: boolean;
  isActiveAuthModal: boolean;
}
const initialState: IBaseState = {
  isLoading: false,
  isActiveAuthModal: false,
};

const baseSlice = createSlice({
  name: 'bases',
  initialState,
  reducers: {
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    toggleAuthModal(state) {
      state.isActiveAuthModal = !state.isActiveAuthModal;
    },
  },
});

export const { actions } = baseSlice;
export default baseSlice.reducer;
