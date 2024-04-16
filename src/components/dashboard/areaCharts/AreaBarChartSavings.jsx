import { useContext } from "react";
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
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    Savings: 20,
   
  },
  {
    month: "Feb",
    Savings: 75,
   
  },
  {
    month: "Mar",
    Savings: 95,
    
  },
  {
    month: "April",
    Savings: 50,
   
  },
  {
    month: "May",
    Savings: 55,
  
  },
  {
    month: "Jun",
    Savings: 30,
   
  },
  {
    month: "Jul",
    Savings: 32,
   
  },
  {
    month: "Aug",
    Savings: 62,
   
  },
  {
    month: "Sep",
    // Savings: 55,
   
  },
];

const AreaBarChartSavings = () => {
  const { theme } = useContext(ThemeContext);

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
        <h5 className="bar-chart-title">Savings Chart</h5>
        <div className="chart-info-data">
          <div className="info-data-value">₹20,000</div>
          <div className="text-green-500 flex flex-row items-center gap-1">
            <FaArrowUpLong />
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
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill:  "#676767" ,
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
              dataKey="Savings"
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

export default AreaBarChartSavings;
