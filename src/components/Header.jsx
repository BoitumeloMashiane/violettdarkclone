import React, { useState } from "react";
import {
	SearchIcon,
	MessageIcon,
	ActivityIcon,
	AddIcon,
	BackIcon,
} from "../images";
import SubmitButton from "./SubmitButton";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
	const handleDropDown = () => {
		setOpen(!isOpen);
	};

	return (
		<nav className="w-full bg-[#333333] h-[104px] flex items-center">
			<div className="h-full border-solid border-r border-r-[#444444] min-w-[104px] mr-10" />
			<form className="flex items-center w-1/2">
				<img src={SearchIcon} alt="search icon" className="mr-4 h-4 w-4" />
				<input
					type="text"
					className="border-b-2 border-[#555555] pb-3 bg-transparent w-full h-[40%] my-auto placeholder:text-[#666666] text-sm focus:outline-none text-white indent-2"
					placeholder="Search for number..."
				/>
			</form>
			<ul className="flex *:pr-8 items-center ml-auto">
				<li>
					<button type="button" className="">
						<MessageIcon className="text-[#AAAAAA] hover:text-pink-600 focus:text-pink-600 active:text-pink-600" />
					</button>
				</li>
				<li>
					<button type="button" className="">
						<ActivityIcon className="text-[#AAAAAA] hover:text-pink-600 focus:text-pink-600 active:text-pink-600" />
					</button>
				</li>
				<li>
					<SubmitButton icon={AddIcon} altIcon="add Icon" secondary />
				</li>
				<span className="border-l h-10 border-gray-500" />
				<li>
					<ProfileDropdown onClick={handleDropDown} />
				</li>
			</ul>
		</nav>
	);
}
