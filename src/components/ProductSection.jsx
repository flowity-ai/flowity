import React, { useState } from "react";
import Button from "./Button";

export default function ProductsSection() {
	const [activeTab, setActiveTab] = useState("whispr");

	const products = {
		whispr: {
			url: "/whispr",
			title: "Whispr",
			tagline: "Customer Intelligence Platform",
			description:
				"Transform unstructured customer feedback into strategic growth insights. Whispr analyzes millions of data points across surveys, reviews, and support interactions to identify churn risks, product opportunities, and customer sentiment trends.",
			features: [
				"Sentiment analysis at scale",
				"Automated trend detection",
				"Churn prediction scoring",
				"Competitive benchmarking",
				"Real-time alerting",
			],
			metrics: [
				{ value: "27%", label: "Avg. churn reduction" },
				{ value: "19%", label: "CLTV increase" },
				{ value: "83%", label: "Insight velocity" },
			],
		},
		automation: {
			url: "/automation-suite",
			title: "Automation Suite",
			tagline: "Intelligent Workflow Engine",
			description:
				"Custom AI workflows that automate complex business processes. From document processing to operational efficiency, our tailored solutions integrate seamlessly with your existing systems to eliminate manual work and reduce errors.",
			features: [
				"Custom workflow design",
				"Document intelligence",
				"Cross-system orchestration",
				"Human-in-the-loop validation",
				"Performance analytics",
			],
			metrics: [
				{ value: "90%", label: "Process automation" },
				{ value: "300+", label: "Hours saved monthly" },
				{ value: "45%", label: "Error reduction" },
			],
		},
		va: {
			url: "/va-coming-soon",
			title: "Flowity VA",
			tagline: "AI Virtual Assistant (Q4 2025)",
			description:
				"Next-generation virtual assistants that handle client communications with human-like nuance. Our VA solution automates follow-ups, meeting summarization, and relationship management while maintaining your brand voice.",
			features: [
				"Conversational AI engine",
				"Meeting intelligence",
				"Personalized outreach",
				"Relationship scoring",
				"24/7 availability",
			],
			metrics: [
				{ value: "68%", label: "Response time reduction" },
				{ value: "40%", label: "Meeting recaps" },
				{ value: "57%", label: "Follow-up completion" },
			],
		},
	};

	const activeProduct = products[activeTab];

	return (
		<div
			className="relative py-28 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
			id="products"
		>
			{/* Floating Elements */}
			<div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-full filter blur-[100px] opacity-10 animate-blob"></div>
			<div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] rounded-full filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>

			<div className="relative max-w-7xl mx-auto px-6 z-10">
				<div className="text-center max-w-3xl mx-auto">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
						<span className="text-cyan-300 text-sm font-medium">
							AI Solutions Ecosystem
						</span>
					</div>
					<h2 className="text-4xl font-bold text-white">
						Specialized Intelligence{" "}
						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
							Products
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-300 leading-relaxed">
						Flowity's product suite delivers focused AI solutions for critical
						business functions. Each product combines our NLP expertise with
						industry-specific intelligence to drive measurable outcomes.
					</p>
				</div>

				<div className="mt-16">
					{/* Product Tabs */}
					<div className="flex flex-wrap justify-center gap-4 border-b border-gray-800 pb-8">
						{Object.keys(products).map((key) => (
							<button
								key={key}
								className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
									activeTab === key
										? "bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white shadow-lg shadow-purple-900/30"
										: "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
								}`}
								onClick={() => setActiveTab(key)}
							>
								{products[key].title}
							</button>
						))}
					</div>

					{/* Product Showcase */}
					<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div>
								<span className="inline-block px-3 py-1 text-sm font-semibold bg-cyan-500/10 text-cyan-300 rounded-full mb-4">
									{activeProduct.tagline}
								</span>
								<h3 className="text-3xl font-bold text-white mb-5">
									{activeProduct.title} Intelligence Platform
								</h3>
								<p className="text-gray-300 leading-relaxed">
									{activeProduct.description}
								</p>
							</div>

							<div className="grid grid-cols-2 gap-6 pt-4">
								{activeProduct.metrics.map((metric, index) => (
									<div
										key={index}
										className="bg-gray-800/30 p-5 rounded-xl border border-gray-700 backdrop-blur-sm"
									>
										<div className="text-4xl font-bold bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
											{metric.value}
										</div>
										<div className="text-gray-300 mt-2">{metric.label}</div>
									</div>
								))}
							</div>

							<div className="pt-6">
								<h4 className="text-lg font-semibold text-white mb-4">
									Core Capabilities
								</h4>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{activeProduct.features.map((feature, index) => (
										<div key={index} className="flex items-start">
											<svg
												className="w-5 h-5 text-cyan-400 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												></path>
											</svg>
											<span className="text-gray-300">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute -inset-6 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-2xl rotate-3 blur-xl opacity-20"></div>
							<div className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
								<div className="p-1 bg-gradient-to-r from-[#9C83F7]/20 to-[#1CD8DE]/20">
									<div className="bg-gray-900/90 p-8">
										<div className="flex justify-between items-center pb-6 border-b border-gray-800">
											<div className="text-white font-medium">
												Flowity {activeProduct.title} Dashboard
											</div>
											<div className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
												LIVE DEMO
											</div>
										</div>

										<div className="py-8">
											<div className="flex items-center justify-center mb-8">
												<div className="relative">
													<div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-lg animate-pulse"></div>
													<div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 flex items-center justify-center">
														<div className="text-3xl font-bold bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
															{activeProduct.metrics[0].value}
														</div>
													</div>
												</div>
											</div>

											<div className="space-y-4">
												<div>
													<div className="flex justify-between text-sm text-gray-400 mb-2">
														<span>Insight Accuracy</span>
														<span>92%</span>
													</div>
													<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
															style={{ width: "92%" }}
														></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between text-sm text-gray-400 mb-2">
														<span>Processing Volume</span>
														<span>1.2M/mo</span>
													</div>
													<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
															style={{ width: "78%" }}
														></div>
													</div>
												</div>

												<div>
													<div className="flex justify-between text-sm text-gray-400 mb-2">
														<span>Actionable Signals</span>
														<span>84%</span>
													</div>
													<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
															style={{ width: "84%" }}
														></div>
													</div>
												</div>
											</div>

											<div className="mt-10 pt-6 border-t border-gray-800">
												<div className="text-center">
													<div className="inline-flex px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
														<span className="text-cyan-300 text-sm">
															Real-time analysis of 12,342 feedback sources
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col pt-2 sm:pt-4 w-full">
								<a
									href={activeProduct.url}
									className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base"
								>
									<svg
										className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										></path>
									</svg>
									See {activeProduct.title}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
