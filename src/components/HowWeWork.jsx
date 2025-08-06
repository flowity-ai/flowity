import React from "react";
import styles from "../style";
import { work } from "../assets";
import { workModel } from "../constants";
import styled from "styled-components";

const HowWeWork = () => {
	return (
		<div className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<div className="inline-block bg-gradient-to-r from-logoCyan to-logoPurple text-xs font-semibold py-1 px-3 rounded-full mb-4">
						ENTERPRISE-GRADE AI IMPLEMENTATION
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Precision Implementation for{" "}
						<span className="bg-gradient-to-r from-logoCyan to-logoPurple bg-clip-text text-transparent">
							Immediate Impact
						</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Our streamlined deployment model delivers enterprise-grade
						intelligence in days, not months
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Process Steps */}
					<div className="space-y-12">
						{/* Step 1 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-logoCyan to-logoPurple flex items-center justify-center text-xl font-bold">
									1
								</div>
							</div>
							<div>
								<div className="flex items-center mb-3">
									<h3 className="text-2xl font-bold">Discovery Alignment</h3>
									<div className="ml-4 bg-gray-800 text-logoCyan text-xs font-medium py-1 px-2 rounded">
										15 min call
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Rapid qualification to ensure perfect fit between your needs
									and our capabilities
								</p>
								<div className="flex flex-wrap gap-2">
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
						</div>

						{/* Step 2 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-logoCyan to-logoPurple flex items-center justify-center text-xl font-bold">
									2
								</div>
							</div>
							<div>
								<div className="flex items-center mb-3">
									<h3 className="text-2xl font-bold">Technical Onboarding</h3>
									<div className="ml-4 bg-gray-800 text-logoCyan text-xs font-medium py-1 px-2 rounded">
										45 min call
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Secure API integration and configuration of your Whispr
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
												<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
												Standard API Connections
											</span>
											<span className="text-green-400 font-medium">
												Instant
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
												Custom Source Integration
											</span>
											<span className="text-amber-400 font-medium">
												15-30 min
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="flex items-center">
												<div className="w-3 h-3 rounded-full bg-logoPurple mr-2"></div>
												Enterprise Security Config
											</span>
											<span className="text-logoPurple font-medium">
												30 min
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Step 3 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-logoCyan to-logoPurple flex items-center justify-center text-xl font-bold">
									3
								</div>
							</div>
							<div>
								<div className="flex items-center mb-3">
									<h3 className="text-2xl font-bold">Lightning Deployment</h3>
									<div className="ml-4 bg-gray-800 text-logoCyan text-xs font-medium py-1 px-2 rounded">
										Instant activation
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Plug-and-play implementation with our pre-configured n8n
									automation nodes
								</p>
								<div className="grid grid-cols-3 gap-4 mb-4">
									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col items-center">
										<div className="text-3xl mb-2">⚡</div>
										<div className="text-center text-sm">
											Pre-built n8n Flows
										</div>
									</div>
									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col items-center">
										<div className="text-3xl mb-2">🔌</div>
										<div className="text-center text-sm">API Connectors</div>
									</div>
									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col items-center">
										<div className="text-3xl mb-2">🔄</div>
										<div className="text-center text-sm">Automated Sync</div>
									</div>
								</div>
							</div>
						</div>

						{/* Step 4 */}
						<div className="flex">
							<div className="flex-shrink-0 mr-6">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-logoCyan to-logoPurple flex items-center justify-center text-xl font-bold">
									4
								</div>
							</div>
							<div>
								<div className="flex items-center mb-3">
									<h3 className="text-2xl font-bold">
										Continuous Optimization
									</h3>
									<div className="ml-4 bg-gray-800 text-logoCyan text-xs font-medium py-1 px-2 rounded">
										Ongoing refinement
									</div>
								</div>
								<p className="text-gray-400 mb-4">
									Custom NLP enhancements and strategic tuning for maximum
									business impact
								</p>
								<div className="space-y-3">
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1.5">
											<div className="w-2 h-2 rounded-full bg-logoCyan"></div>
										</div>
										<span className="ml-3 text-gray-300">
											Quarterly business reviews to align with strategic goals
										</span>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1.5">
											<div className="w-2 h-2 rounded-full bg-logoCyan"></div>
										</div>
										<span className="ml-3 text-gray-300">
											Custom NLP model training for domain-specific terminology
										</span>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 mt-1.5">
											<div className="w-2 h-2 rounded-full bg-logoCyan"></div>
										</div>
										<span className="ml-3 text-gray-300">
											Priority access to new intelligence modules
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Tech Stack Visualization */}
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
						<h2 className="text-3xl font-bold mb-8 text-center">
							Enterprise AI Architecture
						</h2>

						<div className="space-y-8">
							{/* Architecture Diagram */}
							<div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
								<h3 className="text-xl font-bold mb-4 flex items-center">
									<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
									Real-time Intelligence Pipeline
								</h3>

								<div className="space-y-4">
									<div className="flex justify-between items-center py-3 px-4 bg-gray-800 rounded-lg border border-gray-700">
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-md bg-logoCyan/20 flex items-center justify-center mr-3">
												<span className="text-lg">📥</span>
											</div>
											<span>Data Ingestion Layer</span>
										</div>
										<div className="text-sm text-gray-400">
											APIs, Webhooks, IMAP
										</div>
									</div>

									<div className="flex justify-center text-gray-500">↓</div>

									<div className="flex justify-between items-center py-3 px-4 bg-gray-800 rounded-lg border border-gray-700">
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-md bg-logoPurple/20 flex items-center justify-center mr-3">
												<span className="text-lg">🧠</span>
											</div>
											<span>AI Processing Core</span>
										</div>
										<div className="text-sm text-gray-400">
											n8n, GPT-4, Claude 3
										</div>
									</div>

									<div className="flex justify-center text-gray-500">↓</div>

									<div className="flex justify-between items-center py-3 px-4 bg-gray-800 rounded-lg border border-gray-700">
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-md bg-logoCyan/20 flex items-center justify-center mr-3">
												<span className="text-lg">📊</span>
											</div>
											<span>Business Intelligence Layer</span>
										</div>
										<div className="text-sm text-gray-400">
											Revenue Impact Models
										</div>
									</div>

									<div className="flex justify-center text-gray-500">↓</div>

									<div className="flex justify-between items-center py-3 px-4 bg-gray-800 rounded-lg border border-gray-700">
										<div className="flex items-center">
											<div className="w-10 h-10 rounded-md bg-logoPurple/20 flex items-center justify-center mr-3">
												<span className="text-lg">🚀</span>
											</div>
											<span>Actionable Delivery</span>
										</div>
										<div className="text-sm text-gray-400">
											Notion, Slack, Slides
										</div>
									</div>
								</div>
							</div>

							{/* Tech Stack */}
							<div>
								<h3 className="text-xl font-bold mb-4">Technology Ecosystem</h3>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
										<div className="text-logoCyan font-medium mb-2">
											AI Processing
										</div>
										<div className="flex flex-wrap gap-2">
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												GPT-4
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Claude 3
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												RoBERTa
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												spaCy
											</div>
										</div>
									</div>

									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
										<div className="text-logoCyan font-medium mb-2">
											Automation
										</div>
										<div className="flex flex-wrap gap-2">
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												N8N
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												N8N Agents
											</div>
										</div>
									</div>

									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
										<div className="text-logoCyan font-medium mb-2">
											Data Storage
										</div>
										<div className="flex flex-wrap gap-2">
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Pinecone
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Airtable
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												PostgreSQL
											</div>
										</div>
									</div>

									<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
										<div className="text-logoCyan font-medium mb-2">
											Delivery
										</div>
										<div className="flex flex-wrap gap-2">
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Notion API
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Slack API
											</div>
											<div className="bg-gray-900 text-xs py-1 px-2 rounded">
												Google Slides
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Security */}
							<div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
								<h3 className="text-xl font-bold mb-4 flex items-center">
									<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
									Enterprise Security Protocols
								</h3>

								<div className="grid grid-cols-2 gap-4">
									<div className="flex items-start">
										<div className="mt-1 mr-3 text-green-500">✓</div>
										<div>
											<div className="font-medium">SOC 2 Compliance</div>
											<div className="text-sm text-gray-400">
												Enterprise-grade data protection
											</div>
										</div>
									</div>

									<div className="flex items-start">
										<div className="mt-1 mr-3 text-green-500">✓</div>
										<div>
											<div className="font-medium">Zero Data Retention</div>
											<div className="text-sm text-gray-400">
												Your data never stored
											</div>
										</div>
									</div>

									<div className="flex items-start">
										<div className="mt-1 mr-3 text-green-500">✓</div>
										<div>
											<div className="font-medium">End-to-End Encryption</div>
											<div className="text-sm text-gray-400">
												AES-256 at rest and in transit
											</div>
										</div>
									</div>

									<div className="flex items-start">
										<div className="mt-1 mr-3 text-green-500">✓</div>
										<div>
											<div className="font-medium">GDPR Compliance</div>
											<div className="text-sm text-gray-400">
												Full data privacy adherence
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-20 text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Deploy Enterprise AI Intelligence?
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Our streamlined implementation delivers actionable insights in under
						72 hours
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<button className="bg-gradient-to-r from-logoCyan to-logoPurple text-white font-medium rounded-full px-8 py-4 hover:opacity-90 transition-opacity">
							Schedule Discovery Call
						</button>
						<a href="/pulsedeck">
							<button className="bg-gray-800 text-white font-medium rounded-full px-8 py-4 border border-gray-700 hover:bg-gray-700 transition-colors">
								See Pulse Deck
							</button>
						</a>
					</div>

					<div className="mt-8 text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
						<div className="flex items-center">
							<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
							No long-term contracts
						</div>
						<div className="flex items-center">
							<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
							First insights delivered in 24 hours
						</div>
						<div className="flex items-center">
							<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
							ROI guarantee
						</div>
					</div>
				</div>
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
