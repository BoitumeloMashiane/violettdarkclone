import React from "react";
import { Link } from "react-router-dom";
import {
	HomeIcon,
	InventoryIcon,
	SettingsIcon,
	LogoutIcon,
	OrdersIcon,
	WalletIcon,
	CalenderIcon,
	DashboardIcon,
} from "../images";

export default function Aside() {
	const navList = [
		{ name: "Home", link: "/root/home", img: HomeIcon },
		{ name: "Dashboard", link: "/root/dashboard", img: DashboardIcon },
		{ name: "Wallet", link: "/root/wallet", img: WalletIcon },
		{ name: "Products", link: "/root/products", img: InventoryIcon },
		{ name: "Calendar", link: "/root/calendar", img: CalenderIcon },
		{ name: "Orders", link: "/root/orders", img: OrdersIcon },
	];

	const navList2 = [
		{ name: "Settings", link: "", img: SettingsIcon },
		{ name: "Logout", link: "", img: LogoutIcon },
	];

	return (
		<nav className="max-w-[104px] flex-1 bg-[#131313] text-white">
			<ul className="h-full flex flex-col justify-evenly">
				{navList.map((item) => (
					// TODO: Make a NavListItem component
					<li
						key={item.name}
						className="w-full py-2 hover:border-r-2 hover:border-[#CE57D0] active:border-[#CE57D0] focus:border-[#CE57D0]"
					>
						<Link to={item.link}>
							<img
								src={item.img}
								alt={item.name}
								className="hover:brightness-200 mx-auto"
							/>
						</Link>
					</li>
				))}
				<li className="h-4" />
				{navList2.map((item) => (
					<li
						key={item.name}
						className="w-full py-2 hover:border-r-2 hover:border-[#CE57D0] active:border-[#CE57D0] focus:border-[#CE57D0]"
					>
						<Link to={item.link}>
							<img
								src={item.img}
								alt={item.name}
								className="hover:brightness-200 mx-auto"
							/>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
