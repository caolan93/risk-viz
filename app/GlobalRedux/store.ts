"use client";

import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import googleRangeReducer from "./Features/googleRange/googleRange";
import { composeWithDevTools } from "redux-devtools-extension";

export const store: EnhancedStore = configureStore({
  reducer: {
    googleRange: googleRangeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
