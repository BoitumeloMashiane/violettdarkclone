import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function Switch({ label, name, register, primary, secondary }) {
	const linkClass = clsx(
		"peer rounded-full after:rounded-full after:border-gray-300 after:transition-all after:content-[''] peer-checked:after:translate-x-full",
		{
			"h-4 w-11 after:absolute after:-top-1 after:h-6 after:w-6 after:left-0 bg-white/[0.2] after:bg-white peer-checked:bg-white peer-focus:ring-white/[0.2]":
				primary,
			"h-6 w-10 after:absolute after:top-1 after:h-4 after:w-4 after:left-1 bg-gradient-to-bl from-[#FA4A6F] to-[#CE4CE6] after:bg-white peer-checked:bg-gradient-to-bl from-[#FA4A6F] to-[#CE4CE6] peer-focus:ring-white/[0.2]":
				secondary,
		},
	);
	return (
		<div className="">
			<label className="relative -bottom-1 inline-flex cursor-pointer items-center">
				<input
					id="switch-2"
					type="checkbox"
					className="peer sr-only"
					{...register(name)}
				/>
				<label className="hidden" />
				<div className={linkClass} />
			</label>
			<span className="pl-3 text-white font-bold">{label}</span>
		</div>
	);
}

Switch.propTypes = {
	label: PropTypes.string,
	register: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};
