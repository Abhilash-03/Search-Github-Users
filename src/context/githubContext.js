import { createContext, useContext } from "react";

export const GithubContext = createContext({
    getGithubUser : () => {},
    getUserRepos: () => {}
})

export const useGithub = () => {
    return useContext(GithubContext);
}

export const GithubProvider = GithubContext.Provider;