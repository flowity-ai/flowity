import React from "react";
import {
	FiBarChart2,
	FiShield,
	FiDollarSign,
	FiCheckCircle,
	FiTrendingUp,
} from "react-icons/fi";

const PulseDeck = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white font-sans py-24 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Hero Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-logoPurple to-logoCyan mb-6">
						<span className="mr-2">🚀</span> EXECUTIVE INTELLIGENCE PLATFORM
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
						Turn Customer Noise Into{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-logoCyan to-logoPurple">
							Strategic Revenue Growth
						</span>
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
						Pulse Deck™ delivers board-ready insights that show exactly where
						your revenue is at risk and where your next growth opportunity lies.
					</p>
					<div className="flex justify-center gap-4">
						<a href="/pulse-report">
							<button className="bg-gradient-to-r from-logoCyan to-logoPurple hover:from-logoCyan/90 hover:to-logoPurple/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-logoCyan/20">
								Get Sample Report
							</button>
						</a>
					</div>
				</div>

				{/* Report Showcase */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
					<div className="order-2 lg:order-1">
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-1 shadow-2xl shadow-logoPurple/10">
							<div className="bg-gray-900 rounded-xl overflow-hidden">
								{/* Report Header */}
								<div className="bg-gradient-to-r from-logoPurple/20 to-logoCyan/20 px-6 py-4 border-b border-gray-800">
									<div className="flex justify-between items-center">
										<h2 className="text-xl font-bold">
											Pulse Deck™ Executive Report
										</h2>
										<div className="flex items-center">
											<span className="text-xs bg-black/30 px-2 py-1 rounded mr-3">
												WEEK 26
											</span>
											<div className="flex space-x-1">
												<div className="w-2 h-2 rounded-full bg-red-500"></div>
												<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
												<div className="w-2 h-2 rounded-full bg-green-500"></div>
											</div>
										</div>
									</div>
								</div>

								{/* Report Body */}
								<div className="p-6">
									{/* KPI Section */}
									<div className="grid grid-cols-2 gap-4 mb-8">
										<div className="bg-gradient-to-br from-logoCyan/20 to-logoCyan/10 p-4 rounded-xl border border-logoCyan/30">
											<div className="text-logoCyan text-sm font-medium mb-1">
												MRR AT RISK
											</div>
											<div className="text-3xl font-bold">€24,500</div>
											<div className="text-xs text-gray-400 mt-2">
												↓ 12% from last week
											</div>
										</div>
										<div className="bg-gradient-to-br from-logoPurple/20 to-logoPurple/10 p-4 rounded-xl border border-logoPurple/30">
											<div className="text-logoPurple text-sm font-medium mb-1">
												UPSIDE POTENTIAL
											</div>
											<div className="text-3xl font-bold">€18,000</div>
											<div className="text-xs text-gray-400 mt-2">
												↑ 22% from last week
											</div>
										</div>
									</div>

									{/* Urgent Actions */}
									<div className="mb-8">
										<div className="flex justify-between items-center mb-4">
											<h3 className="font-bold text-lg">
												Urgent Revenue Protection
											</h3>
											<span className="text-xs bg-red-900/50 px-2 py-1 rounded text-red-300">
												HIGH IMPACT
											</span>
										</div>
										<div className="space-y-3">
											<div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
												<div>
													<div className="font-medium">Fix checkout errors</div>
													<div className="text-sm text-gray-400">
														8 reports from €10K+ accounts
													</div>
												</div>
												<div className="text-right">
													<div className="font-bold text-red-400">€8,000</div>
													<div className="text-xs text-gray-400">
														MRR impact
													</div>
												</div>
											</div>
											<div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
												<div>
													<div className="font-medium">
														Reduce login latency
													</div>
													<div className="text-sm text-gray-400">
														5 enterprise complaints
													</div>
												</div>
												<div className="text-right">
													<div className="font-bold text-orange-400">
														€5,200
													</div>
													<div className="text-xs text-gray-400">
														MRR impact
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Growth Opportunities */}
									<div>
										<div className="flex justify-between items-center mb-4">
											<h3 className="font-bold text-lg">Growth Accelerators</h3>
											<span className="text-xs bg-green-900/50 px-2 py-1 rounded text-green-300">
												HIGH ROI
											</span>
										</div>
										<div className="space-y-3">
											<div className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
												<div>
													<div className="font-medium">
														Dark mode implementation
													</div>
													<div className="text-sm text-gray-400">
														Requested by 42% of top accounts
													</div>
												</div>
												<div className="text-right">
													<div className="font-bold text-green-400">
														€15,000
													</div>
													<div className="text-xs text-gray-400">
														Upsell potential
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Report Footer */}
								<div className="px-6 py-3 bg-gray-800/50 border-t border-gray-700 text-xs text-gray-400 flex justify-between">
									<div>Confidential • Prepared for Acme Inc. Leadership</div>
									<div>Generated: {new Date().toLocaleDateString()}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="order-1 lg:order-2">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Why Fortune 500{" "}
							<span className="text-logoPurple">Product Leaders</span> Choose
							Pulse Deck™
						</h2>
						<p className="text-xl text-gray-400 mb-8">
							We transform thousands of customer interactions into crystal-clear
							strategic insights that drive revenue.
						</p>

						<div className="space-y-6">
							<div className="flex">
								<div className="mr-4 text-logoPurple">
									<FiDollarSign className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-2">
										Revenue-First Prioritization
									</h3>
									<p className="text-gray-400">
										Every insight comes with € impact valuation. Know exactly
										which fixes will protect MRR and which features will drive
										growth.
									</p>
								</div>
							</div>

							<div className="flex">
								<div className="mr-4 text-logoCyan">
									<FiShield className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-2">Churn Radar System</h3>
									<p className="text-gray-400">
										Identify at-risk accounts 3 weeks before they cancel. Our
										sentiment analysis detects frustration signals competitors
										miss.
									</p>
								</div>
							</div>

							<div className="flex">
								<div className="mr-4 text-green-500">
									<FiTrendingUp className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-lg font-bold mb-2">
										Competitive Intelligence
									</h3>
									<p className="text-gray-400">
										See how your product sentiment stacks against industry
										benchmarks. Discover where you're winning and where you're
										vulnerable.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Value Metrics */}
				<div className="grid md:grid-cols-3 gap-8 mb-24">
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
						<div className="text-5xl font-bold mb-3 text-logoPurple">92%</div>
						<h3 className="text-xl font-bold mb-2">Executive Adoption Rate</h3>
						<p className="text-gray-400">
							Of leadership teams make Pulse Deck™ required reading before
							product strategy sessions.
						</p>
					</div>

					<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
						<div className="text-5xl font-bold mb-3 text-logoCyan">5.2x</div>
						<h3 className="text-xl font-bold mb-2">Faster Decision Velocity</h3>
						<p className="text-gray-400">
							Reduce time from insight to action with prioritized,
							revenue-focused recommendations.
						</p>
					</div>

					<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
						<div className="text-5xl font-bold mb-3 text-green-400">19%</div>
						<h3 className="text-xl font-bold mb-2">Lower Customer Churn</h3>
						<p className="text-gray-400">
							Average reduction in avoidable churn after implementing Pulse
							Deck™ recommendations.
						</p>
					</div>
				</div>

				{/* Testimonial */}
				<div className="bg-gradient-to-r from-logoPurple/30 to-logoCyan/30 border border-gray-700 rounded-2xl p-8 mb-20">
					<div className="max-w-3xl mx-auto text-center">
						<div className="text-5xl mb-6">❝</div>
						<p className="text-2xl italic mb-8">
							Pulse Deck™ transformed how we prioritize product work. For the
							first time, we can clearly see which features will protect revenue
							and which will drive growth. It's become our single source of
							truth for product strategy.
						</p>
						<div className="flex items-center justify-center">
							<div className="mr-4">
								<div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
							</div>
							<div className="text-left">
								<div className="font-bold">Sarah Chen</div>
								<div className="text-gray-400">CPO at FinTech Global</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
						Ready to Transform Customer Feedback Into Revenue Growth?
					</h2>
					<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
						See how Pulse Deck™ can help you protect MRR, reduce churn, and
						identify your next €100K opportunity.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-gradient-to-r from-logoCyan to-logoPurple hover:from-logoCyan/90 hover:to-logoPurple/90 text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-logoCyan/30">
							Request Your Custom Report
						</button>
						<a href="/pulse-report">
							<button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-12 rounded-lg border border-gray-700 transition duration-300">
								View Demo Report
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PulseDeck;

