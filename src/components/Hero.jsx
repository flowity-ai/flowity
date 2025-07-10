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
					className={`${styles.flexCenter} flex-col text-center font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[75px] md:leading-[100.5px] `}
				>
					Your AI-Powered <ChangingTextSection />
				</h1>

				<p
					className={`${styles.paragraph} max-w-[650px] mt-6 mb-6 text-center`}
				>
					Flowity AI's <b>Whispr</b> turns your customer conversations,
					feedback, and inbound messages into on-brand content, instant replies,
					and decision-ready insights, without hiring. <br />
					<br />
					<i class="">
						Built for B2B SaaS, digital-first agencies, and product-led startups
						who want to scale content, support, and product feedback on
						autopilot.
					</i>
				</p>

				<Button />
			</div>
		</section>
	);
};

export default Hero;
