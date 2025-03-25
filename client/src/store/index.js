import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tweetReducer from './slices/tweetSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    tweet: tweetReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
