import React from "react";
import styled from "styled-components";

const Nav = () => {
	return (
		<NavWrapper>
			<Menu>
				<div className='logoWrapper'>
					<Logo>
						GOAT🐐🏀<span>.</span>
					</Logo>
				</div>
				<div className='items'>
					<li>Find passion</li>
					<li>Categories</li>
					<li>Skills</li>
					<li>Customer</li>

					<div className='items-right'>
						<li>Login</li>

						<a href='' className='button'>
							Free Trial
						</a>
					</div>
				</div>
			</Menu>
		</NavWrapper>
	);
};

const NavWrapper = styled.div`
	max-width: 1280px;
	padding: 3% 7%;
`;

const Logo = styled.h1`
	font-size: 32px;
	font-weight: 600;
	letter-spacing: 0.1rem;
	width: 200px;

	span {
		color: #97c680;
	}
`;

const Menu = styled.ul`
	display: flex;
	cursor: pointer;

	.logoWrapper {
		justify-content: start;
		margin-right: 2rem;
	}

	.items {
		display: flex;
		justify-content: space-between;

		li {
			line-height: 2;
			transition: 0.25s;
			margin: 0 1rem;
		}

		li:hover {
			box-shadow: inset 0 -0.75rem 0 0 #97c680;
		}
	}

	.items-right {
		display: flex;
		margin-left: 15rem;
		li {
			margin: 0 1rem;
		}
	}

	.button {
		text-decoration: none;
		color: white;
		background-color: black;
		padding: 0.5rem 2.5rem;
		border-radius: 30px;
		line-height: 1.5;
		transition: 0.5s;
		transform: translateY(-5px);
	}

	// Animating from the bottom
	.button:hover,
	.button:focus {
		color: black;
		box-shadow: inset 0 -3.25em 0 0 #97c680;
	}
`;
export default Nav;
