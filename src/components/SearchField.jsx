import {useState} from 'react'
import { useGithub } from '../context';
import logo from '../logo.png'
const SearchField = () => {
   const [users, setUsers] = useState('');
   const { getGithubUser } = useGithub();

   const handleSubmit = (e) => {
     e.preventDefault();
     getGithubUser(users);
     setUsers('');

   }

  return (
    <form className="lg:w-2/4 w-full flex flex-col items-center relative px-4" onSubmit={handleSubmit}>
    <img src={logo} alt={logo} className='w-[100px] h-[100px] rounded-full mt-4' />
    <h1 className="text-2xl lg:text-5xl sm:text-4xl font-extrabold font-serif text-center text-slate-100 py-4">Search Github Users</h1>
    <input type="text" placeholder="Enter github username" className="h-16 w-full mt-4 ml-4 px-4 py-5 sm:text-2xl text-sm rounded-full outline-none font-mono hover:bg-slate-800 hover:border border-white hover:text-white focus:bg-slate-800 focus:text-white focus:border" value={users} onChange={(e) => setUsers(e.target.value)} required />
    <button type="submit" className="text-white sm:text-xl text-sm bg-gray-700 h-16 sm:px-4  py-3 sm:w-1/4 w-1/3 mt-2 rounded-full ring-2 ring-red-900 w-18 absolute bottom-0 right-2 hover:bg-gray-800 font-bold focus:bg-gray-800">Search</button>
    </form>

  )
}

export default SearchField
