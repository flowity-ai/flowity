import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FiChevronDown,
	FiShield,
	FiDollarSign,
	FiBarChart,
	FiServer,
	FiZap,
} from "react-icons/fi";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: "What's included in the Pro Whispr subscription?",
			answer:
				"Your investment covers: 1) Full deployment of Whispr AI Agent on your n8n instance, 2) Weekly Pulse Decks™ with MRR protection strategies, 3) Real-time Slack alerts for churn risks, 4) Monthly optimization sessions, and 5) Our ROI guarantee - we work free until promised results are delivered.",
			icon: <FiDollarSign className="text-[#1CD8DE]" />,
		},
		{
			question: "How does your ROI guarantee work?",
			answer:
				"We contractually guarantee either: 1) 2x your investment in protected MRR within 90 days, or 2) 19% reduction in avoidable churn. If unmet, we work free until achieved. 94% of clients hit both targets in month 1.",
			icon: <FiShield className="text-[#1CD8DE]" />,
		},
		{
			question: "Why do I need my own n8n instance?",
			answer:
				"Hosting Whispr on your infrastructure: 1) Keeps sensitive customer data within your firewall, 2) Allows custom integrations with internal tools, 3) Eliminates third-party data risks, and 4) Gives full control over compliance (GDPR/HIPAA). We provide pre-configured templates.",
			icon: <FiServer className="text-[#9C83F7]" />,
		},
		{
			question: "What if we don't have technical resources?",
			answer:
				"For £1,000/month extra, our DevOps team will: 1) Provision your n8n cloud (AWS/GCP), 2) Configure all integrations, 3) Maintain infrastructure, and 4) Provide 24/7 monitoring. Just forward feedback sources - we handle the rest.",
			icon: <FiZap className="text-[#1CD8DE]" />,
		},
		{
			question: "How quickly do we see results?",
			answer:
				"Timeline: Day 1: n8n deployment, Day 3: First Slack alerts, Day 7: Initial Pulse Deck™, Day 30: First ROI validation. 78% of clients prevent ≥€15K MRR loss in week 1 by acting on urgent alerts.",
			icon: <FiBarChart className="text-[#9C83F7]" />,
		},
		{
			question: "Can we cancel if results aren't delivered?",
			answer:
				"No long-term lock-in: 1) Month-to-month subscription, 2) 30-day notice period, 3) Full data ownership. But with our guarantee, you'll want to expand - 68% of clients add modules by month 3.",
			icon: <FiShield className="text-[#1CD8DE]" />,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="bg-gradient-to-br from-gray-900 to-black py-24 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] mb-6">
						<FiDollarSign className="mr-2" /> SUBSCRIPTION ADVANTAGE
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Enterprise Results,{" "}
						<span className="bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] bg-clip-text text-transparent">Zero Risk</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						How our productized service delivers measurable ROI with ironclad
						guarantees
					</p>
				</motion.div>

				<motion.div 
					className="space-y-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className={`border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${
								openIndex === index
									? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#1CD8DE]/30 shadow-lg shadow-[#1CD8DE]/10"
									: "bg-gray-900/30 hover:bg-gray-800/20"
							}`}
							variants={itemVariants}
						>
							<button
								className="flex items-center justify-between w-full p-6 text-left"
								onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
							>
								<div className="flex items-center">
									<div className="mr-4 text-xl">{faq.icon}</div>
									<h3 className="text-lg font-medium text-white">
										{faq.question}
									</h3>
								</div>
								<div
									className={`transform transition-transform duration-300 ${
										openIndex === index ? "rotate-180" : ""
									}`}
								>
									<FiChevronDown className="text-[#1CD8DE]" />
								</div>
							</button>

							{openIndex === index && (
								<motion.div 
									className="px-6 pb-6 text-gray-300"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									transition={{ duration: 0.3 }}
								>
									{faq.answer}
									{index === 1 && (
										<div className="mt-4 p-4 bg-gradient-to-r from-[#1CD8DE]/20 to-[#9C83F7]/20 rounded-lg border border-[#1CD8DE]/30">
											<div className="flex items-center">
												<div className="bg-[#1CD8DE]/20 rounded-full p-2 mr-3">
													<FiShield className="text-[#1CD8DE]" />
												</div>
												<div>
													<div className="font-bold text-[#1CD8DE]">
														Guarantee Terms
													</div>
													<div className="text-sm">
														Based on first 100 feedback items processed
													</div>
												</div>
											</div>
										</div>
									)}
								</motion.div>
							)}
						</motion.div>
					))}
				</motion.div>

				{/* Guarantee Badge */}
				<div className="mt-12 bg-gradient-to-r from-[#1CD8DE]/10 to-[#9C83F7]/10 border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
					<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#1CD8DE] rounded-full opacity-10"></div>
					<div className="relative z-10">
						<div className="flex flex-col md:flex-row items-center justify-between gap-8">
							<div className="text-center md:text-left">
								<div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1CD8DE]/20 text-[#1CD8DE] mb-4">
									<FiShield className="mr-2" /> ROI GUARANTEE
								</div>
								<h3 className="text-xl font-bold text-white mb-2">
									Your Success is Our Business Model
								</h3>
								<p className="text-gray-400 max-w-md">
									We only succeed when you see measurable revenue impact. No
									results = No payment.
								</p>
							</div>
							<div className="flex-shrink-0">
								<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center">
									<div className="text-3xl font-bold text-white mb-2">£0</div>
									<div className="text-gray-400 text-sm">
										If targets aren't met
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
