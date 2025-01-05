import React from "react";
import styles, { layout } from "../style";
import { news } from "../assets";

const Newsletter = () => (
	<section
		id="newsletter"
		className={`${layout.section} ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
	>
		<div className={`${layout.sectionInfo}`}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={news} alt="Newsletter" className="w-[22px] h-[22px]" />
				<p className={`${styles.paragraph} ml-2`}>FlowNexus Newsletter</p>
			</div>
			<h2 className={styles.heading2}>
				Automate Smarter with Flowity Insights
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-6  text-start`}>
				Guide to Automating Your Business with AI. Subscribe for actionable
				insights on AI workflows, exclusive offers, workflow tips, AI trends,
				and success stories. <br />
				<br />
				Subscribe <b>NOW</b> and get{" "}
				<b className="underline">50% OFF FOREVER</b>. <br /> Only <b>19</b>{" "}
				LIMITED available slots for this promotion.
			</p>
			<div className="flex flex-row flex-wrap sm:mt-10">
				<a href="https://flowity.beehiiv.com/" target="__blank">
					<button
						type="button"
						className={`p-[2px] flex items-center justify-center font-poppins font-light text-[18px] rounded-[10px] outline-none bg-gradient-to-br from-slate-50 to-logoCyan ${styles}`}
					>
						<div className="p-[10px] rounded-[10px] bg-gray-900 h-gull w-full flex items-center justify-center text-logoCyan">
							<span className="text-blue-gradient">See what you get</span>
						</div>
					</button>
				</a>
			</div>
		</div>
		<div
			className={`${layout.sectionImgReverse} ${layout.sectionInfo} ml-[100px] w-full`}
		>
			<iframe
				src="https://embeds.beehiiv.com/3af0aa19-c2bb-42c8-8f96-d62cdb7154e6?slim=true"
				data-test-id="beehiiv-embed"
				height="52"
				frameborder="0"
				scrolling="no"
			></iframe>
		</div>
	</section>
);

export default Newsletter;
