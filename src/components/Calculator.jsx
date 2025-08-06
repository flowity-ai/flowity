import React, { useState, useRef, useEffect } from "react";
import { FiDollarSign, FiTrendingUp } from "react-icons/fi";

const Calculator = () => {
	// State for input values and calculated savings
	const [researchCost, setResearchCost] = useState(10000);
	const [mrrLost, setMrrLost] = useState(15000);
	const [savings, setSavings] = useState(22500);
	const [isCalculating, setIsCalculating] = useState(false);

	// Refs for inputs to handle enter key
	const researchInputRef = useRef(null);
	const mrrInputRef = useRef(null);

	// Calculate savings based on inputs
	const calculateSavings = () => {
		setIsCalculating(true);

		// Simple calculation: research savings + 19% of MRR recovered
		const researchSavings = researchCost * 0.8; // 80% savings on research
		const mrrRecovered = mrrLost * 0.19; // 19% churn reduction
		const total = Math.round(researchSavings + mrrRecovered);

		// If the total is already the same as current savings, just update and stop
		if (total === savings) {
			setIsCalculating(false);
			return;
		}

		// Animate the savings display
		let current = savings;
		const increment = (total - current) / 20;

		const animate = () => {
			current += increment;
			if (
				(increment > 0 && current >= total) ||
				(increment < 0 && current <= total)
			) {
				setSavings(total);
				setIsCalculating(false);
				return;
			}
			setSavings(Math.round(current));
			requestAnimationFrame(animate);
		};

		animate();
	};

	// Handle Enter key press
	const handleKeyPress = (e, nextInput) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (nextInput) nextInput.current.focus();
			calculateSavings();
		}
	};

	// Calculate on initial load
	useEffect(() => {
		calculateSavings();
	}, []);

	return (
		<div className="mt-12 sm:mt-24 bg-gradient-to-r from-logoPurple/30 to-logoCyan/30 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8">
			<div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
				<div>
					<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
						Calculate Your Potential Savings
					</h3>
					<p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
						See how much Whispr could save your organization in research costs
						and recovered revenue
					</p>

					<div className="space-y-3 sm:space-y-4">
						{/* Research Costs Input */}
						<div>
							<label className="block text-gray-400 mb-2 flex items-center text-sm sm:text-base">
								<FiDollarSign className="mr-2 text-sm sm:text-base" /> Current Monthly Research Costs
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-sm sm:text-base">
									€
								</div>
								<input
									ref={researchInputRef}
									type="number"
									value={researchCost}
									onChange={(e) => setResearchCost(Number(e.target.value) || 0)}
									onKeyPress={(e) => handleKeyPress(e, mrrInputRef)}
									className="bg-gray-800 border border-gray-700 rounded-lg pl-7 sm:pl-8 pr-4 py-2 sm:py-3 w-full focus:ring-2 focus:ring-logoCyan focus:border-transparent text-sm sm:text-base"
									placeholder="10,000"
								/>
							</div>
						</div>

						{/* MRR Lost Input */}
						<div>
							<label className="block text-gray-400 mb-2 flex items-center text-sm sm:text-base">
								<FiTrendingUp className="mr-2 text-sm sm:text-base" /> Monthly MRR Lost to Churn
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-sm sm:text-base">
									€
								</div>
								<input
									ref={mrrInputRef}
									type="number"
									value={mrrLost}
									onChange={(e) => setMrrLost(Number(e.target.value) || 0)}
									onKeyPress={(e) => handleKeyPress(e)}
									className="bg-gray-800 border border-gray-700 rounded-lg pl-7 sm:pl-8 pr-4 py-2 sm:py-3 w-full focus:ring-2 focus:ring-logoCyan focus:border-transparent text-sm sm:text-base"
									placeholder="15,000"
								/>
							</div>
						</div>

						{/* Calculate Button */}
						<button
							onClick={calculateSavings}
							disabled={isCalculating}
							className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
								isCalculating
									? "bg-gray-700 cursor-not-allowed"
									: "bg-gradient-to-r from-logoCyan to-logoPurple hover:from-logoCyan/90 hover:to-logoPurple/90 hover:shadow-lg"
							}`}
						>
							{isCalculating ? "Calculating..." : "Calculate Savings"}
						</button>
					</div>
				</div>

				{/* Results Display */}
				<div className="text-center mt-6 lg:mt-0">
					<div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 sm:p-8 w-full max-w-sm mx-auto">
						<div className="text-gray-400 mb-2 text-sm sm:text-base">
							Your Estimated Monthly Savings
						</div>
						<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-4 transition-all duration-300">
							€{savings.toLocaleString()}+
						</div>
						<div className="mb-4 sm:mb-6">
							<div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
								<div>
									<div className="text-xs text-gray-500">Research Savings</div>
									<div className="text-logoCyan font-medium text-sm sm:text-base">
										€{(researchCost * 0.8).toLocaleString()}
									</div>
								</div>
								<div>
									<div className="text-xs text-gray-500">MRR Recovered</div>
									<div className="text-green-400 font-medium text-sm sm:text-base">
										€{(mrrLost * 0.19).toLocaleString()}
									</div>
								</div>
							</div>
							<div className="text-xs text-gray-500 max-w-xs mx-auto">
								Based on 80% research cost reduction and 19% churn reduction
							</div>
						</div>
						<button className="bg-gradient-to-r from-logoCyan to-logoPurple hover:from-logoCyan/90 hover:to-logoPurple/90 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 w-full text-sm sm:text-base">
							Get Custom Report
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
