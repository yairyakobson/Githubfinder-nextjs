"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setTheme } from "../redux/features/themeSlice";

const ThemeHydrator = () => {
  const dispatch = useAppDispatch();

  useEffect(() =>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme !== null){
      dispatch(setTheme(JSON.parse(storedTheme)));
    }
  }, [dispatch]);

  return null;
};

export default ThemeHydrator;