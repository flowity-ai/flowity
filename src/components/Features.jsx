import React from "react";
import { stats } from "../constants";
import styles, { layout } from "../style";
import { delivery } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
	<div className="p-[1.5px] m-1 space-y-3 rounded-[10px] bg-gradient-to-r from-logoPurple to-logoCyan">
		<div className="bg-primary p-[20px] md:p-[40px] rounded-[10px] h-full">
			<div className="flex justify-start items-center">
				<img
					className="inline-block text-logoCyan w-[30px] h-[30px] mr-[1rem] -mt-[10px]"
					src={icon}
				/>

				<h1 className="text-[18px] md:text-[22px] font-semibold text-gray-700 capitalize dark:text-white">
					{title}
				</h1>
			</div>

			<p className="text-gray-500 dark:text-gray-300 mt-3">{content}</p>
		</div>
	</div>
);

const Features = () => (
	<section
		id="features"
		className={`md:flex-row flex-col ${styles.paddingY} ${layout.flexCenter}`}
	>
		<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={delivery} alt="Delivery" className="w-[22px] h-[22px]" />
				<p className={`${styles.paragraph} ml-2`}>On-Demand Delivery</p>
			</div>
			<h2>Fast, Reliable, and Hassle-Free</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6 text-center`}>
				Provide input and see your vision come to life seamlessly. Foster
				creativity with time-saving tools and adaptable solutions.
			</p>
		</div>
		<div
			className={`grid grid-cols-1 gap-5 xl:mt-12 xl:gap-12 md:grid-cols-3 sm:grid-cols-2`}
		>
			{stats.map((stats, index) => (
				<FeatureCard key={stats.id} {...stats} index={index} />
			))}
		</div>
	</section>
);

export default Features;
