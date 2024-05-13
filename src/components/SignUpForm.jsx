import React from "react";
import InputComp from "./InputComp";
import { Form } from "react-router-dom";
import { CheckMarkIcon, FacebookIcon, GoogleIcon } from "../images";
import { useForm } from "react-hook-form";
import CheckBox from "./CheckBox";

export default function SignUpForm() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full px-10"
			>
				<InputComp
					placeholder="Username"
					type="text"
					name="Username"
					register={register}
					required
				/>
				<InputComp
					placeholder="Password"
					type="password"
					name="Password"
					register={register}
					required
				/>
				<InputComp
					placeholder="Repeat Password"
					type="password"
					name="RepeatPassword"
					register={register}
					required
				/>
				<InputComp
					placeholder="Email Address"
					type="email"
					name="EmailAddress"
					register={register}
					required
				/>
				<section className="flex justify-between my-10 mx-4">
					<CheckBox
						label="Agreed to Terms?"
						name="Terms"
						register={register}
						required
					/>
					<button
						type="submit"
						className="h-10 w-10 p-3 bg-white rounded-full text-pink-600 text-4xl"
					>
						<img src={CheckMarkIcon} alt="check mark" />
					</button>
				</section>
			</form>
		</>
	);
}
