import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { work } from "../assets";
import { workModel } from "../constants";
import styled from "styled-components";

const HowWeWork = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
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

	return (
		<div className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-4">
			<div className="max-w-7xl mx-auto">
				<motion.div 
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-block bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] text-xs font-semibold py-1 px-3 rounded-full mb-4">
						ENTERPRISE-GRADE AI IMPLEMENTATION
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Precision Implementation for{" "}
						<span className="bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] bg-clip-text text-transparent">
							Immediate Impact
						</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Our streamlined deployment model delivers enterprise-grade
						intelligence in days, not months
					</p>
				</motion.div>

				<motion.div 
					className="grid grid-cols-1 lg:grid-cols-2 gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Process Steps */}
					<div className="space-y-12">
						{/* Step 1 */}
						<motion.div 
							className="flex flex-col sm:flex-row"
							variants={itemVariants}
						>
							<div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center sm:justify-start">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center text-xl font-bold">
									1
								</div>
							</div>
							<div className="text-center sm:text-left">
								<div className="flex flex-col sm:flex-row items-center mb-3">
									<h3 className="text-2xl font-bold">Discovery Alignment</h3>
									<div className="mt-2 sm:mt-0 sm:ml-4 bg-gray-800 text-[#1CD8DE] text-xs font-medium py-1 px-2 rounded">
										15 min call
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Rapid qualification to ensure perfect fit between your needs
									and our capabilities
								</p>
								<div className="flex flex-wrap gap-2 justify-center sm:justify-start">
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										Goals Definition
									</div>
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										Data Source Audit
									</div>
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										ROI Projection
									</div>
								</div>
							</div>
						</motion.div>

						{/* Step 2 */}
						<motion.div 
							className="flex flex-col sm:flex-row"
							variants={itemVariants}
						>
							<div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center sm:justify-start">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center text-xl font-bold">
									2
								</div>
							</div>
							<div className="text-center sm:text-left">
								<div className="flex flex-col sm:flex-row items-center mb-3">
									<h3 className="text-2xl font-bold">Technical Onboarding</h3>
									<div className="mt-2 sm:mt-0 sm:ml-4 bg-gray-800 text-[#1CD8DE] text-xs font-medium py-1 px-2 rounded">
										45 min call
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Secure API integration and configuration of your Flowity
									intelligence engine
								</p>
								<div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-4">
									<div className="flex justify-between text-sm text-gray-300 mb-2">
										<span>Integration Type</span>
										<span>Time Required</span>
									</div>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-[#1CD8DE] mr-2"></div>
												Standard API Connections
											</span>
											<span className="text-[#1CD8DE] font-medium">
												Instant
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-[#9C83F7] mr-2"></div>
												Custom Source Integration
											</span>
											<span className="text-[#9C83F7] font-medium">
												15-30 min
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Step 3 */}
						<motion.div 
							className="flex flex-col sm:flex-row"
							variants={itemVariants}
						>
							<div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center sm:justify-start">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center text-xl font-bold">
									3
								</div>
							</div>
							<div className="text-center sm:text-left">
								<div className="flex flex-col sm:flex-row items-center mb-3">
									<h3 className="text-2xl font-bold">Intelligence Activation</h3>
									<div className="mt-2 sm:mt-0 sm:ml-4 bg-gray-800 text-[#1CD8DE] text-xs font-medium py-1 px-2 rounded">
										Day 1
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Your Flowity AI agent begins processing feedback and delivering
									real-time insights
								</p>
								<div className="flex flex-wrap gap-2 justify-center sm:justify-start">
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										Slack Alerts
									</div>
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										Pulse Decks™
									</div>
									<div className="bg-gray-800 text-xs font-medium py-1 px-3 rounded-full">
										ROI Tracking
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Visual Representation */}
					<motion.div 
						className="relative"
						variants={itemVariants}
					>
						<div className="bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 md:p-8 lg:p-10 h-full">
							<div className="text-center mb-8">
								<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Implementation Timeline</h3>
								<div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mb-6">
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-[#1CD8DE] mr-2"></div>
										<span className="text-sm text-gray-300">Completed</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-[#9C83F7] mr-2"></div>
										<span className="text-sm text-gray-300">In Progress</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
										<span className="text-sm text-gray-300">Pending</span>
									</div>
								</div>
							</div>

							<div className="space-y-6 md:space-y-8">
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-full bg-[#1CD8DE] flex items-center justify-center text-white text-sm font-bold mr-4">
										1
									</div>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
											<span className="text-white font-medium text-sm md:text-base lg:text-lg">Discovery Call</span>
											<span className="text-[#1CD8DE] text-sm">✓ Complete</span>
										</div>
										<div className="w-full bg-gray-700 rounded-full h-3">
											<div className="bg-[#1CD8DE] h-3 rounded-full" style={{ width: '100%' }}></div>
										</div>
									</div>
								</div>

								<div className="flex items-center">
									<div className="w-10 h-10 rounded-full bg-[#9C83F7] flex items-center justify-center text-white text-sm font-bold mr-4">
										2
									</div>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
											<span className="text-white font-medium text-sm md:text-base lg:text-lg">Technical Setup</span>
											<span className="text-[#9C83F7] text-sm">In Progress</span>
										</div>
										<div className="w-full bg-gray-700 rounded-full h-3">
											<div className="bg-[#9C83F7] h-3 rounded-full" style={{ width: '60%' }}></div>
										</div>
									</div>
								</div>

								<div className="flex items-center">
									<div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-bold mr-4">
										3
									</div>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
											<span className="text-white font-medium text-sm md:text-base lg:text-lg">Go Live</span>
											<span className="text-gray-400 text-sm">Pending</span>
										</div>
										<div className="w-full bg-gray-700 rounded-full h-3">
											<div className="bg-gray-600 h-3 rounded-full" style={{ width: '0%' }}></div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-10 pt-8 border-t border-gray-700">
								<div className="text-center">
									<div className="text-3xl lg:text-4xl font-bold text-[#1CD8DE] mb-3">72 Hours</div>
									<div className="text-gray-400 text-sm md:text-base">From contract to first insights</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default HowWeWork;

// const StyledWrapper = styled.div`
// 	.card {
// 		border-radius: 30px;
// 		background: #212121;
// 		box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
// 	}
// `;

// const WorkModel = ({ title, content, index, value }) => (
// 	<div
// 		className={`flex flex-col p-6 rounded-[20px] feature-card md:min-h-[250px]`}
// 	>
// 		<div className="flex items-center">
// 			<div
// 				className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex items-start mb-2`}
// 			>
// 				<span className="text-logoCyan text-[30px] foundation w-[30px] h-[30px]">
// 					{value}
// 				</span>
// 			</div>
// 			<h4 className="flex font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
// 				{title}
// 			</h4>
// 		</div>
// 		<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
// 			{content}
// 		</p>
// 	</div>
// );

// const Services = () => {
// 	return (
// 		<section className={`md:flex-row flex-col w-full`}>
// 			<div className={`${styles.heading2} ${styles.flexCenter} flex-col`}>
// 				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
// 					<img src={work} alt="How we work" className="w-[22px] h-[22px]" />
// 					<p className={`${styles.paragraph} ml-2`}>How We Work</p>
// 				</div>
// 				<h2 className="text-center">
// 					From Insight to Automation <br /> Without Overcomplicating
// 				</h2>
// 				<p
// 					className={`${styles.paragraph} max-w-[700px] mt-6 mb-6 text-center`}
// 				>
// 					We keep things lean, fast, and focused on results. Here’s how you go
// 					from idea to full Whispr integration:
// 				</p>
// 			</div>
// 			<div className="flex md:flex-row flex-col">
// 				{/* Loop through tab data and render button for each. */}
// 				<div className="flex flex-col md:flex-row flex-1">
// 					{workModel.map((model, index) => {
// 						return (
// 							<div
// 								key={model.id}
// 								className="flex flex-1 flex-col justify-center space-x-3 text-white"
// 							>
// 								<div>
// 									<WorkModel key={model.id} {...model} index={index} />
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Services;
