import { useState, useEffect } from "react";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import getUserDetails from "../../GetUser/getuser";
import axios from 'axios';

const Generate = () => {
  const [res, setRes] = useState("");
  const [user, setUser] = useState();
  const date = new Date().toLocaleDateString();
  console.log(date);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails();
        setUser(userData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, []);
  // console.log(user.totalBudget)
  // console.log(user.currentBalance)
  // console.log(user.totalExpense)

  const getGenerateRes = async () => {
    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/generate",
        {
          promt: `Please give me suggestions to limit my expenses and increase my savings my total budget for this month is ${user.totalBudget} 
          and as of now i have already spend ${user.totalExpense} amount from my budget and now i have ${user.currentBalance} remaining amount 
          in this month current date is ${date} please give me suggestions to limit my expenses and increase savings`,
        }
      );
      if (response) {
        const formattedResponse = response.data.text
        .replace(/\*\*(.*?)\*\*/g, (_, p1) => `<strong>${p1}</strong>`)
        .replace(/\./g, '. ')
        .replace(/\n/g, '<br/>');
        setRes(formattedResponse);
        console.log(response)
      } else {
        console.error(
          response.error
        );
      }
    } catch (error) {
      console.error("Error fetching recent transactions:", error.message);
    }
  };
  console.log(res);

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
            <button className="text-white bg-black shadow-2xl shadow-slate-400 lg:p-2 rounded-lg px-2 sm:p-1" onClick={getGenerateRes}>
              GENERATE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="font-sans text-lg font-bold">AI :</h2>
          <p dangerouslySetInnerHTML={{ __html: res }}></p>
        </div>
      </div>
    </div>
  );
};

export default Generate;