// ------------------------------------------------------------ no api deep seek --------------------------------------------------------------------

// import React from "react";
// import {
// 	FiBarChart2,
// 	FiTrendingUp,
// 	FiPieChart,
// 	FiShield,
// 	FiDollarSign,
// 	FiCheckCircle,
// 	FiLayers,
// } from "react-icons/fi";
// import styles from "../style";

// const PulseDeck = () => {
// 	return (
// 		<div className="min-h-screen bg-gray-50 font-sans">
// 			{/* Hero Section */}
// 			<div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
// 					<div className="grid md:grid-cols-2 gap-12 items-center">
// 						<div>
// 							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// 								Transform Feedback Into{" "}
// 								<span className="text-blue-300">Executive Insights</span>
// 							</h1>
// 							<p className="text-xl text-blue-100 mb-8 max-w-2xl">
// 								Pulse Deck™ automatically converts customer feedback into
// 								board-ready reports with prioritized actions, MRR impact
// 								analysis, and growth opportunities.
// 							</p>
// 							<div className="flex flex-col sm:flex-row gap-4">
// 								<button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
// 									Get Started
// 								</button>
// 								<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition duration-300">
// 									See Sample Report
// 								</button>
// 							</div>
// 						</div>
// 						<div className="relative">
// 							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20 shadow-2xl">
// 								<div className="bg-gray-900 rounded-xl overflow-hidden">
// 									<div className="bg-gray-800 h-8 flex items-center px-4">
// 										<div className="flex space-x-2">
// 											<div className="w-3 h-3 rounded-full bg-red-500"></div>
// 											<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
// 											<div className="w-3 h-3 rounded-full bg-green-500"></div>
// 										</div>
// 									</div>
// 									<div className="p-6">
// 										<div className="flex justify-between items-center mb-6">
// 											<h2 className="text-xl font-bold">
// 												Executive Pulse Deck™
// 											</h2>
// 											<span className="text-sm bg-blue-500 px-2 py-1 rounded">
// 												Weekly Report
// 											</span>
// 										</div>

