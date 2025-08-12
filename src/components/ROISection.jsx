import React, { useState, useEffect } from "react";

export default function ROISection() {
	const [activeMetric, setActiveMetric] = useState(0);
	const [animatedValue, setAnimatedValue] = useState(0);

	// Realistic metrics based on industry benchmarks
	const metrics = [
		{
			id: "churn",
			title: "Churn Reduction",
			value: 28,
			unit: "%",
			description:
				"Identify at-risk customers 30 days before they leave with predictive analytics",
			impact: "Protects recurring revenue and improves customer lifetime value",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					></path>
				</svg>
			),
		},
		{
			id: "cltv",
			title: "CLTV Increase",
			value: 22,
			unit: "%",
			description:
				"Identify upsell opportunities and improve retention with behavioral insights",
			impact: "Increases average customer value and reduces acquisition costs",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			),
		},
		{
			id: "efficiency",
			title: "Operational Efficiency",
			value: 45,
			unit: "%",
			description: "Automate manual data processing and analysis tasks",
			impact: "Reduces labor costs and accelerates decision-making cycles",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					></path>
				</svg>
			),
		},
		{
			id: "insights",
			title: "Insight Velocity",
			value: 87,
			unit: "%",
			description: "Reduce time from data collection to actionable insights",
			impact: "Enables real-time decision making and competitive advantage",
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M9 7h6m0 10v-3m-4-2h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
					></path>
				</svg>
			),
		},
	];

	const industries = [
		{
			name: "SaaS Companies",
			results: "28% reduction in churn, 24% faster expansion revenue",
		},
		{
			name: "E-commerce",
			results: "22% higher AOV, 35% lower return rates",
		},
		{
			name: "Fintech",
			results: "45% faster compliance reporting, 40% fewer support tickets",
		},
		{
			name: "Healthcare Tech",
			results:
				"31% improved patient satisfaction, 38% faster feedback processing",
		},
	];

	const currentMetric = metrics[activeMetric];

	// Animate the metric value
	useEffect(() => {
		setAnimatedValue(0);
		const targetValue = currentMetric.value;
		const duration = 1500;
		const increment = targetValue / (duration / 16);

		let current = 0;
		const timer = setInterval(() => {
			current += increment;
			if (current >= targetValue) {
				setAnimatedValue(targetValue);
				clearInterval(timer);
			} else {
				setAnimatedValue(Math.round(current));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [activeMetric, currentMetric.value]);

	// Auto-rotate metrics
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveMetric((prev) => (prev + 1) % metrics.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [metrics.length]);

	return (
		<div className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-full filter blur-[150px] opacity-10 animate-blob"></div>
			<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] rounded-full filter blur-[120px] opacity-10 animate-blob animation-delay-3000"></div>

			<div className="relative max-w-7xl mx-auto px-6 z-10">
				<div className="text-center max-w-4xl mx-auto mb-16">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-5">
						<span className="text-cyan-300 text-sm font-medium">
							Measurable Business Impact
						</span>
					</div>
					<h2 className="text-4xl font-bold text-white">
						Intelligence-Driven{" "}
						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
							ROI
						</span>
					</h2>
					<p className="mt-5 text-xl text-gray-300 leading-relaxed">
						Flowity transforms qualitative data into quantitative business
						outcomes. Our clients achieve measurable performance improvements
						within the first 90 days.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* ROI Visualization - Sharper edges */}
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-xl rotate-3 blur-lg opacity-20"></div>
						<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 backdrop-blur-lg">
							<div className="flex items-center justify-between mb-8">
								<h3 className="text-2xl font-bold text-white">
									Impact Visualization
								</h3>
								<div className="text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300">
									REAL-TIME
								</div>
							</div>

							<div className="flex justify-center mb-8">
								<div className="relative w-56 h-56">
									{/* Animated Radial Chart */}
									<svg className="w-full h-full" viewBox="0 0 100 100">
										<circle
											cx="50"
											cy="50"
											r="45"
											fill="none"
											stroke="#1a1a2e"
											strokeWidth="8"
										/>
										<circle
											cx="50"
											cy="50"
											r="45"
											fill="none"
											stroke="url(#roi-gradient)"
											strokeWidth="8"
											strokeDasharray={`${animatedValue * 1.4}, 282`}
											strokeLinecap="round"
											transform="rotate(-90 50 50)"
											className="transition-all duration-1000 ease-out"
										/>
										<defs>
											<linearGradient
												id="roi-gradient"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="0%"
											>
												<stop offset="0%" stopColor="#9C83F7" />
												<stop offset="100%" stopColor="#1CD8DE" />
											</linearGradient>
										</defs>
									</svg>

									<div className="absolute inset-0 flex flex-col items-center justify-center">
										<div className="text-5xl font-bold bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
											{animatedValue}
											{currentMetric.unit}
										</div>
										<div className="text-gray-300 mt-2 text-center max-w-[120px] text-sm">
											{currentMetric.title}
										</div>
									</div>
								</div>
							</div>

							<div className="text-center pt-4 border-t border-gray-800">
								<p className="text-gray-300 mb-4 text-sm">
									{currentMetric.description}
								</p>
								<div className="inline-flex items-center px-3 py-1.5 bg-gray-800 rounded border border-cyan-500/20">
									<span className="text-cyan-300 text-sm">Impact:</span>
									<span className="text-white ml-1.5 text-sm">
										{currentMetric.impact}
									</span>
								</div>
							</div>
						</div>

						{/* Floating Metric Selector */}
						<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
							<div className="flex space-x-3">
								{metrics.map((metric, index) => (
									<button
										key={metric.id}
										onClick={() => setActiveMetric(index)}
										className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
											activeMetric === index
												? "bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] scale-125"
												: "bg-gray-700 hover:bg-gray-600"
										}`}
										aria-label={`Show ${metric.title} metric`}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Business Value Breakdown - Sharper edges */}
					<div>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-5">
								Strategic Value Framework
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Flowity delivers compound value across critical dimensions of
								business performance.
							</p>
						</div>

						<div className="space-y-6">
							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-xl p-7 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10">
								<div className="flex items-start">
									<div className="flex-shrink-0 mt-0.5">
										<div className="w-9 h-9 rounded-md bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
											<svg
												className="w-5 h-5 text-cyan-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-5">
										<h4 className="text-xl font-bold text-white mb-2.5">
											Revenue Acceleration
										</h4>
										<p className="text-gray-300 mb-3 text-sm">
											Unlock hidden growth opportunities and maximize customer
											lifetime value.
										</p>
										<ul className="space-y-2">
											{[
												"Identify expansion revenue opportunities",
												"Reduce customer acquisition costs",
												"Optimize pricing strategies",
											].map((item, index) => (
												<li key={index} className="flex items-center">
													<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2.5"></div>
													<span className="text-gray-300 text-sm">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-xl p-7 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10">
								<div className="flex items-start">
									<div className="flex-shrink-0 mt-0.5">
										<div className="w-9 h-9 rounded-md bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
											<svg
												className="w-5 h-5 text-cyan-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-5">
										<h4 className="text-xl font-bold text-white mb-2.5">
											Operational Excellence
										</h4>
										<p className="text-gray-300 mb-3 text-sm">
											Automate resource-intensive processes and elevate team
											productivity.
										</p>
										<ul className="space-y-2">
											{[
												"Reduce manual data processing by 70%+",
												"Accelerate decision cycles by 5x",
												"Eliminate repetitive tasks",
											].map((item, index) => (
												<li key={index} className="flex items-center">
													<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2.5"></div>
													<span className="text-gray-300 text-sm">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-xl p-7 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10">
								<div className="flex items-start">
									<div className="flex-shrink-0 mt-0.5">
										<div className="w-9 h-9 rounded-md bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
											<svg
												className="w-5 h-5 text-cyan-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
												></path>
											</svg>
										</div>
									</div>
									<div className="ml-5">
										<h4 className="text-xl font-bold text-white mb-2.5">
											Competitive Advantage
										</h4>
										<p className="text-gray-300 mb-3 text-sm">
											Transform insights into strategic differentiators that
											drive market leadership.
										</p>
										<ul className="space-y-2">
											{[
												"Identify emerging market trends before competitors",
												"Develop data-driven innovation pipelines",
												"Enhance brand perception through proactive engagement",
											].map((item, index) => (
												<li key={index} className="flex items-center">
													<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2.5"></div>
													<span className="text-gray-300 text-sm">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Industry Performance - Sharper edges */}
				<div className="mt-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-xl border border-cyan-500/30 p-8">
					<div className="flex flex-col md:flex-row items-start gap-8">
						<div className="flex-shrink-0">
							<h3 className="text-2xl font-bold text-white mb-5">
								Proven Industry Results
							</h3>
							<p className="text-gray-300 max-w-md text-sm">
								Flowity delivers measurable outcomes across sectors by
								transforming industry-specific data.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
							{industries.map((industry, index) => (
								<div
									key={index}
									className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300 group"
								>
									<div className="flex items-center mb-3">
										<div className="w-2.5 h-2.5 rounded-full bg-cyan-400 mr-3 group-hover:animate-pulse"></div>
										<h4 className="text-lg font-semibold text-white">
											{industry.name}
										</h4>
									</div>
									<p className="text-gray-300 text-sm">{industry.results}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ROI Calculation - Maintained message */}
				<div className="mt-16 text-center">
					<div className="inline-block max-w-2xl bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
						<h3 className="text-2xl font-bold text-white mb-5">
							Calculate Your Potential ROI
						</h3>
						<div className="mb-6 flex justify-center">
							<div className="inline-flex items-center px-5 py-2.5 bg-cyan-900/20 rounded-lg border border-cyan-500/30">
								<svg
									className="w-5 h-5 text-cyan-400 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									></path>
								</svg>
								<span className="text-cyan-300 font-medium">
									$18.50 ROI for every $1 invested
								</span>
							</div>
						</div>
						<p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
							Enterprises using Flowity achieve an average of{" "}
							<span className="text-cyan-300">18.5x ROI</span> within the first
							year. Discover your potential savings with our ROI calculator.
						</p>
						<a
							href="#"
							className="px-7 py-3.5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300 inline-flex items-center"
						>
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
								></path>
							</svg>
							Estimate Your Savings
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

// import React, { useState, useEffect } from "react";

// export default function ROISection() {
// 	const [activeMetric, setActiveMetric] = useState(0);
// 	const [animatedValue, setAnimatedValue] = useState(0);

// 	const metrics = [
// 		{
// 			id: "churn",
// 			title: "Churn Reduction",
// 			value: 27,
// 			unit: "%",
// 			description:
// 				"Identify at-risk customers before they leave with predictive sentiment analysis",
// 			impact: "Protects recurring revenue and improves customer lifetime value",
// 			icon: (
// 				<svg
// 					className="w-6 h-6"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="1.5"
// 						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			id: "cltv",
// 			title: "CLTV Increase",
// 			value: 19,
// 			unit: "%",
// 			description:
// 				"Identify upsell opportunities and improve retention with behavioral insights",
// 			impact: "Increases average customer value and reduces acquisition costs",
// 			icon: (
// 				<svg
// 					className="w-6 h-6"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="1.5"
// 						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			id: "efficiency",
// 			title: "Operational Efficiency",
// 			value: 42,
// 			unit: "%",
// 			description: "Automate manual data processing and analysis tasks",
// 			impact: "Reduces labor costs and accelerates decision-making cycles",
// 			icon: (
// 				<svg
// 					className="w-6 h-6"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="1.5"
// 						d="M13 10V3L4 14h7v7l9-11h-7z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			id: "insights",
// 			title: "Insight Velocity",
// 			value: 83,
// 			unit: "%",
// 			description: "Reduce time from data collection to actionable insights",
// 			impact: "Enables real-time decision making and competitive advantage",
// 			icon: (
// 				<svg
// 					className="w-6 h-6"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="1.5"
// 						d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 	];

// 	const industries = [
// 		{
// 			name: "SaaS Companies",
// 			results: "27% reduction in churn, 22% faster expansion revenue",
// 		},
// 		{
// 			name: "E-commerce",
// 			results: "19% higher AOV, 31% lower return rates",
// 		},
// 		{
// 			name: "Fintech",
// 			results: "42% faster compliance reporting, 38% fewer support tickets",
// 		},
// 		{
// 			name: "Healthcare Tech",
// 			results:
// 				"28% improved patient satisfaction, 35% faster feedback processing",
// 		},
// 	];

// 	const currentMetric = metrics[activeMetric];

// 	// Animate the metric value
// 	useEffect(() => {
// 		setAnimatedValue(0);
// 		const targetValue = currentMetric.value;
// 		const duration = 1500;
// 		const increment = targetValue / (duration / 16);

// 		let current = 0;
// 		const timer = setInterval(() => {
// 			current += increment;
// 			if (current >= targetValue) {
// 				setAnimatedValue(targetValue);
// 				clearInterval(timer);
// 			} else {
// 				setAnimatedValue(Math.round(current));
// 			}
// 		}, 16);

// 		return () => clearInterval(timer);
// 	}, [activeMetric, currentMetric.value]);

// 	// Auto-rotate metrics
// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setActiveMetric((prev) => (prev + 1) % metrics.length);
// 		}, 4000);

// 		return () => clearInterval(interval);
// 	}, [metrics.length]);

// 	return (
// 		<div className="relative py-28 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
// 			{/* Animated Background Elements */}
// 			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-full filter blur-[150px] opacity-10 animate-blob"></div>
// 			<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] rounded-full filter blur-[120px] opacity-10 animate-blob animation-delay-3000"></div>

// 			<div className="relative max-w-7xl mx-auto px-6 z-10">
// 				<div className="text-center max-w-4xl mx-auto mb-20">
// 					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
// 						<span className="text-cyan-300 text-sm font-medium">
// 							Measurable Business Impact
// 						</span>
// 					</div>
// 					<h2 className="text-4xl font-bold text-white">
// 						Intelligence-Driven{" "}
// 						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
// 							ROI
// 						</span>
// 					</h2>
// 					<p className="mt-6 text-xl text-gray-300 leading-relaxed">
// 						Flowity transforms qualitative data into quantitative business
// 						outcomes. Our clients achieve measurable performance improvements
// 						across critical metrics within the first 90 days of implementation.
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// 					{/* ROI Visualization */}
// 					<div className="relative">
// 						<div className="absolute -inset-6 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-3xl rotate-3 blur-xl opacity-20"></div>
// 						<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 backdrop-blur-lg">
// 							<div className="flex items-center justify-between mb-10">
// 								<h3 className="text-2xl font-bold text-white">
// 									Impact Visualization
// 								</h3>
// 								<div className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
// 									REAL-TIME
// 								</div>
// 							</div>

// 							<div className="flex justify-center mb-12">
// 								<div className="relative w-64 h-64">
// 									{/* Animated Radial Chart */}
// 									<svg className="w-full h-full" viewBox="0 0 100 100">
// 										<circle
// 											cx="50"
// 											cy="50"
// 											r="45"
// 											fill="none"
// 											stroke="#1a1a2e"
// 											strokeWidth="8"
// 										/>
// 										<circle
// 											cx="50"
// 											cy="50"
// 											r="45"
// 											fill="none"
// 											stroke="url(#roi-gradient)"
// 											strokeWidth="8"
// 											strokeDasharray={`${animatedValue * 1.4}, 282`}
// 											strokeLinecap="round"
// 											transform="rotate(-90 50 50)"
// 											className="transition-all duration-1000 ease-out"
// 										/>
// 										<defs>
// 											<linearGradient
// 												id="roi-gradient"
// 												x1="0%"
// 												y1="0%"
// 												x2="100%"
// 												y2="0%"
// 											>
// 												<stop offset="0%" stopColor="#9C83F7" />
// 												<stop offset="100%" stopColor="#1CD8DE" />
// 											</linearGradient>
// 										</defs>
// 									</svg>

// 									<div className="absolute inset-0 flex flex-col items-center justify-center">
// 										<div className="text-5xl font-bold bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
// 											{animatedValue}
// 											{currentMetric.unit}
// 										</div>
// 										<div className="text-gray-300 mt-2 text-center max-w-[120px]">
// 											{currentMetric.title}
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="text-center">
// 								<p className="text-gray-300 mb-6">
// 									{currentMetric.description}
// 								</p>
// 								<div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg border border-cyan-500/20">
// 									<span className="text-cyan-300">Business Impact:</span>
// 									<span className="text-white ml-2">
// 										{currentMetric.impact}
// 									</span>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Floating Metric Selector */}
// 						<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
// 							<div className="flex space-x-4">
// 								{metrics.map((metric, index) => (
// 									<button
// 										key={metric.id}
// 										onClick={() => setActiveMetric(index)}
// 										className={`w-3 h-3 rounded-full transition-all duration-300 ${
// 											activeMetric === index
// 												? "bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] scale-125"
// 												: "bg-gray-700 hover:bg-gray-600"
// 										}`}
// 										aria-label={`Show ${metric.title} metric`}
// 									/>
// 								))}
// 							</div>
// 						</div>
// 					</div>

// 					{/* Business Value Breakdown */}
// 					<div>
// 						<div className="mb-10">
// 							<h3 className="text-2xl font-bold text-white mb-6">
// 								Strategic Value Framework
// 							</h3>
// 							<p className="text-gray-300 leading-relaxed">
// 								Flowity's AI intelligence platform delivers compound value
// 								across three critical dimensions of business performance,
// 								creating a sustainable competitive advantage.
// 							</p>
// 						</div>

// 						<div className="space-y-8">
// 							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10">
// 								<div className="flex items-start">
// 									<div className="flex-shrink-0 mt-1">
// 										<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
// 											<svg
// 												className="w-6 h-6 text-cyan-400"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24"
// 												xmlns="http://www.w3.org/2000/svg"
// 											>
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth="1.5"
// 													d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
// 												></path>
// 											</svg>
// 										</div>
// 									</div>
// 									<div className="ml-6">
// 										<h4 className="text-xl font-bold text-white mb-3">
// 											Revenue Acceleration
// 										</h4>
// 										<p className="text-gray-300 mb-4">
// 											Unlock hidden growth opportunities and maximize customer
// 											lifetime value through predictive insights and
// 											personalized engagement strategies.
// 										</p>
// 										<ul className="space-y-3">
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Identify expansion revenue opportunities
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Reduce customer acquisition costs
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Optimize pricing strategies
// 												</span>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10">
// 								<div className="flex items-start">
// 									<div className="flex-shrink-0 mt-1">
// 										<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
// 											<svg
// 												className="w-6 h-6 text-cyan-400"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24"
// 												xmlns="http://www.w3.org/2000/svg"
// 											>
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth="1.5"
// 													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
// 												></path>
// 											</svg>
// 										</div>
// 									</div>
// 									<div className="ml-6">
// 										<h4 className="text-xl font-bold text-white mb-3">
// 											Operational Excellence
// 										</h4>
// 										<p className="text-gray-300 mb-4">
// 											Automate resource-intensive processes and elevate team
// 											productivity with AI-powered workflow optimization.
// 										</p>
// 										<ul className="space-y-3">
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Reduce manual data processing by 70%+
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Accelerate decision cycles by 5x
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Eliminate repetitive tasks
// 												</span>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="bg-gradient-to-r from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10">
// 								<div className="flex items-start">
// 									<div className="flex-shrink-0 mt-1">
// 										<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
// 											<svg
// 												className="w-6 h-6 text-cyan-400"
// 												fill="none"
// 												stroke="currentColor"
// 												viewBox="0 0 24 24"
// 												xmlns="http://www.w3.org/2000/svg"
// 											>
// 												<path
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													strokeWidth="1.5"
// 													d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
// 												></path>
// 											</svg>
// 										</div>
// 									</div>
// 									<div className="ml-6">
// 										<h4 className="text-xl font-bold text-white mb-3">
// 											Competitive Advantage
// 										</h4>
// 										<p className="text-gray-300 mb-4">
// 											Transform customer insights into strategic differentiators
// 											that drive market leadership and sustainable growth.
// 										</p>
// 										<ul className="space-y-3">
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Identify emerging market trends before competitors
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Develop data-driven innovation pipelines
// 												</span>
// 											</li>
// 											<li className="flex items-center">
// 												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
// 												<span className="text-gray-300">
// 													Enhance brand perception through proactive engagement
// 												</span>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Industry Performance */}
// 				<div className="mt-24 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl border border-cyan-500/30 p-10">
// 					<div className="flex flex-col md:flex-row items-start gap-10">
// 						<div className="flex-shrink-0">
// 							<h3 className="text-2xl font-bold text-white mb-6">
// 								Proven Industry Results
// 							</h3>
// 							<p className="text-gray-300 max-w-md">
// 								Flowity delivers measurable outcomes across sectors by
// 								transforming industry-specific data into strategic advantage.
// 							</p>
// 						</div>

// 						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-grow">
// 							{industries.map((industry, index) => (
// 								<div
// 									key={index}
// 									className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300 group"
// 								>
// 									<div className="flex items-center mb-4">
// 										<div className="w-3 h-3 rounded-full bg-cyan-400 mr-3 group-hover:animate-pulse"></div>
// 										<h4 className="text-lg font-semibold text-white">
// 											{industry.name}
// 										</h4>
// 									</div>
// 									<p className="text-gray-300">{industry.results}</p>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>

// 				{/* ROI Calculation */}
// 				<div className="mt-20 text-center">
// 					<div className="inline-block max-w-2xl">
// 						<h3 className="text-2xl font-bold text-white mb-6">
// 							Calculate Your Potential ROI
// 						</h3>
// 						<p className="text-gray-300 mb-8">
// 							Enterprises using Flowity achieve an average of{" "}
// 							<span className="text-cyan-300">
// 								$18.50 ROI for every $1 invested
// 							</span>{" "}
// 							within the first year. Discover your potential savings with our
// 							ROI calculator.
// 						</p>
// 						<a
// 							href="#"
// 							className="px-8 py-4 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 inline-flex items-center"
// 						>
// 							<svg
// 								className="w-5 h-5 mr-2"
// 								fill="none"
// 								stroke="currentColor"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth="2"
// 									d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
// 								></path>
// 							</svg>
// 							Estimate Your Savings
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
