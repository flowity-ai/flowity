import React from "react";

const PulseReport = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-100 p-4 md:p-8 font-sans">
			{/* Hero Section */}
			<div className="min-h-[90vh] flex flex-col justify-center items-center text-center mb-16 py-10 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-grid-pattern bg-[length:80px_80px] opacity-[0.03]"></div>
				<div className="absolute inset-0 bg-gradient-radial from-logoPurple/10 via-transparent to-transparent"></div>
				<div className="absolute -top-1/3 -right-1/3 w-full h-full bg-logoPurple/5 rounded-full filter blur-[100px]"></div>
				<div className="absolute -bottom-1/3 -left-1/3 w-full h-full bg-logoCyan/5 rounded-full filter blur-[100px]"></div>

				{/* Main Content */}
				<div className="relative z-10 max-w-5xl">
					<div className="mb-10">
						<div className="inline-block bg-logoPurple/10 backdrop-blur-md px-6 py-2 rounded-full border border-logoPurple/30 mb-6">
							<span className="text-logoCyan tracking-wider">
								INTELLIGENCE REPORT
							</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-logoCyan via-logoPurple to-logoCyan">
							WHISPR PULSE
						</h1>
						<div className="text-3xl md:text-4xl font-light text-gray-300 mb-8">
							Customer Retention & Sentiment Analysis
						</div>
					</div>

					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-logoCyan/30 shadow-xl">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
							<div className="text-center p-6">
								<div className="text-5xl font-bold text-logoCyan mb-2">92%</div>
								<div className="text-lg text-gray-300">Retention Rate</div>
								<div className="text-logoCyan text-sm mt-2">
									+8% this quarter
								</div>
							</div>
							<div className="text-center p-6 border-x border-gray-800">
								<div className="text-5xl font-bold text-logoPurple mb-2">
									$450K
								</div>
								<div className="text-lg text-gray-300">Revenue Saved</div>
								<div className="text-logoPurple text-sm mt-2">
									Potential churn prevented
								</div>
							</div>
							<div className="text-center p-6">
								<div className="text-5xl font-bold text-logoCyan mb-2">91%</div>
								<div className="text-lg text-gray-300">
									Customer Satisfaction
								</div>
								<div className="text-logoCyan text-sm mt-2">All-time high</div>
							</div>
						</div>

						<div className="text-center">
							<p className="text-xl md:text-2xl font-light mb-4">
								"From Noise to Action — Retain More Customers, Faster."
							</p>
							<div className="inline-flex items-center text-sm text-gray-400">
								<span>Reporting Period: August 2025</span>
								<span className="mx-2">•</span>
								<span>Generated: {new Date().toLocaleDateString()}</span>
								<span className="mx-2">•</span>
								<span>v3.2.1</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Executive Summary */}
			<div className="max-w-6xl mx-auto mb-20">
				<div className="flex flex-col md:flex-row gap-8 mb-12">
					<div className="md:w-2/3">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-logoPurple"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">
								Executive Summary
							</h2>
						</div>

						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30 mb-6">
							<p className="text-lg leading-relaxed">
								Whispr's AI-powered analysis of 12,482 customer interactions
								identified 184 high-risk accounts, enabling proactive retention
								efforts that saved $450K in potential revenue loss. Our
								sentiment engine detected a 40% spike in billing-related
								complaints, triggering immediate workflow corrections that
								resolved issues within 48 hours and restored CSAT to 91%.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
								<h3 className="text-xl font-semibold mb-4 text-logoCyan">
									Key Wins
								</h3>
								<ul className="space-y-3">
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoCyan/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>
											146 high-value accounts retained through proactive
											measures
										</span>
									</li>
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoCyan/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>23% reduction in support resolution time</span>
									</li>
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoCyan/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>15% increase in CX team productivity</span>
									</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30">
								<h3 className="text-xl font-semibold mb-4 text-logoPurple">
									Strategic Insights
								</h3>
								<ul className="space-y-3">
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoPurple/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoPurple"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>
											Mobile app UX improvements drove 28% satisfaction increase
										</span>
									</li>
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoPurple/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoPurple"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>
											Billing issues remain primary churn driver (42% of cases)
										</span>
									</li>
									<li className="flex">
										<div className="w-6 h-6 rounded-full bg-logoPurple/20 flex items-center justify-center mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-logoPurple"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>
											Proactive outreach has 78% success rate in retention
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="md:w-1/3">
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30 h-full">
							<h3 className="text-xl font-semibold mb-4 text-logoCyan">
								Sentiment Analysis
							</h3>
							<div className="flex justify-center mb-6">
								<div className="relative w-48 h-48">
									<div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
									<div
										className="absolute inset-0 rounded-full border-8 border-logoCyan"
										style={{
											clipPath:
												"polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 62%)",
										}}
									></div>
									<div
										className="absolute inset-0 rounded-full border-8 border-logoPurple"
										style={{
											clipPath:
												"polygon(50% 50%, 50% 0%, 100% 0%, 100% 25%, 50% 25%)",
										}}
									></div>
									<div className="absolute inset-0 flex flex-col items-center justify-center">
										<div className="text-3xl font-bold">91%</div>
										<div className="text-sm text-gray-400">CSAT Score</div>
									</div>
								</div>
							</div>

							<div className="space-y-3">
								<div className="flex justify-between items-center">
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-logoCyan mr-2"></div>
										<span>Positive</span>
									</div>
									<span className="font-medium">62%</span>
								</div>

								<div className="flex justify-between items-center">
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
										<span>Neutral</span>
									</div>
									<span className="font-medium">25%</span>
								</div>

								<div className="flex justify-between items-center">
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
										<span>Negative</span>
									</div>
									<span className="font-medium">13%</span>
								</div>
							</div>

							<div className="mt-6 pt-4 border-t border-gray-800">
								<h4 className="font-medium mb-2">Trending Emotions</h4>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-logoCyan/10 text-logoCyan rounded-full text-sm">
										Satisfaction ↑20%
									</span>
									<span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
										Frustration ↓15%
									</span>
									<span className="px-3 py-1 bg-logoPurple/10 text-logoPurple rounded-full text-sm">
										Confidence ↑12%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* KPI Dashboard */}
			<div className="max-w-6xl mx-auto mb-20">
				<div className="flex items-center justify-between mb-8 pb-4 border-b border-logoCyan/30">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-logoPurple"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold">
							Performance Dashboard
						</h2>
					</div>
					<div className="text-logoCyan text-sm px-3 py-1 bg-logoCyan/10 rounded-full">
						Real-time Insights
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30">
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-lg font-medium">Retention Metrics</h3>
							<div className="bg-logoPurple/20 text-logoPurple text-xs px-2 py-1 rounded">
								Core KPI
							</div>
						</div>
						<div className="text-4xl font-bold text-logoPurple mb-2">92%</div>
						<div className="flex items-center text-logoCyan mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span>+8% vs last quarter</span>
						</div>
						<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
							<div
								className="h-full bg-gradient-to-r from-logoPurple to-logoCyan rounded-full"
								style={{ width: "92%" }}
							></div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-lg font-medium">Churn Prevention</h3>
							<div className="bg-logoCyan/20 text-logoCyan text-xs px-2 py-1 rounded">
								AI-Driven
							</div>
						</div>
						<div className="text-4xl font-bold text-logoCyan mb-2">184</div>
						<div className="text-sm mb-4">High-risk accounts identified</div>
						<div className="flex justify-between text-xs mb-1">
							<span>High Risk: 184</span>
							<span>Medium: 250</span>
							<span>Low: 12,048</span>
						</div>
						<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
							<div
								className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-logoCyan rounded-full"
								style={{ width: "30%" }}
							></div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30">
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-lg font-medium">Efficiency Gains</h3>
							<div className="bg-logoPurple/20 text-logoPurple text-xs px-2 py-1 rounded">
								Automation
							</div>
						</div>
						<div className="text-4xl font-bold text-logoPurple mb-2">23%</div>
						<div className="text-sm mb-4">Reduction in resolution time</div>
						<div className="flex items-center">
							<div className="mr-3 text-sm">Before: 3.0h</div>
							<div className="flex-1">
								<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
									<div
										className="h-full bg-logoPurple rounded-full"
										style={{ width: "70%" }}
									></div>
								</div>
							</div>
						</div>
						<div className="flex items-center mt-1">
							<div className="mr-3 text-sm">Now: 2.3h</div>
							<div className="flex-1">
								<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
									<div
										className="h-full bg-logoCyan rounded-full"
										style={{ width: "53%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-lg font-medium">Revenue Impact</h3>
							<div className="bg-logoCyan/20 text-logoCyan text-xs px-2 py-1 rounded">
								ROI
							</div>
						</div>
						<div className="text-4xl font-bold text-logoCyan mb-2">$450K</div>
						<div className="text-sm mb-4">Potential churn prevented</div>
						<div className="bg-gray-800/50 p-3 rounded-lg">
							<div className="flex justify-between text-sm mb-1">
								<span>Monthly Saved</span>
								<span>$87K</span>
							</div>
							<div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
								<div
									className="h-full bg-logoCyan rounded-full"
									style={{ width: "100%" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Action Intelligence */}
			<div className="max-w-6xl mx-auto mb-20">
				<div className="flex items-center justify-between mb-8 pb-4 border-b border-logoPurple/30">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-full bg-logoCyan/20 flex items-center justify-center mr-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-logoCyan"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold">
							Action Intelligence
						</h2>
					</div>
					<div className="text-logoPurple text-sm px-3 py-1 bg-logoPurple/10 rounded-full">
						Proactive Measures
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* What Happened */}
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30">
						<div className="flex items-start mb-5">
							<div className="mr-4">
								<div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-red-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold text-red-400 mb-1">
									Issue Identification
								</h3>
								<p className="text-sm text-gray-400">What Happened</p>
							</div>
						</div>

						<div className="pl-16">
							<div className="mb-4">
								<h4 className="font-medium mb-1">Billing System Failure</h4>
								<p className="text-sm text-gray-300">
									40% spike in billing complaints during Week 3
								</p>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Sentiment Impact</h4>
								<div className="flex items-center">
									<div className="text-red-400 font-medium mr-2">-28%</div>
									<div className="text-sm">CSAT for billing tickets</div>
								</div>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Affected Accounts</h4>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
										Enterprise: 12
									</span>
									<span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
										Pro: 28
									</span>
									<span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
										Starter: 42
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* What We Did */}
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
						<div className="flex items-start mb-5">
							<div className="mr-4">
								<div className="w-12 h-12 rounded-full bg-logoCyan/20 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-logoCyan"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold text-logoCyan mb-1">
									Resolution Actions
								</h3>
								<p className="text-sm text-gray-400">What We Did</p>
							</div>
						</div>

						<div className="pl-16">
							<div className="mb-4">
								<h4 className="font-medium mb-1">System Repair</h4>
								<p className="text-sm text-gray-300">
									Fixed billing workflow within 48 hours
								</p>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Proactive Outreach</h4>
								<div className="text-sm text-gray-300">
									Contacted all affected customers with personalized
									communications
								</div>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Compensation</h4>
								<div className="flex items-center">
									<div className="text-logoCyan font-medium mr-2">
										1-month credit
									</div>
									<div className="text-sm">for high-value accounts</div>
								</div>
							</div>
						</div>
					</div>

					{/* What's Next */}
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30">
						<div className="flex items-start mb-5">
							<div className="mr-4">
								<div className="w-12 h-12 rounded-full bg-logoPurple/20 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-logoPurple"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold text-logoPurple mb-1">
									Strategic Initiatives
								</h3>
								<p className="text-sm text-gray-400">What's Next</p>
							</div>
						</div>

						<div className="pl-16">
							<div className="mb-4">
								<h4 className="font-medium mb-1">Anomaly Detection</h4>
								<p className="text-sm text-gray-300">
									Implement AI-powered billing monitoring by Oct 2025
								</p>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Upsell Campaign</h4>
								<div className="text-sm text-gray-300">
									Target customers who responded positively to resolution
								</div>
							</div>

							<div className="mb-4">
								<h4 className="font-medium mb-1">Process Review</h4>
								<div className="text-sm text-gray-300">
									Quarterly audit of billing systems
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
					<div className="flex items-center mb-3">
						<div className="w-8 h-8 rounded-full bg-logoCyan/20 flex items-center justify-center mr-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-logoCyan"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-bold">Automated Insights</h3>
					</div>
					<p className="pl-11">
						The billing issue resolution resulted in a{" "}
						<span className="text-logoCyan">42% recovery</span> of affected
						customer sentiment. Proactive outreach prevented an estimated{" "}
						<span className="text-logoCyan">$87K</span> in potential churn.
						Future prevention systems could reduce similar incidents by{" "}
						<span className="text-logoCyan">92%</span>.
					</p>
				</div>
			</div>

			{/* ROI & Recommendations */}
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{/* ROI Impact */}
					<div>
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-logoPurple"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">ROI Impact</h2>
						</div>

						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoPurple/30">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div className="bg-gray-800/30 p-4 rounded-xl">
									<div className="text-3xl font-bold text-logoCyan mb-1">
										$450K
									</div>
									<div className="text-sm text-gray-300">
										Revenue saved this quarter
									</div>
								</div>
								<div className="bg-gray-800/30 p-4 rounded-xl">
									<div className="text-3xl font-bold text-logoPurple mb-1">
										23%
									</div>
									<div className="text-sm text-gray-300">
										Reduction in resolution time
									</div>
								</div>
								<div className="bg-gray-800/30 p-4 rounded-xl">
									<div className="text-3xl font-bold text-logoCyan mb-1">
										15%
									</div>
									<div className="text-sm text-gray-300">
										Support cost reduction
									</div>
								</div>
								<div className="bg-gray-800/30 p-4 rounded-xl">
									<div className="text-3xl font-bold text-logoPurple mb-1">
										20%
									</div>
									<div className="text-sm text-gray-300">
										CX productivity increase
									</div>
								</div>
							</div>

							<div className="mt-6">
								<h3 className="text-lg font-semibold mb-3">
									Cumulative Impact (Last 6 Months)
								</h3>
								<div className="flex flex-wrap gap-4">
									<div className="flex-1 min-w-[200px] bg-gradient-to-r from-logoPurple/10 to-logoCyan/10 p-4 rounded-xl">
										<div className="text-xl font-bold">$1.2M</div>
										<div className="text-sm">Total revenue saved</div>
									</div>
									<div className="flex-1 min-w-[200px] bg-gradient-to-r from-logoCyan/10 to-logoPurple/10 p-4 rounded-xl">
										<div className="text-xl font-bold">1,240+</div>
										<div className="text-sm">Customers retained</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Recommendations */}
					<div>
						<div className="flex items-center mb-6">
							<div className="w-10 h-10 rounded-full bg-logoCyan/20 flex items-center justify-center mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-logoCyan"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
									/>
								</svg>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">
								Strategic Recommendations
							</h2>
						</div>

						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-logoCyan/30">
							<div className="space-y-6">
								<div className="flex">
									<div className="w-10 h-10 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
										<span className="text-xl font-bold text-logoPurple">1</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											Personalize Retention Offers
										</h3>
										<p className="text-gray-300">
											Target 184 at-risk customers with tailored incentives
											based on usage patterns and sentiment analysis to improve
											retention by estimated 18%.
										</p>
									</div>
								</div>

								<div className="flex">
									<div className="w-10 h-10 rounded-full bg-logoCyan/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
										<span className="text-xl font-bold text-logoCyan">2</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											Automate Low-CSAT Follow-ups
										</h3>
										<p className="text-gray-300">
											Implement automated outreach within 12 hours for
											interactions scoring below 3/5 CSAT, potentially
											recovering 42% of dissatisfied customers.
										</p>
									</div>
								</div>

								<div className="flex">
									<div className="w-10 h-10 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
										<span className="text-xl font-bold text-logoPurple">3</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											Expand Proactive Support
										</h3>
										<p className="text-gray-300">
											Extend 24/7 proactive outreach coverage to all
											Enterprise-tier clients starting Q4, with projected 92%
											retention rate for high-value accounts.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8 pt-6 border-t border-gray-800">
								<h3 className="text-lg font-semibold mb-3">
									Expected Outcomes
								</h3>
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
									<li className="flex items-center">
										<div className="w-5 h-5 rounded-full bg-logoCyan/20 flex items-center justify-center mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-3 w-3 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>Increase retention to 95%+</span>
									</li>
									<li className="flex items-center">
										<div className="w-5 h-5 rounded-full bg-logoCyan/20 flex items-center justify-center mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-3 w-3 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>Reduce churn risk by 25%</span>
									</li>
									<li className="flex items-center">
										<div className="w-5 h-5 rounded-full bg-logoCyan/20 flex items-center justify-center mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-3 w-3 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>Improve NPS to 55+</span>
									</li>
									<li className="flex items-center">
										<div className="w-5 h-5 rounded-full bg-logoCyan/20 flex items-center justify-center mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-3 w-3 text-logoCyan"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span>Generate $120K+ in saved revenue</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="max-w-6xl mx-auto py-10 border-t border-gray-800 text-center">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-logoPurple to-logoCyan">
							WHISPR AI
						</div>
						<div className="text-sm text-gray-500">
							Customer Intelligence Platform
						</div>
					</div>

					<div className="text-sm">
						<div>Generated on {new Date().toLocaleDateString()}</div>
						<div className="text-gray-500 mt-1">
							Confidential • Proprietary Analytics • v3.2.1
						</div>
					</div>

					<div className="mt-4 md:mt-0">
						<div className="text-sm text-gray-400">
							From Noise to Action — Retain More Customers, Faster.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PulseReport;
