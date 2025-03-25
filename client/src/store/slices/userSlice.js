import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    followUser: (state, action) => {
      if (state.user) {
        state.user.following.push(action.payload.userId);
      }
    },
    unfollowUser: (state, action) => {
      if (state.user) {
        state.user.following = state.user.following.filter(
          id => id !== action.payload.userId
        );
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setUser,
  followUser,
  unfollowUser,
  setLoading,
  setError
} = userSlice.actions;

export default userSlice.reducer;
