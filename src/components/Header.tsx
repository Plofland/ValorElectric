import styled from 'styled-components';
import transparentValorElectricLogo from '/transparentValorElectricLogo.png';

//todo: download PS so I can edit the logo with a white lightning bolt in the middle

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderText>
					<h1>
						Valor Electric
					</h1>
				</HeaderText>
				<LogoContainer>
					<ValorElectricLogo
						src={transparentValorElectricLogo}
						alt="Valor Electric logo"
					/>
				</LogoContainer>
			</HeaderContainer>
		</>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 1.5rem 0;
	background-color: #f2f6ff;
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

	h1 {
	position: relative;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-style: italic;
	font-size: 5rem;
	margin: 0;
	display: inline-block;
	cursor: pointer;

	/* Base color */
	color: #000000;

	/* Gradient underline remains static */
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -10px;
		width: 100%;
		height: 6px;
		border-radius: 3px;
		background: linear-gradient(90deg, #ff0000 0%, #0038ff 100%);
		transform: skewX(-20deg);
	}

	/* Hover triggers flicker animation */
	&:hover {
		animation: electric-flicker-pre 0.8s forwards;
		color: #fff8d1; /* Set to yellowish center after flicker */
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
	width: 25%;
`;

const HeaderText = styled.div`
	font-size: 3rem;
`;

const ValorElectricLogo = styled.img`
	width: 100%;
	height: 100%;
`;
