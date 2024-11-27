import React from "react";
import { apple, bill, google } from "../assets";
import { discount } from "../assets";
import styles, { layout } from "../style";

const Ninescode = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={bill}
				alt="billing"
				className="w-[100%] h-[100%] relative z-[5]"
			/>

			{/* gradient start */}
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			{/* gradient end */}
		</div>

		<div className={layout.sectionInfo}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
				<p className={`${styles.paragraph} ml-2`}>
					Ninescode Foundation Community
				</p>
			</div>
			<h2 className={styles.heading2}>
				Your Tech Journey <br /> Starts Here
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Dedicated to advancing women in STEM, fostering growth, and creating a
				diverse tech landscape. Ninescode Foundation is your launchpad to thrive
				in STEM with support, mentorship, and endless opportunities.
			</p>

			<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
				<button
					type="button"
					className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
				>
					Learn more
				</button>
			</div>
		</div>
	</section>
);

export default Ninescode;
