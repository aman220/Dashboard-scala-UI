import AreaExpenseCharts from "../../components/dashboard/areaCharts/AresExpenseCharts";
import AreaExpenseTable from "../../components/dashboard/areaTable/AreaExpenseTable";
import ExpansesAccordation from "../../components/dashboard/utils/ExpansesAccordation";

const ExpensesScreen = () => {
  return (
    <div className="content-area">
      <div>
        <h1 className="front-sans font-bold text-3xl my-3">Your Expenses</h1>
      </div>
      <AreaExpenseCharts/>
      <AreaExpenseTable/>
      <div className="bg-white p-5">
        <ExpansesAccordation />
      </div>
    </div>
  );
};

export default ExpensesScreen;
