import React from "react";
import styles from "../style";
import Button from "./Button";
import { discount } from "../assets";

const CTA = () => (
	<section
		className={`${styles.marginY} ${styles.padding} flex flex-col md:flex-row justify-start bg-black-gradient-2 rounded-[20px] box-shadow`}
	>
		<div className={`${styles.flexStart} flex-col justify-start`}>
			<div className="flex flex-row items-start justify-start py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
				<p className={`${styles.paragraph} ml-2`}>
					<span className="text-white">20%</span> Discount for the{" "}
					<span className="text-white">1st</span> month
				</p>
			</div>
			<h2 className={styles.heading2}>Let’s try our service now!</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Revolutionize your business with workflows that work as hard as you do.
			</p>
		</div>

		<div
			className={`flex flex-1 justify-start md:justify-end items-center  mt-10`}
		>
			<Button />
		</div>
	</section>
);

export default CTA;