// 										<div className="grid grid-cols-2 gap-4 mb-6">
// 											<div className="bg-blue-900/50 p-4 rounded-lg">
// 												<h3 className="text-blue-300 font-medium mb-1">
// 													MRR Protected
// 												</h3>
// 												<p className="text-2xl font-bold">€24,500</p>
// 											</div>
// 											<div className="bg-indigo-900/50 p-4 rounded-lg">
// 												<h3 className="text-indigo-300 font-medium mb-1">
// 													Upsell Potential
// 												</h3>
// 												<p className="text-2xl font-bold">€18,000</p>
// 											</div>
// 										</div>

// 										<div className="mb-6">
// 											<div className="flex justify-between mb-2">
// 												<h3 className="font-medium">Top Action Items</h3>
// 												<span className="text-sm text-gray-400">
// 													MRR Impact
// 												</span>
// 											</div>
// 											<div className="space-y-2">
// 												<div className="flex justify-between bg-gray-800 p-3 rounded-lg">
// 													<div>
// 														<span className="text-red-500 mr-2">●</span>
// 														Fix checkout errors
// 													</div>
// 													<div className="font-medium">€8,000</div>
// 												</div>
// 												<div className="flex justify-between bg-gray-800 p-3 rounded-lg">
// 													<div>
// 														<span className="text-yellow-500 mr-2">●</span>
// 														Implement dark mode
// 													</div>
// 													<div className="font-medium">€5,200</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div className="flex items-center justify-between text-sm text-gray-400">
// 											<div>Generated: Today</div>
// 											<div>Powered by Whispr AI™</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Features Section */}
// 			<div id="features" className="py-24 bg-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center max-w-3xl mx-auto mb-16">
// 						<h2 className="text-3xl md:text-4xl font-bold mb-4">
// 							Executive Insights,{" "}
// 							<span className="text-blue-600">Zero Effort</span>
// 						</h2>
// 						<p className="text-xl text-gray-600">
// 							Pulse Deck™ transforms raw customer feedback into actionable
// 							intelligence for leadership teams.
// 						</p>
// 					</div>

// 					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// 						<div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
// 							<div className="text-blue-600 mb-4">
// 								<FiBarChart2 className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">MRR Impact Analysis</h3>
// 							<p className="text-gray-600">
// 								Automatically calculate revenue impact of customer feedback with
// 								precision.
// 							</p>
// 						</div>

// 						<div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
// 							<div className="text-indigo-600 mb-4">
// 								<FiShield className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">Churn Radar</h3>
// 							<p className="text-gray-600">
// 								Identify at-risk customers before they leave with real-time
// 								sentiment alerts.
// 							</p>
// 						</div>

// 						<div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
// 							<div className="text-purple-600 mb-4">
// 								<FiDollarSign className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">Revenue Opportunities</h3>
// 							<p className="text-gray-600">
// 								Spot upsell and expansion signals hidden in customer
// 								conversations.
// 							</p>
// 						</div>

