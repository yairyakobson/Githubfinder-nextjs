"use client";

import { ReactNode, useEffect } from "react";
import { useParams } from "next/navigation"; 

import { useGetUserAndReposQuery } from "@/components/redux/api/services/githubApi";

export default function UserLayout({ children }: { children: ReactNode }){
  const { login } = useParams();
  const loginParam = Array.isArray(login) ? login[0] : login;

  const { data } = useGetUserAndReposQuery(loginParam!);

  useEffect(() =>{
    if(data?.user?.name){
      document.title = `${data.user.name}`;
    }
  }, [data?.user?.name]);

  return <>{children}</>;
}