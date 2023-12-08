import React, { useEffect, useState } from 'react'
import host from '../api';

const Transactions = ({token}) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch(host + "/money/transactions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        })
          .then((data) => data.json())
          .then((data) => setTransactions(data))
          .catch((err) => console.log(err));
      }, [token]);

  return (
    <div>
        <div className='bg-white p-4 m-4 rounded-md border border-gray-200 flex-1'>
          <strong className='flex text-primaryColor justify-center text-[24px] font-[800]'>All Transactions</strong>
          <div className='mt-3'>
            <table className='w-full text-gray-700 m-1'>
              <thead>
                <tr className='bg-gray-100 text-[20px] font-[700]'>
                  <td className='p-2'>Sender Name</td>
                  <td>Reciver Name</td>
                  <td>Type</td>
                  <td>Amount</td>
                  <td>Time</td>
                </tr>
              </thead>
              <tbody>
                {transactions.map((order) => (
                  <tr className="text-[15px] font-[500]">
                    <td className='p-2'>{order.sender}</td>
                    <td>{order.receiver}</td>
                    <td className={`text-${
                      order.type === 'send_money' ? 'red' :
                      order.type === 'add_money' ? 'green' :
                      order.type === 'loan' ? 'yellow' :
                      order.type === 'loan_repay' ? 'blue' :
                      order.type === 'cashout' ? 'green' :
                      order.type === 'recharge' ? 'purple' :
                      order.type === 'payment' ? 'orange' :
                      'black'
                    }`}
                    >{order.type}</td>
                    <td>{order.amount}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    {/* <td>{order.shipment_address}</td>
                    <td>{getOrderStatus(order.current_order_status)}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default Transactions