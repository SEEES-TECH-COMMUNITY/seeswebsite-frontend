/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export interface AmountState {
  user: any
}
const initialState: AmountState = {
  user: null
};
const AppSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<any>) {
        state.user = action.payload;
    }, 
  }
});
export const { addUser } = AppSlice.actions;
export default AppSlice;