// src/VirtualAssistant.jsx
import React from "react";

const VirtualAssistant = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden relative">
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
				<section className="py-20 md:py-32 text-center">
					<div className="inline-block px-4 py-1 mb-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
						<span className="text-[#1CD8DE] font-medium">COMING SOON</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]">
							AI Customer Interaction & Follow-up Assistant
						</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
						Your virtual assistant that never forgets a lead, customer request,
						or support follow-up
					</p>

					<div className="flex justify-center">
						<div className="relative group">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
							<button className="relative bg-gray-900 px-8 py-4 rounded-xl text-lg font-bold">
								Notify Me When Available
							</button>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						{/* Left Column - Why This Works */}
						<div className="bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 rounded-lg bg-[#1CD8DE]/10 flex items-center justify-center mr-4">
									<div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
									</div>
								</div>
								<h2 className="text-3xl font-bold">Why This Works</h2>
							</div>

							<ul className="space-y-6">
								<li className="flex items-start">
									<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3 mt-1">
										<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											Never Miss Opportunities
										</h3>
										<p className="text-gray-300">
											Every company loses revenue because leads go cold or
											customer emails are missed. Our assistant ensures every
											interaction is captured and followed up.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3 mt-1">
										<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">Clear ROI</h3>
										<p className="text-gray-300">
											Businesses already know follow-up is money, so the ROI is
											obvious and measurable.
										</p>
									</div>
								</li>

								<li className="flex items-start">
									<div className="w-6 h-6 rounded-full bg-[#1CD8DE]/20 flex items-center justify-center mr-3 mt-1">
										<div className="w-2 h-2 rounded-full bg-[#1CD8DE]"></div>
									</div>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											Human-like Interactions
										</h3>
										<p className="text-gray-300">
											Combines multi-channel + NLP to feel "human" in
											interactions, setting it apart from basic chatbots and
											email automation tools.
										</p>
									</div>
								</li>
							</ul>
						</div>

						{/* Right Column - How It Works */}
						<div className="bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 rounded-lg bg-[#1CD8DE]/10 flex items-center justify-center mr-4">
									<div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
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
									</div>
								</div>
								<h2 className="text-3xl font-bold">How It Works</h2>
							</div>

							<div className="space-y-8">
								<div>
									<div className="flex items-center mb-3">
										<div className="w-8 h-8 rounded-full bg-[#9C83F7]/20 flex items-center justify-center mr-3">
											<span className="text-[#9C83F7] font-bold">1</span>
										</div>
										<h3 className="text-xl font-semibold">Omnichannel Input</h3>
									</div>
									<p className="text-gray-300 ml-11">
										Integrates with email, WhatsApp, website chat, LinkedIn
										messages, Instagram DMs. Every incoming message is collected
										in one place.
									</p>
								</div>

								<div>
									<div className="flex items-center mb-3">
										<div className="w-8 h-8 rounded-full bg-[#9C83F7]/20 flex items-center justify-center mr-3">
											<span className="text-[#9C83F7] font-bold">2</span>
										</div>
										<h3 className="text-xl font-semibold">
											NLP Understanding Layer
										</h3>
									</div>
									<p className="text-gray-300 ml-11">
										Uses Whisper for voice-to-text, Named Entity Recognition,
										intent detection, and sentiment analysis to prioritize
										urgency.
									</p>
								</div>

								<div>
									<div className="flex items-center mb-3">
										<div className="w-8 h-8 rounded-full bg-[#9C83F7]/20 flex items-center justify-center mr-3">
											<span className="text-[#9C83F7] font-bold">3</span>
										</div>
										<h3 className="text-xl font-semibold">
											Smart Routing & Actions
										</h3>
									</div>
									<p className="text-gray-300 ml-11">
										Routes high-priority leads to sales, escalates complaints to
										support, auto-creates proposals, and schedules meetings.
									</p>
								</div>

								<div>
									<div className="flex items-center mb-3">
										<div className="w-8 h-8 rounded-full bg-[#9C83F7]/20 flex items-center justify-center mr-3">
											<span className="text-[#9C83F7] font-bold">4</span>
										</div>
										<h3 className="text-xl font-semibold">
											Automated Follow-ups
										</h3>
									</div>
									<p className="text-gray-300 ml-11">
										Sends personalized follow-ups, meeting reminders, and "warm
										reminder" sequences based on customer behavior.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Use Cases */}
					<div className="mt-16 bg-gradient-to-b from-gray-800/30 to-gray-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
						<div className="flex items-center mb-8">
							<div className="w-12 h-12 rounded-lg bg-[#1CD8DE]/10 flex items-center justify-center mr-4">
								<div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1CD8DE] to-[#9C83F7] flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
								</div>
							</div>
							<h2 className="text-3xl font-bold">Perfect For</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="border-l-2 border-[#9C83F7] pl-4 py-2">
								<h3 className="text-xl font-semibold mb-2">
									B2B SaaS Companies
								</h3>
								<p className="text-gray-300">
									Never lose a lead from website chat or LinkedIn messages.
								</p>
							</div>

							<div className="border-l-2 border-[#9C83F7] pl-4 py-2">
								<h3 className="text-xl font-semibold mb-2">
									E-commerce Brands
								</h3>
								<p className="text-gray-300">
									Respond to DMs & emails automatically with product info +
									follow-up.
								</p>
							</div>

							<div className="border-l-2 border-[#9C83F7] pl-4 py-2">
								<h3 className="text-xl font-semibold mb-2">
									Service Providers
								</h3>
								<p className="text-gray-300">
									Schedule consultations automatically without VA overhead.
								</p>
							</div>

							<div className="border-l-2 border-[#9C83F7] pl-4 py-2">
								<h3 className="text-xl font-semibold mb-2">
									Real Estate Agents
								</h3>
								<p className="text-gray-300">
									Instantly reply to property inquiries and set up viewings.
								</p>
							</div>
						</div>

						<div className="mt-12 pt-8 border-t border-white/10">
							<h3 className="text-2xl font-bold mb-6 text-center">
								"Your AI Assistant That Never Misses a Lead or Customer"
							</h3>
							<p className="text-xl text-gray-300 text-center">
								Multi-channel. Proactive. Revenue-focused.
								<br />
								From first contact to follow-up — all handled.
							</p>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<div className="text-center py-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]">
							Never Miss
						</span>{" "}
						Another Opportunity?
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
						Join our waiting list to be the first to know when our AI Customer
						Interaction Assistant launches
					</p>

					<div className="max-w-lg mx-auto">
						<div className="flex flex-col sm:flex-row gap-4">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-grow bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9C83F7]"
							/>
							<button className="bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
								Notify Me
							</button>
						</div>
						<p className="text-gray-500 text-sm mt-4">
							We respect your privacy. Unsubscribe at any time.
						</p>
					</div>
				</div>
			</div>

			<style jsx>{`
				.animate-float {
					animation: float 8s ease-in-out infinite;
				}

				.animation-delay-2000 {
					animation-delay: 2s;
				}

				.animation-delay-4000 {
					animation-delay: 4s;
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-20px);
					}
				}
			`}</style>
		</div>
	);
};

export default VirtualAssistant;
