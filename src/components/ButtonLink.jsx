import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function ButtonLink({
	children,
	color,
	page,
	primary,
	secondary,
	image,
}) {
	const linkClass = clsx(
		"list-image-[GoogleIcon] p-3 w-full mb-4 rounded-md font-rubik flex justify-center relative",
		{
			"bg-[#FFF]": primary,
			"border-solid border border-white text-white": secondary,
			"text-[#E23595]": color === "pink",
			"text-[#C25457]": color === "red",
			"text-[#3D64C3]": color === "blue",
		},
	);

	return (
		<Link to={page} className={linkClass}>
			{image && <img className="h-5 w-5 absolute left-4" src={image} alt="" />}{" "}
			<p className="">{children}</p>
		</Link>
	);
}

ButtonLink.propTypes = {
	children: PropTypes.node,
	color: PropTypes.oneOf(["pink", "red", "blue"]),
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	page: PropTypes.string,
	image: PropTypes.string,
};
