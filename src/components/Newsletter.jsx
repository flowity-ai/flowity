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
				<p className={`${styles.paragraph} ml-2`}>Flow Nexus AI Newsletter</p>
			</div>
			<h2 className={styles.heading2}>
				Automate Smarter with Flowity Insights
			</h2>

			<div className="flex flex-row flex-wrap mt-10">
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

		<div className={`${layout.sectionInfo} px-6 mb-3`}>
			<p className={`${styles.paragraph} mt-6 text-start`}>
				<b>Guide to Automating Your Business with AI.</b> Subscribe for
				actionable insights on AI workflows, exclusive offers, workflow tips, AI
				trends, and success stories. <br />
			</p>
			<div className="flex flex-row flex-wrap mt-10">
				<iframe
					src="https://embeds.beehiiv.com/3af0aa19-c2bb-42c8-8f96-d62cdb7154e6?slim=true"
					data-test-id="beehiiv-embed"
					height="52"
					frameborder="0"
					scrolling="no"
				></iframe>
			</div>
		</div>
	</section>
);

export default Newsletter;
