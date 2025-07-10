import React from "react";
import styles from "../style";
import { work } from "../assets";
import { workModel } from "../constants";
import styled from "styled-components";

const StyledWrapper = styled.div`
	.card {
		border-radius: 30px;
		background: #212121;
		box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
	}
`;

const WorkModel = ({ title, content, index, value }) => (
	<div
		className={`flex flex-col p-6 rounded-[20px] feature-card md:min-h-[250px]`}
	>
		<div className="flex items-center">
			<div
				className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex items-start mb-2`}
			>
				<span className="text-logoCyan text-[30px] foundation w-[30px] h-[30px]">
					{value}
				</span>
			</div>
			<h4 className="flex font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
				{title}
			</h4>
		</div>
		<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
			{content}
		</p>
	</div>
);

const Services = () => {
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
					className={`${styles.paragraph} max-w-[700px] mt-6 mb-6 text-center`}
				>
					At Flowity AI, simplicity powers success. Our process ensures a smooth
					journey from idea to implementation. You focus on growing your
					business while we handle the rest, delivering impactful AI-driven
					automation workflows effortlessly.
				</p>
			</div>
			<div className="flex md:flex-row flex-col">
				{/* Loop through tab data and render button for each. */}
				<div className="flex flex-col md:flex-row flex-1">
					{workModel.map((model, index) => {
						return (
							<div
								key={model.id}
								className="flex flex-1 flex-col justify-center space-x-3 text-white"
							>
								<div>
									<WorkModel key={model.id} {...model} index={index} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
