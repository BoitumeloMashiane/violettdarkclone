import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function InputComp({
	placeholder,
	type,
	register,
	name,
	required,
}) {
	return (
		<input
			type={type}
			className="border-solid focus:border border-white bg-white/[0.2] p-3 rounded-lg placeholder:text-white focus:outline-none caret-white text-white mb-5"
			placeholder={placeholder}
			{...register(name, { required })}
		/>
	);
}

InputComp.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};
