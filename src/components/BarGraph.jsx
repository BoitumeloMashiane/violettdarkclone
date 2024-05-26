import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
];

const COLORS = ["#CE57D0", "#FA4A6F"];

export default function BarGraph() {
  return (
    <ResponsiveContainer width="100%" height="80%">
        <BarChart
        data={data}
        >
        <YAxis />
        <CartesianGrid strokeDasharray="1" />
        <Tooltip  />
        <Bar dataKey="uv" barSize={150} fill='#CE57D0' radius={[10, 10, 2, 2]}/>
        </BarChart>
    </ResponsiveContainer>
  );
}
