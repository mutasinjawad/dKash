import React, { useEffect, useState } from 'react'
import { ResponsiveContainer as ResoponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'
import host from '../../api'

const DashUserProfileChart = ({ token, user, setUser }) => {

    const [users, setUsers] = useState([])
    const data = [
        {name: 'User', value: 540},
        {name: 'Agent', value: 620},
        {name: 'Merchant', value: 210}
    ]

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

    const RADIAN = Math.PI / 180
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

  return (
    <div className='w-[20rem] h-[24rem] bg-white p-4 mt-4 rounded-sm border border-gray-200 flex flex-col'>
        <strong className='text-primaryColor text-[18px] font-[800]'>Users Profile</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
            <ResoponsiveContainer width='100%' height={300}>
                <PieChart width={400} height={300}>
                    <Pie 
                    data={data}
                    dataKey='value' 
                    nameKey='name' 
                    cx='50%' cy='50%' 
                    outerRadius={105} 
                    fill='#8884d8'
                    labelLine={false}
                    label={renderCustomizedLabel} >
                        {
                            data.map((_, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))
                        }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResoponsiveContainer>
        </div>
    </div>
  )
}

export default DashUserProfileChart