import React from "react";

const Button = ({ styles }) => (
	<button
		type="button"
		className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
	>
		Book a Call
	</button>
);

export default Button;
