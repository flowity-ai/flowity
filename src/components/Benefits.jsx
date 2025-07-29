import React from "react";
import {
	FiBarChart2,
	FiShield,
	FiDollarSign,
	FiCheckCircle,
	FiTrendingUp,
} from "react-icons/fi";
import Calculator from "./Calculator";

const Benefits = () => {
	return (
		<div className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-20 text-white">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-logoPurple to-logoCyan mb-6">
						<span className="mr-2 text-white">✨</span> THE WHISPR ADVANTAGE
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						From Customer Noise to{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-logoCyan to-logoPurple">
							Revenue Growth
						</span>
					</h2>
					<p className="text-xl text-gray-400">
						Whispr transforms raw feedback into strategic intelligence that
						protects MRR and uncovers growth opportunities
					</p>
				</div>

				{/* Table-like Structure */}
				<div className="space-y-16">
					{/* Section Headers */}
					<div className="hidden lg:grid lg:grid-cols-2 gap-16">
						<div>
							<h3 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-800 text-white">
								What You <span className="text-logoPurple">Gain</span>
							</h3>
						</div>
						<div>
							<h3 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-800 text-white">
								How It <span className="text-logoCyan">Works</span>
							</h3>
						</div>
					</div>

					{/* Desktop Layout (lg and above) */}
					<div className="hidden lg:block space-y-16">
						{/* Row 1 */}
						<div className="grid lg:grid-cols-2 gap-16">
							{/* Left Column - What You Gain */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
									<FiShield className="w-8 h-8 text-logoPurple" />
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										Churn Prevention System
									</h4>
									<p className="text-gray-400 mb-4">
										Identify at-risk customers 3 weeks earlier with our
										sentiment radar. Average clients:
									</p>
									<div className="flex items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
										<span className="text-3xl font-bold text-green-400 mr-3">
											↓10-12%
										</span>
										<span className="text-gray-400">
											monthly churn reduction
										</span>
									</div>
								</div>
							</div>

							{/* Right Column - How It Works */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
									<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
										1
									</span>
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										Multi-Source Intelligence
									</h4>
									<p className="text-gray-400 mb-4">
										Automated ingestion from all customer touchpoints:
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
											Slack
										</span>
										<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
											Email
										</span>
										<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
											Typeform
										</span>
										<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
											Intercom
										</span>
										<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
											Instagram
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Row 2 */}
						<div className="grid lg:grid-cols-2 gap-16">
							{/* Left Column - What You Gain */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoCyan/50 to-logoCyan/20 p-3 rounded-lg mr-6">
									<FiTrendingUp className="w-8 h-8 text-logoCyan" />
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										Revenue Acceleration
									</h4>
									<p className="text-gray-400 mb-4">
										Discover hidden upsell opportunities in customer
										conversations:
									</p>
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
											<div className="text-2xl font-bold text-logoCyan">
												€5K-€8K
											</div>
											<div className="text-sm text-gray-400">
												Monthly upsell value
											</div>
										</div>
										<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
											<div className="text-2xl font-bold text-logoCyan">
												3-5
											</div>
											<div className="text-sm text-gray-400">
												Validated ideas/month
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column - How It Works */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoCyan/50 to-logoCyan/20 p-3 rounded-lg mr-6">
									<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
										2
									</span>
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										AI-Powered Analysis
									</h4>
									<p className="text-gray-400 mb-4">
										Proprietary intelligence layers that deliver strategic
										insights:
									</p>
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
											<div className="flex items-center mb-2">
												<div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
												<div className="text-sm font-medium">
													Churn Intent Detection
												</div>
											</div>
											<p className="text-xs text-gray-400">
												Flags "cancel", "switch", "frustrated" signals
											</p>
										</div>
										<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
											<div className="flex items-center mb-2">
												<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
												<div className="text-sm font-medium">ROI Scoring</div>
											</div>
											<p className="text-xs text-gray-400">
												Ranks features by revenue impact
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Row 3 */}
						<div className="grid lg:grid-cols-2 gap-16">
							{/* Left Column - What You Gain */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
									<FiDollarSign className="w-8 h-8 text-logoPurple" />
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										Cost Efficiency
									</h4>
									<p className="text-gray-400 mb-4">
										Replace expensive research teams with AI-powered
										intelligence:
									</p>
									<div className="flex items-center">
										<div className="mr-4 text-center">
											<div className="text-2xl font-bold text-logoPurple">
												€4K-€6K
											</div>
											<div className="text-sm text-gray-400">
												Monthly research savings
											</div>
										</div>
										<div className="h-8 w-px bg-gray-700"></div>
										<div className="ml-4 text-center">
											<div className="text-2xl font-bold text-logoPurple">
												10-12
											</div>
											<div className="text-sm text-gray-400">
												Hours saved weekly
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column - How It Works */}
							<div className="flex items-start">
								<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
									<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
										3
									</span>
								</div>
								<div>
									<h4 className="text-xl font-bold mb-3 text-white">
										Executive-Grade Deliverables
									</h4>
									<p className="text-gray-400 mb-4">
										Ready-to-use insights for leadership teams:
									</p>
									<div className="space-y-3">
										<div className="flex items-center">
											<div className="w-3 h-3 rounded-full bg-logoCyan mr-3"></div>
											<span>Pulse Deck™ - Board-ready presentations</span>
										</div>
										<div className="flex items-center">
											<div className="w-3 h-3 rounded-full bg-logoPurple mr-3"></div>
											<span>MRR Impact Dashboards</span>
										</div>
										<div className="flex items-center">
											<div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
											<span>Real-time Slack Alerts</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Layout (md and below) */}
					<div className="lg:hidden space-y-16">
						{/* What You Gain Section */}
						<div>
							<h3 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-800 text-white">
								What You <span className="text-logoPurple">Gain</span>
							</h3>
							<div className="space-y-10">
								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
										<FiShield className="w-8 h-8 text-logoPurple" />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											Churn Prevention System
										</h4>
										<p className="text-gray-400 mb-4">
											Identify at-risk customers 3 weeks earlier with our
											sentiment radar. Average clients:
										</p>
										<div className="flex items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700">
											<span className="text-3xl font-bold text-green-400 mr-3">
												↓10-12%
											</span>
											<span className="text-gray-400">
												monthly churn reduction
											</span>
										</div>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoCyan/50 to-logoCyan/20 p-3 rounded-lg mr-6">
										<FiTrendingUp className="w-8 h-8 text-logoCyan" />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											Revenue Acceleration
										</h4>
										<p className="text-gray-400 mb-4">
											Discover hidden upsell opportunities in customer
											conversations:
										</p>
										<div className="grid grid-cols-2 gap-4">
											<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
												<div className="text-2xl font-bold text-logoCyan">
													€5K-€8K
												</div>
												<div className="text-sm text-gray-400">
													Monthly upsell value
												</div>
											</div>
											<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
												<div className="text-2xl font-bold text-logoCyan">
													3-5
												</div>
												<div className="text-sm text-gray-400">
													Validated ideas/month
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
										<FiDollarSign className="w-8 h-8 text-logoPurple" />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											Cost Efficiency
										</h4>
										<p className="text-gray-400 mb-4">
											Replace expensive research teams with AI-powered
											intelligence:
										</p>
										<div className="flex items-center">
											<div className="mr-4 text-center">
												<div className="text-2xl font-bold text-logoPurple">
													€4K-€6K
												</div>
												<div className="text-sm text-gray-400">
													Monthly research savings
												</div>
											</div>
											<div className="h-8 w-px bg-gray-700"></div>
											<div className="ml-4 text-center">
												<div className="text-2xl font-bold text-logoPurple">
													10-12
												</div>
												<div className="text-sm text-gray-400">
													Hours saved weekly
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* How It Works Section */}
						<div>
							<h3 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-800 text-white">
								How It <span className="text-logoCyan">Works</span>
							</h3>
							<div className="space-y-10">
								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
										<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
											1
										</span>
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											Multi-Source Intelligence
										</h4>
										<p className="text-gray-400 mb-4">
											Automated ingestion from all customer touchpoints:
										</p>
										<div className="flex flex-wrap gap-2">
											<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
												Slack
											</span>
											<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
												Email
											</span>
											<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
												Typeform
											</span>
											<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
												Intercom
											</span>
											<span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700">
												Instagram
											</span>
										</div>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoCyan/50 to-logoCyan/20 p-3 rounded-lg mr-6">
										<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
											2
										</span>
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											AI-Powered Analysis
										</h4>
										<p className="text-gray-400 mb-4">
											Proprietary intelligence layers that deliver strategic
											insights:
										</p>
										<div className="grid grid-cols-2 gap-4">
											<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
												<div className="flex items-center mb-2">
													<div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
													<div className="text-sm font-medium">
														Churn Intent Detection
													</div>
												</div>
												<p className="text-xs text-gray-400">
													Flags "cancel", "switch", "frustrated" signals
												</p>
											</div>
											<div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
												<div className="flex items-center mb-2">
													<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
													<div className="text-sm font-medium">ROI Scoring</div>
												</div>
												<p className="text-xs text-gray-400">
													Ranks features by revenue impact
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-gradient-to-br from-logoPurple/50 to-logoPurple/20 p-3 rounded-lg mr-6">
										<span className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center">
											3
										</span>
									</div>
									<div>
										<h4 className="text-xl font-bold mb-3 text-white">
											Executive-Grade Deliverables
										</h4>
										<p className="text-gray-400 mb-4">
											Ready-to-use insights for leadership teams:
										</p>
										<div className="space-y-3">
											<div className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-logoCyan mr-3"></div>
												<span>Pulse Deck™ - Board-ready presentations</span>
											</div>
											<div className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-logoPurple mr-3"></div>
												<span>MRR Impact Dashboards</span>
											</div>
											<div className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
												<span>Real-time Slack Alerts</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Calculator />
				{/* Total Savings = 
  (Research Costs × 80%) + 
  (MRR Lost × 19%) */}
			</div>
		</div>
	);
};

export default Benefits;
