import React from "react";

const FlowChart = () => {
	const flowSteps = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "Customer Messages",
			content:
				"Incoming conversations, feedback, & support tickets. Your users leave feedback via email, chats, surveys, or forms & Whispr collects every message in real time.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.75 17L15 12 9.75 7v10z"
					/>
				</svg>
			),
			title: "Whispr Analysis",
			content:
				"Using NLP, Whispr identifies sentiment, topics, urgency, and more while automatically tagging each message.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			title: "Smart Actions Trigger",
			content:
				"Based on message type and urgency, Whispr routes insights to the right teams or tools: Slack, Notion, Jira, Hubspot, etc.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			),
			title: "Reports & Insights",
			content:
				"Whispr compiles trends, pain points, and product ideas into monthly/weekly reports sent as slides or Notion pages.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-8 text-center text-purple-700">
				How Whispr AI Agent Works
			</h2>
			<div className="grid grid-cols-1 gap-5 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-4">
				{flowSteps.map((step, index) => (
					<div key={index} className="relative mb-6 sm:mb-0">
						<div className="flex items-center">
							<div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full ring-0 ring-white dark:bg-gray-900 sm:ring-8 dark:ring-gray-900 shrink-0">
								<div className="text-logoCyan">
									{step.icon}
								</div>
							</div>
							<div className="hidden sm:flex w-full bg-gradient-to-r from-logoPurple to-logoCyan h-0.5"></div>
						</div>
						<div className="mt-3 sm:pe-8">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{step.title}
							</h3>
							<p className="text-base font-normal text-gray-500 dark:text-gray-400">
								{step.content}
							</p>
						</div>
					</div>
				))}
			</div>

		
		</div>
	);
};

export default FlowChart;
