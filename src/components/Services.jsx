import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../style";
import { check, services, star } from "../assets";

const tabsData = [
	{
		label: "Standard",
		price: "1,999",
		feat1: `Weekly Strategy Call`,
		feat2: `1 Monthly Priority Plan`,
		feat3: `1 Monthly Minor Workflow`,
		feat4: `Old Projects Maintenance`,
		url: `https://checkout.flowity.ai/b/bIY7t5eSV5Std5S28b`,
	},
	{
		label: "Pro",
		price: "3,499",
		feat1: `Everything from Standard +`,
		feat2: `Custom NLP-Driven Workflows`,
		feat3: `2 Monthly Minor Workflows`,
		feat4: `2h Team Training Session`,
		url: `https://checkout.flowity.ai/b/dR628L5il94F0j6148`,
	},
	{
		label: "AI Agentic Workflow",
		price: "499",
		feat1: `Flowise + N8N`,
		feat2: `Customer Support AI Team`,
		feat3: `Marketing Automation AI Team`,
		feat4: `Complex Automations 10x faster`,
		url: `https://checkout.flowity.ai/b/00g9Bdh133KlaXK28d`,
	},
];

const Services = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<section id="pricing" className={`md:flex-row flex-col w-full`}>
			<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={services} alt="Services" className="w-[22px] h-[22px]" />
					<p className={`${styles.paragraph} ml-2`}>Our Services</p>
				</div>
				<h2>Our Services</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}
				>
					Book a{" "}
					<a
						href="https://calendly.com/nina-neev/15m-intro-call"
						className="text-logoCyan underline"
					>
						15m Intro Call
					</a>{" "}
					<b className="uppercase">now</b> and GET <b>50%</b> discount.
				</p>
			</div>

			<div className="flex flex-1 justify-center space-x-10 text-white">
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
								src={star}
								className={`${
									idx === 1 ? "flex" : "hidden"
								} w-[15px] mr-1 pt-1`}
							/>{" "}
							{tab.label}
						</button>
					);
				})}
			</div>
			{/* Show active tab content. */}
			<div className="py-4 text-white flex justify-center">
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
									{tabsData[activeTabIndex].label}
								</h3>{" "}
								<br />
								<p className="font-poppins font-medium text-[28px] md:text-[45px] foundation mt-3">
									Join Flowity AI
								</p>
							</div>
						</div>
						<div className="flex-grow"></div>
						<a
							href="https://calendly.com/nina-neev/15m-intro-call"
							className="flex justify-start w-[200px] z-10"
						>
							<button
								type="button"
								className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles} w-full md:w-auto`}
							>
								Book Intro Call
							</button>
						</a>
					</div>

					<div className="p-7 bg-black-gradient-2 min-h-[400px] md:h-full w-full md:rounded-r-xl flex flex-col justify-between">
						<div className="relative min-w-fit">
							<div className="flex justify-end">
								<div className="relative text-[50px] etiquet-price bg-logoPurple">
									<p>{tabsData[activeTabIndex].price}</p>
									<div></div>
								</div>
							</div>
							<div>
								<ul className="mt-10">
									<li className="text-[18px] md:text-[20px] pt-2 font-[500] tracking-wide flex items-start">
										<img
											src={check}
											alt="Check Icon"
											className="w-[15px] mr-[10px] pt-2"
										/>
										{tabsData[activeTabIndex].feat1}
									</li>
									<li className="text-[18px] md:text-[20px] pt-2 font-[500] tracking-wide flex items-start">
										<img
											src={check}
											alt="Check Icon"
											className="w-[15px] mr-[10px] pt-2"
										/>
										{tabsData[activeTabIndex].feat2}
									</li>
									<li className="text-[18px] md:text-[20px] pt-2 font-[500] tracking-wide flex items-start">
										<img
											src={check}
											alt="Check Icon"
											className="w-[15px] mr-[10px] pt-2"
										/>
										{tabsData[activeTabIndex].feat3}
									</li>
									<li className="text-[18px] md:text-[20px] pt-2 font-[500] tracking-wide flex items-start">
										<img
											src={check}
											alt="Check Icon"
											className="w-[15px] mr-[10px] pt-2"
										/>
										{tabsData[activeTabIndex].feat4}
									</li>
								</ul>
							</div>
						</div>
						<a href={tabsData[activeTabIndex].url} className="w-full">
							<button
								type="button"
								className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-logoPurple to-logoCyan rounded-[10px] outline-none ${styles} w-full md:w-auto md:mx-auto`}
							>
								{tabsData[activeTabIndex].label === "AI Agentic Workflow"
									? "Become Beta Tester"
									: "Get Started"}
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
