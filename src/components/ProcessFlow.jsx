import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const ProcessStep = ({
	step,
	title,
	description,
	isActive,
	onHover,
	icons,
	isLast,
}) => {
	return (
		<div className="relative flex flex-col items-center">
			{/* Step connector line - only show between steps */}
			{!isLast && (
				<div className="absolute top-6 left-1/2 right-0 h-0.5 bg-gray-800 hidden md:block">
					<motion.div
						className="h-full bg-gradient-to-r from-logoPurple to-logoCyan"
						initial={{ width: 0 }}
						animate={{ width: isActive ? "100%" : 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					/>
				</div>
			)}

			{/* Step content */}
			<motion.div
				className="relative z-10 flex flex-col items-center group cursor-pointer"
				onHoverStart={() => onHover(step)}
				onHoverEnd={() => onHover(null)}
				whileHover={{ y: -5 }}
			>
				{/* Step circle with gradient border */}
				<div className="relative p-0.5 rounded-full bg-gradient-to-r from-logoPurple to-logoCyan">
					<motion.div
						className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900"
						animate={{
							scale: isActive ? 1.1 : 1,
							backgroundColor: isActive
								? "rgba(28, 216, 222, 0.1)"
								: "rgba(17, 24, 39, 1)",
						}}
						transition={{ duration: 0.2 }}
					>
						<span
							className={`font-mono font-bold ${
								isActive ? "text-logoCyan" : "text-gray-400"
							}`}
						>
							{step}
						</span>
					</motion.div>

					{/* Active pulse effect */}
					{isActive && (
						<motion.div
							className="absolute inset-0 rounded-full bg-logoCyan"
							initial={{ opacity: 0.5, scale: 1 }}
							animate={{ opacity: 0, scale: 1.5 }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
					)}
				</div>

				{/* Step content card */}
				<motion.div
					className={`mt-6 p-5 rounded-xl border backdrop-blur-sm max-w-[280px] w-full min-h-[180px] flex flex-col justify-center
            ${
							isActive
								? "border-logoPurple bg-gradient-to-b from-gray-900 to-black shadow-lg shadow-logoPurple/20"
								: "border-gray-800 bg-black"
						}`}
					animate={{
						y: isActive ? -5 : 0,
					}}
					transition={{ duration: 0.3 }}
				>
					<div className="flex justify-center space-x-3 mb-4">
						{icons.map((IconComponent, i) => (
							<IconComponent
								key={i}
								className={`text-xl ${
									isActive ? "text-logoCyan" : "text-gray-600"
								}`}
							/>
						))}
					</div>
					<h4
						className={`font-semibold text-center mb-2 ${
							isActive ? "text-white" : "text-gray-300"
						}`}
					>
						{title}
					</h4>
					<p className="text-sm text-gray-400 text-center leading-relaxed">
						{description}
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

const ProcessFlow = () => {
	const [activeStep, setActiveStep] = useState(1);

	// Example icons - replace with your actual icon components
	const FiBox = () => (
		<svg
			stroke="currentColor"
			fill="none"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
		>
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
			<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
			<line x1="12" y1="22.08" x2="12" y2="12"></line>
		</svg>
	);

	const FiCpu = () => (
		<svg
			stroke="currentColor"
			fill="none"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
		>
			<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
			<rect x="9" y="9" width="6" height="6"></rect>
			<line x1="9" y1="1" x2="9" y2="4"></line>
			<line x1="15" y1="1" x2="15" y2="4"></line>
			<line x1="9" y1="20" x2="9" y2="23"></line>
			<line x1="15" y1="20" x2="15" y2="23"></line>
			<line x1="20" y1="9" x2="23" y2="9"></line>
			<line x1="20" y1="14" x2="23" y2="14"></line>
			<line x1="1" y1="9" x2="4" y2="9"></line>
			<line x1="1" y1="14" x2="4" y2="14"></line>
		</svg>
	);

	const FiActivity = () => (
		<svg
			stroke="currentColor"
			fill="none"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
		>
			<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
		</svg>
	);

	const FiBarChart = () => (
		<svg
			stroke="currentColor"
			fill="none"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
		>
			<line x1="18" y1="20" x2="18" y2="10"></line>
			<line x1="12" y1="20" x2="12" y2="4"></line>
			<line x1="6" y1="20" x2="6" y2="14"></line>
		</svg>
	);

	const steps = [
		{
			step: 1,
			title: "Ingest",
			description:
				"We connect seamlessly to your Typeform, Slack, Intercom, and more.",
			icons: [FiBox, FiActivity],
		},
		{
			step: 2,
			title: "Analyze",
			description:
				"Our AI clusters feedback, detects sentiment, and extracts core themes.",
			icons: [FiCpu],
		},
		{
			step: 3,
			title: "Intelligize",
			description: "Proprietary models score for ROI, churn risk, and urgency.",
			icons: [FiActivity, FiBarChart],
		},
		{
			step: 4,
			title: "Deliver",
			description:
				"Get your weekly Notion brief, Slack alert, and executive Pulse Deck.",
			icons: [FiBarChart],
		},
	];

	return (
		<section className="py-24 bg-black px-4 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					Intelligence,
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-logoPurple to-logoCyan">
						{" "}
						Automated
					</span>
				</motion.h2>
				<motion.p
					className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					A sophisticated AI pipeline works tirelessly so your team doesn't have
					to.
				</motion.p>

				{/* Desktop Process Flow */}
				<div className="hidden md:flex justify-between relative">
					{/* Background connection line */}
					<div className="absolute left-16 right-16 top-6 h-0.5 bg-gray-800 z-0"></div>

					{steps.map((stepData, index) => (
						<ProcessStep
							key={stepData.step}
							{...stepData}
							isActive={activeStep === stepData.step}
							onHover={setActiveStep}
							isLast={index === steps.length - 1}
						/>
					))}
				</div>

				{/* Mobile Process Flow */}
				<div className="md:hidden space-y-12">
					{steps.map((stepData, index) => (
						<motion.div
							key={stepData.step}
							className="flex items-start"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true, margin: "-50px" }}
						>
							<div className="flex-shrink-0 relative">
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-logoPurple to-logoCyan">
									<span className="font-mono font-bold text-white">
										{stepData.step}
									</span>
								</div>
								{index !== steps.length - 1 && (
									<div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-logoPurple to-logoCyan"></div>
								)}
							</div>

							<div className="ml-6 flex-1">
								<div className="p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
									<div className="flex space-x-3 mb-3">
										{stepData.icons.map((IconComponent, i) => (
											<IconComponent
												key={i}
												className="text-xl text-logoCyan"
											/>
										))}
									</div>
									<h4 className="font-semibold text-white mb-2">
										{stepData.title}
									</h4>
									<p className="text-sm text-gray-400">
										{stepData.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Step Navigation Dots for Mobile */}
				<div className="flex justify-center mt-12 md:hidden">
					<div className="flex space-x-2">
						{steps.map((stepData) => (
							<button
								key={stepData.step}
								className={`w-3 h-3 rounded-full ${
									activeStep === stepData.step ? "bg-logoCyan" : "bg-gray-700"
								}`}
								onClick={() => setActiveStep(stepData.step)}
								aria-label={`Go to step ${stepData.step}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProcessFlow;
