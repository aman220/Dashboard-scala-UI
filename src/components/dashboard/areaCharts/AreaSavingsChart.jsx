import { Link } from "react-router-dom";
import AreaBarChartSavings from "./AreaBarChartSavings";
import AresSavingsTable from "../areaTable/AresSavingsTable";

const AreaSavingsChart = () => {
  return (
    <section className="content-area-charts">
      <AreaBarChartSavings />
      <div className="bg-white p-6 rounded-lg shadow w-full col-span-1">
        <h2 className="text-xl font-semibold mb-2">Congratulations John! 🎉</h2>
        <p className="text-gray-600 mb-4">Your Saving of the month</p>
        <div className="text-5xl font-bold text-purple-600 mt-5">₹4,000 /-</div>
      </div>
    </section>
  );
};

export default AreaSavingsChart;
