import React from "react";
import ButtonLink from "./ButtonLink";
import { CheckMarkIcon, FacebookIcon, GoogleIcon } from "../images";
import { useNavigate } from "react-router-dom";
import InputComp from "../components/InputComp";
import Switch from "./Switch";
import { useForm } from "react-hook-form";
import gettingStarted from "../routes/gettingStarted";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		navigate("/root/home");
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
					<SubmitButton
						icon={CheckMarkIcon}
						altIcon="check mark icon"
						primary
					/>
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
