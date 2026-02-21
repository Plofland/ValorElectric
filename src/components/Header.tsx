import styled from 'styled-components';
import transparentValorElectricLogo from '/transparentValorElectricLogo.png';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<LogoContainer>
					<ValorElectricLogo
						src={transparentValorElectricLogo}
						alt="Valor Electric logo"
					/>
				</LogoContainer>
				<TitleContainer>
					<h1>Valor Electric</h1>
				</TitleContainer>
			</HeaderContainer>
		</>
	);
};

export default Header;

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 4rem;

	/* Mobile: stack items */
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding: 1rem 2rem;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* Check the border of the container */
	/* border: 1px solid #000000; */

	h1 {
		position: relative;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-style: italic;
		font-size: 3rem;
		margin: 0;
		cursor: pointer;
		color: #000000;

		@media (max-width: 768px) {
			text-align: center;
		}

		/* Check the border of the h1 */
		/* border: 1px solid #000000; */

		/* Gradient underline remains static */
		&::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -10px;
			transform: translateX(-50%) skewX(-45deg); /* center the underline */
			width: 100%;
			height: 6px;
			border-radius: 3px;
			background: linear-gradient(
				90deg,
				#ff0000 0%,
				#0038ff 100%
			);
		}

		/* Hover triggers flicker animation */
		&:hover {
			animation: electric-flicker-pre 0.8s forwards;
			color: #fff8d1;
		}
	}

	/* Keyframes for 2–3 flickers */
	@keyframes electric-flicker-pre {
		0% {
			color: #000000;
			text-shadow: none;
		}
		10% {
			text-shadow:
				0 0 2px #ff0000,
				0 0 4px #ff0000,
				0 0 2px #fff8d1,
				0 0 6px #0038ff,
				0 0 8px #0038ff;
		}
		20% {
			text-shadow: none;
		}
		30% {
			text-shadow:
				0 0 3px #ff0000,
				0 0 6px #ff0000,
				0 0 3px #fff8d1,
				0 0 9px #0038ff,
				0 0 12px #0038ff;
		}
		40% {
			text-shadow: none;
		}
		50% {
			text-shadow:
				0 0 2px #ff0000,
				0 0 4px #ff0000,
				0 0 2px #fff8d1,
				0 0 6px #0038ff,
				0 0 8px #0038ff;
		}
		60% {
			text-shadow: none;
		}
		100% {
			text-shadow:
				0 0 2px #ff0000,
				0 0 4px #ff0000,
				0 0 2px #fff8d1,
				0 0 6px #0038ff,
				0 0 8px #0038ff;
			color: #fff8d1; /* Keep yellow center after flicker */
		}
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	@media (max-width: 768px) {
		margin-top: 1rem;
		justify-content: center;
	}
`;

const ValorElectricLogo = styled.img`
	width: 140px;
	height: 140px;
	object-fit: contain;

	@media (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;
