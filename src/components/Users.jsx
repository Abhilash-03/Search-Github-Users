import { useGithub } from '../context';

const Users = () => {
   const { getUserRepo, getUsers } = useGithub();
  return (
    <>
    { getUsers.length > 0 &&

     <div className="bg-slate-700 h-full p-3 w-1/3 rounded-lg my-8 overflow-auto">
              <ul>
          {
            getUsers.map(user => (
               
                <li key={user.id} className="bg-gray-800 px-5 py-7 my-2 flex justify-center text-white text-2xl hover:bg-gray-900 cursor-pointer font-serif font-bold rounded-lg transition-all ease-in-out delay-150" onClick={() => getUserRepo(user.login)}>
                  <div className='flex flex-col items-center'>
                  <img src={user.avatar_url} alt={`${user?.login}-img`} className="w-[120px] h-[120px] border-2 border-gray-400 rounded-full" />
                  <p className='mt-2'>{user?.login}</p>
                <a  href={user.html_url} target='_blank' rel="noreferrer"><button className='bg-slate-700 px-3 py-4 rounded-full text-xl mt-2 hover:bg-teal-400 hover:text-black  ring-2 ring-teal-400'>Github Profile</button></a>
                  </div>
                  </li>
            ))
        }
              </ul>

        </div>}
        </>
  )
}

export default Users
