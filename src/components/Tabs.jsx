import React, { useState } from "react";
import TabItem from "./TabItem";
import PropTypes from "prop-types";

export default function Tabs({ tabOne, tabTwo }) {
	const [view, setView] = useState(tabOne.label);

	return (
		<section className="flex flex-col gap-2 w-1/2">
			{/* {tabs.map((tab) => (
				<TabItem
					key={tab}
					tab={tab}
					active={view === tab}
					onClick={() => setView(tab)}
				/>
			))} */}
			<div className="flex">
				<TabItem
					label={tabOne.label}
					active={view === tabOne.label}
					onClick={() => setView(tabOne.label)}
				/>
				<TabItem
					label={tabTwo.label}
					active={view === tabTwo.label}
					onClick={() => setView(tabTwo.label)}
				/>
			</div>

			<h4 className="text-center w-full text-4xl text-white my-6">Join Us</h4>

			{view === tabOne.label ? tabOne.component : tabTwo.component}
		</section>
	);
}

Tabs.propTypes = {
	// tabs: PropTypes.arrayOf(PropTypes.string),
	tabOne: PropTypes.shape({
		label: PropTypes.string,
		component: PropTypes.node,
	}),
	tabTwo: PropTypes.shape({
		label: PropTypes.string,
		component: PropTypes.node,
	}),
};
