"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeState } from "@/components/interfaces/misc/themeInterface";

const initialState: ThemeState = true;

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => action.payload,
    toggleTheme: (state) => {
      const nextState = !state;
      if(typeof window !== "undefined"){
        localStorage.setItem("theme", JSON.stringify(nextState));
      }
      return nextState;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;