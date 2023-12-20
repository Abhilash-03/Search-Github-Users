import axios from "axios"
import { GithubProvider } from "./context"
import { useState } from "react"
import SearchField from "./components/SearchField";
import Users from "./components/Users";
import UserRepos from "./components/UserRepos";

function App() {
   const userUrl = 'https://api.github.com/search/users?q=';
   const [getUsers, setGetUsers] = useState([]);
   const [getUserRepos, setGetUserRepos] = useState([]);

  const getGithubUser = async(users) => {
   try {
     const user = await axios.get(`${userUrl}${users}`);
     const response = user.data?.items;
     setGetUsers([...response]);
   } catch (error) {
      console.log(error.response?.data);
   }
  }

  const getUserRepo = async (username) => {
    try {
      const userRepo = await axios.get(`https://api.github.com/users/${username}/repos`);
      const response = userRepo.data;
      setGetUserRepos([...response]);
    } catch (error) {
      console.log(error?.userRepo);
    }
  }

  return (
    <>
    <GithubProvider value={{ getGithubUser, getUserRepo, getUsers, getUserRepos }}>
      <main className='bg-gray-900 h-screen flex items-center justify-center'>
         <SearchField />
         <Users />
         <UserRepos />
      </main>
      </GithubProvider>
    </>
  )
}

export default App
