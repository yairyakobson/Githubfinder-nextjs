"use client"

import { FaCodepen, FaUserFriends, FaUsers } from "react-icons/fa";

import { GithubDataProps } from "@/components/interfaces/user/dataInterfaces/githubDataInterface";
import { useAppSelector } from "@/components/hooks/useAppSelector";

export const UserGithubData = ({
    followers,
    following,
    public_repos
}: GithubDataProps) =>{
  const theme = useAppSelector((state) => state.theme);

  return(
    <section className={`stats w-full py-5 my-6 rounded-xl shadow-md
    ${theme ? "bg-slate-100" : "bg-neutral-900"}`}>
      <section className="grid grid-cols-1
      md:grid-cols-3">
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaUsers className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className={`stat-title pr-5 pro-data
          ${theme ? "text-black" : "text-white"}
          md:text-xl md:font-bold`}>Followers</section>
          <section className={`stat-value pr-5 text-3xl
          ${theme ? "text-black" : "text-white"}
          md:text-4xl md:mt-1`}>
            {followers}
          </section>
        </section>
        
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaUserFriends className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className={`stat-title pr-5 pro-data
          ${theme ? "text-black" : "text-white"}
          md:text-xl md:font-bold`}>Following</section>
          <section className={`stat-value pr-5 text-3xl
          ${theme ? "text-black" : "text-white"}
          md:text-4xl md:mt-1`}>
            {following}
          </section>
        </section>
    
        <section className="stat">
          <section className="stat-figure text-secondary mt-2">
            <FaCodepen className="text-[2.7rem]
            md:text-5xl md:mt-5"/>
          </section>
          <section className={`stat-title pr-5 pro-data
          ${theme ? "text-black" : "text-white"}
          md:text-xl md:font-bold`}>Public Repos</section>
          <section className={`stat-value pr-5 text-3xl
          ${theme ? "text-black" : "text-white"}
          md:text-4xl md:mt-1`}>
            {public_repos}
          </section>
        </section>
      </section>
    </section>
  )
}