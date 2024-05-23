import * as React from "react";
const MessageIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={16}
		fill="currentColor"
		{...props}
	>
		<title>Message</title>
		<path
			fillRule="evenodd"
			d="M13 0H2a2 2 0 0 0-2 2V8.97c0 .055.002.11.007.163l-.009-.001v3.652l.064.068a.854.854 0 0 0-.062.32c0 .458.356.829.797.829a.768.768 0 0 0 .297-.06l.058.061 2.874-3.032H13a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm.126 1.999H1.873v8.335L3.123 9h10.003V2Zm5.75 4.657h.374a.75.75 0 0 1 .75.75v7.844a.75.75 0 0 1-.75.75H7.625a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h10.5V7.406a.75.75 0 0 1 .75-.75Z"
			clipRule="evenodd"
		/>
	</svg>
);
export { MessageIcon };
