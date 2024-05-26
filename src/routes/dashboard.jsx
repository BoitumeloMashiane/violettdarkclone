import {
	CalenderIcon,
	GotoIcon,
	Check,
	MoreIcon,
	Move,
	CoinIcon,
	SkewIcon,
	CartIcon,
	ForwardIcon,AddIcon,
	SettingCIcon,
} from "../images";
import BarGraph from "../components/BarGraph";
import Progress from "../components/Progress";

const navList = [
	{ name: "Home"},
	{ name: "Dashboard"},
	{ name: "Wallet" },
	{ name: "Products"},
	{ name: "Calendar" },
	{ name: "Orders" },
	{ name: "Home"},
	{ name: "Dashboard"},
	{ name: "Wallet" },
	{ name: "Products"},
	{ name: "Calendar" },
	{ name: "Orders" },
];

export default function () {
	return (
		<>
			<main className="flex flex-col gap-4 flex-1 p-10 justify-evenly">
				<h1 className="text-3xl ml-2">Dashboard</h1>
				<article className="grid grid-cols-5 grid-rows-5 gap-4 *:bg-[#333] *:rounded-md flex-1">
					<article className="col-span-3 row-span-5 flex flex-col p-6 justify-around">
						<header className="flex justify-between mb-10">
							<p className="font-bold text-[#888]">Store Status</p>
							<img src={Move} alt="" className="hover:brightness-200" />
						</header>
						<BarGraph/>
						<footer>
							<ul className="flex justify-around">
								<Progress />
								<span className="border-l h-10 border-gray-500" />
								<Progress />
							</ul>
						</footer>
					</article>
					<article className="col-span-2 row-span-5 col-start-4 flex flex-col p-6 flex-1">
						<header className="flex justify-between mb-10">
							<p className="font-bold text-[#888]">Sales</p>
							<img src={Move} alt="" className="hover:brightness-200" />
						</header>
						<ul className="overflow-y-auto p-6 h-96">
							{navList.map((item) => (
								// TODO: Make a NavListItem component
								<li className="flex flex-col ">
									<div className="flex justify-between items-stretch">
										<h3 className="text-2xl ">Sylvia <span className="block text-xs text-[#888] font-bold">Allien Durrs &mdash; 11:30 AM</span></h3>
										<h3 className="text-xl ">+27.98</h3>
									</div>
									<div className="flex justify-between mb-2">
										<p className="bg-blue-400 px-2 rounded-sm text-xs font-semibold mt-2">PayPal</p>
										<img src={MoreIcon} alt="" className="h-6 w-6 hover:brightness-200" />
									</div>
									<hr className="h-[2px] my-2 bg-gray-200 border-0 bg-gray-500/[0.3]" />
								</li>
							))}
						</ul>
					</article>
				</article>
			</main>
		</>
	);
}
