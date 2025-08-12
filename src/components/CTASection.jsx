// import React from "react";

// export default function CTASection() {
// 	return (
// 		<div className="bg-gray-900 py-24">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="bg-gradient-to-br from-[#9C83F7]/10 to-[#1CD8DE]/10 rounded-3xl p-12 text-center relative overflow-hidden">
// 					<div className="absolute top-0 left-0 w-full h-full bg-[url('https://flowity.ai/dots.svg')] opacity-20"></div>
// 					<div className="absolute top-20 right-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>

// 					<div className="relative z-10">
// 						<h2 className="text-3xl md:text-4xl font-extrabold text-white">
// 							Ready to Transform Your Business?
// 						</h2>
// 						<p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
// 							Discover how Flowity AI can turn your data into your most valuable
// 							asset
// 						</p>
// 						<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
// 							<a
// 								href="#"
// 								className="px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] hover:from-[#8a70f0] hover:to-[#16c7d0] shadow-lg shadow-purple-900/30 transition-all duration-300"
// 							>
// 								Book a Demo
// 							</a>
// 							<a
// 								href="#products"
// 								className="px-8 py-4 border border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition-colors duration-300"
// 							>
// 								Explore Solutions
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
import React from "react";

export default function CTASection() {
	return (
		<div className="relative py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
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

			<div className="relative max-w-5xl mx-auto px-6 z-10">
				<div className="bg-gradient-to-br from-[#0f1b31] to-[#1a1a2e] rounded-3xl border border-cyan-500/20 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9C83F7] via-[#7A6BFA] to-[#1CD8DE]"></div>

					<div className="p-1 bg-gradient-to-r from-[#9C83F7]/20 to-[#1CD8DE]/20">
						<div className="bg-gray-900/70 backdrop-blur-lg p-12 md:p-16">
							<div className="text-center max-w-3xl mx-auto">
								<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
									<span className="text-cyan-300 text-sm font-medium">
										Get Started
									</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
									Transform Your Business with{" "}
									<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
										AI Intelligence
									</span>
								</h2>

								<p className="text-xl text-gray-300 mb-10 leading-relaxed">
									Schedule a personalized consultation to discover how Flowity's
									AI solutions can drive measurable results for your
									organization. See firsthand how our platforms transform data
									into strategic advantage.
								</p>

								<div className="flex flex-col sm:flex-row justify-center gap-4">
									<a
										href="#"
										className="px-8 py-4 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
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
										Book Executive Demo
									</a>
									<a
										href="#products"
										className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300 flex items-center justify-center"
									>
										Explore Platform Features
									</a>
								</div>

								<div className="mt-12 pt-8 border-t border-gray-800">
									<div className="flex flex-wrap justify-center gap-10">
										{[
											{ label: "Enterprise Security", icon: "🔒" },
											{ label: "SOC 2 Certified", icon: "🛡️" },
											{ label: "GDPR Compliant", icon: "🌐" },
											{ label: "24/7 Support", icon: "🔄" },
										].map((item, index) => (
											<div
												key={index}
												className="flex items-center text-gray-300"
											>
												<span className="text-xl mr-2">{item.icon}</span>
												<span>{item.label}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
