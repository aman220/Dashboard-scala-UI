import AreaSavingsChart from "../../components/dashboard/areaCharts/AreaSavingsChart";
import AresSavingsTable from "../../components/dashboard/areaTable/AresSavingsTable";

const SavingScreen = () => {
  return (
    <div className="content-area">
      <div className="content-area">
        <div>
          <h1 className="front-sans font-bold text-3xl my-3">Your Savings</h1>
        </div>
        <AreaSavingsChart/>
        <AresSavingsTable/>
        <div className="bg-white p-5">
          
        </div>
      </div>
    </div>
  );
};

export default SavingScreen;
