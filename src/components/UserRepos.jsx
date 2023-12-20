import { useEffect, useState } from 'react';
import { useGithub } from '../context'

const UserRepos = () => {
    const {getUserRepos} = useGithub();
    const [userDetail, setUserDetail] = useState([]);

    const handleDtl = () => {
        getUserRepos.map(user => setUserDetail(user.owner));
    }
    useEffect(() => {
        handleDtl();
    }, [getUserRepos])
  return (
    <>
    {
        getUserRepos.length > 0 && 
        <div className="bg-slate-700 h-full p-3 w-3/4 flex flex-col  rounded-lg my-8 overflow-auto overflow-x-hidden">
            <div className="userinfo flex flex-col items-center mt-3 font-serif space-y-2">
            <img src={userDetail?.avatar_url} alt="userimg" className='h-[90px] w-[90px] rounded-full border-2 border-white' />
            <h1 className='text-4xl text-slate-200 text-center font-bold'>{userDetail?.login}</h1>
            </div>
          <h1 className="text-4xl text-slate-200 text-center font-bold font-mono my-2">Total Repos: <span className="font-serif text-5xl text-teal-400">{getUserRepos.length}</span></h1>
        {
          getUserRepos.map(repo => (
              <div key={repo.id} className="px-5 py-3 border-b-2 border-gray-500">
            <div className="bg-gray-900 rounded-lg py-10 p-3">
            <h2 className="text-2xl text-gray-300 font-bold font-mono"><em className="text-teal-500 font-bold">Project Name:</em> {repo.name}</h2>
            <p className="text-xl text-white"><em className="text-teal-500 font-bold">Description:</em> {repo.description ? repo.description : "No Description"}</p>
            <div className="btns space-x-3 mt-3">
            <a  href={repo.homepage} target='_blank' rel="noreferrer">
                {
                repo.homepage ?
                <button className='bg-slate-700 px-3 py-4 rounded-full text-xl  text-white hover:bg-teal-400 hover:text-black font-serif font-bold ring-2 ring-teal-400'>Project Preview</button>
                : null
            }
                </a>
            <a  href={repo.html_url} target='_blank' rel="noreferrer">
                <button className='bg-slate-700 px-3 py-4 rounded-full text-xl text-white hover:bg-teal-400 hover:text-black font-serif font-bold ring-2 ring-teal-400'>Source Code</button>
            </a>
            </div>
            </div>
          </div>
          ))
        }

      </div>
      }
      </>
  )
}

export default UserRepos
