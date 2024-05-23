import React from 'react'
import PropTypes from "prop-types";
import clsx from "clsx";
import { prototype } from 'postcss/lib/previous-map';

export default function SubmitButton({icon, altIcon, primary, secondary }) {
    const linkClass = clsx(
		"h-10 w-10 p-3.5 rounded-full ",
		{
			"bg-white text-pink-600": primary,
            "bg-gradient-to-bl from-[#FA4A6F] to-[#CE4CE6] text-white": secondary
		},
	);
  return (
    <button
        type="submit"
        className={linkClass}
    >
        <img src={icon} alt={altIcon} />
    </button>
  )
}

SubmitButton.propTypes ={
    icon: PropTypes.node,
    altIcon: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool
}