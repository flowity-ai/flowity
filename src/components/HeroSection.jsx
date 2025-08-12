import React, { useEffect, useState, useRef } from "react";

const HeroSection = () => {
	const [animatedBars, setAnimatedBars] = useState(false);
	const featuresRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			setAnimatedBars(true);
		}, 300);
	}, []);

	const scrollToFeatures = () => {
		if (featuresRef.current) {
			featuresRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const metrics = [
		{
			id: 1,
			title: "Sentiment",
			value: 84,
			change: "+5.2%",
			color: "from-[#9C83F7] to-[#1CD8DE]",
		},
		{
			id: 2,
			title: "Feedback",
			value: "12.4K",
			change: "+24.7%",
			color: "from-[#7A6BFA] to-[#1CD8DE]",
		},
		{
			id: 3,
			title: "Response",
			value: "3.2h",
			change: "-41%",
			color: "from-[#1CD8DE] to-[#9C83F7]",
		},
		{
			id: 4,
			title: "Churn",
			value: "18.3%",
			change: "-12%",
			color: "from-[#9C83F7] to-[#7A6BFA]",
		},
	];

	const sentimentData = [
		{ day: "M", value: 70 },
		{ day: "T", value: 85 },
		{ day: "W", value: 65 },
		{ day: "T", value: 92 },
		{ day: "F", value: 78 },
		{ day: "S", value: 88 },
		{ day: "S", value: 95 },
	];

	const topics = ["Pricing", "UX", "Features", "Performance", "Support"];

	return (
		<div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-[10%] left-[10%] w-64 h-64 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-full filter blur-[100px] opacity-10 animate-blob"></div>
				<div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-gradient-to-r from-[#1CD8DE] to-[#9C83F7] rounded-full filter blur-[120px] opacity-10 animate-blob animation-delay-3000"></div>

				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] animate-float"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 15 + 5}px`,
							height: `${Math.random() * 15 + 5}px`,
							opacity: Math.random() * 0.2 + 0.1,
							filter: "blur(4px)",
							animationDuration: `${Math.random() * 10 + 15}s`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>

			{/* Content container with responsive padding */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Left column - optimized for mobile */}
					<div className="space-y-6 sm:space-y-8">
						<div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-cyan-400/20">
							<span className="h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
							<span className="text-cyan-300 text-xs sm:text-sm font-medium">
								Flowity AI presents Whispr
							</span>
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
							<span className="block mb-2 sm:mb-3 text-white">
								Transform Data Into
							</span>
							<span className="block bg-gradient-to-r from-[#9C83F7] via-[#7A6BFA] to-[#1CD8DE] bg-clip-text text-transparent">
								Competitive Edge
							</span>
						</h1>

						<p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
							Flowity AI delivers enterprise-grade NLP automation that
							transforms unstructured data into strategic growth insights. Drive
							revenue, reduce churn, and unlock new opportunities with our
							AI-powered intelligence platform.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
							<a
								href="#"
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
								Book Demo
							</a>
							<a
								href="/pulse-report"
								className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white font-medium rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
							>
								See Pulse Deck™
							</a>
						</div>

						<div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
							<div className="flex items-center">
								<div className="flex -space-x-2">
									<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9C83F7] to-[#7A6BFA] border-2 border-gray-900"></div>
									<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#7A6BFA] to-[#1CD8DE] border-2 border-gray-900"></div>
								</div>
								<div className="ml-2 sm:ml-3 text-gray-300 text-xs sm:text-sm">
									<span className="font-medium">Trusted by leaders</span>
								</div>
							</div>
							<div className="flex items-center text-cyan-300 text-xs sm:text-sm">
								<svg
									className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
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
								<span>SOC 2 Compliant</span>
							</div>
						</div>
					</div>

					{/* Right column - responsive dashboard */}
					<div className="relative mt-8 lg:mt-0">
						<div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-xl sm:rounded-2xl transform rotate-3 blur-lg sm:blur-xl opacity-10"></div>

						<div className="relative bg-gray-900/70 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-lg sm:shadow-2xl">
							<div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-gray-800">
								<div className="flex space-x-1 sm:space-x-2">
									<div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
									<div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
									<div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
								</div>
								<div className="text-cyan-400 text-xs sm:text-sm font-mono">
									FLOWITY DASHBOARD
								</div>
							</div>

							{/* Responsive metrics grid */}
							<div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
								{metrics.map((metric) => (
									<div
										key={metric.id}
										className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700"
									>
										<h3 className="text-gray-300 text-xs sm:text-sm font-medium">
											{metric.title}
										</h3>
										<div className="flex items-end justify-between mt-1 sm:mt-2">
											<div className="text-xl sm:text-2xl font-bold text-white">
												{metric.value}
											</div>
											<div
												className={`text-xs sm:text-sm ${
													metric.change.startsWith("+")
														? "text-green-500"
														: "text-red-500"
												}`}
											>
												{metric.change}
											</div>
										</div>
										<div className="mt-2 sm:mt-3">
											<div className="h-1 sm:h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
												<div
													className={`h-full bg-gradient-to-r ${metric.color}`}
													style={{ width: `${Math.min(100, metric.id * 25)}%` }}
												></div>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Topics section - simplified for mobile */}
							<div className="mt-4 sm:mt-6 bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700">
								<h3 className="text-gray-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
									Top Topics
								</h3>
								<div className="flex flex-wrap gap-1 sm:gap-2">
									{topics.map((topic, index) => (
										<span
											key={index}
											className="px-2 py-1 text-xxs sm:text-xs font-medium bg-gray-900/30 text-cyan-300 rounded sm:rounded-lg border border-cyan-400/20"
										>
											{topic}
										</span>
									))}
								</div>
							</div>

							{/* Sentiment chart - responsive */}
							<div className="mt-4 sm:mt-6 bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700">
								<div className="flex justify-between items-center mb-2 sm:mb-4">
									<h3 className="text-gray-300 text-xs sm:text-sm font-medium">
										Sentiment
									</h3>
									<div className="text-xxs sm:text-xs text-gray-400">
										Last 7 days
									</div>
								</div>
								<div className="flex items-end h-24 sm:h-32 gap-2 sm:gap-3 justify-between">
									{sentimentData.map((data, index) => (
										<div
											key={index}
											className="flex flex-col items-center flex-1 h-full"
										>
											<div className="relative h-full w-full flex flex-col justify-end">
												<div
													className="w-full bg-gradient-to-t from-[#9C83F7] to-[#7A6BFA] rounded-t transition-all duration-1000 ease-out"
													style={{
														height: animatedBars ? `${data.value}%` : "0%",
														minHeight: "8px",
														transitionDelay: `${index * 100}ms`,
													}}
												></div>
											</div>
											<div className="text-xxs sm:text-xs text-gray-400 mt-1 sm:mt-2">
												{data.day}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800 text-center">
								<div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-gray-800/30 rounded sm:rounded-lg border border-cyan-500/20">
									<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 mr-1 sm:mr-2 animate-pulse"></span>
									<span className="text-cyan-300 text-xxs sm:text-sm">
										Analyzing 1,243 feedback sources
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Floating CTA - positioned relative to content */}
			<div className="relative -mt-8 mb-8 sm:mb-0 sm:absolute sm:bottom-8 left-1/2 transform -translate-x-1/2">
				<button
					onClick={scrollToFeatures}
					className="animate-bounce inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white shadow-lg cursor-pointer"
					style={{ boxShadow: "0 0 15px rgba(156, 131, 247, 0.5)" }}
				>
					<svg
						className="w-4 h-4 sm:w-5 sm:h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				</button>
			</div>

			{/* Invisible anchor for scroll target */}
			<div ref={featuresRef} className="absolute -bottom-96"></div>
		</div>
	);
};

export default HeroSection;
