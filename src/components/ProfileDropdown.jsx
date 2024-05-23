import React from "react";
import { ArrowIcon } from "../images";

export default function ProfileDropdown({ onClick }) {
	return (
		<>
			<button type="button" className="flex" onClick={onClick}>
				<div className="rounded-full h-10 w-10 bg-slate-400" />
				<img src={ArrowIcon} alt="" className="pl-2" />
			</button>
			{/* <div className="dropdown">
				<button type="button" className="" onClick={handleDropDown}>
					Steps
				</button>

				<div
					id="dropdown"
					className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
						<li>
							<a href="/" className="block py-2 px-4 hover:bg-gray-100">
								blablabla
							</a>
						</li>
						<li>
							<a href="/" className="block py-2 px-4 hover:bg-gray-100">
								ggg
							</a>
						</li>
						<li>
							<a href="/" className="block py-2 px-4 hover:bg-gray-100">
								ttt
							</a>
						</li>
					</ul>
				</div>
			</div> */}
		</>
	);
}
