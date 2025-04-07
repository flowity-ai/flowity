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
								Marketing Efficiency
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Revenue Growth
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
								Marketing & Lead <br /> Generation Automation
							</th>
							<td className="px-6 py-4">
								Engages visitors with personalized interactions that boost
								satisfaction.
							</td>
							<td className="px-6 py-4">
								Automates lead capture & follow-up processes, reducing manual
								effort.
							</td>
							<td className="px-6 py-4">
								Drives targeted campaigns with dynamic, real-time lead
								nurturing.
							</td>
							<td className="px-6 py-4">
								Increases conversion rates by turning clicks into high-quality
								leads.
							</td>
							<td className="px-6 py-4">
								Frees staff from routine tasks, allowing focus on strategic
								initiatives.
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Sales Outreach & <br /> Personalized <br /> Communication
							</th>
							<td className="px-6 py-4">
								Creates tailored communications that build trust and enhance CX.
							</td>
							<td className="px-6 py-4">
								Streamlines multi-channel outreach, ensuring consistent
								follow-ups.
							</td>
							<td className="px-6 py-4">
								Optimizes messaging with data-driven insights for better
								engagement.
							</td>
							<td className="px-6 py-4">
								Accelerates deal cycles, boosting conversion rates and sales
								revenue.
							</td>
							<td className="px-6 py-4">
								Reduces repetitive outreach tasks, enhancing focus on strategy.
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
								Delivers dynamic, personalized content that enhances user
								satisfaction.
							</td>
							<td className="px-6 py-4">
								Automates content creation and scheduling, reducing manual
								intervention.
							</td>
							<td className="px-6 py-4">
								Tailors marketing messages to individual audience segments
								effectively.
							</td>
							<td className="px-6 py-4">
								Boosts revenue through higher engagement, conversion, and
								retention rates.
							</td>
							<td className="px-6 py-4">
								Streamlines creative processes so teams can focus on strategic
								content planning.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TableValue;
