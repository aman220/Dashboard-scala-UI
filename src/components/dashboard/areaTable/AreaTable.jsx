import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const TABLE_HEADS = ["Type", "Id", "Date", "Description", "Amount", "Action"];

const AreaTable = () => {
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    getRecentTransaction();
  }, []);

  const getRecentTransaction = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/transaction/getRecentTransaction",
        {
          userId: "2",
        }
      );
      if (response.data.success) {
        setRecentTransactions(response.data.transaction);
      } else {
        console.error(
          "Failed to fetch recent transactions:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error fetching recent transactions:", error.message);
    }
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Recent Transactions</h4>
      </div>
      <div className="data-table-diagram">
        {recentTransactions.length === 0 ? (
          <p>Error While Fetching Recent Transaction's</p>
        ) : (
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTransactions?.map((transaction) => (
                <tr key={transaction.id}>
                  {transaction.type === "expense" ? (
                    <td>
                      <span className="font-sans font-semibold bg-red-600 p-2 px-2 text-white rounded-xl">
                        {transaction.type}
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="font-sans font-semibold bg-green-600 p-2 px-2 text-white rounded-xl">
                        {transaction.type}
                      </span>
                    </td>
                  )}

                  <td>{transaction.id}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <span className="bg-slate-400 p-2 px-2 text-black rounded-lg text-sm">
                      {transaction.description}
                    </span>
                  </td>
                  {transaction.type === "expense" ? (
                    <td>
                      <span className="font-sans font-bold  p-2 px-2 text-red-600 rounded-xl">
                        ${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="font-sans font-bold  p-2 px-2 text-green-600 rounded-xl">
                        ${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                  )}
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default AreaTable;
