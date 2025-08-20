import React, { useState, useEffect } from "react";

const FlowityLandingPage = () => {
	return (
		<div className="min-h-screen bg-black text-white overflow-x-hidden">
			<HeroSection />
			<ROISection />
			<FeaturesSection />
			<IntegrationSection />
			<TestimonialsSection />
			<PilotProgram />
		</div>
	);
};

const HeroSection = () => {
	return (
		<section className="min-h-screen flex items-center pt-24 pb-20 px-6 lg:px-16 relative overflow-hidden">
			<div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-purple-600 rounded-full filter blur-[100px] opacity-10"></div>
			<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-400 rounded-full filter blur-[100px] opacity-10"></div>

			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				<div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
					<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
						Transform Feedback into{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
							Revenue Intelligence
						</span>
					</h1>
					<p className="text-xl text-gray-300 mb-10 max-w-lg">
						Flowity AI turns customer conversations across all channels into
						actionable product intelligence that drives growth and reduces
						churn.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<a
							href="#pilot"
							className="bg-gradient-to-r from-purple-600 to-cyan-400 py-4 px-8 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
						>
							Apply for Pilot Program
						</a>
						<a
							href="#roi"
							className="border border-gray-700 py-4 px-8 rounded-lg font-medium text-center hover:bg-gray-800/50 transition-all"
						>
							See ROI Calculator
						</a>
					</div>
				</div>

				<div className="relative">
					<div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-2xl shadow-purple-500/10">
						<div className="flex justify-between items-center mb-6">
							<div className="flex space-x-2">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<span className="text-sm text-gray-400">
								Live Analysis Dashboard
							</span>
						</div>

						<div className="space-y-5">
							<div className="flex items-start">
								<div className="bg-purple-600/10 p-2 rounded-lg mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-purple-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold">Feature Request Volume</h3>
									<p className="text-sm text-gray-400">
										+47% in past 30 days • 142 requests
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-cyan-400/10 p-2 rounded-lg mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-cyan-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold">Churn Risk Detected</h3>
									<p className="text-sm text-gray-400">
										12 high-value accounts • $145K MRR at risk
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-purple-600/10 p-2 rounded-lg mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-purple-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold">ROI Opportunity Identified</h3>
									<p className="text-sm text-gray-400">
										$28.5K potential MRR expansion • 63% confidence
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ROISection = () => {
	return (
		<section
			id="roi"
			className="py-24 px-6 lg:px-16 bg-gradient-to-b from-black to-gray-900 relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20 opacity-0 animate-fade-in-up">
					<h2 className="text-4xl font-bold mb-6">
						Proven ROI for Product Teams
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Flowity AI delivers measurable impact on your bottom line within the
						first 30 days.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{roiMetrics.map((metric, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
								{metric.value}
							</div>
							<h3 className="text-xl font-semibold mb-4">{metric.title}</h3>
							<p className="text-gray-400">{metric.description}</p>
						</div>
					))}
				</div>

				<div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 opacity-0 animate-fade-in-up [animation-delay:400ms]">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl font-semibold mb-4">
								Calculate Your Potential ROI
							</h3>
							<p className="text-gray-400 mb-6">
								See how much revenue Flowity AI can unlock for your business
								based on your current scale.
							</p>
							<div className="space-y-4">
								<div>
									<label className="block text-gray-400 mb-2">
										Monthly Feedback Items
									</label>
									<input type="range" min="100" max="5000" className="w-full" />
								</div>
								<div>
									<label className="block text-gray-400 mb-2">Team Size</label>
									<input type="range" min="5" max="100" className="w-full" />
								</div>
							</div>
						</div>

						<div className="text-center">
							<div className="bg-black/50 rounded-xl p-6 border border-gray-800">
								<div className="text-sm text-gray-400 mb-2">
									Estimated Monthly Value
								</div>
								<div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
									$12,500 - $18,700
								</div>
								<div className="text-gray-400 mt-4">
									Based on similar companies
								</div>
								<button className="mt-6 bg-gradient-to-r from-purple-600 to-cyan-400 py-2.5 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
									Get Precise Estimate
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const FeaturesSection = () => {
	return (
		<section id="features" className="py-24 px-6 lg:px-16 bg-black relative">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20 opacity-0 animate-fade-in-up">
					<h2 className="text-4xl font-bold mb-6">
						Enterprise-Grade Intelligence
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Advanced AI capabilities designed for product teams that need to
						move fast.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="bg-gradient-to-br from-purple-600/10 to-cyan-400/10 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const IntegrationSection = () => {
	return (
		<section
			id="integrations"
			className="py-24 px-6 lg:px-16 bg-gradient-to-b from-black to-gray-900 relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20 opacity-0 animate-fade-in-up">
					<h2 className="text-4xl font-bold mb-6">
						Seamless Integration Ecosystem
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Connect Flowity AI to your existing tools in minutes, not days.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
					{integrations.map((integration, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 flex items-center justify-center hover:shadow-xl hover:shadow-purple-500/10 transition-all"
						>
							<div className="text-center">
								<div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-gray-300">
										{integration.icon}
									</span>
								</div>
								<span className="text-gray-300">{integration.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const TestimonialsSection = () => {
	return (
		<section
			id="testimonials"
			className="py-24 px-6 lg:px-16 bg-black relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20 opacity-0 animate-fade-in-up">
					<h2 className="text-4xl font-bold mb-6">
						Trusted by Innovative Teams
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						See how product leaders use Flowity AI to drive growth and reduce
						churn.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="text-cyan-400 text-4xl font-bold mb-4">"</div>
							<p className="text-gray-300 mb-6">{testimonial.text}</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gray-800 rounded-full mr-4"></div>
								<div>
									<h4 className="font-semibold">{testimonial.name}</h4>
									<p className="text-sm text-gray-500">{testimonial.title}</p>
									<div className="flex text-yellow-400 mt-1">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const PilotProgram = () => {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submission logic would go here
		console.log("Form submitted:", formData);
	};

	return (
		<section
			id="pilot"
			className="py-24 px-6 lg:px-16 bg-gradient-to-b from-black to-gray-900 relative"
		>
			<div className="max-w-4xl mx-auto text-center relative opacity-0 animate-fade-in-up">
				<h2 className="text-4xl font-bold mb-6">
					Join Our Exclusive Pilot Program
				</h2>
				<p className="text-xl text-gray-400 mb-10">
					Limited to 10 companies. Get lifetime preferred pricing and dedicated
					support.
				</p>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{pilotBenefits.map((benefit, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
						>
							<div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
								{benefit.icon}
							</div>
							<h3 className="font-semibold mb-2">{benefit.title}</h3>
							<p className="text-sm text-gray-500">{benefit.description}</p>
						</div>
					))}
				</div>

				<div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
					<form onSubmit={handleSubmit} className="space-y-6 text-left">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-gray-400 mb-2">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full bg-black/50 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
									placeholder="Your name"
									required
								/>
							</div>
							<div>
								<label htmlFor="company" className="block text-gray-400 mb-2">
									Company
								</label>
								<input
									type="text"
									id="company"
									name="company"
									value={formData.company}
									onChange={handleChange}
									className="w-full bg-black/50 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
									placeholder="Your company"
									required
								/>
							</div>
						</div>

						<div>
							<label htmlFor="email" className="block text-gray-400 mb-2">
								Work Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full bg-black/50 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
								placeholder="name@company.com"
								required
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-gray-400 mb-2">
								What's your biggest feedback challenge?
							</label>
							<textarea
								id="message"
								name="message"
								rows="3"
								value={formData.message}
								onChange={handleChange}
								className="w-full bg-black/50 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
								placeholder="Tell us about your current process..."
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="bg-gradient-to-r from-purple-600 to-cyan-400 w-full py-4 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
						>
							Apply for Pilot Program
						</button>

						<p className="text-sm text-gray-600 text-center">
							We'll review your application and contact you within 24 hours
						</p>
					</form>
				</div>
			</div>
		</section>
	);
};

// Data for components
const roiMetrics = [
	{
		value: "5-15%",
		title: "Reduction in Customer Churn",
		description:
			"Early detection of at-risk customers and their specific issues",
	},
	{
		value: "20-40%",
		title: "Faster Product Decisions",
		description:
			"Clear prioritization based on revenue impact and customer demand",
	},
	{
		value: "10-30%",
		title: "Increase in Feature Adoption",
		description: "Building what customers actually want vs. assumptions",
	},
];

const features = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-purple-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
				/>
			</svg>
		),
		title: "Automated Theme Detection",
		description:
			"AI clusters thousands of feedback points into actionable themes with revenue impact scoring.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-cyan-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		),
		title: "Sentiment & Emotion Analysis",
		description:
			"Detect frustration, excitement, and confusion signals across all customer interactions.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-purple-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
		title: "ROI Opportunity Scoring",
		description:
			"Each insight is scored by potential revenue impact, so you know exactly what to prioritize.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-cyan-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		),
		title: "Churn Risk Detection",
		description:
			"Identify at-risk customers before they leave, with specific reasons and recommended actions.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-purple-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		),
		title: "Competitive Intelligence",
		description:
			"Track feature requests mentioning competitors and identify gaps in your offering.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-cyan-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
		),
		title: "Executive Pulse Deck",
		description:
			"Automatically generated reports with insights ready for leadership meetings.",
	},
];

const integrations = [
	{ name: "Slack", icon: "S" },
	{ name: "Intercom", icon: "I" },
	{ name: "Zendesk", icon: "Z" },
	{ name: "Typeform", icon: "T" },
	{ name: "Salesforce", icon: "S" },
	{ name: "HubSpot", icon: "H" },
	{ name: "Jira", icon: "J" },
	{ name: "Notion", icon: "N" },
];

const testimonials = [
	{
		text: "Flowity identified a critical UX issue that was causing 15% of our signups to drop off. Fixed it and recovered $42K in potential ARR in the first quarter.",
		name: "Sarah Chen",
		title: "CPO, FinTech Startup",
	},
	{
		text: "We saved 20+ hours a week on manual feedback analysis. The ROI was clear from day one - paid for itself in the first month with the churn we prevented.",
		name: "Michael Torres",
		title: "Head of Product, HealthTech",
	},
	{
		text: "The competitive intelligence module helped us spot a gap in our offering before anyone else. We launched and captured 8% market share in just 3 months.",
		name: "Alex Reynolds",
		title: "CEO, MarTech Platform",
	},
];

const pilotBenefits = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-cyan-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
				/>
			</svg>
		),
		title: "Early Access",
		description:
			"Get ahead of the competition with first access to new features",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-purple-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
				/>
			</svg>
		),
		title: "Lifetime Discount",
		description:
			"Lock in special pricing that never increases, even as we add features",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-cyan-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
				/>
			</svg>
		),
		title: "Dedicated Support",
		description:
			"Direct access to our team for personalized onboarding and support",
	},
];

// Add animation styles to the global scope
const injectStyles = `
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out forwards;
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = injectStyles;
document.head.appendChild(styleSheet);

export default FlowityLandingPage;
