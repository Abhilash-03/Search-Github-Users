import axios from "axios"
import { GithubProvider } from "./context"
import { useState } from "react"
import SearchField from "./components/SearchField";
import Users from "./components/Users";
import UserRepos from "./components/UserRepos";

function App() {
  // [Todo:  You can enter any username in the search box and get the user’s profile picture, name, bio, location, followers, following, and public repos. You can also click on the profile picture to see the user’s repositories, along with their names, descriptions, languages, and stars.]
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
      <main className='bg-gray-900 lg:h-screen flex flex-col lg:flex-row items-center justify-center'>
         <SearchField />
         {
            getUsers.length > 0 &&
         <div className="flex flex-col md:flex-row h-screen w-full place-content-end">
         <Users />
{
         getUserRepos.length > 0 && 
         <UserRepos />
         }
         </div>
         }
        
      </main>
      </GithubProvider>
    </>
  )
}

export default App
