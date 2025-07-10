import React, { useState, useEffect, useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { spark } from "../assets";

const FeatureCard = ({ icon, title, content, index, onClick, isActive }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			isActive ? "bg-active" : ""
		} feature-card ${isActive ? "hover:bg-active" : ""}`}
		onClick={onClick}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue justify-center items-center`}
		>
			<img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="flex items-center font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
				{content}
			</p>
		</div>
	</div>
);

const Solutions = () => {
	const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);
	const solutionsRef = useRef(null);

	const featureContents = [
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] max-w-[470px] mt-5">
					<ul>
						<li>
							<b>Uses NLP</b> to engage website visitors in real time, capturing
							interactions and transforming them into actionable leads.
						</li>{" "}
						<br />
						<li>
							<b>Automates personalized</b> follow-ups that nurture prospects
							and drive higher conversion rates.
						</li>{" "}
						<br />
						<li>
							<b>Boosts revenue</b> by converting idle traffic into
							high-quality, qualified leads with minimal manual effort.
						</li>{" "}
						<br />
						<li>
							<b>Increases conversion rates</b> by 45% within 45 days, rapidly
							transforming interest into revenue.
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] max-w-[470px] mt-5">
					<ul>
						<li>
							<b>Leverages data insights</b> and NLP to craft tailored,
							conversational outreach messages across email, SMS, and social
							media.
						</li>{" "}
						<br />
						<li>
							<b>Streamlines follow-up processes</b> to ensure every prospect
							receives timely, relevant communications.
						</li>{" "}
						<br />
						<li>
							<b>Accelerates sales cycles</b> and improves close rates by
							delivering highly targeted, personalized interactions.
						</li>{" "}
						<br />
						<li>
							<b>Enhances reputation</b> management and increases positive
							sentiment by 30% in just 30 days.
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[17px] leading-[24px] max-w-[470px] mt-5">
					<ul>
						<li>
							<b>Delivers hyper-relevant content</b> by analyzing user
							preferences and behaviors through NLP workflows.
						</li>{" "}
						<br />
						<li>
							<b>Automates real-time content</b> adjustments to ensure messaging
							is always relevant and engaging.
						</li>{" "}
						<br />
						<li>
							<b>Improves engagement</b> and drives higher click-through rates
							by delivering truly personalized experiences.
						</li>{" "}
						<br />
						<li>
							<b>Enhances engagement metrics</b> by 35% within 30 days, driving
							higher click-through rates and improved brand loyalty.
						</li>
					</ul>
				</div>
			),
		},
	];

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				solutionsRef.current &&
				!solutionsRef.current.contains(event.target)
			) {
				setActiveFeatureIndex(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<section id="solutions" className={layout.section} ref={solutionsRef}>
			<div className={layout.sectionInfo}>
				{activeFeatureIndex !== null ? (
					<>
						<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
							<img src={spark} alt="Sparkles" className="w-[22px] h-[22px]" />
							<p className={`${styles.paragraph} ml-2`}>
								{features[activeFeatureIndex].sparkle}
							</p>
						</div>
						<h2 className={styles.heading2}>
							{features[activeFeatureIndex].h2}
						</h2>
						<div>{featureContents[activeFeatureIndex].content}</div>
					</>
				) : (
					<>
						<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
							<img src={spark} alt="Sparkles" className="w-[22px] h-[22px]" />
							<p className={`${styles.paragraph} ml-2`}>Our Solutions</p>
						</div>
						<h2 className={styles.heading2}>
							A Personalized AI Sales & Marketing Machine
						</h2>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
							We help B2B SaaS and marketing-driven companies scale faster,
							smarter, and leaner through intelligent automation. Our systems
							are built to eliminate manual work, increase conversions, and
							accelerate revenue—without growing your team.
						</p>
					</>
				)}

				<div className="flex flex-row flex-wrap mt-[40px]">
					<Button />
					<button
						type="button"
						className={`hidden ml-2 p-[2px] flex items-center justify-center font-poppins font-light text-[18px] rounded-[10px] outline-none bg-gradient-to-br from-slate-50 to-logoCyan ${styles}`}
					>
						<div className="p-[15px] rounded-[10px] bg-gray-900 h-gull w-full flex items-center justify-center text-logoCyan">
							<span className="text-blue-gradient">Use Cases</span>
						</div>
					</button>
				</div>
			</div>
			<div
				className={`flex-1 flex justify-start ml-0 md:mt-0 mt-10 md:mr-10 relative flex-col cursor-pointer`}
			>
				{features.map((feature, index) => (
					<FeatureCard
						key={feature.id}
						{...feature}
						index={index}
						onClick={() => setActiveFeatureIndex(index)}
						isActive={activeFeatureIndex === index}
					/>
				))}
			</div>
		</section>
	);
};

export default Solutions;