// 						<div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
// 							<div className="text-green-600 mb-4">
// 								<FiCheckCircle className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">Strategic Backlog</h3>
// 							<p className="text-gray-600">
// 								AI-prioritized feature requests based on customer value and
// 								revenue potential.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* How It Works Section */}
// 			<div id="how-it-works" className="py-24 bg-gray-50">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center max-w-3xl mx-auto mb-16">
// 						<h2 className="text-3xl md:text-4xl font-bold mb-4">
// 							How <span className="text-blue-600">Pulse Deck™</span> Works
// 						</h2>
// 						<p className="text-xl text-gray-600">
// 							From raw feedback to strategic insights in 3 simple steps
// 						</p>
// 					</div>

// 					<div className="relative">
// 						<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2"></div>

// 						<div className="space-y-12 md:space-y-0">
// 							<div className="relative md:flex items-center">
// 								<div className="md:w-1/2 md:pr-16 md:text-right mb-4 md:mb-0">
// 									<h3 className="text-2xl font-bold mb-2">
// 										Connect Feedback Sources
// 									</h3>
// 									<p className="text-gray-600">
// 										Integrate with Slack, email, Typeform, and more in minutes
// 									</p>
// 								</div>

// 								<div className="flex justify-center md:absolute left-1/2 transform -translate-x-1/2">
// 									<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
// 										1
// 									</div>
// 								</div>

// 								<div className="md:w-1/2 md:pl-16 mt-4 md:mt-0"></div>
// 							</div>

// 							<div className="relative md:flex items-center">
// 								<div className="md:w-1/2 md:pr-16 md:text-right mb-4 md:mb-0"></div>

// 								<div className="flex justify-center md:absolute left-1/2 transform -translate-x-1/2">
// 									<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
// 										2
// 									</div>
// 								</div>

// 								<div className="md:w-1/2 md:pl-16 mt-4 md:mt-0">
// 									<h3 className="text-2xl font-bold mb-2">
// 										AI Analysis & Synthesis
// 									</h3>
// 									<p className="text-gray-600">
// 										Our models process feedback, detect themes, and calculate
// 										impact
// 									</p>
// 								</div>
// 							</div>

// 							<div className="relative md:flex items-center">
// 								<div className="md:w-1/2 md:pr-16 md:text-right mb-4 md:mb-0">
// 									<h3 className="text-2xl font-bold mb-2">
// 										Strategic Insight Generation
// 									</h3>
// 									<p className="text-gray-600">
// 										Transform analysis into executive-ready recommendations
// 									</p>
// 								</div>

// 								<div className="flex justify-center md:absolute left-1/2 transform -translate-x-1/2">
// 									<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
// 										3
// 									</div>
// 								</div>

// 								<div className="md:w-1/2 md:pl-16 mt-4 md:mt-0"></div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* CTA Section */}
// 			<div className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
// 				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// 					<h2 className="text-3xl md:text-4xl font-bold mb-6">
// 						Ready to Transform Feedback Into Revenue?
// 					</h2>
// 					<p className="text-xl text-blue-200 mb-8">
// 						Pulse Deck™ delivers the strategic insights you need to protect MRR
// 						and accelerate growth.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 						<button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
// 							Request Technical Demo
// 						</button>
// 						<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 transition duration-300">
// 							API Documentation
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PulseDeck;

// ----------------------------------------------------- DEEP SEEK API PULSE DECK (whispr ai feedback business plan analysis) ----------------------------------

// import React from "react";
// import {
// 	FiBarChart2,
// 	FiShield,
// 	FiDollarSign,
// 	FiTrendingUp,
// 	FiPieChart,
// 	FiCode,
// 	FiLayers,
// } from "react-icons/fi";

