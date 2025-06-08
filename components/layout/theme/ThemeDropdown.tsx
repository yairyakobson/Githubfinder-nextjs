"use client"

import React, { useLayoutEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeDropdownInterface } from "../../interfaces/misc/themeDropdownInterface";

const ThemeDropdown: React.FC<ThemeDropdownInterface> = ({
  theme,
  themeHandler
}) =>{
  const prevThemeRef = useRef<boolean | null>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  
  useLayoutEffect(() =>{
    if(prevThemeRef.current !== theme){
      document.body.style.backgroundColor = theme ? "white" : "#1d232a";
      detailsRef.current?.removeAttribute("open");
      prevThemeRef.current = theme;
    }
  }, [theme]);

  return(
    <ul className="menu menu-horizontal">
      <li>
        <details ref={detailsRef}>
          <summary className="text-black text-base
          lg:text-base">Theme</summary>
          <ul className="rounded-none bg-slate-300"
          onClick={() => themeHandler()}>
            <li className="text-black">
              <button type="button"
              onClick={theme ? themeHandler : undefined}
              disabled={theme}
              className={`flex items-center gap-2 px-3 py-1 rounded w-full text-left text-base
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
              className={`flex items-center gap-2 px-3 py-1 rounded w-full text-left text-base
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
  );
}

export default ThemeDropdown;