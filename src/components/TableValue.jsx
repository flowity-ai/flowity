import React from "react";
import styles from "../style";

const TableValue = () => {
	return (
		<section className="mt-[50px] mb-[100px]">
			<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
				<h2 className="text-center">
					Transformative Benefits of <br /> Our AI Solutions
				</h2>
				<p
					className={`${styles.paragraph} max-w-[700px] mt-6 mb-6 text-center`}
				>
					NLP automations deliver value beyond customer experience, supporting
					holistic growth and operational excellence for businesses.
				</p>
			</div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
				<table className="w-full text-sm text-left rtl:text-right dark:text-dimWhite">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50/50 dark:bg-gray-700/50 dark:text-gray-400">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-gradient text-lg foundation"
							>
								Solutions
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Customer Experience
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Operational Efficiency
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Revenue Growth
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Brand Reputation
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Employee Productivity
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-logoPurple whitespace-nowrap foundation"
							>
								Customer Feedback <br /> Sentiment Analysis
							</th>
							<td className="px-6 py-4">
								Enhances CX by identifying customer likes, dislikes, and pain
								points for targeted improvements.
							</td>
							<td className="px-6 py-4">
								Automates analysis of large datasets, saving time for support
								and marketing teams.
							</td>
							<td className="px-6 py-4">
								Informs product/service improvements that increase loyalty and
								repeat purchases.
							</td>
							<td className="px-6 py-4">
								Identifies recurring issues, enabling companies to address them
								and show responsiveness.
							</td>
							<td className="px-6 py-4">
								Reduces manual workload for feedback processing, allowing focus
								on actionable solutions.
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Lead Scoring and <br /> Prioritization
							</th>
							<td className="px-6 py-4">
								Ensures leads are prioritized based on intent, creating a
								seamless and personalized sales experience.
							</td>
							<td className="px-6 py-4">
								Reduces time spent on low-potential leads, enabling efficient
								use of sales resources.
							</td>
							<td className="px-6 py-4">
								Boosts conversions by prioritizing high-value leads, increasing
								revenue per deal.
							</td>
							<td className="px-6 py-4">
								Ensures personalized and timely client interactions, enhancing
								brand credibility.
							</td>
							<td className="px-6 py-4">
								Streamlines workflows, enabling teams to focus on high-impact
								tasks.
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Social Media <br /> Sentiment Monitoring
							</th>
							<td className="px-6 py-4">
								Improves CX by enabling timely responses to customer concerns
								and engagement opportunities.
							</td>
							<td className="px-6 py-4">
								Automates real-time brand sentiment tracking, reducing manual
								monitoring efforts.
							</td>
							<td className="px-6 py-4">
								Proactively addresses negative sentiment or PR crises,
								maintaining revenue by protecting brand trust.
							</td>
							<td className="px-6 py-4">
								Helps maintain a positive public image by addressing concerns
								quickly.
							</td>
							<td className="px-6 py-4">
								Frees marketing and PR teams to focus on strategy instead of
								repetitive monitoring tasks.
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Automated Content <br /> Personalization
							</th>
							<td className="px-6 py-4">
								Tailors content to user preferences, delivering a more engaging
								and relevant experience.
							</td>
							<td className="px-6 py-4">
								Streamlines content delivery processes, reducing manual
								segmentation and campaign setup.
							</td>
							<td className="px-6 py-4">
								Drives higher engagement and click-through rates, improving
								marketing ROI and increasing sales.
							</td>
							<td className="px-6 py-4">
								Creates a customer-focused image by delivering hyper-relevant,
								personalized content.
							</td>
							<td className="px-6 py-4">
								Simplifies content management, enabling faster execution of
								campaigns.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TableValue;
