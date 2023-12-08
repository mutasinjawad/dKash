import React, { useEffect, useState } from 'react'
import host from '../../api';

const DashStatsGrid = ({ token, user, setUser }) => {

    const [users, setUsers] = useState([])
    const [transactions, setTransactions] = useState([])

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

        fetch (host + "/admin/transactions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        })
        .then((data) => data.json())
        .then((data) => {
            setTransactions(data);
            console.log(data)
        })
        .catch((err) => {console.log(err)});
    }, [token]);

    const boxWrapper = 'bg-white rounded-md px-4 py-2 mr-4 flex-1 border border-gray-200 flex items-center'

  return (
    <div className='flex w-full'>
        <div className={boxWrapper}>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-sky-500'>
                <i class="ri-user-6-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>{users.length}</div>
                <div className='font-[500] text-[15px] text-gray-500'>Total Users</div>
            </div>
        </div>
        <div className={boxWrapper}>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-yellow-500'>
                <i class="ri-bank-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>{transactions.length}</div>
                <div className='font-[500] text-[15px] text-gray-500'>Total Transactions</div>
            </div>
        </div>
        <div className={boxWrapper}>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-green-500'>
                <i class="ri-arrow-up-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>0</div>
                <div className='font-[500] text-[15px] text-gray-500'>Total Send Amount</div>
            </div>
        </div>
        <div className='bg-white rounded-md px-4 py-2 flex-1 border border-gray-200 flex items-center'>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-red-500'>
                <i class="ri-arrow-down-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>0</div>
                <div className='font-[500] text-[15px] text-gray-500'>Total Cashout Amount</div>
            </div>
        </div>
    </div>
  )
}

export default DashStatsGrid