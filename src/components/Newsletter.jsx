import React from "react";
import styles, { layout } from "../style";
import { news } from "../assets";

const Newsletter = () => (
	<section
		id="newsletter"
		className={`${layout.section} ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
	>
		<div className={layout.sectionInfo}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={news} alt="Newsletter" className="w-[22px] h-[22px]" />
				<p className={`${styles.paragraph} ml-2`}>FlowNexus Newsletter</p>
			</div>
			<h2 className={styles.heading2}>
				Focus on strategy, <br className="sm:block hidden" /> we'll handle the
				build.
			</h2>
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
		</div>
		<div
			className={`${layout.sectionImgReverse} ${layout.sectionInfo} ml-[100px] w-full`}
		>
			<iframe
				src="https://embeds.beehiiv.com/3af0aa19-c2bb-42c8-8f96-d62cdb7154e6"
				data-test-id="beehiiv-embed"
				width="100%"
				height="320"
				frameborder="0"
				scrolling="no"
			></iframe>

			{/* gradient start */}
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			{/* gradient end */}
		</div>
	</section>
);

export default Newsletter;
