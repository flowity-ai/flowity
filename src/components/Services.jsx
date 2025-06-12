import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../style";
import { check, services, bolt } from "../assets";

const tabsData = [
	{
		label: "Standard",
		price: "1,999",
		feat1: `Unlimited system requests`,
		feat2: `Private Slack channel`,
		feat3: `Make.com AI automations`,
		feat4: `On-going maintenance`,
		url: `https://checkout.flowity.ai/b/8x2fZg1Xj3iL7q6fnAdjO08`,
	},
	{
		label: "Pro",
		price: "4,499",
		feat1: `Unlimited system requests`,
		feat2: `Private Slack channel`,
		feat3: `N8N & AI agents`,
		feat4: `2h training + on-going maintenance`,
		url: `https://checkout.flowity.ai/b/eVa00D2693Klfe08wD`,
	},
	// {
	// 	label: "Ignite",
	// 	price: "999",
	// 	feat1: `From our ready-to-go library`,
	// 	feat2: `1 workflow implementation`,
	// 	feat3: `Add/remove up to 2 modules`,
	// 	feat4: `On-going Maintenance`,
	// 	url: `https://checkout.flowity.ai/b/bIY7t5eSV5Std5S28b`,
	// },
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
				<h2>Unlock Scalable Growth </h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-6 text-center`}>
					Book a{" "}
					<a
						href="https://form.typeform.com/to/E4q8bAdg"
						className="text-logoCyan underline"
					>
						15m Intro Call
					</a>{" "}
					<b className="uppercase">now</b> and GET <b>50%</b> discount.
				</p>
				{/* <p className={`${styles.paragraph} max-w-[470px] text-center`}>
					or <b>check</b> our{" "}
					<a
						href="https://store.flowity.ai"
						className="text-logoCyan underline"
					>
						ready-to-go
					</a>{" "}
					<b>library</b>
				</p> */}
			</div>

			<div className="flex flex-1 justify-center space-x-10 text-white mt-[50px]">
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
							href="https://form.typeform.com/to/E4q8bAdg"
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
								Get Started
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
