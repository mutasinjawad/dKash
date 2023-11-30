import React from 'react'
import {getOrderStatus} from './GetStatus'

const RecentTrax = () => {

  const recentOrderData = [
    {
      id: '1',
      product_id: '4324',
      customer_id: '23143',
      customer_name: 'Shirley A. Lape',
      order_date: '2022-05-17T03:24:00',
      order_total: '$435.50',
      current_order_status: 'PLACED',
      shipment_address: 'Cottage Grove, OR 97424'
    },
    {
      id: '7',
      product_id: '7453',
      customer_id: '96453',
      customer_name: 'Ryan Carroll',
      order_date: '2022-05-14T05:24:00',
      order_total: '$96.35',
      current_order_status: 'CONFIRMED',
      shipment_address: 'Los Angeles, CA 90017'
    },
    {
      id: '2',
      product_id: '5434',
      customer_id: '65345',
      customer_name: 'Mason Nash',
      order_date: '2022-05-17T07:14:00',
      order_total: '$836.44',
      current_order_status: 'SHIPPED',
      shipment_address: 'Westminster, CA 92683'
    },
    {
      id: '3',
      product_id: '9854',
      customer_id: '87832',
      customer_name: 'Luke Parkin',
      order_date: '2022-05-16T12:40:00',
      order_total: '$334.50',
      current_order_status: 'SHIPPED',
      shipment_address: 'San Mateo, CA 94403'
    },
    {
      id: '4',
      product_id: '8763',
      customer_id: '09832',
      customer_name: 'Anthony Fry',
      order_date: '2022-05-14T03:24:00',
      order_total: '$876.00',
      current_order_status: 'OUT_FOR_DELIVERY',
      shipment_address: 'San Mateo, CA 94403'
    },
    {
      id: '5',
      product_id: '5627',
      customer_id: '97632',
      customer_name: 'Ryan Carroll',
      order_date: '2022-05-14T05:24:00',
      order_total: '$96.35',
      current_order_status: 'DELIVERED',
      shipment_address: 'Los Angeles, CA 90017'
    }
  ]

  return (
    <div className='bg-white p-4 mt-4 rounded-md border border-gray-200 flex-1'>
        <strong className='text-primaryColor text-[18px] font-[800]'>Recent Transactions</strong>
        <div className='mt-3'>
          <table className='w-full text-gray-700 text-[15px] m-1'>
            <thead>
              <tr className='bg-gray-100'>
                <td className='p-2'>ID</td>
                <td>Product ID</td>
                <td>Customer ID</td>
                <td>Customer Name</td>
                <td>Order Date</td>
                <td>Order Total</td>
                <td>Shipment Address</td>
                <td>Order Status</td>
              </tr>
            </thead>
            <tbody>
              {recentOrderData.map((order) => (
                <tr key={order.id}>
                  <td className='p-2'>#{order.id}</td>
                  <td>{order.product_id}</td>
                  <td>{order.customer_id}</td>
                  <td>{order.customer_name}</td>
                  <td>{new Date(order.order_date).toLocaleDateString()}</td>
                  <td>{order.order_total}</td>
                  <td>{order.shipment_address}</td>
                  <td>{getOrderStatus(order.current_order_status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default RecentTrax