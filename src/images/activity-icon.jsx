import * as React from "react";
const ActivityIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={17}
		height={17}
		fill="currentColor"
		{...props}
	>
		<title>Activity</title>
		<path
			fill="#currentColor"
			fillRule="evenodd"
			d="M15.927 14.866a1.062 1.062 0 0 0 .95-1.537l-2.012-4.023V6.37a6.371 6.371 0 1 0-12.74 0v2.936L.112 13.329a1.062 1.062 0 0 0 .95 1.537H6.37a2.124 2.124 0 1 0 4.247 0h5.309ZM4.103 10.068H4.09L2.518 12.9h11.954l-1.573-2.832h-.001V6.611h-.012a4.398 4.398 0 1 0-8.771 0h-.012v3.457Z"
			clipRule="evenodd"
		/>
	</svg>
);
export { ActivityIcon };