// const PulseDeck = () => {
// 	return (
// 		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
// 			{/* Hero Section */}
// 			<div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
// 				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
// 					<div className="grid md:grid-cols-2 gap-12 items-center">
// 						<div>
// 							<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">
// 								<span className="mr-2">🚀</span> Executive Intelligence Platform
// 							</div>
// 							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
// 								AI-Powered <br />
// 								Executive Pulse Decks
// 							</h1>
// 							<p className="text-xl text-gray-300 mb-8 max-w-2xl">
// 								Transform raw customer feedback into{" "}
// 								<span className="font-semibold">
// 									board-ready strategic insights
// 								</span>{" "}
// 								with automated MRR impact analysis and AI-curated action plans.
// 							</p>
// 							<div className="flex flex-col sm:flex-row gap-4">
// 								<button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
// 									Request Technical Demo
// 								</button>
// 								<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 transition duration-300 backdrop-blur-sm">
// 									API Documentation
// 								</button>
// 							</div>
// 						</div>
// 						<div className="relative">
// 							<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
// 							<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
// 							<div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-1 border border-gray-700 shadow-2xl overflow-hidden">
// 								<div className="bg-gradient-to-r from-gray-800 to-gray-900 h-10 flex items-center px-4 border-b border-gray-700">
// 									<div className="flex space-x-2 mr-4">
// 										<div className="w-3 h-3 rounded-full bg-red-500"></div>
// 										<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
// 										<div className="w-3 h-3 rounded-full bg-green-500"></div>
// 									</div>
// 									<div className="text-xs font-mono text-gray-400">
// 										terminal: PulseDeck™ Generator v2.4.1
// 									</div>
// 								</div>
// 								<div className="p-6">
// 									<div className="flex justify-between items-center mb-6">
// 										<h2 className="text-xl font-bold font-mono">
// 											Executive_Report.json
// 										</h2>
// 										<span className="text-xs bg-blue-900/50 px-2 py-1 rounded font-mono">
// 											AI-GENERATED
// 										</span>
// 									</div>

// 									<div className="grid grid-cols-2 gap-4 mb-6">
// 										<div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
// 											<h3 className="text-blue-400 font-medium mb-1 text-sm">
// 												MRR PROTECTED
// 											</h3>
// 											<p className="text-2xl font-bold font-mono">$24,500</p>
// 										</div>
// 										<div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
// 											<h3 className="text-indigo-400 font-medium mb-1 text-sm">
// 												UPSIDE POTENTIAL
// 											</h3>
// 											<p className="text-2xl font-bold font-mono">$18,000</p>
// 										</div>
// 									</div>

// 									<div className="mb-6">
// 										<div className="flex justify-between mb-2">
// 											<h3 className="font-medium text-sm text-gray-400">
// 												TOP ACTION ITEMS
// 											</h3>
// 											<span className="text-xs text-gray-500 font-mono">
// 												MRR_IMPACT
// 											</span>
// 										</div>
// 										<div className="space-y-2">
// 											<div className="flex justify-between bg-gray-800/50 p-3 rounded-lg border border-gray-700">
// 												<div className="font-mono">
// 													<span className="text-red-400 mr-2">▶</span>
// 													fix_checkout_errors
// 												</div>
// 												<div className="font-bold font-mono text-blue-400">
// 													$8,000
// 												</div>
// 											</div>
// 											<div className="flex justify-between bg-gray-800/50 p-3 rounded-lg border border-gray-700">
// 												<div className="font-mono">
// 													<span className="text-yellow-400 mr-2">▶</span>
// 													implement_dark_mode
// 												</div>
// 												<div className="font-bold font-mono text-blue-400">
// 													$5,200
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-6">
// 										<h3 className="text-purple-400 font-medium mb-2 text-sm">
// 											SENTIMENT ANALYSIS
// 										</h3>
// 										<div className="flex items-center space-x-2">
// 											<div className="w-full bg-gray-700 rounded-full h-2">
// 												<div
// 													className="bg-gradient-to-r from-red-400 to-yellow-400 h-2 rounded-full"
// 													style={{ width: "28%" }}
// 												></div>
// 											</div>
// 											<span className="text-xs font-mono">28% NEG</span>
// 										</div>
// 										<div className="flex items-center space-x-2 mt-1">
// 											<div className="w-full bg-gray-700 rounded-full h-2">
// 												<div
// 													className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
// 													style={{ width: "57%" }}
// 												></div>
// 											</div>
// 											<span className="text-xs font-mono">57% POS</span>
// 										</div>
// 									</div>

// 									<div className="flex items-center justify-between text-xs text-gray-500 font-mono">
// 										<div>last_updated: {new Date().toISOString()}</div>
// 										<div>source: whisper_ai_v3.2</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Tech Specs Section */}
// 			<div className="py-24 bg-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center max-w-3xl mx-auto mb-16">
// 						<h2 className="text-3xl md:text-4xl font-bold mb-4">
// 							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
// 								Technical Architecture
// 							</span>
// 						</h2>
// 						<p className="text-xl text-gray-600">
// 							Enterprise-grade infrastructure for real-time feedback analysis
// 						</p>
// 					</div>

