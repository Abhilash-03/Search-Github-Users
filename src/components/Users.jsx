import { useGithub } from '../context';

const Users = () => {
   const { getUserRepo, getUsers } = useGithub();
  return (
    <>
    { getUsers.length > 0 &&
     <a href="#repos"  className="bg-slate-700 h-full  p-3 w-full lg:w-2/3 rounded-lg my-8 overflow-auto">
     <div>
              <ul>  
          {
            getUsers.map(user => (
               
                <li key={user.id} className="bg-gray-800 px-5 py-7 my-2 flex lg:justify-center text-white sm:text-2xl md:text-lg lg:text-2xl lg:text-center text-lg hover:bg-gray-900 cursor-pointer font-serif sm:font-bold rounded-lg transition-all ease-in-out delay-150" onClick={() => getUserRepo(user.login)}>
                  <div className='flex flex-row lg:flex-col lg:items-center space-x-2'>
                  <img src={user.avatar_url} alt={`${user?.login}-img`} className="sm:w-[120px] sm:h-[120px] w-16 h-16 border-2 border-gray-400 rounded-full" />
                  <div className="flex flex-col pl-3">
                  <p className='sm:mt-2 text-center'>{user?.login}</p>
                  <a  href={user.html_url} target='_blank' rel="noreferrer"><button className='bg-slate-700 p-2 sm:px-3 sm:py-4 rounded-full sm:text-xl md:text-xs text-sm mt-2 hover:bg-teal-400 hover:text-black  ring-2 ring-teal-400'>Github Profile</button></a>
                  </div>
           
                  </div>
                  </li>
            ))
        }
              </ul>

        </div>
      </a>
        }
        </>
  )
}

export default Users
