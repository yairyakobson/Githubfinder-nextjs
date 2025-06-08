"use client"

import { useLayoutEffect, useRef } from "react";

import { useAppSelector } from "@/components/hooks/useAppSelector";

export default function ThemeChanger(){
  const theme = useAppSelector((state) => state.theme);
  const prevThemeRef = useRef<boolean | null>(null);

  useLayoutEffect(() =>{
    if(prevThemeRef.current !== theme){
      document.body.style.backgroundColor = theme ? "white" : "#1d232a";
      prevThemeRef.current = theme;
    }
  }, [theme]);
  return null;
}