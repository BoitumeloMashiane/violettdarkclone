import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function TabItem({ label, onClick, active }) {
	const linkClass = clsx(
		"w-full border-solid border-b-2 text-center text-white",
		{
			"border-white/[0.2]": !active,
			"border-white": active,
		},
	);
	return (
		<button type="button" onClick={onClick} className={linkClass}>
			{label}
		</button>
	);
}

TabItem.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
};
