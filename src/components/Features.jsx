import { stats } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ value, title, content, index }) => (
	<div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
		<span class="inline-block text-blue-500 dark:text-blue-400">{value}</span>

		<h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
			{title}
		</h1>

		<p class="text-gray-500 dark:text-gray-300">{content}</p>
	</div>
);

const Features = () => (
	<section id="features" className={layout.section}>
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
