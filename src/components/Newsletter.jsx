import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { discount, bill } from "../assets";

const Newsletter = () => (
	<section
		id="features"
		className={`${layout.section} ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
	>
		<div className={layout.sectionInfo}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
				<p className={`${styles.paragraph} ml-2`}>Newsletter</p>
			</div>
			<h2 className={styles.heading2}>
				Focus on strategy, <br className="sm:block hidden" /> we'll handle the
				build.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Skip the cost and stress of hiring in-house. Our subscription delivers
				expert software, stunning websites, and creative designs—no hire—fast,
				reliable, and hassle-free.
			</p>

			<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
				<button
					type="button"
					className={`p-[2px] flex items-center justify-center font-poppins font-light text-[18px] rounded-[10px] outline-none bg-gradient-to-br from-slate-50 to-logoCyan ${styles}`}
				>
					<div className="p-[10px] rounded-[10px] bg-gray-900 h-gull w-full flex items-center justify-center text-logoCyan">
						Learn more
					</div>
				</button>
			</div>
		</div>

		<div className={`${layout.sectionImgReverse} ${layout.sectionInfo}`}>
			<ul className="w-[100%] h-[100%] relative z-[5] text-white">
				<li>
					<b>Exclusive Tips & Tricks:</b> Practical guidance on implementing
					AI-powered solutions, automating workflows, and leveraging generative
					AI.
				</li>
				<li>
					<b>Case Studies:</b> Learn from real-world examples of how Flowity AI
					is transforming businesses.
				</li>
				<li>
					<b>Special Offers:</b> Be the first to know about promotions, events,
					and community initiatives.
				</li>
				<li>
					<b>Tech Updates:</b> Stay ahead with the latest trends and tools in
					AI, web development, and design.
				</li>
			</ul>

			{/* gradient start */}
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			{/* gradient end */}
		</div>
	</section>
);

export default Newsletter;
