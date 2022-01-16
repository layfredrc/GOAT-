import React from "react";
import styled from "styled-components";

const Hero = () => {
	return (
		<HeroWrapper>
			<div className='left'>
				<div className='slogan'>
					<h1>
						Jordan<span>.</span>
					</h1>
					<h1>
						Kobe<span>.</span>
					</h1>
					<h1>
						Lebron<span>.</span>
					</h1>
				</div>

				<InputWrapper>
					<input
						type='text'
						name=''
						id=''
						placeholder='Who is the GOAT 🐐🏀?'
					/>
					<div className='div'>
						<h1>Go</h1>
					</div>
				</InputWrapper>
			</div>

			<div className='right'>
				<div className='images'>
					<ImageContainerFirst
						className=''
						style={{
							backgroundImage: `url("/assets/mj.jpg")`,
						}}>
						<TopicsFirstImage>
							<h1>
								Michael <br /> Jordan
							</h1>
							<h1 className='number'>
								6x 🏆
								<br /> <span>NBA CHAMP</span>
							</h1>
						</TopicsFirstImage>
					</ImageContainerFirst>
					<ImageContainer
						className='img-container second'
						style={{
							backgroundImage: `url("/assets/kobePoster.JPG")`,
						}}>
						<TopicContainer>
							<h1>
								Kobe <br className='break' /> Bryant
							</h1>
							<h1 className='number'>
								5x 🏆
								<br />
								<span>NBA CHAMP</span>
							</h1>
						</TopicContainer>
					</ImageContainer>
					<ImageContainer
						className='img-container third'
						style={{
							backgroundImage: `url("/assets/lebronPoster.png")`,
						}}>
						<TopicContainer>
							<h1>
								Lebron <br className='break' /> James
							</h1>
							<h1 className='number'>
								4x 🏆
								<br />
								<span>NBA CHAMP</span>
							</h1>
						</TopicContainer>
					</ImageContainer>
				</div>
			</div>
		</HeroWrapper>
	);
};

const TopicContainer = styled.div`
	width: 400px;
	color: white;
	font-family: "Archia", sans-serif;
	font-size: 32px;
	font-weight: bold;
	line-height: 1.1;
	letter-spacing: 0.1em;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 250px;
	left: -130px;
	transform: rotate(-90deg);
	transition: all 300ms ease;

	.break {
		display: none;
	}

	.number {
		font-weight: bold;
		text-align: center;
	}

	span {
		font-size: 12px;
		font-weight: bold;
	}
`;

const TopicsFirstImage = styled.div`
	width: 350px;
	color: white;
	font-family: "Archia", sans-serif;
	font-size: 32px;
	font-weight: bold;
	line-height: 1.1;
	letter-spacing: 0.1em;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 110px;
	left: 80px;

	.number {
		font-weight: bold;
		text-align: center;
	}

	span {
		font-size: 12px;
		font-weight: bold;
	}
`;

const ImageContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 20%;
	height: 550px;
	border-radius: 15px;
	transition: all 300ms ease;
	background-size: cover;
	box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
	margin: 0px 15px;

	&:hover {
		width: 100%;

		${TopicContainer} {
			transform: rotate(0deg);
			bottom: 110px;
			left: 80px;
			.break {
				display: block;
			}
		}

		${TopicsFirstImage} {
			display: none;
			color: black;
		}
	}
`;

const ImageContainerFirst = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;
	flex-shrink: 2.4;
	height: 550px;
	border-radius: 15px;
	transition: width 300ms ease;
	background-size: cover;
	box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
	margin: 0px 15px;
`;

const InputWrapper = styled.div`
	margin: 3% 23%;
	display: flex;
	width: 400px;
	position: relative;
	z-index: 99;
	cursor: pointer;

	input {
		padding: 2.5rem 0rem 2.5rem 3rem;
		font-family: "Varela", sans-serif;
		font-size: 16px;
		font-weight: 300;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
		width: 300px;
	}

	input:focus {
		outline: 1px solid #97c680;
	}

	div {
		padding: 2.5rem;
		font-weight: 500;
		font-size: 32px;
		background-color: #97c680;
		transition: 0.35s ease-in-out;
	}

	div:hover {
		box-shadow: inset 0 -10rem 0 0 #feba87;
	}
`;

const HeroWrapper = styled.div`
	max-width: 1280px;
	display: flex;

	.left {
		width: 33.3333%;
	}

	.slogan {
		margin: 15% 21%;
	}

	.slogan h1 {
		font-size: 76px;
		font-weight: 500;
	}

	.right {
		width: 66.666%;
	}

	.images {
		display: flex;
	}
`;

export default Hero;
