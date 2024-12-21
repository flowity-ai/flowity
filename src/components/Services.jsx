import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../style";
import { check, services } from "../assets";

const tabsData = [
	{
		label: "Automation Workflows",
		intro: "Why hire when you can subscribe? Ditch the hiring headaches.",
		price: "1,549",
		content: `Ideal for businesses that need robust, multi-step workflows to streamline operations, increase productivity, and reduce manual effort.`,
		feat1: `1-3 business days turnaround`,
		feat2: `15-20 Zaps per month`,
		feat3: `Webhook Integrations`,
		feat4: `Custom Integrations`,
	},
	{
		label: "Software Development",
		intro: "Why hire when you can subscribe? Ditch the hiring headaches.",
		price: "4,995",
		content: `Flowity AI acts as an extension to a company’s existing team, offering specialized software engineering support when needed.`,
		feat1: `Project Manager`,
		feat2: `Front & Back devs`,
		feat3: `Tech Leader`,
		feat4: `QA Tester`,
	},
	{
		label: "Websites and Landing Pages",
		intro: "Focus on growing your business without limits.",
		content:
			"Hassle-free web development, optimized for conversions and speed. Avoid costly agencies; get stunning websites quickly and reliably.",
		price: "1,995",
		feat1: `Project Manager`,
		feat2: `Front-end developer`,
		feat3: `Website development`,
		feat4: `Landing Pages in 48h`,
	},
	{
		label: "Canva Designs",
		intro: "Designs delivered when you need them, without the burden.",
		price: "449",
		content:
			"High-quality designs can be daunting and expensive. Flowity AI combines the best of human creativity and AI-enhanced precision to deliver impactful solutions.",
		feat1: `Social Media Designs`,
		feat2: `Presentations`,
		feat3: `Brochures`,
		feat4: `Flyers`,
	},
];

const Services = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);

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
					Provide input and see your vision come to life seamlessly. Foster
					creativity with time-saving tools and adaptable solutions.
				</p>
			</div>
			<div className="md:hidden flex flex-1 justify-center space-x-3 text-white">
				{/* Render a single select input with options from tabsData. */}
				<select
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					onChange={(e) => setActiveTabIndex(e.target.selectedIndex)}
					value={activeTabIndex}
				>
					{tabsData.map((tab, idx) => (
						<option key={idx} value={idx}>
							{tab.label}
						</option>
					))}
				</select>
			</div>
			<div className="hidden md:flex flex-1 justify-center space-x-3 text-white">
				{/* Loop through tab data and render button for each. */}
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`py-2 border-b-4 transition-colors duration-300 ${
								idx === activeTabIndex
									? "border-logoCyan"
									: "border-transparent hover:border-gray-200"
							}`}
							// Change the active tab on click.
							onClick={() => setActiveTabIndex(idx)}
						>
							{tab.label}
						</button>
					);
				})}
			</div>
			{/* Show active tab content. */}
			<div className="py-4 text-white flex justify-center">
				<div className="h-[760px] sm:h-[620px] md:h-[420px] w-full md:w-[900px] bg-slate-200 flex rounded-xl flex-col md:flex-row overflow-hidden">
					<div className="e-card playing min-h-[300px] md:h-full w-full p-7 text-white md:rounded-l-xl">
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>

						<div className="infotop w-[30%] md:w-[60%]">
							<p className="text-[11px] tracking-widest text-[#cccc]">
								Service
							</p>
							<div>
								<h3 className="text-[20px] md:text-[25px] pt-5 font-medium tracking-wide leading-[25px]">
									{tabsData[activeTabIndex].label}
								</h3>{" "}
								<br />
								<p className="font-poppins font-medium text-[.8em] md:text-[18px]">
									{tabsData[activeTabIndex].intro}
								</p>
							</div>
						</div>
						<button
							type="button"
							className={`absolute bottom-4 left-6 py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
						>
							Book a Call
						</button>
					</div>

					<div className="p-7 bg-black-gradient-2 min-h-[700px] md:h-full w-full md:rounded-r-xl">
						<div className="relative min-w-fit">
							<div className="flex justify-between">
								<h1 className="text-[#949494] text-[13px] tracking-[.5px]">
									For companies
								</h1>
								<div className="relative text-[50px] etiquet-price bg-logoPurple">
									<p>{tabsData[activeTabIndex].price}</p>
									<div></div>
								</div>
							</div>
							<p className="w-[75%] md:w-full mt-3 mb-2">
								{tabsData[activeTabIndex].content}
							</p>
							<ul className="">
								<li className="text-[16px] md:text-[20px] pt-2 font-[500] tracking-wide flex">
									<img
										src={check}
										alt="Check Icon"
										className="w-[15px] mr-[5px]"
									/>
									{tabsData[activeTabIndex].feat1}
								</li>
								<li className="text-[16px] md:text-[20px] pt-2 font-[500] tracking-wide flex">
									<img
										src={check}
										alt="Check Icon"
										className="w-[15px] mr-[5px]"
									/>
									{tabsData[activeTabIndex].feat2}
								</li>
								<li className="text-[16px] md:text-[20px] pt-2 font-[500] tracking-wide flex">
									<img
										src={check}
										alt="Check Icon"
										className="w-[15px] mr-[5px]"
									/>
									{tabsData[activeTabIndex].feat3}
								</li>
								<li className="text-[16px] md:text-[20px] pt-2 font-[500] tracking-wide flex">
									<img
										src={check}
										alt="Check Icon"
										className="w-[15px] mr-[5px]"
									/>
									{tabsData[activeTabIndex].feat4}
								</li>
							</ul>
							<button
								type="button"
								className={`absolute bottom-[-100px] mb-2 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-logoPurple to-logoCyan rounded-[10px] outline-none ${styles}`}
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
