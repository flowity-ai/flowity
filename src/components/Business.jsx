import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { discount } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== features.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue justify-center items-center`}
		>
			<img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="flex items-center font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
				{title}
				{index === 0 ? (
					<div className="flex items-center px-4 bg-discount-gradient rounded-[10px] w-[170px] ml-[1em]">
						<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
						<p className={`${styles.paragraph} text-[14px]`}>
							<span className="text-white">40%</span> Discount
						</p>
					</div>
				) : (
					""
				)}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
				{content}
			</p>
		</div>
	</div>
);

const Business = () => (
	<section id="features" className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Focus on strategy, <br className="sm:block hidden" /> we'll handle the
				build.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Skip the cost and stress of hiring in-house. Our subscription delivers
				expert software, stunning websites, and creative designs—no hire—fast,
				reliable, and hassle-free.
			</p>

			<Button styles={`mt-10`} />
		</div>

		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Business;
