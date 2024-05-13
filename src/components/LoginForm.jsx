import React from "react";
import ButtonLink from "./ButtonLink";
import { CheckMarkIcon, FacebookIcon, GoogleIcon } from "../images";
import { Form } from "react-router-dom";
import InputComp from "../components/InputComp";
import Switch from "./Switch";
import { useForm } from "react-hook-form";

export default function LoginForm() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full px-10 "
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
				<section className="flex justify-between my-10">
					<Switch label="Remember me?" register={register} name="Switch" />
					<button
						type="submit"
						className="h-10 w-10 p-3 bg-white rounded-full text-pink-600 text-4xl"
					>
						<img src={CheckMarkIcon} alt="check mark" />
					</button>
				</section>
				<ButtonLink page={"/signing"} color="red" image={GoogleIcon} primary>
					Login with Google
				</ButtonLink>
				<ButtonLink page={"/signing"} color="blue" image={FacebookIcon} primary>
					Login with Facebook
				</ButtonLink>
			</form>
		</>
	);
}
