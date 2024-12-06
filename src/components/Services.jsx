import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../style";
import { check } from "../assets";

const tabsData = [
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
		price: "200",
		content:
			"High-quality designs can be daunting and expensive. Flowity AI combines the best of human creativity and AI-enhanced precision to deliver impactful solutions.",
		feat1: `Social Media Designs`,
		feat2: `Presentations`,
		feat3: `Brochures`,
		feat4: `Flyers`,
	},
];

const Services = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<section className={`md:flex-row flex-col w-full`}>
			<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
				<h2>Our Services</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}
				>
					Provide input and see your vision come to life seamlessly. Foster
					creativity with time-saving tools and adaptable solutions.
				</p>
			</div>
			<div className="flex flex-1 justify-center space-x-3 text-white">
				{/* Loop through tab data and render button for each. */}
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`py-2 border-b-4 transition-colors duration-300 ${
								idx === activeTabIndex
									? "border-teal-500"
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
				<div className="h-[420px] w-[900px] bg-slate-200 flex rounded-xl">
					<div className="e-card playing h-full w-[400px] p-7 text-white rounded-l-xl">
						<div className="image"></div>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>

						<div className="infotop">
							<p className="text-[11px] tracking-widest text-[#cccc]">
								Service
							</p>
							<h3 className="text-[25px] pt-5 font-medium tracking-wide leading-[25px]">
								{tabsData[activeTabIndex].label}
							</h3>{" "}
							<br />
							<p>{tabsData[activeTabIndex].intro}</p>
							<Button />
						</div>
					</div>

					<div className="p-7 bg-black-gradient-2 w-full rounded-r-xl relative">
						<div className="flex justify-between">
							<h1 className="text-[#949494] text-[13px] tracking-[.5px]">
								For companies
							</h1>
							<div className="relative text-[50px] etiquet-price bg-logoPurple">
								<p>{tabsData[activeTabIndex].price}</p>
								<div></div>
							</div>
						</div>
						<p>{tabsData[activeTabIndex].content}</p>
						<ul className="">
							<li className="text-[28px] pt-2 font-[500] tracking-wide flex">
								<img
									src={check}
									alt="Check Icon"
									className="w-[15px] mr-[5px]"
								/>
								{tabsData[activeTabIndex].feat1}
							</li>
							<li className="text-[28px] pt-2 font-[500] tracking-wide flex">
								<img
									src={check}
									alt="Check Icon"
									className="w-[15px] mr-[5px]"
								/>
								{tabsData[activeTabIndex].feat2}
							</li>
							<li className="text-[28px] pt-2 font-[500] tracking-wide flex">
								<img
									src={check}
									alt="Check Icon"
									className="w-[15px] mr-[5px]"
								/>
								{tabsData[activeTabIndex].feat3}
							</li>
							<li className="text-[28px] pt-2 font-[500] tracking-wide flex">
								<img
									src={check}
									alt="Check Icon"
									className="w-[15px] mr-[5px]"
								/>
								{tabsData[activeTabIndex].feat4}
							</li>
						</ul>
						<input
							type="button"
							value="Get Started"
							className="h-10 w-[120px] bg-[#261a6be8] text-white rounded-3xl tracking-wide absolute right-10 bottom-7 cursor-pointer hover:bg-[#4938b6e8]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
