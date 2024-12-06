import React from "react";
import { stats } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ value, title, content, index }) => (
	<div className="p-[1.5px] m-1 space-y-3 rounded-[10px] bg-gradient-to-r from-logoPurple to-logoCyan">
		<div className="bg-primary p-[40px] rounded-[10px] h-full">
			<div className="flex justify-start items-center">
				<span className="inline-block text-logoCyan text-[30px] mr-[1rem]">
					{value}
				</span>

				<h1 className="text-[22px] font-semibold text-gray-700 capitalize dark:text-white">
					{title}
				</h1>
			</div>

			<p className="text-gray-500 dark:text-gray-300">{content}</p>
		</div>
	</div>
);

const Features = () => (
	<section
		id="features"
		className={`md:flex-row flex-col ${styles.paddingY} ${layout.flexCenter}`}
	>
		<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
			<h2>On-Demand Delivery</h2>
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
