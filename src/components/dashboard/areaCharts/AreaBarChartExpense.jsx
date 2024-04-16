import { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowDownLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";
import axios from "axios";

const AreaBarChartExpense = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  const getMonthSaving = async () => {
    const id = localStorage.getItem("key");
    try {
      const response = await axios.post(
        `http://localhost:7000/api/v1/transaction/financialData/${id}`
      );
      if (response.data.success) {
        // Assuming the response.data.data is an array of objects
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        console.log("error hai if wale main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMonthSaving();
  }, []);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Expenses Chart</h5>
        <div className="chart-info-data">
          <div className="info-data-value">₹50,000</div>
          <div className="text-red-500 flex flex-row items-center gap-1">
            <FaArrowDownLong />
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month" // Assuming your data key for month is 'month'
              tickSize={0}
              axisLine={false}
              tick={{
                fill: "#676767",
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: "#676767",
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="totalExpense" // Assuming your data key for expenses is 'totalExpense'
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChartExpense;
