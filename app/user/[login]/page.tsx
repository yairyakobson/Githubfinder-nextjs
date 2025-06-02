"use client"

import { useParams } from "next/navigation";
import Link from "next/link";

import { UserGithubData } from "@/components/pages/userPages/userGithubData";
import { UserPersonalData } from "@/components/pages/userPages/userPersonalData";
import { UserProfessionalData } from "@/components/pages/userPages/userProfessionalData";
import { useGetUserAndReposQuery } from "@/components/redux/api/services/githubApi";

import Spinner from "@/components/layout/Spinner";
import UserRepos from "@/components/repos/UserRepos";

export default function User(){
  const params = useParams();
  const loginParam = Array.isArray(params.login) ? params.login[0] : params.login;

  const { data, isLoading } = useGetUserAndReposQuery(loginParam!);

  if(isLoading || !data){
    return <Spinner/>
  }

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    hireable
  } = data.user

  const repos = data?.repos ?? [];

  return(
    <>
      <section className="w-full mx-auto
      lg:w-10/12">
        <section className="px-5">
          <Link href="/" replace className="btn btn-block button-text
          md:text-xl
          lg:text-lg">Back To Search
          </Link>
        </section>

        <UserPersonalData
        name={name}
        type={type}
        avatar_url={avatar_url}
        bio={bio}
        login={login}
        html_url={html_url}
        hireable={hireable}/>

        <UserProfessionalData
        blog={blog}
        twitter_username={twitter_username}
        location={location}/>

        <UserGithubData
        followers={followers}
        following={following}
        public_repos={public_repos}/>

        <UserRepos repos={repos}/>
      </section>
    </>
  );
};