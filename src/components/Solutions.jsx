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
					<p>
						<b>Use Case:</b> B2B SaaS startup with daily inbound demo requests
						and product questions. <br />
						<b>Before:</b> A human VA sent templated replies after 4–6 hours.{" "}
						<br />
						<b>After:</b> Whispr answered within 2 minutes, personalized to
						sender profile and query intent.
					</p>{" "}
					<br />
					<ul className="list-disc ml-5">
						<li className="">
							<b>50% faster reply time</b>
						</li>
						<br />
						<li>
							<b>35% increase in qualified call bookings</b>
						</li>
						<br />
						<li>
							<b>$2K saved/month on support labor</b>
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] max-w-[470px] mt-5">
					<p>
						<b>Use Case:</b> Product team at a Series A SaaS was drowning in
						untagged user feedback. <br />
						<b>Before:</b> A PM manually read and summarized feedback once a
						month. <br />
						<b>After:</b> Whispr auto-tags sentiment, trends, and topic
						frequency weekly.
					</p>{" "}
					<br />
					<ul className="list-disc ml-5">
						<li className="">
							<b>90% time saved in feedback processing</b>
						</li>
						<br />
						<li>
							<b>
								Released 2 features driven by voice-of-customer in 1 quarter
							</b>
						</li>
						<br />
						<li>
							<b>Increased NPS by +16</b>
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] max-w-[470px] mt-5">
					<p>
						<b>Use Case:</b> Founder-led agency had no time to post on LinkedIn
						or send email updates. <br />
						<b>Whispr</b> turned client calls and emails into polished
						thought-leadership posts.
					</p>{" "}
					<br />
					<ul className="list-disc ml-5">
						<li className="">
							<b>Weekly posts with 2K+ impressions</b>
						</li>
						<br />
						<li>
							<b>Email open rates increased by 38%</b>
						</li>
						<br />
						<li>
							<b>2 inbound clients per month just from content</b>
						</li>
					</ul>
				</div>
			),
		},
		{
			content: (
				<div className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] max-w-[470px] mt-5">
					<p>
						<b>Use Case:</b> Tech support team at a CRM platform saw repeated
						questions. <br />
						<b>Whispr</b> began to learn and adapt responses based on feedback
						on answers. <br />
					</p>{" "}
					<br />
					<ul className="list-disc ml-5">
						<li className="">
							<b>20% drop in repeat tickets</b>
						</li>
						<br />
						<li>
							<b>5 hours/week saved in training support reps</b>
						</li>
						<br />
						<li>
							<b>Increased customer satisfaction score by 25%</b>
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
