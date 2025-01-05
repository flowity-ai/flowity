import React from "react";
import styles from "../style";
import { discount } from "../assets";
import ChangingTextSection from "./ChangingTextSection";
import Button from "./Button";

const Hero = () => {
	return (
		<section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
			<div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">50%</span> Discount -{" "}
						<span className="text-white">Available</span> slots
					</p>
				</div>

				<h1
					className={`${styles.flexCenter} flex-col text-center font-poppins font-semibold ss:text-[72px] text-[36px] text-white ss:leading-[75px] md:leading-[100.5px] `}
				>
					<ChangingTextSection /> Impactful Business Solutions
				</h1>

				<p
					className={`${styles.paragraph} max-w-[650px] mt-6 mb-6 text-center`}
				>
					We develop NLP-driven AI automation workflows focused in streamline
					customer support and optimize lead generation, delivering faster, more
					personalized interactions and providing real-time insights tailored to
					your business needs.
				</p>

				<Button />

				{/* gradient start */}
				<div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 bottom-0 rounded-full blue__gradient" />
				{/* gradient end */}
				{/* gradient start */}
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
				{/* gradient end */}
			</div>
		</section>
	);
};

export default Hero;
