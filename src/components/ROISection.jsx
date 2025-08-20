import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ROISection() {
	const [activeMetric, setActiveMetric] = useState(0);
	const [animatedValue, setAnimatedValue] = useState(0);

	// Updated metrics based on Whispr component
	const metrics = [
		{
			id: "churn",
			title: "Churn Reduction",
			value: 27,
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
			value: 19,
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
			value: 83,
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
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					></path>
				</svg>
			),
		},
	];

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

	// Animate the metric value
	useEffect(() => {
		setAnimatedValue(0);
		const targetValue = metrics[activeMetric].value;
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
	}, [activeMetric, metrics]);

	// Auto-rotate metrics
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveMetric((prev) => (prev + 1) % metrics.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [metrics.length]);

	return (
		<div className="relative py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
			{/* Background Elements - Much Slower Animation */}
			<div className="absolute inset-0">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 20 + 5}px`,
							height: `${Math.random() * 20 + 5}px`,
							opacity: Math.random() * 0.2 + 0.1,
							filter: "blur(8px)",
							animation: `float ${
								Math.random() * 45 + 35
							}s infinite ease-in-out`,
						}}
					/>
				))}
			</div>

			<div className="relative max-w-7xl mx-auto px-6 z-10">
				<motion.div 
					className="text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
						<span className="text-cyan-300 text-sm font-medium">
							Measurable Impact
						</span>
					</div>
					<h2 className="text-4xl font-bold text-white mb-6">
						Proven{" "}
						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
							ROI Results
						</span>
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						Our AI solutions deliver quantifiable business outcomes. See how
						Flowity transforms data into measurable competitive advantage.
					</p>
				</motion.div>

				<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{metrics.map((metric, index) => (
						<motion.div
							key={metric.id}
							className="bg-gradient-to-b from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 md:p-8 text-center hover:border-cyan-500/30 transition-all duration-300 group flex flex-col h-full"
							variants={itemVariants}
							onHoverStart={() => setActiveMetric(index)}
						>
							<div className="mb-6">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-300">
									<div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
										{metric.icon}
									</div>
								</div>
							</div>

							<h3 className="text-xl md:text-2xl font-bold text-white mb-4">
								{metric.title}
							</h3>

							<div className="mb-6 flex-1">
								<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent mb-3">
									{animatedValue}
									{metric.unit}
								</div>
								<p className="text-gray-300 text-sm leading-relaxed">
									{metric.description}
								</p>
							</div>

							<div className="pt-6 border-t border-gray-800 mt-auto">
								<p className="text-cyan-300 text-sm font-medium">
									{metric.impact}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div 
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl border border-cyan-500/30 p-8 md:p-10 max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold text-white mb-6">
							Enterprise ROI Calculator
						</h3>
						<p className="text-gray-300 mb-8 leading-relaxed">
							Calculate your potential savings and revenue impact with our
							interactive ROI calculator. See how Flowity's AI solutions can
							transform your business metrics.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<button className="px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 transform hover:-translate-y-1 text-base md:text-lg">
								Calculate Your ROI
							</button>
							<button className="px-6 md:px-8 py-4 md:py-5 border border-cyan-400/30 text-cyan-300 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-base md:text-lg">
								View Case Studies
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
