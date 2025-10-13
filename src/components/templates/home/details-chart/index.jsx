import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { generateChartData } from "./modules/data";

export default function DetailsChart() {

    const chartData = generateChartData({
        adminsLength: 4,
        productsLength: 34,
        ticketsLength: 14,
        usersLength: 85
    })


    const CustomTooltip = ({ active, payload, label }) => {
        console.log({ active, payload, label })
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip bg-white p-2 border rounded shadow">
              <p className="label">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
            </div>
          );
        }
        return null;
      };

  return (
    <div className="p-5 space-y-10 bg-white border rounded-xl primary-border-color">
      <p className="text-xl">
        <strong> آمار کلی داشبورد</strong>
      </p>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={chartData}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