// 					<div className="grid md:grid-cols-3 gap-8 mb-16">
// 						<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all">
// 							<div className="text-blue-600 mb-4">
// 								<FiCode className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">Multi-Source Ingestion</h3>
// 							<p className="text-gray-600 mb-4">API integrations with:</p>
// 							<ul className="space-y-2 text-sm font-mono">
// 								<li className="flex items-center">
// 									<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
// 										POST
// 									</span>
// 									/api/v1/slack
// 								</li>
// 								<li className="flex items-center">
// 									<span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
// 										GET
// 									</span>
// 									/api/v1/typeform
// 								</li>
// 								<li className="flex items-center">
// 									<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">
// 										IMAP
// 									</span>
// 									feedback@company.com
// 								</li>
// 							</ul>
// 						</div>

// 						<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-all">
// 							<div className="text-indigo-600 mb-4">
// 								<FiLayers className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">AI Processing Stack</h3>
// 							<p className="text-gray-600 mb-4">Real-time NLP pipeline:</p>
// 							<div className="space-y-3">
// 								<div className="flex items-center">
// 									<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">
// 										1
// 									</div>
// 									<span className="font-mono text-sm">spaCy PII Redaction</span>
// 								</div>
// 								<div className="flex items-center">
// 									<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs mr-2">
// 										2
// 									</div>
// 									<span className="font-mono text-sm">RoBERTa Sentiment</span>
// 								</div>
// 								<div className="flex items-center">
// 									<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs mr-2">
// 										3
// 									</div>
// 									<span className="font-mono text-sm">GPT-4 Insight Gen</span>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all">
// 							<div className="text-purple-600 mb-4">
// 								<FiTrendingUp className="w-8 h-8" />
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">Output Channels</h3>
// 							<p className="text-gray-600 mb-4">
// 								Deliver insights where you work:
// 							</p>
// 							<div className="grid grid-cols-2 gap-2">
// 								<div className="bg-white p-2 rounded border flex items-center justify-center">
// 									<img
// 										src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
// 										className="h-6"
// 										alt="Notion"
// 									/>
// 								</div>
// 								<div className="bg-white p-2 rounded border flex items-center justify-center">
// 									<img
// 										src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
// 										className="h-6"
// 										alt="Slack"
// 									/>
// 								</div>
// 								<div className="bg-white p-2 rounded border flex items-center justify-center">
// 									<img
// 										src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Slides_2020_Logo.svg"
// 										className="h-6"
// 										alt="Google Slides"
// 									/>
// 								</div>
// 								<div className="bg-white p-2 rounded border flex items-center justify-center">
// 									<span className="text-xs font-mono">API</span>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Data Flow Diagram */}
// 					<div className="bg-gray-900 rounded-2xl p-8 text-white">
// 						<div className="flex justify-between items-center mb-8">
// 							<h3 className="text-2xl font-bold font-mono">
// 								PulseDeck™ Data Flow
// 							</h3>
// 							<span className="text-xs bg-gray-700 px-2 py-1 rounded font-mono">
// 								REALTIME STREAMING
// 							</span>
// 						</div>
// 						<div className="overflow-x-auto">
// 							<div className="flex space-x-8 min-w-max">
// 								<div className="flex flex-col items-center">
// 									<div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
// 										<FiBarChart2 className="w-6 h-6" />
// 									</div>
// 									<span className="text-xs font-mono">Sources</span>
// 								</div>
// 								<div className="flex items-center">
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 									<div className="w-2 h-2 rounded-full bg-gray-400"></div>
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 								</div>
// 								<div className="flex flex-col items-center">
// 									<div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mb-2">
// 										<FiShield className="w-6 h-6" />
// 									</div>
// 									<span className="text-xs font-mono">Processing</span>
// 								</div>
// 								<div className="flex items-center">
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 									<div className="w-2 h-2 rounded-full bg-gray-400"></div>
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 								</div>
// 								<div className="flex flex-col items-center">
// 									<div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-2">
// 										<FiDollarSign className="w-6 h-6" />
// 									</div>
// 									<span className="text-xs font-mono">MRR Analysis</span>
// 								</div>
// 								<div className="flex items-center">
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 									<div className="w-2 h-2 rounded-full bg-gray-400"></div>
// 									<div className="w-8 h-0.5 bg-gray-600"></div>
// 								</div>
// 								<div className="flex flex-col items-center">
// 									<div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2">
// 										<FiPieChart className="w-6 h-6" />
// 									</div>
// 									<span className="text-xs font-mono">Outputs</span>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* CTA Section */}
// 			<div className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
// 				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// 					<h2 className="text-3xl md:text-4xl font-bold mb-6">
// 						Ready to Transform Feedback Into Revenue?
// 					</h2>
// 					<p className="text-xl text-blue-200 mb-8">
// 						Pulse Deck™ delivers the strategic insights you need to protect MRR
// 						and accelerate growth.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 						<button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
// 							Request Technical Demo
// 						</button>
// 						<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 transition duration-300">
// 							API Documentation
// 						</button>
// 					</div>
// 					<div className="mt-8 text-sm text-blue-300 font-mono">
// 						<span className="opacity-70">
// 							$ curl -X POST https://api.whispr.ai/v1/demo \
// 						</span>
// 						<br />
// 						<span className="opacity-70 ml-4">
// 							-H "Content-Type: application/json" \
// 						</span>
// 						<br />
// 						<span className="opacity-70 ml-4">
// 							-d '{"{"}"email":"your@company.com"{"}"}'
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PulseDeck;

