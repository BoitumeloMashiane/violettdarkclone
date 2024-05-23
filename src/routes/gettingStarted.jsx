import React from "react";
import { Bubbles } from "../images";

export default function gettingStarted() {
	return (
		<>
			<main>
				<section>
					<h2>The Right Tools</h2>
					<p>
						Dolores libero porro et distinctio atque, aliquam possimus quisquam,
						cupiditate accusantium ipsa dolor ut culpa, error laudantium ipsam
					</p>
				</section>
				<section>
					<img src={Bubbles} alt="bubbles" />
				</section>
			</main>
		</>
	);
}
