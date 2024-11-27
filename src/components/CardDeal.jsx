import React from "react";
import { card, discount } from "../assets";
import styles, { layout } from "../style";
import { workModel } from "../constants";

const WorkModel = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== workModel.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
		>
			<img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
				{content}
			</p>
		</div>
	</div>
);

const CardDeal = () => (
	<section
		className={`${styles.heading2} ${styles.flexCenter} ${styles.paddingY} flex-col`}
	>
		<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
			<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
			<p className={`${styles.paragraph} ml-2`}>How We Work</p>
		</div>
		<h2 className="text-center">
			Streamlined Solutions, <br /> Tailored to You
		</h2>
		<p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}>
			At Flowity AI, we believe simplicity drives results. Our RDRD
			Model—Request, Development, Refinement, Delivery—ensures a seamless,
			transparent process. You focus on your goals while we handle the
			execution, delivering tailored software, websites, and designs,
			stress-free.
		</p>
		<div className={`${layout.section}`}>
			<div className={`${layout.sectionInfo}`}>
				{workModel.map((model, index) => (
					<WorkModel key={model.id} {...model} index={index} />
				))}
			</div>

			<div className={layout.sectionImg}>
				<img src={card} alt="billing" className="w-[100%] h-[100%]" />
			</div>
		</div>
	</section>
);

export default CardDeal;
