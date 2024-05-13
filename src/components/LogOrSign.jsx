import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function LogOrSign({ children, primary, secondary, onClick }) {
	const linkClass = clsx(
		"w-full border-solid border-b-2 text-center text-white",
		{
			"border-white/[0.2]": secondary,
			"border-white": primary,
		},
	);
	return (
		<button type="button" onClick={() => onClick()} className={linkClass}>
			{children}
		</button>
	);
}

LogOrSign.PropTypes = {
	opacity: PropTypes.string,
	children: PropTypes.node,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};
