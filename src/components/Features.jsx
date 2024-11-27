import React from "react";
import { stats } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ value, title, content, index }) => (
	<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
		<span className="inline-block text-blue-500 dark:text-blue-400">
			{value}
		</span>

		<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
			{title}
		</h1>

		<p className="text-gray-500 dark:text-gray-300">{content}</p>
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
			className={`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 sm:grid-cols-2 `}
		>
			{stats.map((stats, index) => (
				<FeatureCard key={stats.id} {...stats} index={index} />
			))}
		</div>
	</section>
);

export default Features;
