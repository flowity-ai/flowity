import React, { useState, useEffect, useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { discount, spark } from "../assets";

const FeatureCard = ({ icon, title, content, index, onClick }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== features.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}
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
				<div className="text-dimWhite max-w-[470px] mt-5">
					<ul className="list-disc ml-5">
						<li>
							<b>Streamline your operations</b> by automating repetitive tasks
							and manual processes, so your team can focus on higher-value work.
						</li>
						<li>
							<b>Enhance data consistency</b> across platforms, reducing errors
							that arise from manual data entry or coordination.
						</li>
						<li>
							<b>Boost productivity</b> by setting up workflows that trigger
							automatic actions based on real-time inputs—no more waiting for
							approvals or updates.
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="text-dimWhite max-w-[470px] mt-5">
					<ul className="list-disc ml-5">
						<li>
							<b>Provide 24/7 support</b> ensuring instant, automated responses
							to customer inquiries.
						</li>
						<li>
							<b>Automatically qualify leads</b>, saving your sales team time
							and improving lead conversion rates.
						</li>
						<li>
							<b>Improve customer satisfaction</b> by resolving issues quickly
							and efficiently through automated support systems.
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="text-dimWhite max-w-[470px] mt-5">
					<ul className="list-disc ml-5">
						<li>
							<b>Automatically analyze</b> customer feedback to understand
							sentiment and identify key issues.
						</li>
						<li>
							<b>Generate personalized responses</b> based on the context of
							customer inquiries, improving communication quality.
						</li>
						<li>
							<b>Extract valuable insights</b> from customer interactions and
							use them to enhance products, services, and support.
						</li>
					</ul>
				</div>
			),
		},
		// Add more features as needed
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
							Simplify operations <br className="sm:block hidden" /> with
							AI-driven solutions
						</h2>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
							Enhancing customer support and lead generation through AI
							automation workflows powered by NLP, enabling faster, more
							efficient interactions. Our intelligent workflows seamlessly
							integrate with your operations, optimizing response times and
							delivering personalized experiences that scale with your business
							needs.
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
					/>
				))}
			</div>
		</section>
	);
};

export default Solutions;
