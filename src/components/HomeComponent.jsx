import React from "react";
import Hero from "./Hero";
import FlowChart from "./FlowChart";
import Clients from "./Clients";
import Solutions from "./Solutions";
import TableValue from "./TableValue";
import HowWeWork from "./HowWeWork";
import Features from "./Features";
import AISection from "./AISection";
import Services from "./Services";
import Newsletter from "./Newsletter";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Benefits from "./Benefits";
import Whispr from "./Whispr";

const HomeComponent = () => (
	<>
		<Hero />
		<Clients />
		<Benefits />
		<Solutions />
		<HowWeWork />
		<Whispr />
		<Services />
		<Newsletter />
		<FAQ />
		<CTA />
	</>
);

export default HomeComponent;