// ----------------------- CHAT GPT -------------------------------------------------------------------

// import React from "react";
// import { ArrowRight, BarChart3, Cpu, LayoutDashboard } from "lucide-react";
// import styles from "../style";
// import {
// 	FileText,
// 	TrendingUp,
// 	Flame,
// 	PieChart,
// 	ShieldCheck,
// 	BellRing,
// 	Layers3,
// } from "lucide-react";

// const features1 = [
// 	{
// 		title: "MRR Protection Dashboard",
// 		description:
// 			"See how much revenue you’re saving by surfacing churn risks weekly.",
// 		icon: <TrendingUp className="text-indigo-500 w-6 h-6" />,
// 	},
// 	{
// 		title: "Feature Impact Analysis",
// 		description:
// 			"Know exactly which features to prioritize based on revenue opportunity.",
// 		icon: <PieChart className="text-indigo-500 w-6 h-6" />,
// 	},
// 	{
// 		title: "Sentiment Heatmaps",
// 		description: "Spot frustration spikes before they become churn drivers.",
// 		icon: <Flame className="text-indigo-500 w-6 h-6" />,
// 	},
// 	{
// 		title: "Competitive Benchmarks",
// 		description:
// 			"Compare your sentiment health against other players in your industry.",
// 		icon: <BarChart3 className="text-indigo-500 w-6 h-6" />,
// 	},
// 	{
// 		title: "Automated & Always Updated",
// 		description:
// 			"Delivered weekly to Notion, Slack, or as a branded PDF. No manual work.",
// 		icon: <FileText className="text-indigo-500 w-6 h-6" />,
// 	},
// ];

// const moats = [
// 	{
// 		icon: <ShieldCheck className="text-green-500 w-6 h-6" />,
// 		title: "Pulse Deck™ Automation",
// 		text: "Auto-generated board-ready slides combining churn risks, upsell signals, and emotion heatmaps.",
// 	},
// 	{
// 		icon: <Layers3 className="text-yellow-400 w-6 h-6" />,
// 		title: "Vertical-Specific Frameworks",
// 		text: "Pre-built templates for fintech, healthtech, and more — like 'compliance risk alerts' or 'patient frustration hotspots'.",
// 	},
// 	{
// 		icon: <BellRing className="text-red-500 w-6 h-6" />,
// 		title: "Real-Time Slack Alerts",
// 		text: "e.g., '🔥 5+ customers mentioned cancel today: €12K MRR at risk'.",
// 	},
// ];

// const features = [
// 	{
// 		title: "Real-Time Performance Insights",
// 		description:
// 			"Monitor your KPIs with dynamic, real-time dashboards powered by intelligent AI signals.",
// 		icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
// 	},
// 	{
// 		title: "Customizable Data Modules",
// 		description:
// 			"Plug-and-play components that adapt to your workflow — no code required.",
// 		icon: <LayoutDashboard className="h-6 w-6 text-indigo-500" />,
// 	},
// 	{
// 		title: "AI-Powered Decision Engine",
// 		description:
// 			"Let Pulse Deck™ suggest next steps based on patterns, anomalies, and predictions.",
// 		icon: <Cpu className="h-6 w-6 text-indigo-500" />,
// 	},
// ];

