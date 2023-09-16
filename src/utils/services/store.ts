import { configureStore } from '@reduxjs/toolkit';

import ApiService from './ApiService';
import AppSlice from './AppSlice';

const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    [AppSlice.name]: AppSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;