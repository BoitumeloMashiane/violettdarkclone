import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
	BackIcon,
	SearchIcon,
	MessageIcon,
	ActivityIcon,
	AddIcon,
	ArrowIcon,
} from "../images";
import SubmitButton from "./SubmitButton";
import ProfileDropdown from "./ProfileDropdown";

export default function NavBar() {
	const [isOpen, setOpen] = useState(false);

	const handleDropDown = () => {
		setOpen(!isOpen);
	};

	const isGettingStarted = false;
	return (
		<>
			<nav className="w-[95%] h-[12%] absolute right-0 top-0 bg-[#333333] py-6 border-white border-l">
				{isGettingStarted ? (
					<div>
						<img src={BackIcon} alt="back button" />
						<h1 className="text-white text-center">Almost There</h1>
					</div>
				) : (
					<div className="flex justify-between">
						<div className="flex w-1/2">
							<img
								src={SearchIcon}
								alt="search icon"
								className="ml-10 mr-4 h-5 mt-3"
							/>
							<input
								type="text"
								className="border-b border-trueGray-500 bg-transparent w-full"
								placeholder="Search for number..."
							/>
						</div>
						<div>
							<ul className="flex *:pr-8">
								<li>
									<img
										src={MessageIcon}
										alt="messages icon"
										className="pt-3 hover:brightness-200"
									/>
								</li>
								<li>
									<img
										src={ActivityIcon}
										alt="activity icon"
										className="pt-3 hover:brightness-200"
									/>
								</li>
								<li>
									<SubmitButton icon={AddIcon} altIcon="add Icon" secondary />
								</li>
								<li className="border-l border-gray-500" />
								<li>
									<ProfileDropdown onClick={handleDropDown} />
								</li>
							</ul>
						</div>
					</div>
				)}
			</nav>
			<div className="absolute right-0 w-auto top-[12%]">
				<ul
					className={` z-10 bg-white divide-gray-100 shadow *:py-4 *:px-8 has-[li]:hover:bg-gray-100 ${
						isOpen ? "flex flex-col" : "hidden"
					}`}
				>
					<li>
						<a href="/" className="block">
							blablabla
						</a>
					</li>
					<li>
						<a href="/" className="block">
							ggg
						</a>
					</li>
					<li>
						<a href="/" className="block">
							ttt
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

NavBar.propTypes = {};
