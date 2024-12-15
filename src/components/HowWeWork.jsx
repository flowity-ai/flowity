import React from "react";
import { useState } from "react";
import styles from "../style";
import { work } from "../assets";
import { workModel } from "../constants";

const WorkModel = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== workModel.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
		>
			<img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
				{content}
			</p>
		</div>
	</div>
);

const Services = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<section className={`md:flex-row flex-col w-full`}>
			<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={work} alt="How we work" className="w-[22px] h-[22px]" />
					<p className={`${styles.paragraph} ml-2`}>How We Work</p>
				</div>
				<h2 className="text-center">
					Streamlined Solutions, <br /> Tailored to You
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}
				>
					At Flowity AI, we believe simplicity drives results. Our RDRD
					Model—Request, Development, Refinement, Delivery—ensures a seamless,
					transparent process. You focus on your goals while we handle the
					execution, delivering tailored software, websites, and designs,
					stress-free.
				</p>
			</div>
			<div className="flex md:flex-row sm:flex-col">
				{/* Loop through tab data and render button for each. */}
				<div className="flex flex-col flex-1">
					{workModel.map((model, index) => {
						return (
							<div
								key={model.id}
								// Change the active tab on click.
								onClick={() => setActiveTabIndex(index)}
								className="flex flex-1 flex-col justify-center space-x-3 text-white"
							>
								<div>
									<WorkModel key={model.id} {...model} index={index} />
								</div>
							</div>
						);
					})}
				</div>
				{/* Show active tab content. */}
				<div className="flex-1 hidden md:flex">
					<img src={workModel[activeTabIndex].img} alt="Active Work Model" />
				</div>
			</div>
		</section>
	);
};

export default Services;
