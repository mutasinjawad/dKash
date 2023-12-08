import React from 'react'
import DashUserProfileChart from "./DashUserProfileChart";
import NewUser from "./NewUser";
import host from '../../api';
import defaultPic from '../../assets/profile.png';
import { useEffect } from 'react';
import { useState } from 'react';

const UserView = ({ token }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch (host + "/admin/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
    })
    .then((data) => data.json())
    .then((data) => {
        setUsers(data);
        console.log(data)
    })
    .catch((err) => {console.log(err); console.log(token)});
  }, [token]);

  return (
    <div className='flex flex-row mx-4'>
      <div className='bg-white p-10 mt-4 mr-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-primaryColor text-[20px] font-[800]'>Users</strong>
        <div className='mt-8 flex flex-col gap-5'>
            {users.map((user) => (
                <div className='flex hover:no-underline w-full justify-between border-b pb-3'>
                  <div className='w-16 h-16 min-w-10 mr-7 bg-gray-200 rounded-full overflow-hidden'>
                      <img className='w-full h-full' src={user.picture ? user.picture : defaultPic} />
                  </div>
                  <div className='ml-4 flex justify-between w-full'>
                    <div className='flex flex-col items-start justify-center'>
                      <p className='text-[22px] font-[800] text-gray-700'>{user.phone}</p>
                      <p className='text-[17px] font-[500] text-gray-700'>{user.name}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <p className='text-[17px] text-gray-700'>{user.email}</p>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <DashUserProfileChart />
        <NewUser token={token}/>
      </div>
    </div>
  )
}

export default UserView