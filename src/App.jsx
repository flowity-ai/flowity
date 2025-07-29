import React from "react";
import "./App.css";
import "./fonts/foundation.ttf";
import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./components/HomeComponent";
import PulseDeck from "./components/PulseDeck";

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomeComponent />} />
				<Route path="pulsedeck" element={<PulseDeck />} />
			</Route>
		</Routes>
	</Router>
);

export default App;
