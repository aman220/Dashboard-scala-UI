import { Link } from "react-router-dom";
import AreaBarChart from "./AreaBarChart";
import AreaBarChartExpense from "./AreaBarChartExpense";
import AreaProgressChart from "./AreaProgressChart";

const AreaExpenseCharts = () => {
  return (
    <section className="content-area-charts">
      <AreaBarChartExpense />
      <AreaProgressChart />
      <div className="bg-white p-6 rounded-lg shadow w-full mt-5 justify-between">
        <div className="flex sm:flex-col md:flex-col lg:flex-row justify-between items-center ">
          <h2 className="font-sans font-semibold">
            Opps Dear Aman in this month{" "}
            <span className="font-mono font-bold text-xl text-green-700">
              jan
            </span>{" "}
            you did not meet your Saving Goals...
          </h2>
          <Link
            href={"/Pages/Generate"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-purple-600 text-white"
          >
            AI Suggestion
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AreaExpenseCharts;
