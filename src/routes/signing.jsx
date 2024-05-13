import { Back, CheckMarkIcon, FacebookIcon, GoogleIcon } from "../images";
import InputComp from "../components/InputComp";
import LogOrSign from "../components/LogOrSign";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";

export default function () {
	const [login, setLogin] = useState(false);
	return (
		<>
			<main className="bg-gradient-to-bl from-[#FA4A6F] to-[#CE4CE6] min-h-screen w-full flex flex-col items-center justify-around relative">
				<Link to="/" className="absolute left-0 top-0"><img src={Back} alt="back image" className="h-8 m-4" /></Link>
				<div className="h-10 w-10 bg-[#EEEEEE] rounded-xl shadow-sm shadow-stone-900/50 " />
				<Tabs
					// tabs={["login", "sign", "gee"]}
					tabOne={{ label: "Login", component: <LoginForm /> }}
					tabTwo={{ label: "Sign Up", component: <SignUpForm /> }}
				/>
				{/* <section className="flex flex-row w-1/2">
					
					{login ? (
						<LogOrSign primary onClick={() => setLogin(true)}>
							Login
						</LogOrSign>
					) : (
						<LogOrSign secondary onClick={() => setLogin(true)}>
							Login
						</LogOrSign>
					)}
					{login ? (
						<LogOrSign secondary onClick={() => setLogin(false)}>
							Sign Up
						</LogOrSign>
					) : (
						<LogOrSign primary onClick={() => setLogin(false)}>
							Sign Up
						</LogOrSign>
					)}
				</section> */}
				{/* <h1 className="text-center text-white text-4xl">Join us</h1>
				{login ? <LoginForm /> : <SignUpForm />} */}
				<section className="flex flex-col items-center w-full ">
					<hr className="border-solid border-1 border-white w-1/2" />
					<h4 className="text-white mt-5">MADE BY ROYALS V.10</h4>
				</section>
			</main>
		</>
	);
}
