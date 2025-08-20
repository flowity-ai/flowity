import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import styles from "../style";
import { check, services, bolt } from "../assets";

const tabsData = [
	{
		label: "AI Automations",
		price: "1,999",
		feat1: `Unlimited system requests`,
		feat2: `Private Teams and Trello`,
		feat3: `Make.com or N8N AI automations`,
		feat4: `On-going maintenance`,
		url: `https://checkout.flowity.ai/b/6oUfZggSd7z1eSyejwdjO09`,
	},
	{
		label: "Whispr",
		price: "999",
		feat1: `Custom LLM Workflow Setup`,
		feat2: `Automated Feedback & Replies`,
		feat3: `Weekly Content & Insight Delivery`,
		feat4: `Dedicated Teams Channel + Support`,
		url: `https://checkout.flowity.ai/b/28E8wO31ncTl4dU1wKdjO0a`,
	},
	{
		label: "Virtual Assistant",
		price: "0",
		feat1: `Custom LLM Workflow Setup`,
		feat2: `Automated Feedback & Replies`,
		feat3: `Weekly Content & Insight Delivery`,
		feat4: `Dedicated Teams Channel + Support`,
		call: "https://cal.com/flowityai/onboarding",
	},
];

const Services = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);

	return (
		<section id="pricing" className={`md:flex-row flex-col w-full`}>
			<motion.div 
				className={`${styles.heading2} ${styles.flexCenter} flex-col`}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={services} alt="Services" className="w-[22px] h-[22px]" />
					<p className={`${styles.paragraph} ml-2`}>Our Services</p>
				</div>
				<h2>Unlock Scalable Growth </h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-6 text-center`}>
					Book a{" "}
					<a
						href="https://cal.com/flowityai/intro-call"
						className="text-logoCyan underline"
					>
						15m Intro Call
					</a>{" "}
					<b className="uppercase">now</b> and GET <b>7-day free</b> trial on{" "}
					<u>Whispr</u> before you commit.
				</p>
			</motion.div>

			<motion.div 
				className="flex flex-1 justify-center space-x-10 text-white mt-[50px]"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				{/* Loop through tab data and render button for each. */}
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`py-2 border-b-4 transition-colors duration-300 flex ${
								idx === activeTabIndex
									? "border-logoCyan"
									: "border-transparent hover:border-gray-200"
							}`}
							// Change the active tab on click.
							onClick={() => setActiveTabIndex(idx)}
						>
							<img
								src={bolt}
								className={`${
									idx === 1 ? "flex" : "hidden"
								} w-[15px] mr-1 pt-1`}
							/>{" "}
							{tab.label}
						</button>
					);
				})}
			</motion.div>
			{/* Show active tab content. */}
			<motion.div 
				className="py-4 text-white flex justify-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				viewport={{ once: true }}
				key={activeTabIndex}
			>
				<div className="md:w-[900px] bg-slate-200 flex rounded-xl flex-col md:flex-row overflow-hidden">
					<div className="e-card playing min-h-[300px] md:h-full min-w-[300px] md:w-full p-7 text-white md:rounded-l-xl flex flex-col relative overflow-hidden">
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="infotop w-[30%] md:w-[60%]">
							<p className="text-[11px] tracking-widest text-[#cccc]">
								Service
							</p>
							<div>
								<h3 className="text-[18px] md:text-[20px] pt-5 font-medium tracking-wide leading-[25px]">
									{tabsData[activeTabIndex].label === "Whispr"
										? "Whispr Beta"
										: tabsData[activeTabIndex].label}
								</h3>
								<p className="text-[13px] text-[#cccc] pt-2">
									{tabsData[activeTabIndex].label === "Whispr"
										? "AI-Powered Customer Intelligence"
										: tabsData[activeTabIndex].label === "AI Automations"
										? "Enterprise Automation Suite"
										: "Free Virtual Assistant"}
								</p>
							</div>
						</div>
						<div className="infobottom w-[30%] md:w-[60%]">
							<div className="text-[12px] text-[#cccc] pt-2">
								{tabsData[activeTabIndex].label === "Whispr"
									? "€999"
									: tabsData[activeTabIndex].label === "AI Automations"
									? "€1,999"
									: "Free"}
							</div>
							<div className="text-[12px] text-[#cccc] pt-1">
								{tabsData[activeTabIndex].label === "Whispr"
									? "/month"
									: tabsData[activeTabIndex].label === "AI Automations"
									? "/month"
									: "Forever"}
							</div>
						</div>
						<div className="infobottom2 w-[30%] md:w-[60%]">
							<div className="text-[12px] text-[#cccc] pt-2">
								{tabsData[activeTabIndex].label === "Whispr"
									? "€999"
									: tabsData[activeTabIndex].label === "AI Automations"
									? "€1,999"
									: "Free"}
							</div>
							<div className="text-[12px] text-[#cccc] pt-1">
								{tabsData[activeTabIndex].label === "Whispr"
									? "/month"
									: tabsData[activeTabIndex].label === "AI Automations"
									? "/month"
									: "Forever"}
							</div>
						</div>
					</div>
					<div className="md:w-full p-7 text-black">
						<div className="flex flex-col h-full">
							<div className="flex-1">
								<h3 className="text-2xl font-bold mb-4">
									{tabsData[activeTabIndex].label}
								</h3>
								<div className="space-y-3 mb-6">
									<div className="flex items-center">
										<img src={check} alt="check" className="w-[20px] h-[20px] mr-2" />
										<span className="text-sm">{tabsData[activeTabIndex].feat1}</span>
									</div>
									<div className="flex items-center">
										<img src={check} alt="check" className="w-[20px] h-[20px] mr-2" />
										<span className="text-sm">{tabsData[activeTabIndex].feat2}</span>
									</div>
									<div className="flex items-center">
										<img src={check} alt="check" className="w-[20px] h-[20px] mr-2" />
										<span className="text-sm">{tabsData[activeTabIndex].feat3}</span>
									</div>
									<div className="flex items-center">
										<img src={check} alt="check" className="w-[20px] h-[20px] mr-2" />
										<span className="text-sm">{tabsData[activeTabIndex].feat4}</span>
									</div>
								</div>
							</div>
							<div className="mt-auto space-y-3">
								{tabsData[activeTabIndex].url ? (
									<a
										href={tabsData[activeTabIndex].url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="w-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">
											Get Started
										</button>
									</a>
								) : (
									<a
										href={tabsData[activeTabIndex].call}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="w-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">
											Schedule Call
										</button>
									</a>
								)}
								{/* Only show "Book a Call" button for Whispr tab */}
								{tabsData[activeTabIndex].label === "Whispr" && (
									<a
										href="https://cal.com/flowityai/intro-call"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="w-full bg-transparent border-2 border-[#1CD8DE] text-[#1CD8DE] py-3 px-6 rounded-lg font-medium hover:bg-[#1CD8DE]/10 transition-all duration-300">
											Book a Call
										</button>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Services;
