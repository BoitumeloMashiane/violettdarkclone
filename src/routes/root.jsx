import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function root() {
	return (
		<div className="w-full bg-red-600 min-h-screen flex flex-col">
			<Header />
			<main className="w-full flex-1 flex bg-stone-700">
				<Aside />
				<div className="flex flex-1 bg-[#222222] text-white">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
