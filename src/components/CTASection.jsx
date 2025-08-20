import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
	return (
		<div className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 30 + 10}px`,
							height: `${Math.random() * 30 + 10}px`,
							opacity: Math.random() * 0.3 + 0.1,
							filter: "blur(10px)",
							animation: `float ${
								Math.random() * 15 + 10
							}s infinite ease-in-out`,
						}}
					/>
				))}
			</div>

			<div className="relative max-w-5xl mx-auto px-4 md:px-6 z-10">
				<div className="bg-gradient-to-br from-[#0f1b31] to-[#1a1a2e] rounded-2xl md:rounded-3xl border border-cyan-500/20 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9C83F7] via-[#7A6BFA] to-[#1CD8DE]"></div>

					<div className="p-1 bg-gradient-to-r from-[#9C83F7]/20 to-[#1CD8DE]/20">
						<div className="bg-gray-900/70 backdrop-blur-lg p-8 md:p-12 lg:p-16">
							<motion.div 
								className="text-center max-w-3xl mx-auto"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
									<span className="text-cyan-300 text-sm font-medium">
										Get Started
									</span>
								</div>

								<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
									Transform Your Business with{" "}
									<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
										AI Intelligence
									</span>
								</h2>

								<p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
									Schedule a personalized consultation to discover how Flowity's
									AI solutions can drive measurable results for your
									organization. See firsthand how our platforms transform data
									into strategic advantage.
								</p>

								<motion.div 
									className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
								>
									<a
										href="#"
										className="px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base md:text-lg"
									>
										<svg
											className="w-5 h-5 mr-2 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											></path>
										</svg>
										Schedule Consultation
									</a>
									<a
										href="#"
										className="px-6 md:px-8 py-4 md:py-5 border border-cyan-400/30 text-cyan-300 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base md:text-lg"
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
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											></path>
										</svg>
										View Demo
									</a>
								</motion.div>

								<motion.div 
									className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 text-sm text-gray-400"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									viewport={{ once: true }}
								>
									<div className="flex items-center justify-center">
										<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
										<span>15-minute setup</span>
									</div>
									<div className="flex items-center justify-center">
										<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
										<span>No credit card required</span>
									</div>
									<div className="flex items-center justify-center">
										<div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
										<span>Free trial available</span>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
