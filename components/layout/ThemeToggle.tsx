"use client"

import { useEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { toggleTheme } from "../redux/features/themeSlice";

export const ThemeToggle =() =>{
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const prevThemeRef = useRef<boolean>(theme); // store previous theme

  const themeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() =>{
    if(theme !== prevThemeRef.current){
      detailsRef.current?.removeAttribute("open");
      prevThemeRef.current = theme;
    }
  }, [theme]);

  return(
    <section className="flex-none mb-[0.5px]">
      <ul className="menu menu-horizontal">
        <li>
          <details ref={detailsRef}>
            <summary className="text-black">Theme</summary>
            <ul className="rounded-none bg-slate-300"
            onClick={themeHandler}>
              <li className="text-black">
                <button type="button"
                onClick={theme ? themeHandler : undefined}
                disabled={theme}
                className={`flex items-center gap-2 px-3 py-1 rounded w-full text-left
                  ${theme
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "hover:bg-gray-200"
                  }`}>
                  <FaSun color="black" size="1rem"
                  className="cursor-pointer"/>Light
                </button>
              </li>
              <li className="text-black">
                <button type="button"
                onClick={!theme ? themeHandler : undefined}
                disabled={!theme}
                className={`flex items-center gap-2 px-3 py-1 rounded w-full text-left
                  ${!theme
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "hover:bg-gray-200"
                  }`}>
                  <FaMoon color="black" size="1rem"
                  className="cursor-pointer"/>Dark
                </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  )
}