"use client"

import { useAppSelector } from "@/components/hooks/useAppSelector";
import type { PersonalDataProps } from "../../interfaces/user/dataInterfaces/personalDataInterface";

export const UserPersonalData = ({
    name,
    type,
    avatar_url,
    bio,
    login,
    html_url,
    hireable
}: PersonalDataProps) =>{
  const theme = useAppSelector((state) => state.theme);

  return(
    <section className="hero flex">
      <section className="hero-content flex-col
      lg:flex-row">
        <img src={avatar_url}
        className="max-w-fit rounded-lg"/>
        <section>
          <h1 className={`text-5xl font-bold
          ${theme ? "text-black" : "text-white"}`}>{name}</h1>
          <p className={`mt-6 user-data
          ${theme ? "text-black" : "text-white"}
          md:text-lg`}>Login Name: <b>{login}</b></p>
          <p className={`mt-4 user-data
          ${theme ? "text-black" : "text-white"}
          md:text-lg`}>Type of user: <b>{type}</b></p>
          <p className={`py-4 user-data
          ${theme ? "text-black" : "text-white"}
          md:text-lg`}>Description: <b>{bio}</b></p>
          <p className={`mb-4 user-data
          ${theme ? "text-black" : "text-white"}
          md:text-lg`}>Hireable: <b>{hireable ? "Yes" : "No"}</b></p>
          <a href={html_url}
          className="btn btn-primary rounded-full my-5 p-[1.4rem] button-text
          md:text-lg"
          target="_blank"
          rel="noreferrer">Visit Github Profile</a>
        </section>
      </section>
    </section>
  )
}