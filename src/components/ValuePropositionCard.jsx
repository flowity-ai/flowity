import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const ValuePropositionCard = ({
	icon,
	title,
	description,
	initialDelay = 0,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Animation variants
	const cardVariants = {
		offscreen: {
			y: 50,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
				delay: initialDelay,
			},
		},
		hover: {
			y: -10,
			backgroundColor: "rgba(156, 131, 247, 0.05)", // logoPurple with opacity
			borderColor: "#9C83F7", // logoPurple
			transition: { duration: 0.2 },
		},
	};

	const iconVariants = {
		rest: { rotate: 0 },
		hover: { rotate: 360, transition: { duration: 0.4 } },
	};

	return (
		<motion.div
			className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-black to-gray-900 backdrop-blur-sm flex flex-col items-start text-left cursor-pointer h-full"
			initial="offscreen"
			whileInView="onscreen"
			whileHover="hover"
			viewport={{ once: true, margin: "-50px" }}
			variants={cardVariants}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			{/* Animated Icon */}
			<motion.div
				className="p-3 rounded-lg mb-4 bg-gray-800 group-hover:bg-purple-900/20 inline-flex"
				variants={iconVariants}
				animate={isHovered ? "hover" : "rest"}
			>
				{icon}
			</motion.div>

			{/* Title */}
			<h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

			{/* Description */}
			<p className="text-gray-400 text-sm leading-relaxed">{description}</p>

			{/* Subtle Glow Effect on Hover */}
			<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9C83F7]/10 to-[#1CD8DE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
		</motion.div>
	);
};

export default ValuePropositionCard;
