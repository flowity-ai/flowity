import React, { useState } from "react";
import { faq } from "../constants";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
`;

const FAQContainer = styled.div`
	box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
	width: 100%;
`;

const Wrap = styled.div`
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	text-align: start;
	cursor: pointer;

	span {
		margin-right: 1.5rem;
	}
`;

const Dropdown = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	text-align: start;
	margin-top: -30px;

	p {
		font-size: 1rem;
		padding: 10px 40px 10px 40px;

		@media only screen and (min-width: 600px) {
			font-size: 1.2rem;
		}
	}
`;

const FAQ = () => {
	const [clicked, setClicked] = useState(false);
	const toggle = (index) => {
		if (clicked === index) {
			//if clicked actiona already active, close it.
			return setClicked(null);
		}

		setClicked(index);
	};

	return (
		<section className="faq-component mt-5 mb-5" id="faq">
			<IconContext.Provider value={{ color: "#9C83F7", size: "25px" }}>
				<AccordionSection>
					<FAQContainer>
						{faq.map((item, index) => {
							return (
								<>
									<Wrap onClick={() => toggle(index)} key={index}>
										<h2 className="font-poppins font-semibold text-[22px] md:text-[24px] text-white leading-[30.8px] md:leading-[50.8px] p-[1em]">
											{item.question}
										</h2>
										<span> {clicked === index ? <FiMinus /> : <FiPlus />}</span>
									</Wrap>
									{clicked === index ? (
										<Dropdown className="text-dimWhite">
											<p> {item.answer} </p>
										</Dropdown>
									) : null}
								</>
							);
						})}
					</FAQContainer>
				</AccordionSection>
			</IconContext.Provider>
		</section>
	);
};

export default FAQ;
