import React, { useState, useEffect, useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { spark } from "../assets";

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
							<b>Quickly identifies</b> key themes from customer reviews,
							surveys, and support tickets to pinpoint areas for improvement.
						</li>
						<li>
							<b>Highlights customer satisfaction</b> drivers and pain points to
							enhance decision-making.
						</li>
						<li>
							<b>Boosts customer satisfaction</b> by 40% within 45 days, leading
							to increased loyalty and retention.
						</li>
						<li>
							<b>Perfect for: </b>Businesses that rely heavily on customer
							feedback to improve products and services. <br />{" "}
							<u>e.g. E-commerce brands and SaaS companies.</u>
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
							<b>Uses NLP </b>to assess customer interactions and prioritize
							high-value leads based on sentiment and intent.
						</li>
						<li>
							<b>Optimizes sales team efforts</b> by focusing on leads most
							likely to convert.
						</li>
						<li>
							<b>Increases conversions</b> by 50% and shortens the sales cycle
							within 60 days.
						</li>
						<li>
							<b>Perfect for: </b>Businesses with sales teams aiming to focus on
							high-value leads. <br />{" "}
							<u>e.g. B2B SaaS companies and consulting firms.</u>
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
							<b>Tracks real-time brand sentiment</b> across platforms to
							provide early detection of potential PR issues.
						</li>
						<li>
							<b>Identifies trends</b> in customer feedback, helping brands
							proactively address concerns and improve engagement.
						</li>
						<li>
							<b>Enhances reputation</b> management and increases positive
							sentiment by 30% in just 30 days.
						</li>
						<li>
							<b>Perfect for: </b>Businesses looking to manage their online
							reputation and understand customer sentiment. <br />{" "}
							<u>e.g. Marketing agencies and retail brands.</u>
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
							<b>Delivers hyper-relevant content</b> by analyzing user
							preferences and behaviors through NLP workflows.
						</li>
						<li>
							<b>Enhances the customer experience</b> by tailoring email
							campaigns, product recommendations, and web content.
						</li>
						<li>
							<b>Improves marketing</b> ROI by 35% and boosts engagement within
							30 days.
						</li>
						<li>
							<b>Perfect for: </b>Businesses focused on increasing engagement
							through targeted content. <br />{" "}
							<u>e.g. E-commerce businesses and digital marketing agencies.</u>
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
