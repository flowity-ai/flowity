import React, { useState, useEffect, useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { spark } from "../assets";

const Solutions = () => {
	return (
		<div id="solutions" className="max-w-7xl mx-auto px-4 py-16">
			{/* Value Proposition Header */}
			<div className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
					Transform Customer Feedback Into{" "}
					<span className="text-logoCyan">Tangible Business Results</span>
				</h1>
				<p className="text-xl text-gray-400 max-w-2xl mx-auto">
					The only customer intelligence platform that directly quantifies
					impact on your bottom line
				</p>

				<div className="mt-8 inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-8 py-3 text-gray-300 font-medium border border-gray-600">
					<div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
					Trusted by 500+ growth-stage SaaS companies
				</div>
			</div>

			{/* Benefit Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
				{/* Cost Savings */}
				<div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
					<div className="p-8 flex-1">
						<div className="w-16 h-16 rounded-full bg-logoCyan/20 flex items-center justify-center mb-6">
							<div className="text-2xl">💰</div>
						</div>
						<h3 className="text-2xl font-bold text-white mb-3">Cost Savings</h3>
						<p className="text-gray-300 mb-6">
							Eliminate operational waste and development inefficiencies
						</p>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">€4K-€6K/month</span>{" "}
									manual research savings
								</p>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">€1K-€3K/month</span>{" "}
									development waste avoidance
								</p>
							</div>
						</div>
					</div>
					<div className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 mt-auto">
						<div className="text-sm font-medium text-gray-400">
							COST REDUCTION
						</div>
						<div className="text-logoCyan font-bold">
							Replaces 15-20 analyst hours/week at €120/hr
						</div>
					</div>
				</div>

				{/* Revenue Protection */}
				<div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
					<div className="p-8 flex-1">
						<div className="w-16 h-16 rounded-full bg-logoPurple/20 flex items-center justify-center mb-6">
							<div className="text-2xl">🛡️</div>
						</div>
						<h3 className="text-2xl font-bold text-white mb-3">
							Revenue Protection
						</h3>
						<p className="text-gray-300 mb-6">
							Prevent churn and protect existing MRR through early intervention
						</p>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">10-12% monthly</span>{" "}
									churn reduction
								</p>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">€2K-€4K/month</span>{" "}
									MRR protection
								</p>
							</div>
						</div>
					</div>
					<div className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 mt-auto">
						<div className="text-sm font-medium text-gray-400">
							CHURN PREVENTION
						</div>
						<div className="text-logoPurple font-bold">
							Flags at-risk accounts via sentiment/urgency signals
						</div>
					</div>
				</div>

				{/* Efficiency Gains */}
				<div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
					<div className="p-8 flex-1">
						<div className="w-16 h-16 rounded-full bg-logoCyan/20 flex items-center justify-center mb-6">
							<div className="text-2xl">⚡</div>
						</div>
						<h3 className="text-2xl font-bold text-white mb-3">
							Efficiency Gains
						</h3>
						<p className="text-gray-300 mb-6">
							Recover leadership time and accelerate feedback processing
						</p>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">10-12 hours/week</span>{" "}
									leadership time recovery
								</p>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">500+ items/hour</span>{" "}
									feedback processing speed
								</p>
							</div>
						</div>
					</div>
					<div className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 mt-auto">
						<div className="text-sm font-medium text-gray-400">
							TIME SAVINGS
						</div>
						<div className="text-logoCyan font-bold">
							Automated reports replace manual synthesis
						</div>
					</div>
				</div>

				{/* Opportunity Identification */}
				<div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
					<div className="p-8 flex-1">
						<div className="w-16 h-16 rounded-full bg-logoPurple/20 flex items-center justify-center mb-6">
							<div className="text-2xl">🎯</div>
						</div>
						<h3 className="text-2xl font-bold text-white mb-3">
							Opportunity Identification
						</h3>
						<p className="text-gray-300 mb-6">
							Surface expansion opportunities and high-impact features
						</p>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">
										€5K-€8K/month value
									</span>{" "}
									upsell opportunities surfaced
								</p>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<p className="ml-2 text-gray-300">
									<span className="font-bold text-white">
										3-5 validated ideas/month
									</span>{" "}
									high-impact feature detection
								</p>
							</div>
						</div>
					</div>
					<div className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 mt-auto">
						<div className="text-sm font-medium text-gray-400">
							GROWTH POTENTIAL
						</div>
						<div className="text-logoPurple font-bold">
							ROI scoring prioritizes {">"}80/100 items
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
