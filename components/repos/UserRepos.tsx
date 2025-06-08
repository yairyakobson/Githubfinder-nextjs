"use client"

import { useAppSelector } from "../hooks/useAppSelector";
import { UserRepoListProps } from "../interfaces/repos/gitRepoListInterface";

import ReposList from "./ReposList";

function UserRepos({ repos }: UserRepoListProps){
  const theme = useAppSelector((state) => state.theme);

  return(
    <section className={`card rounded-xl shadow-lg
    ${theme ? "bg-slate-100" : "bg-neutral-900"}`}>
      <section className="card-body">
        <h2 className={`card-title text-3xl my-3 font-bold
        ${theme ? "text-black" : "text-white"}`}>Latest Repositories</h2>
        {repos.map((repo) =>(
          <ReposList key={repo.id} repo={repo}/>
        ))}
      </section>
    </section>
  )
}

export default UserRepos;