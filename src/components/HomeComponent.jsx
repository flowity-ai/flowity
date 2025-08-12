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
import HeroSection from "./HeroSection";
import ValueSection from "./ValueSection";
import ProductsSection from "./ProductSection";
import CTASection from "./CTASection";
import ROISection from "./ROISection";

const HomeComponent = () => (
	<>
		<Hero />
		<HowWeWork />
		<ValueSection />
		<ProductsSection />
		<ROISection />
		<Services />
		<Newsletter />
		<CTASection />
		<FAQ />
	</>
);

export default HomeComponent;
