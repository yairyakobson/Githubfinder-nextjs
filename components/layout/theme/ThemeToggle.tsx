"use client"

import { useAppSelector } from "@/components/hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleTheme } from "../../redux/features/themeSlice";

import ThemeDropdown from "./ThemeDropdown";

export const ThemeToggle =() =>{
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const themeHandler = () =>{
    dispatch(toggleTheme());
  };

  return(
    <section className="flex-none mb-[0.5px]">
      <ThemeDropdown
      theme={theme}
      themeHandler={themeHandler}/>
    </section>
  )
}