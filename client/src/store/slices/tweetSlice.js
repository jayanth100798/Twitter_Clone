import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweets: [],
  loading: false,
  error: null,
  newTweet: null
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.tweets = action.payload;
    },
    addTweet: (state, action) => {
      state.tweets.unshift(action.payload);
      state.newTweet = action.payload;
    },
    likeTweet: (state, action) => {
      state.tweets = state.tweets.map(tweet =>
        tweet._id === action.payload.tweetId
          ? { ...tweet, likes: action.payload.likes }
          : tweet
      );
    },
    retweet: (state, action) => {
      state.tweets = state.tweets.map(tweet =>
        tweet._id === action.payload.tweetId
          ? { ...tweet, retweets: action.payload.retweets }
          : tweet
      );
    },
    deleteTweet: (state, action) => {
      state.tweets = state.tweets.filter(tweet => tweet._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearNewTweet: (state) => {
      state.newTweet = null;
    }
  }
});

export const {
  setTweets,
  addTweet,
  likeTweet,
  retweet,
  deleteTweet,
  setLoading,
  setError,
  clearNewTweet
} = tweetSlice.actions;

export default tweetSlice.reducer;
