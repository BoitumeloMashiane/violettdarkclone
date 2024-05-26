import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Page A",
		uv: 500,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 350,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 300,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 100,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 200,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 450,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 600,
		pv: 4300,
		amt: 2100,
	},
];

export default function LineGraph() {
	return (
		<ResponsiveContainer aspect={1.8}>
			<LineChart data={data} margin={{ left: -40, bottom: -20, right: 20 }}>
				<YAxis tick={false} dataKey="" />
				<XAxis tick={false} dataKey=" " />
				<Tooltip />
				<Line type="monotone" dataKey="uv" stroke="#CE57D0" strokeWidth="3px" />
			</LineChart>
		</ResponsiveContainer>
	);
}
