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
								Whispr Solutions
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Improved Conversions
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Time & Cost Savings
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Better Customer Experience
							</th>
							<th scope="col" className="px-6 py-3 text-logoCyan">
								Team Efficiency & Scalability
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-logoPurple whitespace-nowrap foundation"
							>
								Branded Instant <br /> Replies
							</th>
							<td className="px-6 py-4">
								Converts leads faster with timely, tone-aware replies
							</td>
							<td className="px-6 py-4">
								Saves $2K+/month vs. manual or VA-based follow-up
							</td>
							<td className="px-6 py-4">
								Feels personal, fast, and native to the brand
							</td>
							<td className="px-6 py-4">
								Removes repetitive reply-writing from support & sales teams
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Feedback <br /> Intelligence <br /> Engine
							</th>
							<td className="px-6 py-4">
								Enables faster product and marketing decisions based on real
								needs
							</td>
							<td className="px-6 py-4">
								Reduces 90% of manual feedback sorting time
							</td>
							<td className="px-6 py-4">
								Makes users feel heard and shapes the product around them
							</td>
							<td className="px-6 py-4">
								Scales research without adding PM/analyst roles
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Content- <br /> from- <br /> Conversations
							</th>
							<td className="px-6 py-4">
								Drives inbound leads with content crafted from real user
								language
							</td>
							<td className="px-6 py-4">
								Eliminates need for copywriters or freelancers for basic posts
							</td>
							<td className="px-6 py-4">
								Communicates clearly and often across all touchpoints
							</td>
							<td className="px-6 py-4">
								Multiplies content output without scaling the team
							</td>
						</tr>
						<tr className="odd:bg-white odd:dark:bg-gray-900/50 even:bg-gray-50/50 even:dark:bg-gray-800/50 border-b dark:border-gray-700/50">
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-logoPurple foundation"
							>
								Self-Learning <br /> Loop
							</th>
							<td className="px-6 py-4">
								Improves reply relevance, boosting lead and customer trust over
								time
							</td>
							<td className="px-6 py-4">
								Reduces follow-up churn and corrections long term
							</td>
							<td className="px-6 py-4">
								Creates more helpful and consistent replies every week
							</td>
							<td className="px-6 py-4">
								System improves over time with no added human cost
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default TableValue;
