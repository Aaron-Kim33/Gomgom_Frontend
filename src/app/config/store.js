import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import signUpSlice from '../module/signUpSlice';
import loginSlice from '../module/loginSlice';
import select from '../module/selectSlice';
import vote from '../module/voteSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    login: loginSlice.reducer,
    select,
    vote,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;