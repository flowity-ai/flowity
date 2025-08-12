import React from "react";
import "./App.css";
import "./fonts/foundation.ttf";
import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
	PulseReport,
	Whispr,
	PulseDeck,
	HomeComponent,
	AutomationSuite,
	VirtualAssistant,
} from "./components";

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomeComponent />} />
				<Route path="pulsedeck" element={<PulseDeck />} />
				<Route path="whispr" element={<Whispr />} />
				<Route path="pulse-report" element={<PulseReport />} />
				<Route path="automation-suite" element={<AutomationSuite />} />
				<Route path="va-coming-soon" element={<VirtualAssistant />} />
			</Route>
		</Routes>
	</Router>
);

export default App;
