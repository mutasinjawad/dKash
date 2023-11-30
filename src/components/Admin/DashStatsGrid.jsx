import React from 'react'

const DashStatsGrid = () => {

    const boxWrapper = 'bg-white rounded-md px-4 py-2 mr-4 flex-1 border border-gray-200 flex items-center'

  return (
    <div className='flex w-full'>
        <div className={boxWrapper}>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-sky-500'>
                <i class="ri-user-6-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>0</div>
                <div className='font-[500] text-[15px] text-gray-500'>Total Users</div>
            </div>
        </div>
        <div className={boxWrapper}>
            <div className='rounded-full h-14 w-14 text-[25px] flex items-center justify-center bg-yellow-500'>
                <i class="ri-bank-fill"></i>
            </div>
            <div className='pl-4'>
                <div className='text-[30px] font-[700]'>0</div>
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
                <div className='font-[500] text-[15px] text-gray-500'>Total Add Amount</div>
            </div>
        </div>
    </div>
  )
}

export default DashStatsGrid