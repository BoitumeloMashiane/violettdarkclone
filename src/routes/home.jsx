import React from "react";
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
import { useForm } from "react-hook-form";
import Switch from "../components/Switch";
import LineGraph from "../components/LineGraph";
import Progress from "../components/Progress";
import PieGraph from "../components/PieGraph";
import SubmitButton from "../components/SubmitButton";

export default function home() {
	const { register, handleSubmit } = useForm();

	return (
		<main className="flex flex-col flex-1 p-10 justify-evenly">
			<h1 className="text-3xl">What's new</h1>
			<article className="grid grid-cols-6 grid-rows-8 gap-4 *:bg-[#333] *:rounded-md">
				<article className="col-span-2 row-span-8 flex flex-col p-6">
					<header className="flex justify-between mb-10">
						<img src={CalenderIcon} alt="" className="hover:brightness-200" />
						<img src={Move} alt="" className="hover:brightness-200" />
					</header>
					<p className="text-[#888888] text-xl">
						Meet Mr. Raul Atwood in the office after 1 Hour
					</p>
					<footer className="flex mt-auto justify-between">
						<p className="text-2xl">
							16 Apr
							<span className="block text-xs text-[#888888]">Monday</span>
						</p>
						<ul className="flex mt-auto *:mr-4">
							<li>
								<img
									src={GotoIcon}
									alt=""
									className="h-5 w-5 hover:brightness-200"
								/>
							</li>
							<li>
								<img
									src={Check}
									alt=""
									className="h-4 w-4 hover:brightness-200"
								/>
							</li>
							<li>
								<img
									src={MoreIcon}
									alt=""
									className="h-4 w-4 hover:brightness-200"
								/>
							</li>
						</ul>
					</footer>
				</article>
				<article className="row-span-5 col-start-3 flex flex-col p-6">
					<header className="flex justify-between mb-10">
						<img src={CoinIcon} alt="" className="hover:brightness-200" />
						<img src={Move} alt="" className="hover:brightness-200" />
					</header>
					<p className="mt-auto text-3xl">
						&#36;12,487
						<span className="block text-xs text-[#888]">+864 comp</span>
					</p>
					<hr className="bg-[#444] h-px border-0 dark:bg-[#444] mb-2" />
					<footer className="flex">
						<img
							src={SkewIcon}
							alt=""
							className="h-4 w-4 hover:brightness-200"
						/>
						<span className="ml-2 font-bold text-xs">+24%</span>
						<img
							src={MoreIcon}
							alt=""
							className="ml-auto h-4 w-4 hover:brightness-200"
						/>
					</footer>
				</article>
				<article className="row-span-4 col-start-4 flex flex-col p-6 justify-between bg-gradient-to-bl from-[#DE4DCB] to-[#CE4CE6]">
					<img
						src={Move}
						alt=""
						className="h-6 w-6 ml-auto brightness-200 hover:brightness-100"
					/>
					<PieGraph />
					<p className="mt-auto text-3xl">
						35%
						<span className="block text-xs text-white">Desktop Users</span>
					</p>
				</article>
				<article className="col-span-2 row-span-6 col-start-5 flex flex-col justify-evenly p-6">
					<header className="flex justify-between mb-10">
						<img src={CoinIcon} alt="" className="hover:brightness-200" />
						<img src={Move} alt="" className="hover:brightness-200" />
					</header>
					<LineGraph />
					<footer>
						<ul className="flex justify-around">
							<Progress />
							<span className="border-l h-10 border-gray-500" />
							<Progress />
						</ul>
					</footer>
				</article>
				<article className="row-span-2 col-start-5 row-start-7 p-6 flex flex-col justify-between">
					<SubmitButton icon={AddIcon} altIcon="add Icon" fady />
					<p>Add a tile</p>
				</article>
				<article className="row-span-2 col-start-6 row-start-7 p-6 flex flex-col justify-between">
					<SubmitButton icon={SettingCIcon} altIcon="add Icon" fady />
					<p>Settings</p>
				</article>
				<article className="row-span-4 col-start-4 row-start-5 flex flex-col p-6">
					<header className="flex justify-between mb-10">
						<img src={CartIcon} alt="" className="hover:brightness-200" />
						<img src={Move} alt="" className="hover:brightness-200" />
					</header>
					<p className="mt-auto text-3xl">New Sale!</p>
					<hr className="bg-[#444] h-px border-0 dark:bg-[#444] mb-2" />
					<footer className="flex justify-between items-center">
						<p>
							Alexandira
							<span className="ml-2 font-bold text-xs block">+24.685</span>
						</p>
						<img
							src={ForwardIcon}
							alt=""
							className="ml-auto h-4 w-4 hover:brightness-200"
						/>
					</footer>
				</article>
				<article className="row-span-3 col-start-3 row-start-6 flex flex-col p-6 justify-between">
					<header>
						<h1>Dark Mode</h1>
						<p className="block text-xs text-[#888]">Enabled</p>
					</header>
					<footer className="flex justify-between">
						<img
							src={MoreIcon}
							alt=""
							className="h-4 w-4 hover:brightness-200 my-auto"
						/>
						<Switch label="" register={register} name="Switch" secondary />
					</footer>
				</article>
			</article>
		</main>
	);
}
