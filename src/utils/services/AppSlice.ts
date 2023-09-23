/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IUser } from '../types/api';
export interface AmountState {
  user: IUser['response']['data'] | null;
}
const initialState: AmountState = {
  user: null
};
const AppSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser['response']['data']>) {
        state.user = action.payload;
    }, 
  }
});
export const { addUser } = AppSlice.actions;
export default AppSlice;