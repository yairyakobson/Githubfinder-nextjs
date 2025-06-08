"use client"

import type { ProfessionalDataProps } from "../../interfaces/user/dataInterfaces/professionalDataInterface";
import { useAppSelector } from "@/components/hooks/useAppSelector";

export const UserProfessionalData = ({
    blog,
    twitter_username,
    location,
}: ProfessionalDataProps) =>{
  const theme = useAppSelector((state) => state.theme);

  return(
    <section className="stats w-full rounded-xl shadow-md">
      <section className={`grid grid-cols-1
      ${theme ? "bg-slate-100" : "bg-neutral-900"}
      md:${!location || !blog || !twitter_username ? "grid-cols-2" : "grid-cols-3"}`}>
        {location && (
          <section className="stat">
            <section className={`stat-title pro-data
            ${theme ? "text-black" : "text-white"}
            md:text-xl md:font-bold`}>Location</section>
            <section className={`stat-value text-xl mt-2
            ${theme ? "text-black" : "text-white"}
            md:text-xl`}>{location}</section>
          </section>
        )}
        {blog && (
          <section className="stat">
            <section className={`stat-title pro-data
            ${theme ? "text-black" : "text-white"}
            md:text-xl md:font-bold`}>Website</section>
            <section className={`stat-value text-xl mt-2
            ${theme ? "text-black" : "text-white"}
            md:text-xl`}>
              <a href={`https://${blog}`}
              target="_blank"
              rel="noreferrer">{blog}
              </a>
            </section>
          </section>
        )}
        {twitter_username && (
          <section className="stat">
            <section className={`stat-title pro-data
            ${theme ? "text-black" : "text-white"}
            md:text-xl md:font-bold`}>Twitter</section>
            <section className={`stat-value text-xl mt-2
            ${theme ? "text-black" : "text-white"}
            md:text-xl`}>
              <a href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer">{twitter_username}
              </a>
            </section>
          </section>
        )}
      </section>
    </section>
  )
}