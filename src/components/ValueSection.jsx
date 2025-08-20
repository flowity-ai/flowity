// import React from "react";

// const ValueSection = () => {
// 	const values = [
// 		{
// 			title: "NLP Specialization",
// 			description:
// 				"Deep expertise in natural language processing for accurate insights extraction",
// 			icon: (
// 				<svg
// 					className="w-8 h-8 text-cyan-400"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			title: "Rapid Deployment",
// 			description: "Production-ready solutions in days, not months",
// 			icon: (
// 				<svg
// 					className="w-8 h-8 text-cyan-400"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			title: "Scalable Architecture",
// 			description: "Solutions that grow with your business needs",
// 			icon: (
// 				<svg
// 					className="w-8 h-8 text-cyan-400"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
// 					></path>
// 				</svg>
// 			),
// 		},
// 		{
// 			title: "Business Impact Focus",
// 			description: "Engineered to drive measurable growth outcomes",
// 			icon: (
// 				<svg
// 					className="w-8 h-8 text-cyan-400"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
// 					></path>
// 				</svg>
// 			),
// 		},
// 	];

// 	return (
// 		<div className="bg-gray-900 py-24">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="text-center">
// 					<h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase">
// 						Why Flowity AI
// 					</h2>
// 					<p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
// 						AI Automation Engineered for Business Evolution
// 					</p>
// 					<p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
// 						We transform unstructured data into growth catalysts for
// 						forward-thinking businesses
// 					</p>
// 				</div>

// 				<div className="mt-20">
// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// 						{values.map((value, index) => (
// 							<div
// 								key={index}
// 								className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
// 							>
// 								<div className="flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mx-auto">
// 									{value.icon}
// 								</div>
// 								<h3 className="text-xl font-bold text-white mt-6 text-center">
// 									{value.title}
// 								</h3>
// 								<p className="mt-3 text-base text-gray-300 text-center">
// 									{value.description}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				<div className="mt-20 text-center">
// 					<div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-900/30 to-cyan-900/30 shadow-lg shadow-purple-900/20">
// 						<svg
// 							className="mr-3 h-5 w-5 text-cyan-400"
// 							fill="none"
// 							stroke="currentColor"
// 							viewBox="0 0 24 24"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth="2"
// 								d="M13 10V3L4 14h7v7l9-11h-7z"
// 							></path>
// 						</svg>
// 						From data chaos to growth clarity in 48 hours
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ValueSection;
import React from "react";

export default function ValueSection() {
	const values = [
		{
			title: "NLP-Powered Intelligence",
			description:
				"Deep learning algorithms extract nuanced insights from unstructured data sources with human-like comprehension",
			icon: (
				<svg
					className="w-10 h-10 text-cyan-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
					></path>
				</svg>
			),
		},
		{
			title: "Enterprise-Grade Architecture",
			description:
				"Scalable infrastructure designed for business-critical operations with 99.99% uptime SLA",
			icon: (
				<svg
					className="w-10 h-10 text-cyan-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
					></path>
				</svg>
			),
		},
		{
			title: "Actionable Insights Engine",
			description:
				"Transform raw data into prioritized business recommendations with measurable impact",
			icon: (
				<svg
					className="w-10 h-10 text-cyan-400"
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

	return (
		<div className="relative py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute top-20 right-0 w-80 h-80 bg-purple-900 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-blob"></div>
			<div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-800 rounded-full mix-blend-soft-light filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>

			<div className="relative max-w-7xl mx-auto px-6 z-10">
				<div className="text-center max-w-3xl mx-auto">
					<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-cyan-400/20 mb-6">
						<span className="text-cyan-300 text-sm font-medium">
							The Flowity Advantage
						</span>
					</div>
					<h2 className="text-4xl font-bold text-white">
						Precision AI for{" "}
						<span className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] bg-clip-text text-transparent">
							Strategic Advantage
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-300 leading-relaxed">
						We deliver more than automation - we provide intelligence
						infrastructure. Flowity's specialized NLP engines transform
						qualitative data into quantitative business value, empowering
						leaders to make decisions with unprecedented clarity.
					</p>
				</div>

				<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					{values.map((value, index) => (
						<div
							key={index}
							className="bg-gradient-to-b from-gray-800/30 to-gray-900/10 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 lg:p-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10"
						>
							<div className="mb-8">
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 border border-cyan-400/20">
									{value.icon}
								</div>
							</div>
							<h3 className="text-2xl font-bold text-white mb-6">
								{value.title}
							</h3>
							<p className="text-gray-300 leading-relaxed mb-8">
								{value.description}
							</p>
							<div className="pt-6 border-t border-gray-800">
								<div className="flex flex-wrap gap-3">
									{[
										"Sentiment mapping",
										"Topic modeling",
										"Real-time analytics",
										"Predictive insights",
									].map((item, i) => (
										<span
											key={i}
											className="px-3 py-1.5 text-xs font-medium bg-gray-800/50 text-cyan-300 rounded-full border border-cyan-400/20"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-24 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl border border-cyan-500/30 p-10 max-w-5xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="flex-shrink-0">
							<div className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] p-1 rounded-full">
								<div className="bg-gray-900 p-6 rounded-full">
									<svg
										className="w-12 h-12 text-white"
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
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-white mb-3">
								Enterprise Intelligence Platform
							</h3>
							<p className="text-gray-300 leading-relaxed mb-5">
								Flowity's unified platform integrates seamlessly with your
								existing tech stack, providing a single source of truth for
								customer intelligence. Our modular architecture scales with your
								business needs while maintaining enterprise-grade security and
								compliance standards.
							</p>
							<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
								<div className="flex items-center text-cyan-300">
									<svg
										className="w-5 h-5 mr-1.5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>SOC 2 Type II Certified</span>
								</div>
								<div className="flex items-center text-cyan-300">
									<svg
										className="w-5 h-5 mr-1.5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>GDPR Compliant</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
