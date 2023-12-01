import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import defaultPic from '../assets/profile.png';
import Footer from "./Footer";
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
                  <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                      Add Money <i class="ri-map-pin-add-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>)}
              {/* send Money */}
              {user.type !== 'merchant' && (<Link to="/send">
                <div className="">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                      Send Money <i class="ri-send-plane-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>)}
            </div>
            <div className="flex justify-center">
              {/* Cashout */}
              <Link to="/cashout">
                <div className="mr-10 sm:mt-0">
                  <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                    <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                      Cashout <i class="ri-logout-circle-r-line"></i>
                    </h3>
                  </div>
                </div>
              </Link>
              {/* Payment */}
              {user.type !== "agent" && (
                  <Link to="/payment">
                      <div className="ml-10 sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                              Payment <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}
              
            </div>
             <div className="flex justify-center my-6">
              {/* Loan */}
                {user.type !== "agent" && user.type !== "marchant" && (
                  <Link to="/loan">
                      <div className="ml-10 sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                              Loan <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}
              
              {/* Recharge */}
              {user.type !== "agent" && user.type !== "marchant" && (
                  <Link to="/recharge">
                      <div className="ml-10 sm:mt-0">
                          <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                          <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                              Mobile Recharge <i class="ri-secure-payment-line"></i>
                          </h3>
                          </div>
                      </div>
                  </Link>
              )}

             </div>

          </div>
        
      </div>
      <div className="flex flex-col items-center px-[230px] h-[524px] w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
        <h1 className="font-[600] text-[40px] text-white pt-10">RECENT</h1>
        <div className="mt-[60px]">
          <table className="text-white bg-transparent">
            <thead className="bg-smallTextColor">
              <tr>
                <th className="py-2 px-4 border-b">Sender ID</th>
                <th className="py-2 px-4 border-b">Receiver ID</th>
                <th className="py-2 px-4 border-b">Transaction Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.date}>
                  <td className="py-2 px-4 border-b font-[500] text-[20px]">{transaction.sender}</td>
                  <td className="py-2 px-4 border-b font-[500] text-[20px]">{transaction.receiver}</td>
                  <td className="py-2 px-4 border-b font-[500] text-[20px]">{transaction.type}</td>
                  <td className="py-2 px-4 border-b font-[500] text-[20px]">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b font-[500] text-[20px]">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserHome;
