import React from "react";

const Button = ({ styles }) => (
	<a href="https://meetings.hubspot.com/nina-neev">
		<button
			type="button"
			className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
		>
			Book Intro Call
		</button>
	</a>
);

export default Button;
