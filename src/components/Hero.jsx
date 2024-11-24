import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import ChangingTextSection from "./ChangingTextSection";
import Button from "./Button";

const Hero = () => {
	return (
		<section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
			<div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">20%</span> Discount For{" "}
						<span className="text-white">1 Month</span> Account
					</p>
				</div>

				<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
					<span className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
						<ChangingTextSection />
					</span>
					your development team.
				</h1>

				<p
					className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}
				>
					Subscription-based software engineering, web development and Canva
					designs to sky rocket your business. Targeted for growing and
					innovative companies.
				</p>

				<Button />
			</div>
		</section>
	);
};

export default Hero;

// <div
// className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
// >
// <img
//   src={robot}
//   alt="billing"
//   className="w-[100%] h-[100%] relative z-[5]"
// />

// {/* gradient start */}
// <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
// <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
// <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
// {/* gradient end */}
// </div>
