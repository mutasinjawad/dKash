import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import defaultPic from '../assets/profile.png';
import UserMsgBtn from "./UserMsgBtn";
import host from "../api";

const UserHome = ({ token, user, setUser }) => {
  const [transactions, setTransactions] = useState([]);
  const [profilePicSrc] = useState(defaultPic);

  useEffect(() => {
    fetch(host + "/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
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
      <div className="flex justify-between px-[230px] py-[50px] w-full h-full">
          <div>
            <div className="flex items-center">
              <img id='profilePic' className='w-[100px] rounded-full my-[20px] mr-[50px]' src={user.picture ? user.picture : profilePicSrc} alt="/" />
              <p className="font-[600] text-[40px] text-smallTextColor mb-[20px]">{user.name}</p>
            </div>
            <h1 className="font-[700] text-[15px] p-2">BALANCE</h1>
            <div className="flex items-center">
              <p className="font-[600] text-[50px]">&#2547; {user.balance}</p>
              <h1 className="ml-[10px] mt-[17px] text-[25px] font-[400] text-gray-600">BDT</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center mb-[40px]">
              {/* Add Money */}
              {user.type === 'agent' && (<Link to="/add">
                <div className="mr-10 sm:mt-0">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                      Add Money <i class="ri-map-pin-add-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>)}
              {/* send Money */}
              {user.type !== 'merchant' && (<Link to="/send">
                <div className="mr-10">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                      Send Money <i class="ri-send-plane-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>)}
              {/* Cashout */}
              <Link to="/cashout">
                <div className="mr-10 sm:mt-0">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                      Cashout <i class="ri-logout-circle-r-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>
            {/* Recharge */}
            {user.type !== "agent" && user.type !== "marchant" && (
                  <Link to="/recharge">
                      <div className="sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                              Mobile Recharge <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}
            </div>
            <div className="flex justify-center">
              {/* Payment */}
              {user.type !== "agent" && (
                  <Link to="/payment">
                      <div className="sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                              Payment <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}
              {/* Loan */}
                {user.type !== "agent" && user.type !== "marchant" && (
                  <Link to="/loan">
                      <div className="ml-10 sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[150px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[14px] group-hover:text-white">
                              Loan <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}

             </div>

          </div>
        
      </div>

      {/* Transaction */}
        <div className="flex flex-col px-[230px] h-[524px] w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
          <div className='bg-white p-4 m-4 mb-2 rounded-md border border-gray-200'>
            <div className="flex justify-between">
                <strong className='flex text-primaryColor justify-center text-[24px] font-[800]'>Recent Transactions</strong>
                <Link to ="/transactions">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[65px] h-[40px] rounded-xl shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[12px] group-hover:text-white">
                      View All
                    </h3>
                  </div>
                </Link>
            </div>
            <div className='mt-3'>
              <table className='w-full text-gray-700'>
                <thead>
                  <tr className=' bg-gray-100 text-[20px] font-[700]'>
                    <td className='p-2'>Sender Name</td>
                    <td>Reciver Name</td>
                    <td>Type</td>
                    <td>Amount</td>
                    <td>Time</td>
                  </tr>
                </thead>
                <tbody>
                  {transactions.slice(0, 9).map((order) => (
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
          {/* <Transactions token={token} user={user} setUser={setUser} /> */}
          <div className='fixed flex bottom-32 right-36'>
            <UserMsgBtn token={token} user={user} setUser={setUser} />
          </div>
        </div>
    </div>
  );
};

export default UserHome;
