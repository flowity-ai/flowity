import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function ProductsSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	const product = {
		title: "Customer Intelligence Platform",
		tagline: "AI-Powered Customer Intelligence",
		description:
			"Transform unstructured customer feedback into strategic growth insights. Our platform analyzes millions of data points across surveys, reviews, and support interactions to identify churn risks, product opportunities, and customer sentiment trends.",
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
	};

	return (
		<div
			className="relative py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
			id="products"
		>
			{/* Floating Elements - Slower Animation */}
			<div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
			<div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '10s' }}></div>

			<div className="relative max-w-7xl mx-auto px-6 z-10">
				<motion.div 
					className="text-center max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
						<span className="text-cyan-300 text-sm font-medium">
							AI Solutions Ecosystem
						</span>
					</div>
					<h2 className="text-4xl font-bold text-white">
						Specialized Intelligence{" "}
						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
							Platform
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-300 leading-relaxed">
						Flowity's customer intelligence platform delivers focused AI solutions for critical
						business functions. Our NLP expertise with industry-specific intelligence drives measurable outcomes.
					</p>
				</motion.div>

				<motion.div 
					className="mt-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Product Content */}
					<motion.div 
						className="mt-12"
						variants={itemVariants}
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
							<div>
								<div className="mb-6">
									<h3 className="text-3xl font-bold text-white mb-2">
										{product.title}
									</h3>
									<p className="text-xl text-cyan-400 font-medium">
										{product.tagline}
									</p>
								</div>

								<p className="text-gray-300 leading-relaxed mb-8">
									{product.description}
								</p>

								<div className="space-y-4 mb-8">
									<h4 className="text-lg font-semibold text-white mb-4">
										Key Features
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										{product.features.map((feature, index) => (
											<div key={index} className="flex items-center">
												<div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
												<span className="text-gray-300">{feature}</span>
											</div>
										))}
									</div>
								</div>

								<div className="flex flex-wrap gap-6">
									{product.metrics.map((metric, index) => (
										<div key={index} className="text-center">
											<div className="text-3xl font-bold text-cyan-400">
												{metric.value}
											</div>
											<div className="text-sm text-gray-400">
												{metric.label}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 md:p-8 lg:p-10 w-full">
								<div className="text-center">
									<h4 className="text-xl md:text-2xl font-bold text-white mb-6">
										Platform Preview
									</h4>
									<div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-700 mb-8">
										<div className="space-y-4 md:space-y-6">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
												<span className="text-gray-400 text-sm md:text-base mb-1 sm:mb-0">Status</span>
												<span className="text-green-400 font-medium text-sm md:text-base">
													Live
												</span>
											</div>
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
												<span className="text-gray-400 text-sm md:text-base mb-1 sm:mb-0">Deployment</span>
												<span className="text-cyan-400 font-medium text-sm md:text-base">
													Available Now
												</span>
											</div>
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
												<span className="text-gray-400 text-sm md:text-base mb-1 sm:mb-0">Integration</span>
												<span className="text-cyan-400 font-medium text-sm md:text-base">
													Plug & Play
												</span>
											</div>
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
												<span className="text-gray-400 text-sm md:text-base mb-1 sm:mb-0">Processing</span>
												<span className="text-cyan-400 font-medium text-sm md:text-base">
													1M+ data points/day
												</span>
											</div>
										</div>
									</div>
									<div className="px-4">
										<Button />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
