import React from "react";
import host from "../../api";
import { useState } from "react";
import { useEffect } from "react";

const RecentTrax = ({ token }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(host + "/admin/transactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        data.reverse();
        setTransactions(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="bg-white p-4 mt-4 rounded-md border border-gray-200 flex-1">
      <strong className="text-primaryColor text-[18px] font-[800]">
        Recent Transactions
      </strong>
      <div className="mt-3">
        <table className="w-full text-gray-700 text-[15px] m-1">
          <thead>
            <tr className="bg-gray-100">
              <td className="p-2">Sender Name</td>
              <td>Reciver Name</td>
              <td>Type</td>
              <td>Amount</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 7).map((order) => (
              <tr>
                <td className="p-2">{order.sender}</td>
                <td>{order.receiver}</td>
                <td>{order.type}</td>
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
  );
};

export default RecentTrax;
