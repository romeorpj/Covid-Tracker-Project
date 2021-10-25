import { useState } from "react";
import React from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Params } from "./Data";
import { Details } from "./Data";

const Body = styled.body`
	margin: 0;
	height: 100vh;
	background: rgba(66, 134, 244, 0.8);

	@media (min-width: 768px) {
		margin: 0;
		height: 100%;
		background: none;
	};
`;


const Title = styled.div`
	left: 20px;
	width: 100%;
	font-size: 28px;
	text-align: center;
	text-transform: uppercase;
	color: black;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	top: 29px;
	margin-top: 10px;

	@media (min-width: 768px) {
		text-align: center;
		text-transform: uppercase;
		color: black;
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 64px;
		top: 260px;
	} ;
`;

const Input = styled.input`
	left: 20px;
	padding: 1em;
	width: 90%;
	color: rgba(0, 0, 0, 0.5);
	background: rgba(255, 255, 255);
	border: 1px solid #c3c7d2;
	top: 437.93px;
	font-size: 16px;
	margin-left: 20px;

	@media (min-width: 768px) {
		padding: 1em;
		width: 75%;
		color: rgba(0, 0, 0, 0.5);
		background: rgba(196, 196, 196, 0.2);
		border: 1px solid #c3c7d2;
		top: 350px;
		margin-left:10em;
		margin-top: 2em;
		font-size: 18px;
	} ;
`;

const Help = styled.div`
	left: 20px;
	width: 100%;
	line-height: 25px;
	align-items: baseline;
	color: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	font-family: Open Sans;
	font-style: normal;
	color: black;
	text-align: center;
	align-items: center;

	@media (min-width: 768px) {
		top: 400px;
		color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		font-family: Open Sans;
		font-style: normal;
		font-size: 28px;
		line-height: 2px;
		padding-top: 1em;
		padding-bottom: 2em;
	} ;
`;

const Section1 = styled.div`
	text-align: center;
	font-size: 24px;
	display: inline-block;
	font-weight: bold;
	font-family: Open Sans;
	font-style: normal;
	text-transform: uppercase;

	@media (min-width: 768px) {
		top: 600px;
		margin-left: 1.5em;
		font-size: 36px;
		font-weight: bold;
		font-family: Open Sans;
		font-style: normal;
		text-transform: uppercase;
		display: inline-block;
	} ;
`;
const Section2 = styled.div`
	text-align: center;
	font-size: 24px;
	display: inline-block;
	font-weight: bold;
	font-family: Open Sans;
	font-style: normal;
	text-transform: uppercase;
	left: 2.5em;

	@media (min-width: 768px) {
		margin-left: 1.5em;
		font-size: 36px;
		font-weight: bold;
		font-family: Open Sans;
		font-style: normal;
		text-transform: uppercase;
		top: 600px;
		display: inline-block;
	} ;
`;

const Section3 = styled.div`
	text-align: center;
	font-size: 24px;
	display: inline-block;
	font-weight: bold;
	font-family: Open Sans;
	font-style: normal;
	text-transform: uppercase;
	left: 5em;

	@media (min-width: 768px) {
		display: inline-block;
		top: 600px;
		margin-left: 1.5em;
		font-size: 36px;
		font-weight: bold;
		font-family: Open Sans;
		font-style: normal;
		text-transform: uppercase;
	} ;
`;

const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	top: 675px;
	font-size: 18px;

	@media (min-width: 768px) {
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		display: flex;
		flex-direction: column;
		width: 95%;
		margin-left: 2em;
		top: 575px;
	} ;
`;

const Container = styled.div`
	@media (min-width: 768px) {
		position: relative;
		padding-bottom: 3em;
	} ;
`;

const Wrap = styled.div`
	font-size: 20px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	border: 1px solid #c3c7d2;
	background: #f9f9f9;

	span {
		margin-right: 1em;
	}
	@media (min-width: 768px) {
		background: #f9f9f9;
		color: black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		cursor: pointer;
		padding-left: 4em;
		border: 1px solid #c3c7d2;
		font-size: 28px;
		font-weight: bold;
	}

	span {
		margin-right: 1em;
	}
`;

const Dropdown = styled.div`
	@media (min-width: 768px) {
		background: white;
		color: black;
		width: 98%;
		height: 100px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 25px;
		line-height: 35px;
		padding-top: 1.5em;
		padding-bottom: 3em;
		padding-left: 1em;
	} ;
`;

const Faq = () => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	return (
		<Body>
			<Title>Frequently Asked Questions</Title>
			<Input type="text" placeholder="What would you like to know?" />
			<Help>
				<p>Click on the questions below</p>
				<p>
					If your question is not found, please message us through our Contact
					Page
				</p>
			</Help>
			<Section1>
				<p>Covid-19 Policies &amp; Protocols</p>
			</Section1>
			<IconContext.Provider value={{ color: "black", size: "30px" }}>
				<AccordionSection>
					<Container>
						{Data.map((item, index) => {
							return (
								<>
									<Wrap onClick={() => toggle(index)} key={index}>
										<p>{item.question}</p>
										<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
									</Wrap>
									{clicked === index ? (
										<Dropdown>
											<p> {item.answer}</p>
										</Dropdown>
									) : null}
								</>
							);
						})}
					</Container>
				</AccordionSection>
			</IconContext.Provider>

			<Section2>
				<p>Covid-19 Testing</p>
			</Section2>
			<IconContext.Provider value={{ color: "black", size: "25px" }}>
				<AccordionSection>
					<Container>
						{Params.map((item, index) => {
							return (
								<>
									<Wrap onClick={() => toggle(index)} key={index}>
										<p>{item.question}</p>
										<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
									</Wrap>
									{clicked === index ? (
										<Dropdown>
											<p> {item.answer}</p>
										</Dropdown>
									) : null}
								</>
							);
						})}
					</Container>
				</AccordionSection>
			</IconContext.Provider>

			<Section3>
				<p>Safety</p>
			</Section3>
			<IconContext.Provider value={{ color: "black", size: "25px" }}>
				<AccordionSection>
					<Container>
						{Details.map((item, index) => {
							return (
								<>
									<Wrap onClick={() => toggle(index)} key={index}>
										<p>{item.question}</p>
										<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
									</Wrap>
									{clicked === index ? (
										<Dropdown>
											<p> {item.answer}</p>
										</Dropdown>
									) : null}
								</>
							);
						})}
					</Container>
				</AccordionSection>
			</IconContext.Provider>
		</Body>
	);
};

export default Faq;
