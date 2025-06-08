"use client"

import Link from "next/link";

import { useAppSelector } from "../hooks/useAppSelector";
import { GithubSingleUserProps } from "../interfaces/user/githubSingleUserInterface";

function UsersItem({ user: { login, avatar_url } }: GithubSingleUserProps){
  const theme = useAppSelector((state) => state.theme);

  return(
    <section className={`card shadow-md text-2xl
    ${theme ? "bg-slate-100" : "bg-neutral-900"}`}>
      <section className="card-body flex-row items-center space-x-3">
        <section>
          <section>
            <section className="rounded-full w-14 h-14">
              <img src={avatar_url} alt="Profile"
              className="rounded-full"/>
            </section>
          </section>
        </section>

        <section>
          <Link href={`/user/${login}`}
          target="_blank"
          className={`card-title mb-5
          ${theme ? "text-black" : "text-white"}
          md:mb-8`}>{login}</Link>
        </section>
      </section>

      <Link href={`/user/${login}`}
      target="_blank"
      className={`btn btn-md absolute bottom-0 right-1 text-base
      ${theme && "btn-outline btn-neutral"}
      md:btn-sm md:text-xs`}>Visit Profile</Link>
    </section>
  );
}

export default UsersItem;