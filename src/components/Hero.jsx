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
						<span className="text-white">40%</span> Discount The{" "}
						<span className="text-white">1° Month</span>
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
					Subscription-based for maximizing business efficiency through AI
					automation workflows, flexible software engineering teams,
					lightning-fast website and landing page creation, and AI-driven Canva
					designs to accelerate innovation and growth.
				</p>

				<Button />
			</div>
		</section>
	);
};

export default Hero;
