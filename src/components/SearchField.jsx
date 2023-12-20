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
    <form className="w-2/4 flex flex-col items-center relative px-4 " onSubmit={handleSubmit}>
    <img src={logo} alt={logo} className='w-[100px] h-[100px] rounded-full' />
    <h1 className="text-5xl font-extrabold font-serif text-center text-slate-100 py-4">Search Github Users</h1>
    <input type="text" placeholder="Enter github username" className="h-16 w-full mt-4 ml-4 px-4 py-5 text-2xl rounded-full outline-none font-mono hover:bg-slate-800 hover:border border-white hover:text-white focus:bg-slate-800 focus:text-white focus:border" value={users} onChange={(e) => setUsers(e.target.value)} required />
    <button type="submit" className="text-white text-xl bg-gray-700 h-16 px-4 py-3 w-1/4 mt-2 rounded-full ring-2 ring-red-900 w-18 absolute bottom-0 right-2 hover:bg-gray-800 font-bold focus:bg-gray-800">Search</button>
    </form>

  )
}

export default SearchField
