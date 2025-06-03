"use client"

import { configureStore } from "@reduxjs/toolkit";

import { githubApi } from "./api/services/githubApi";

import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;