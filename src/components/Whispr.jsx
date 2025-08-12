import React from "react";
import Benefits from "./Benefits";
import Solutions from "./Solutions";
import HeroSection from "./HeroSection";

const Whispr = () => {
	return (
		<section id="features">
			<HeroSection />
			<Benefits />
			<Solutions />
			<div className="max-w-7xl mx-auto px-4 py-16">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Automated Intelligence for{" "}
						<span className="text-logoPurple">Strategic Decision-Making</span>
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Whispr transforms unstructured customer feedback into prioritized
						business actions through advanced automation
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - NLP Automation */}
					<div>
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-12">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
									<div className="text-xl">⚡</div>
								</div>
								<h2 className="text-3xl font-bold text-white">
									Advanced Feedback Automation
								</h2>
							</div>

							<p className="text-gray-300 mb-8">
								Our proprietary systems continuously process customer signals
								across all channels, transforming raw feedback into structured
								intelligence
							</p>

							<div className="space-y-8">
								{/* Automation Feature 1 */}
								<div className="flex">
									<div className="flex-shrink-0 mr-4 mt-1">
										<div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-green-300">
											1
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-white mb-2">
											Multichannel Intelligence Gathering
										</h3>
										<p className="text-gray-300 mb-3">
											Automatically capture and consolidate feedback from all
											customer touchpoints
										</p>
										<ul className="space-y-2">
											<li className="flex items-start">
												<div className="flex-shrink-0 mt-1.5">
													<div className="w-2 h-2 rounded-full bg-logoPurple"></div>
												</div>
												<span className="ml-2 text-gray-300">
													Support conversations & community discussions
												</span>
											</li>
											<li className="flex items-start">
												<div className="flex-shrink-0 mt-1.5">
													<div className="w-2 h-2 rounded-full bg-logoPurple"></div>
												</div>
												<span className="ml-2 text-gray-300">
													Survey responses & feedback forms
												</span>
											</li>
											<li className="flex items-start">
												<div className="flex-shrink-0 mt-1.5">
													<div className="w-2 h-2 rounded-full bg-logoPurple"></div>
												</div>
												<span className="ml-2 text-gray-300">
													Social media & app store reviews
												</span>
											</li>
										</ul>
									</div>
								</div>

								{/* Automation Feature 2 */}
								<div className="flex">
									<div className="flex-shrink-0 mr-4 mt-1">
										<div className="w-8 h-8 rounded-full bg-logoCyan/20 flex items-center justify-center text-logoCyan">
											2
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-white mb-2">
											Intelligent Signal Processing
										</h3>
										<p className="text-gray-300 mb-3">
											Advanced systems identify patterns and relationships
											across thousands of feedback points
										</p>
										<div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
											<div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
												<span>Feedback Type</span>
												<span>Processing Capability</span>
											</div>
											<div className="space-y-3">
												<div className="flex justify-between">
													<span className="text-gray-300">
														Feature Requests
													</span>
													<span className="text-logoPurple font-medium">
														Grouped by similarity & frequency
													</span>
												</div>
												<div className="flex justify-between">
													<span className="text-gray-300">
														Complaints & Issues
													</span>
													<span className="text-logoPurple font-medium">
														Categorized by severity & impact
													</span>
												</div>
												<div className="flex justify-between">
													<span className="text-gray-300">
														Product Suggestions
													</span>
													<span className="text-logoPurple font-medium">
														Evaluated for strategic alignment
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Automation Feature 3 */}
								<div className="flex">
									<div className="flex-shrink-0 mr-4 mt-1">
										<div className="w-8 h-8 rounded-full bg-logoPurple/20 flex items-center justify-center text-logoPurple">
											3
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-white mb-2">
											Continuous Learning Systems
										</h3>
										<p className="text-gray-300">
											Our adaptive intelligence improves its understanding of
											your business context with each analysis cycle
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Business Impact */}
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
									<div className="text-xl">📊</div>
								</div>
								<h2 className="text-3xl font-bold text-white">Dashboard</h2>
							</div>

							<div className="grid grid-cols-2 gap-4 mb-6">
								<div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
									<div className="text-sm text-gray-400 mb-1">
										Revenue at Risk
									</div>
									<div className="text-2xl font-bold text-rose-400">€14.8K</div>
									<div className="text-xs text-gray-400 mt-1">
										Identified this week
									</div>
								</div>
								<div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
									<div className="text-sm text-gray-400 mb-1">
										Expansion Opportunity
									</div>
									<div className="text-2xl font-bold text-emerald-400">
										€21.2K
									</div>
									<div className="text-xs text-gray-400 mt-1">
										Potential MRR growth
									</div>
								</div>
							</div>

							<p className="text-gray-300">
								Real-time visualization of how customer feedback impacts key
								financial metrics, updated continuously
							</p>
						</div>
					</div>

					{/* Right Column - Whispr Features */}
					<div>
						<div className="sticky top-8">
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 rounded-full bg-logoPurple/20 flex items-center justify-center mr-4">
										<div className="text-xl">🔍</div>
									</div>
									<h2 className="text-3xl font-bold text-white">
										Strategic Insight Modules
									</h2>
								</div>

								<div className="space-y-8">
									{/* Feature 1 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1">
											<div className="w-6 h-6 rounded-full bg-logoPurple flex items-center justify-center text-white text-xs">
												✓
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-xl font-bold text-white mb-2">
												Revenue Impact Scoring
											</h3>
											<p className="text-gray-300 mb-3">
												Prioritize initiatives based on their potential revenue
												impact
											</p>
											<div className="flex items-center text-sm">
												<div className="text-gray-400">Feature ROI Score:</div>
												<div className="ml-2 px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full font-medium">
													84/100
												</div>
											</div>
										</div>
									</div>

									{/* Feature 2 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1">
											<div className="w-6 h-6 rounded-full bg-logoPurple flex items-center justify-center text-white text-xs">
												✓
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-xl font-bold text-white mb-2">
												Churn Risk Identification
											</h3>
											<p className="text-gray-300 mb-3">
												Early detection of at-risk customers with proactive
												recommendations
											</p>
											<div className="inline-flex items-center bg-rose-900 text-rose-300 text-sm px-3 py-1 rounded-full">
												<div className="w-2 h-2 rounded-full bg-rose-400 mr-2"></div>
												12 high-risk accounts identified this week
											</div>
										</div>
									</div>

									{/* Feature 3 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1">
											<div className="w-6 h-6 rounded-full bg-logoPurple flex items-center justify-center text-white text-xs">
												✓
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-xl font-bold text-white mb-2">
												Product Opportunity Mapping
											</h3>
											<p className="text-gray-300 mb-3">
												Identify underserved market needs and expansion
												opportunities
											</p>
											<div className="flex items-center text-sm">
												<div className="text-gray-400">Top Opportunity:</div>
												<div className="ml-2 font-medium text-white">
													Enterprise reporting features
												</div>
											</div>
										</div>
									</div>

									{/* Feature 4 */}
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1">
											<div className="w-6 h-6 rounded-full bg-logoPurple flex items-center justify-center text-white text-xs">
												✓
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-xl font-bold text-white mb-2">
												Sentiment Trend Analysis
											</h3>
											<p className="text-gray-300 mb-3">
												Track customer satisfaction across product areas over
												time
											</p>
											<div className="flex items-center">
												<div className="text-sm text-gray-400 mr-2">
													Current Sentiment:
												</div>
												<div className="flex">
													{[1, 2, 3, 4, 5].map((star) => (
														<div key={star} className="text-amber-400">
															★
														</div>
													))}
													<div className="ml-2 text-sm font-medium text-gray-300">
														4.2/5.0
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Delivery Formats */}
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 rounded-full bg-logoCyan/20 flex items-center justify-center mr-4">
										<div className="text-xl">📬</div>
									</div>
									<h2 className="text-3xl font-bold text-white">
										Executive Intelligence Delivery
									</h2>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-gray-800 rounded-xl p-5 border border-gray-600">
										<div className="text-logoPurple text-3xl mb-3">📘</div>
										<h3 className="text-lg font-bold text-white mb-2">
											Weekly Insight Brief
										</h3>
										<p className="text-gray-300 text-sm">
											Comprehensive analysis delivered to Notion with
											prioritized actions
										</p>
									</div>

									<div className="bg-gray-800 rounded-xl p-5 border border-gray-600">
										<div className="text-logoCyan text-3xl mb-3">📊</div>
										<h3 className="text-lg font-bold text-white mb-2">
											Pulse Deck™
										</h3>
										<p className="text-gray-300 text-sm">
											Presentation-ready slides for leadership meetings
										</p>
									</div>

									<div className="bg-gray-800 rounded-xl p-5 border border-gray-600">
										<div className="text-green-400 text-3xl mb-3">🔔</div>
										<h3 className="text-lg font-bold text-white mb-2">
											Critical Alerts
										</h3>
										<p className="text-gray-300 text-sm">
											Real-time Slack notifications for urgent issues
										</p>
									</div>

									<div className="bg-gray-800 rounded-xl p-5 border border-gray-600">
										<div className="text-amber-400 text-3xl mb-3">📈</div>
										<h3 className="text-lg font-bold text-white mb-2">
											Trend Dashboards
										</h3>
										<p className="text-gray-300 text-sm">
											Historical performance tracking in Airtable
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-16 text-center">
					<div className="inline-block bg-gradient-to-r from-logoPurple to-logoCyan rounded-xl p-1">
						<div className="bg-gray-900 rounded-lg p-8">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
								Ready to Transform Customer Feedback into Growth?
							</h3>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
								See how Whispr can deliver actionable intelligence for your
								business in just 14 days
							</p>
							<button className="bg-gradient-to-r from-logoPurple to-logoCyan text-white font-medium rounded-full px-8 py-3 hover:opacity-90 transition-opacity">
								Request a Custom Intelligence Demo
							</button>
							<div className="mt-4 text-sm text-gray-400">
								Includes custom ROI projection for your business
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Whispr;
