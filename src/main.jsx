import React from "react";
import ReactDOM from "react-dom/client";
import Splash from "./routes/splash.jsx";
import Signing from "./routes/signing.jsx";
import Root from "./routes/root.jsx";
import GettingStarted from "./routes/gettingStarted.jsx";
import Wallet from "./routes/wallet.jsx";
import Calendar from "./routes/calendar.jsx";
import Products from "./routes/products.jsx";
import Settings from "./routes/settings.jsx";
import Messages from "./routes/messages.jsx";
import Dashboard from "./routes/dashboard.jsx";
import Orders from "./routes/orders.jsx";
import Home from "./routes/home.jsx";
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
			<Route path="/root" element={<Root />}>
				<Route path="/root/gettingstarted" element={<GettingStarted />} />
				<Route path="/root/dashboard" element={<Dashboard />} />
				<Route path="/root/wallet" element={<Wallet />} />
				<Route path="/root/messages" element={<Messages />} />
				<Route path="/root/orders" element={<Orders />} />
				<Route path="/root/settings" element={<Settings />} />
				<Route path="/root/products" element={<Products />} />
				<Route path="/root/calendar" element={<Calendar />} />
				<Route path="/root/home" element={<Home />} />
			</Route>
		</>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
