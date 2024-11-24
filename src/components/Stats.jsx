import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
	<section
		className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
	>
		{stats.map((stat) => (
			<div className="self-start p-5 m-5 bg-black-gradient rounded-2xl feature-card">
				<div
					key={stat.id}
					className={`flex-1 flex justify-start items-center flex-row m-3`}
				>
					<h4 className="self-start font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
						{stat.value}
					</h4>
					<p className="xs:text-[20.45px] text-[15.45px] xs:leading-[22.58px] leading-[21.58px] text-gradient uppercase ml-3">
						{stat.title}
					</p>
				</div>
				<p className="font-normal xs:text-[17.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-dimWhite ml-3">
					{stat.content}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
