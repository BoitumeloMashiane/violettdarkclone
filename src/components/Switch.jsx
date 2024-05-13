import React from "react";
import PropTypes from "prop-types";

export default function Switch({ label, name, register }) {
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
				<div className="peer h-4 w-11 rounded-full bg-white/[0.2] after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-focus:ring-white/[0.2]" />
			</label>
			<span className="pl-3 text-white font-bold">{label}</span>
		</div>
	);
}

Switch.propTypes = {
	label: PropTypes.string,
	register: PropTypes.func,
};
