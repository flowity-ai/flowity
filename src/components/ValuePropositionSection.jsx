import React from "react";
import { motion } from "framer-motion";
import ValuePropositionCard from "./ValuePropositionCard";
import { FiDollarSign, FiClock, FiTrendingUp, FiUserX } from "react-icons/fi"; // Example icons from React Icons

const ValuePropositionSection = () => {
	const valueProps = [
		{
			icon: <FiDollarSign className="text-2xl text-logoCyan" />,
			title: "Save £12K+ Monthly",
			description:
				"Replace a full-time UX researcher and eliminate costly sprint missteps. Our service pays for itself from day one.",
			delay: 0,
		},
		{
			icon: <FiClock className="text-2xl text-logoCyan" />,
			title: "Reclaim 15+ Hours/Week",
			description:
				"Automate the manual grind of tagging, sorting, and analyzing feedback. Focus your team on building, not busywork.",
			delay: 0.1,
		},
		{
			icon: <FiTrendingUp className="text-2xl text-logoCyan" />,
			title: "Boost Expansion Revenue",
			description:
				"Identify feature requests from high-value accounts and uncover untapped upsell opportunities hidden in support tickets.",
			delay: 0.2,
		},
		{
			icon: <FiUserX className="text-2xl text-logoCyan" />,
			title: "Cut Churn by 5-10%",
			description:
				"Get early warnings on at-risk accounts and pinpoint the frustrating bugs causing cancellations before it's too late.",
			delay: 0.3,
		},
	];

	return (
		<section className="py-24 bg-black px-4">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					From Cost Center to
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-logoPurple to-logoCyan">
						{" "}
						Competitive Advantage
					</span>
				</motion.h2>
				<motion.p
					className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					Flowity AI isn't just another dashboard. It's a done-for-you
					intelligence service that delivers undeniable ROI.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{valueProps.map((prop, index) => (
						<ValuePropositionCard
							key={index}
							icon={prop.icon}
							title={prop.title}
							description={prop.description}
							initialDelay={prop.delay}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default ValuePropositionSection;
