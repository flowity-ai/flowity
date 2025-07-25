import React from "react";
import { aiVector, aiPower } from "../assets";
import styles, { layout } from "../style";

const AISection = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={aiVector}
				alt="AI Vector"
				className="w-[100%] h-[100%] relative z-[5]"
			/>
		</div>

		<div className={layout.sectionInfo}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={aiPower} alt="discount" className="w-[22px] h-[22px]" />
				<p className={`${styles.paragraph} ml-2`}>AI Powered</p>
			</div>
			<h2 className={styles.heading2}>Your Partner in Innovation</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Our AI-powered processes leverage NLP-driven workflows to help us
				streamline processes and optimize customer support, ensuring faster
				response times, enhanced efficiency, and a more personalized customer
				experience.
			</p>
		</div>
	</section>
);

export default AISection;
