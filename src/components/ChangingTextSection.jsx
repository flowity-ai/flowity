import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Reshaping", "Powering up", "Enhancing", "Speeding up"];

const GradientText = ({ text }) => (
	<span className="text-gradient">{text}</span>
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
		<p>
			<TextTransition springConfig={presets.wobbly}>
				<GradientText text={TEXTS[index % TEXTS.length]} />
			</TextTransition>
		</p>
	);
};

export default ChangingTextSection;
