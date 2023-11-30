import React from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

const DashChart = () => {

    const data = [
        {
            name: 'Jan',
            Expense: 4000,
            Income: 2400
        },
        {
            name: 'Feb',
            Expense: 3000,
            Income: 1398
        },
        {
            name: 'Mar',
            Expense: 2000,
            Income: 9800
        },
        {
            name: 'Apr',
            Expense: 2780,
            Income: 3908
        },
        {
            name: 'May',
            Expense: 1890,
            Income: 4800
        },
        {
            name: 'Jun',
            Expense: 2390,
            Income: 3800
        },
        {
            name: 'July',
            Expense: 3490,
            Income: 4300
        },
        {
            name: 'Aug',
            Expense: 2000,
            Income: 9800
        },
        {
            name: 'Sep',
            Expense: 2780,
            Income: 3908
        },
        {
            name: 'Oct',
            Expense: 1890,
            Income: 4800
        },
        {
            name: 'Nov',
            Expense: 2390,
            Income: 3800
        },
        {
            name: 'Dec',
            Expense: 3490,
            Income: 4300
        }
    ]

  return (
    <div className='h-[24rem] bg-white p-4 mt-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-primaryColor text-[18px] font-[800]'>Transactions</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart 
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: -10,
                        bottom: 0
                    }}>
                    <CartesianGrid strokeDasharray="3 3 0 0" />
                    <XAxis dataKey="name" stroke="#000000" />
                    <YAxis stroke="#000000" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Expense" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default DashChart