import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import host from "../api";

const UserHome = ({ token, user, setUser }) => {
  const [transactions, setTransactions] = useState([]);
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
      <div className="flex justify-between px-[230px] my-[80px] w-[full]">
        <div>
          <h1 className="font-[600] text-[20px] p-2">BALANCE</h1>
          <p className="font-[700] text-[80px]">&#2547; {user.balance} BDT</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-[40px]">
            {/* Add Money */}
            {user.type !== 'user' &&(<Link to="/add">
              <div className="mr-10 sm:mt-0">
                <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300">
                  <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                    Add Money <i class="ri-map-pin-add-line"></i>
                  </h3>
                </div>
              </div>
            </Link>)}
            {/* send Money */}
            <Link to="/send">
              <div className="">
                <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300">
                  <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                    Send Money <i class="ri-send-plane-line"></i>
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            {/* Cashout */}
            <Link to="/cashout">
              <div className="mr-10 sm:mt-0">
                <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300">
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
                        <div className="flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300">
                        <h3 className="text-primaryColor font-[500] text-[17px] group-hover:text-white">
                            Payment <i class="ri-secure-payment-line"></i>
                        </h3>
                        </div>
                    </div>
                </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-[230px] bg-smallTextColor h-[518px] w-full">
        <h1 className="font-[600] text-[40px] text-white pt-10">RECENT</h1>
        <div className="mt-[60px]">
          <table className="text-white bg-transparent">
            <thead>
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


        {/* <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
            <table class="w-full">
                <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Age</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Date</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr class="text-gray-700" key={transaction.date}>
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">{transaction.sender}</p>
                        <p class="text-xs text-gray-600">{transaction.sender}</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">22</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">6/4/2000</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">Stevens</p>
                        <p class="text-xs text-gray-600">Programmer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-md font-semibold border">27</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Nora</p>
                        <p class="text-xs text-gray-600">Designer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-md font-semibold border">17</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnacceptable </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Ali</p>
                        <p class="text-xs text-gray-600">Programmer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">23</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Khalid</p>
                        <p class="text-xs text-gray-600">Designer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">20</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Nasser</p>
                        <p class="text-xs text-gray-600">Pen Tester</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">29</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Mohammed</p>
                        <p class="text-xs text-gray-600">Web Designer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">38</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Saad</p>
                        <p class="text-xs text-gray-600">Data</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">19</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold">Sami</p>
                        <p class="text-xs text-gray-600">Developer</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 border text-md font-semibold">21</td>
                    <td class="px-4 py-3 border text-xs">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section> */}
    </div>
  );
};

export default UserHome;
