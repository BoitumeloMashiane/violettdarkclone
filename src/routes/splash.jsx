import { Form } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import { GoogleIcon, FacebookIcon } from "../images";

export default function Login() {
	return (
		<main className="bg-gradient-to-bl from-[#FA4A6F] to-[#CE4CE6] min-h-screen w-full flex flex-col items-center justify-around">
			<section className="flex flex-col items-center">
				<div className="h-20 w-20 bg-[#EEEEEE] rounded-3xl shadow-lg shadow-stone-900/50 " />
				<h1 className="text-white text-5xl font-serif italic">Violett</h1>
			</section>
			<section action="" className="flex flex-col items-center w-1/4">
				<ButtonLink page={"/signing"} color="pink" primary>
					Login
				</ButtonLink>
				<ButtonLink page={"/signing"} color="red" image={GoogleIcon} primary>
					Login with Google
				</ButtonLink>
				<ButtonLink page={"/signing"} color="blue" image={FacebookIcon} primary>
					Login with Facebook
				</ButtonLink>
				<div className="flex items-center gap-2 pb-2">
					<hr className="bg-white/[0.2] w-16 " />
					<p className="text-white">OR</p>
					<hr className="bg-white/[0.2] w-16 " />
				</div>

				<ButtonLink page={"/signing"} color="white" secondary>
					Sign Up
				</ButtonLink>

				{/* <Link className="py-2 bg-none border-solid border-2 border-white text-center w-full my-4 rounded-md text-white">
					Sign Up
				</Link> */}
			</section>
			<section className="flex flex-col items-center w-full ">
				<hr className="border-solid border-1 border-white w-1/3" />
				<h4 className="text-white mt-5">MADE BY ROYALS V.10</h4>
			</section>
		</main>
	);
}
