import React from "react";
import ReactDOM from "react-dom/client";
import Splash from "./routes/splash.jsx";
import Signing from "./routes/signing.jsx";
import Dashboard from "./routes/dashboard.jsx";
import Root from "./routes/root.jsx";
import "./index.css";
import {
	RouterProvider,
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Splash />} />
			<Route path="/signing" element={<Signing />} />
			<Route path="/dashboard" element={<Root />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
