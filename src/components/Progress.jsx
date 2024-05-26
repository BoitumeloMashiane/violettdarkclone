import React from "react";

import { PieChart, Pie, Cell } from "recharts";

const data2 = [
	{ name: "Group A", value: 800 },
	{ name: "Group B", value: 300 },
];

const COLORS = ["#CE4CE6", "#666"];

export default function PieChartComp() {
	return (
		<div className="flex items-center">
			<PieChart width={60} height={60}>
				<Pie
					data={data2}
					cx={25}
					cy={25}
					innerRadius={18}
					outerRadius={22}
					paddingAngle={0}
					dataKey="value"
					stroke="none"
				>
					{data2.map((entry, entryindex) => (
						<Cell
							key={`cell-${entry}`}
							fill={COLORS[entryindex % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
			<h2 className="text-2xl ml-4">
				+13%{" "}
				<span className="block text-xs text-[#888] font-bold ml-1">
					Earning
				</span>
			</h2>
		</div>
	);
}
