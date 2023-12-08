import React from 'react'
import DashChart from './DashChart'
import RecentTrax from './RecentTrax'

const TransView = ({ token }) => {
  return (
    <div className="flex flex-col mx-4">
        <DashChart />
        <RecentTrax token={token}/>
    </div>
  )
}

export default TransView