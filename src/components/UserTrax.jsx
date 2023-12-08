import React, { useEffect, useState } from 'react'
import Transactions from './Transactions';
import host from '../api';

const UserTrax = ({token}) => {

  return (
    <div className='bg-primaryColor w-full h-[54.9rem] py-5'>
        <Transactions token={token}/>
    </div>
  )
}

export default UserTrax