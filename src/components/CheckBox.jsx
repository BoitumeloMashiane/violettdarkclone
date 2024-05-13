import React from "react";

export default function CheckBox({ label, register, required, name }) {
	return (
		<div className="relative flex">
			<input
				type="checkbox"
				className="appearance-none 
      w-5 h-5 border 
      rounded-md border-white 
      cursor-pointer  
      checked:bg-white checked:text-pink-600 checked:after:content-['✔'] checked:after:absolute checked:after:top-2.5 checked:after:left-1 mt-3"
				{...register(name, { required })}
			/>
			<p className="text-white font-bold ml-4 mt-2.5">{label}</p>
		</div>
	);
}
