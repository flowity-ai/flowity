import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { discount } from "../assets";
import ChangingTextSection from "./ChangingTextSection";
import Button from "./Button";

const Hero = () => {
	return (
		<section id="home" className={`md:flex-row flex-col ${styles.paddingY} relative overflow-hidden`}>
			{/* Background Lights */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Left Side Light */}
				<div className="absolute left-0 top-1/4 w-96 h-96 bg-gradient-to-r from-[#1CD8DE]/40 via-[#1CD8DE]/20 to-transparent rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '8s' }}></div>
				<div className="absolute left-0 top-1/3 w-64 h-64 bg-gradient-to-r from-white/25 via-white/15 to-transparent rounded-full filter blur-[60px] animate-pulse" style={{ animationDuration: '12s' }}></div>
				
				{/* Right Side Light */}
				<div className="absolute right-0 top-1/3 w-96 h-96 bg-gradient-to-l from-[#9C83F7]/40 via-[#9C83F7]/20 to-transparent rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '10s' }}></div>
				<div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-l from-white/25 via-white/15 to-transparent rounded-full filter blur-[60px] animate-pulse" style={{ animationDuration: '14s' }}></div>
				
				{/* Center Accent Light */}
				<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#1CD8DE]/20 via-white/10 to-[#9C83F7]/20 rounded-full filter blur-[40px] animate-pulse" style={{ animationDuration: '6s' }}></div>
			</div>

			{/* ROI-style Background Elements - More transparent and slower */}
			<div className="absolute inset-0 pointer-events-none">
				{[...Array(12)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-gradient-to-r from-[#9C83F7] to-[#1CD8DE]"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 25 + 8}px`,
							height: `${Math.random() * 25 + 8}px`,
							opacity: Math.random() * 0.15 + 0.05,
							filter: "blur(8px)",
							animation: `float ${
								Math.random() * 35 + 25
							}s infinite ease-in-out`,
						}}
					/>
				))}
			</div>

			<div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative z-10`}>
				<motion.div 
					className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">20%</span> Discount -{" "}
						<span className="text-white">Available</span> slots
					</p>
				</motion.div>

				<motion.h1
					className={`${styles.flexCenter} flex-col text-center font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[75px] md:leading-[100.5px] `}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					Your AI-Powered <ChangingTextSection />
				</motion.h1>

				<motion.p
					className={`${styles.paragraph} max-w-[650px] mt-12 mb-6 text-center`}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					Flowity AI transforms your chaotic customer feedback into a
					crystal-clear product roadmap. Automatically. For B2B SaaS leaders
					drowning in data but starving for insights, we deliver the strategic
					intelligence to slash churn, accelerate growth, and save €5k+ monthly.
					<br />
					<br />
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<Button />
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;