// const PulseDeck = () => {
// 	return (
// 		<section className="text-white">
// 			{/* Hero */}
// 			<div className="text-center mt-20 mb-16">
// 				<h1 className="text-5xl font-extrabold sm:text-6xl">
// 					Meet <span className="text-indigo-500">Pulse Deck™</span>
// 				</h1>
// 				<p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
// 					The intelligence layer to track, analyze, and optimize performance —
// 					from insight to impact.
// 				</p>
// 				<div className="mt-8 flex justify-center gap-4">
// 					<button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-500 transition">
// 						Request Demo
// 					</button>
// 					<button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl font-medium hover:border-gray-400 transition flex items-center gap-2">
// 						Explore Features <ArrowRight className="w-4 h-4" />
// 					</button>
// 				</div>
// 			</div>
// 			{/* Features */}
// 			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
// 				{features.map((feature, index) => (
// 					<div
// 						key={index}
// 						className="bg-[#1e1e28] p-6 rounded-2xl shadow-lg border border-gray-800 hover:shadow-indigo-500/20 transition"
// 					>
// 						<div className="mb-4">{feature.icon}</div>
// 						<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// 						<p className="text-gray-400">{feature.description}</p>
// 					</div>
// 				))}
// 			</div>
// 			{/* CTA */}
// 			<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-3xl text-center mb-24">
// 				<h2 className="text-3xl font-bold text-white mb-4">
// 					Ready to see Pulse Deck™ in action?
// 				</h2>
// 				<p className="text-white/90 mb-6">
// 					Get a personalized walkthrough and learn how to integrate it into your
// 					stack.
// 				</p>
// 				<button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
// 					Book a Live Demo
// 				</button>
// 			</div>

// 			{/* -----------------------------  Features 1 -------------------------------- */}
// 			<div className="text-white py-24">
// 				{/* Headline */}
// 				<div className="text-center mb-16">
// 					<h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
// 						Board-Ready Insights, Zero Effort
// 					</h2>
// 					<p className="text-lg text-gray-300 max-w-2xl mx-auto">
// 						Pulse Deck™ turns customer feedback into actionable executive briefs
// 						— so you can focus on growth, not slide design.
// 					</p>
// 				</div>

// 				{/* Features */}
// 				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20 max-w-6xl mx-auto">
// 					{features1.map((feature, index) => (
// 						<div
// 							key={index}
// 							className="bg-[#1a1a1f] p-6 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-indigo-500/10 transition"
// 						>
// 							<div className="mb-4">{feature.icon}</div>
// 							<h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
// 							<p className="text-gray-400 text-sm">{feature.description}</p>
// 						</div>
// 					))}
// 				</div>

// 				{/* Visual Sample Deck */}
// 				<div className="flex justify-center mb-24">
// 					<div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-5xl overflow-hidden shadow-xl">
// 						<div className="grid grid-cols-1 md:grid-cols-2">
// 							<div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
// 								<h3 className="text-2xl font-bold mb-2">Executive Summary</h3>
// 								<p className="text-sm text-gray-400">
// 									🛡️ <strong>€42,500 MRR Protected</strong>
// 									<br />
// 									- 9 churn risks averted
// 									<br />
// 									- 3 major bugs fixed
// 									<br />
// 									<br />
// 									💸 <strong>€28,000 Upsell Potential</strong>
// 									<br />- Top feature: SSO (requested by 5 enterprise clients)
// 								</p>
// 							</div>
// 							<div className="p-8">
// 								<h3 className="text-2xl font-bold mb-2">Churn Radar</h3>
// 								<table className="text-sm text-gray-300 w-full">
// 									<thead>
// 										<tr className="text-left border-b border-gray-700">
// 											<th className="pb-1">Customer</th>
// 											<th className="pb-1">Trigger</th>
// 											<th className="pb-1">MRR</th>
// 											<th className="pb-1">Status</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>Acme Co</td>
// 											<td>"Switching if no API"</td>
// 											<td>€12,000</td>
// 											<td className="text-green-400">Resolved</td>
// 										</tr>
// 										<tr>
// 											<td>Beta Ltd</td>
// 											<td>"Frustrated with UX"</td>
// 											<td>€6,500</td>
// 											<td className="text-yellow-300">Monitoring</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Moats */}
// 				<div className="mb-24 max-w-5xl mx-auto">
// 					<h3 className="text-2xl font-bold text-center mb-10">
// 						Why It’s a Moat
// 					</h3>
// 					<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
// 						{moats.map((item, index) => (
// 							<div
// 								key={index}
// 								className="bg-[#1b1b23] border border-gray-800 rounded-2xl p-6"
// 							>
// 								<div className="mb-3">{item.icon}</div>
// 								<h4 className="font-semibold text-lg mb-1">{item.title}</h4>
// 								<p className="text-gray-400 text-sm">{item.text}</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				{/* CTA Buttons */}
// 				<div className="flex justify-center gap-6">
// 					<a
// 						href="/pulse-deck-sample.pdf"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition"
// 					>
// 						See a Sample Pulse Deck™
// 					</a>
// 					<a
// 						href="/get-started"
// 						className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-xl transition font-medium"
// 					>
// 						Get Started
// 					</a>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default PulseDeck;
