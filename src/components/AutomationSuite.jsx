import React from "react";
import {
	FiMail,
	FiFileText,
	FiShare2,
	FiHelpCircle,
	FiInbox,
	FiTrendingUp,
	FiCheck,
	FiClock,
	FiLayers,
	FiSettings,
} from "react-icons/fi";

const AutomationSuite = () => {
	const features = [
		{
			id: 1,
			title: "AI-Powered Lead Qualification & Outreach",
			icon: <FiMail className="text-2xl" />,
			hook: "Turn every inbound lead into a sales opportunity within minutes, not days — all automated.",
			description:
				"Scrapes inbound leads from forms, LinkedIn, emails. NLP scores leads based on intent, keywords, and urgency. Sends automated personalized emails/messages to high-value prospects.",
			tech: "Make.com + OpenAI API + Google Sheets + Gmail/HubSpot API",
			roi: [
				"+20–40% faster lead follow-up → higher close rate",
				"Sales teams save hours per week filtering bad leads",
			],
		},
		{
			id: 2,
			title: "AI-Driven Proposal & Document Drafting",
			icon: <FiFileText className="text-2xl" />,
			hook: "Win more deals by replying to opportunities instantly with AI-drafted proposals.",
			description:
				"Reads RFPs/emails. Extracts requirements with NLP. Auto-generates first draft of proposals/contracts/templates.",
			tech: "OpenAI API + Google Docs API + Make.com/n8n",
			roi: [
				"Cuts proposal creation time by 50–70%",
				"Allows sales teams to respond to more opportunities in the same time",
			],
		},
		{
			id: 3,
			title: "Automated Social Media Content Creation & Scheduling",
			icon: <FiShare2 className="text-2xl" />,
			hook: "Never run out of content — AI creates and posts for you, every day.",
			description:
				"Turns blog posts, product updates, or PDFs into social posts. Writes captions in brand tone + hashtags. Auto-schedules on LinkedIn, Instagram, Twitter, Facebook.",
			tech: "OpenAI API + Canva API + Buffer/Make.com",
			roi: [
				"Eliminates need for a full-time social media assistant",
				"Keeps brand presence active daily → drives organic traffic",
			],
		},
		{
			id: 4,
			title: "AI Knowledge Base & Instant FAQ Assistant",
			icon: <FiHelpCircle className="text-2xl" />,
			hook: "Instantly find answers from thousands of documents — no more digging.",
			description:
				"Reads manuals, product sheets, past tickets. Builds a chatbot or search tool for staff/customers to get instant answers.",
			tech: "OpenAI API + Pinecone/Weaviate vector DB + Webflow widget",
			roi: [
				"Cuts internal support time by 30–50%",
				"Customers get 24/7 answers without waiting",
			],
		},
		{
			id: 5,
			title: "AI Email Inbox Triage",
			icon: <FiInbox className="text-2xl" />,
			hook: "Your inbox, under control — AI filters and replies so you focus on what matters.",
			description:
				"Classifies incoming emails (urgent, sales, support, spam). Suggests quick replies or routes to right department automatically.",
			tech: "Make.com + OpenAI API + Gmail/Outlook API",
			roi: [
				"Managers reclaim 5–10 hours/week of email time",
				"Important messages are never missed",
			],
		},
		{
			id: 6,
			title: "AI Competitive Intelligence & Trend Monitoring",
			icon: <FiTrendingUp className="text-2xl" />,
			hook: "Always know what your competitors are doing — without lifting a finger.",
			description:
				"Monitors competitor websites, news, and social for updates. Summarizes changes, promotions, product launches.",
			tech: "Apify/PhantomBuster + OpenAI API + Slack/Email alerts",
			roi: [
				"Spot competitor moves early → adjust pricing, campaigns, and offers",
				"Saves hours of manual tracking",
			],
		},
	];

	const processSteps = [
		{
			id: 1,
			title: "Discovery & Onboarding",
			icon: <FiClock className="text-2xl" />,
			description:
				"45-minute intensive session to understand your business goals, current processes, and integration requirements.",
			duration: "45 minutes",
		},
		{
			id: 2,
			title: "Automation Architecture",
			icon: <FiLayers className="text-2xl" />,
			description:
				"Our engineers design custom automation workflows tailored to your specific business needs and objectives.",
			duration: "2-3 days",
		},
		{
			id: 3,
			title: "Implementation & Delivery",
			icon: <FiSettings className="text-2xl" />,
			description:
				"Seamless deployment of all automations with full integration into your existing systems and workflows.",
			duration: "1 week",
		},
		{
			id: 4,
			title: "Refinement & Optimization",
			icon: <FiCheck className="text-2xl" />,
			description:
				"Continuous monitoring and optimization to ensure peak performance and maximum ROI.",
			duration: "Ongoing",
		},
	];

	return (
		<div
			id="automationSuite"
			className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden relative"
		>
			{/* Floating particles */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full animate-pulse"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 10 + 2}px`,
							height: `${Math.random() * 10 + 2}px`,
							backgroundColor: i % 3 === 0 ? "#1CD8DE" : "#9C83F7",
							opacity: Math.random() * 0.2 + 0.1,
							animationDuration: `${Math.random() * 5 + 3}s`,
						}}
					/>
				))}
			</div>

			{/* Grid overlay */}
			<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDJWNkg2VjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

			{/* Floating orbs */}
			<div className="fixed -top-1/3 -left-1/4 w-[150%] h-[150%] opacity-10 pointer-events-none">
				<div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-[#1CD8DE] mix-blend-soft-light blur-[100px] animate-float"></div>
				<div className="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-[#9C83F7] mix-blend-soft-light blur-[120px] animate-float animation-delay-2000"></div>
				<div className="absolute bottom-[15%] left-[40%] w-72 h-72 rounded-full bg-[#1CD8DE] mix-blend-soft-light blur-[90px] animate-float animation-delay-4000"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
				{/* Hero Section */}
				<section className="py-20 md:py-32">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="inline-block px-4 py-1 mb-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
								<span className="text-[#1CD8DE] font-medium">
									ENTERPRISE AI AUTOMATION SUITE
								</span>
							</div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83F7] via-[#7B61F5] to-[#1CD8DE]">
									Transform Your Business
								</span>{" "}
								with Intelligent Automation
							</h1>
							<p className="text-xl text-gray-300 mb-10">
								Our premium suite of 6 AI-powered automations streamlines
								operations, boosts efficiency, and drives measurable revenue
								growth — all for one competitive price.
							</p>

							<div className="flex flex-wrap gap-4 mb-10">
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-[#1CD8DE] mr-2"></div>
									<span>45-minute onboarding</span>
								</div>
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-[#9C83F7] mr-2"></div>
									<span>Custom automation builds</span>
								</div>
								<div className="flex items-center">
									<div className="w-3 h-3 rounded-full bg-[#1CD8DE] mr-2"></div>
									<span>Enterprise-grade security</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-6">
								<button className="relative group">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
									<div className="relative bg-gray-900 px-8 py-4 rounded-xl text-lg font-bold">
										Schedule Private Demo
									</div>
								</button>

								<div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 transform transition-transform hover:scale-105">
									<div className="text-sm text-gray-400">Premium Package</div>
									<div className="text-3xl font-bold">
										€1,999<span className="text-gray-400 text-lg">/mo</span>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#9C83F7] mix-blend-soft-light blur-[80px] opacity-30 z-0"></div>
							<div className="relative bg-gradient-to-br from-[#1CD8DE]/10 to-[#9C83F7]/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
								<div className="grid grid-cols-2 gap-6">
									<div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
										<div className="text-5xl font-bold text-[#1CD8DE] mb-4">
											+40%
										</div>
										<div className="text-lg">Lead Conversion</div>
									</div>
									<div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
										<div className="text-5xl font-bold text-[#9C83F7] mb-4">
											-70%
										</div>
										<div className="text-lg">Proposal Time</div>
									</div>
									<div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
										<div className="text-5xl font-bold text-[#1CD8DE] mb-4">
											5-10h
										</div>
										<div className="text-lg">Weekly Time Saved</div>
									</div>
									<div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
										<div className="text-5xl font-bold text-[#9C83F7] mb-4">
											24/7
										</div>
										<div className="text-lg">Support Coverage</div>
									</div>
								</div>

								<div className="mt-8 pt-8 border-t border-white/10">
									<h3 className="text-xl font-bold mb-4">What You Receive</h3>
									<ul className="space-y-3">
										<li className="flex items-center">
											<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3">
												<FiCheck className="text-[#1CD8DE]" />
											</div>
											<span>Full suite of 6 AI automations</span>
										</li>
										<li className="flex items-center">
											<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3">
												<FiCheck className="text-[#1CD8DE]" />
											</div>
											<span>Dedicated automation engineer</span>
										</li>
										<li className="flex items-center">
											<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3">
												<FiCheck className="text-[#1CD8DE]" />
											</div>
											<span>Priority support & updates</span>
										</li>
										<li className="flex items-center">
											<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3">
												<FiCheck className="text-[#1CD8DE]" />
											</div>
											<span>Monthly performance reports</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Process Section */}
				{/* Process Section */}
				<section className="py-20">
					<div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
						{/* Floating elements */}
						<div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1CD8DE] opacity-10 blur-[100px] animate-pulse"></div>
						<div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#9C83F7] opacity-10 blur-[120px] animate-pulse animation-delay-2000"></div>

						{/* Grid overlay */}
						<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDJWNkg2VjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

						<div className="relative max-w-7xl mx-auto z-10">
							{/* Section header */}
							<div className="text-center mb-20">
								<div className="inline-block px-4 py-1 mb-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
									<span className="text-[#1CD8DE] font-medium">
										REFINED PROCESS
									</span>
								</div>
								<h2 className="text-4xl md:text-5xl font-bold mb-4">
									Our{" "}
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]">
										Premium
									</span>{" "}
									Workflow
								</h2>
								<p className="text-xl text-gray-400 max-w-2xl mx-auto">
									From initial consultation to ongoing refinement, we ensure
									seamless integration and maximum ROI
								</p>
							</div>

							{/* Timeline container */}
							<div className="relative">
								{/* Timeline line - centered */}
								<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#9C83F7] to-[#1CD8DE] hidden md:block"></div>

								{/* Process steps */}
								<div className="space-y-32">
									{processSteps.map((step, index) => (
										<div
											key={step.id}
											className="relative flex flex-col md:flex-row items-center group"
										>
											{/* Step icon - centered on timeline */}
											<div className="md:absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center text-white z-10 transition-transform duration-500 group-hover:scale-110">
												{step.icon}
											</div>

											{/* Step content - alternates sides */}
											<div
												className={`w-full md:w-5/12 mb-10 md:mb-0 text-center md:text-left transition-all duration-500 group-hover:-translate-y-2
                ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}
											>
												<div className="text-sm text-[#9C83F7] mb-2">
													{step.duration}
												</div>
												<h3 className="text-2xl font-bold mb-4">
													{step.title}
												</h3>
												<p className="text-gray-300">{step.description}</p>
											</div>

											{/* Spacer for mobile */}
											<div className="md:w-1/12 hidden md:block"></div>

											{/* Delivery box - opposite side */}
											<div
												className={`md:ml-20 w-full md:w-5/12 bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#9C83F7]/30 group-hover:scale-[1.02]
                ${index % 2 === 0 ? "md:pl-20" : "md:pr-20"}`}
											>
												<div className="flex items-center mb-4">
													<div className="w-10 h-10 rounded-lg bg-[#1CD8DE]/10 flex items-center justify-center mr-4">
														{index === 0 ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6 text-[#1CD8DE]"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={1.5}
																	d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
																/>
															</svg>
														) : index === 1 ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6 text-[#1CD8DE]"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={1.5}
																	d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
														) : index === 2 ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6 text-[#1CD8DE]"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={1.5}
																	d="M5 13l4 4L19 7"
																/>
															</svg>
														) : (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6 text-[#1CD8DE]"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={1.5}
																	d="M13 10V3L4 14h7v7l9-11h-7z"
																/>
															</svg>
														)}
													</div>
													<h4 className="text-lg font-bold">
														What we deliver:
													</h4>
												</div>
												<ul className="space-y-3 text-gray-300">
													{index === 0 ? (
														<>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>
																	Comprehensive business analysis report
																</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Integration requirements document</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Project roadmap & timeline</span>
															</li>
														</>
													) : index === 1 ? (
														<>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Custom automation blueprint</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Technical specifications document</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Approval-ready workflow diagrams</span>
															</li>
														</>
													) : index === 2 ? (
														<>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Fully functional automation suite</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>
																	Integration with your existing systems
																</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Comprehensive documentation</span>
															</li>
														</>
													) : (
														<>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Monthly performance reports</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Continuous optimization updates</span>
															</li>
															<li className="flex items-start">
																<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
																	<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
																</div>
																<span>Priority technical support</span>
															</li>
														</>
													)}
												</ul>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">
							Premium Automation Suite
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Six powerful automations designed to transform your business
							operations and drive growth
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div
								key={feature.id}
								className="bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all hover:border-[#9C83F7]/30 hover:scale-[1.02] group"
							>
								<div className="relative">
									<div className="w-12 h-12 rounded-lg bg-[#1CD8DE]/10 flex items-center justify-center mb-6">
										<div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center text-white">
											{feature.icon}
										</div>
									</div>
									<h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
									<p className="text-gray-400 mb-6 italic border-l-2 border-[#1CD8DE] pl-4 py-1">
										{feature.hook}
									</p>
									<div className="mb-6">
										<h4 className="font-bold text-[#9C83F7] mb-2">
											What it does:
										</h4>
										<p className="text-gray-300">{feature.description}</p>
									</div>
									<div className="mb-6">
										<h4 className="font-bold text-[#9C83F7] mb-2">
											Tech Stack:
										</h4>
										<p className="text-gray-300">{feature.tech}</p>
									</div>
									<div>
										<h4 className="font-bold text-[#9C83F7] mb-2">ROI:</h4>
										<ul className="text-gray-300 space-y-2">
											{feature.roi.map((item, index) => (
												<li key={index} className="flex items-start">
													<div className="w-5 h-5 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-2 mt-0.5">
														<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
													</div>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="w-24 h-24 rounded-tl-full bg-gradient-to-br from-[#9C83F7] to-[#1CD8DE] opacity-10"></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Final CTA */}
				{/* CTA Section */}
				<section className="py-20">
					<div className="bg-gradient-to-br from-[#9C83F7]/10 to-[#1CD8DE]/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
						<div className="max-w-3xl mx-auto">
							<h2 className="text-4xl font-bold mb-6">
								Ready to Transform Your Business with AI Automation?
							</h2>
							<p className="text-xl text-gray-300 mb-10">
								Join hundreds of forward-thinking companies already leveraging
								our premium AI suite to drive growth and efficiency.
							</p>

							<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
								<div className="relative group">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
									<button className="relative bg-gray-900 px-10 py-5 rounded-xl text-xl font-bold">
										Get the Full Suite for €1,999/mo
									</button>
								</div>

								<button className="px-8 py-4 rounded-xl text-lg font-medium border-2 border-[#1CD8DE] text-[#1CD8DE]">
									Schedule a Custom Demo
								</button>
							</div>

							<div className="mt-8 text-gray-400">
								30-day money-back guarantee • Enterprise-grade security •
								Premium support
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AutomationSuite;
