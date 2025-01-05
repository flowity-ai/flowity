import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Automating", "Empowering", "Scaling", "Reshaping"];

const GradientText = ({ text }) => (
	<span className="text-gradient foundation">{text}</span>
);

const ChangingTextSection = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div>
			<TextTransition springConfig={presets.wobbly}>
				<GradientText text={TEXTS[index % TEXTS.length]} />
			</TextTransition>
		</div>
	);
};

export default ChangingTextSection;
