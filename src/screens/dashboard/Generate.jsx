import { useState } from "react";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const Generate = () => {
  const[res , setRes]=  useState("");

  const getGenerateRes = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/generate",
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
    <div className="content-area">
      <div className="bg-gray-100 p-5">
        <div className="font-sans align-center text-center w-full">
          <h1 className="font-bold  text-2xl">AI Suggestion</h1>
          <h3 className="text-slate-500 font-sans font-medium text-lg my-5">
            Your one solution to increase savings and limit expenses.
          </h3>
        </div>
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <div className="flex flex-row justify-between">
            <h2 className="font-sans lg:text-xl font-bold sm:text-sm md:text-lg">
              Click to Generate..
            </h2>
            <button className="text-white bg-black shadow-2xl shadow-slate-400 lg:p-2 rounded-lg px-2 sm:p-1 ">
              GENERATE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="font-sans text-lg font-bold">AI :</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Generate;
