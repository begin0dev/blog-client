import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBaseState {
  isLoading: boolean;
  authModal: boolean;
}
const initialState: IBaseState = {
  isLoading: false,
  authModal: false,
};

const baseSlice = createSlice({
  name: 'bases',
  initialState,
  reducers: {
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
